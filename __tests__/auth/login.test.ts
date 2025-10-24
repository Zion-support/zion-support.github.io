import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextApiRequest, NextApiResponse } from 'next'

const mockSignInWithPassword = vi.fn()

vi.mock('@supabase/supabase-js', () => ({
  createClient: vi.fn(() => ({
    auth: {
      signInWithPassword: mockSignInWithPassword,
      signUp: vi.fn(),
      onAuthStateChange: vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } })),
      getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null })
    },
    from: vi.fn().mockReturnThis()
  }))
})

// Import the handler AFTER setting up the mock
import loginHandler from '../../pages/api/auth/login'

// Helper to create mock NextApiRequest
const mockApiReq = (body: unknown, method: string = 'POST') => ({
  method,
  body
} as NextApiRequest)

// Helper to create mock NextApiResponse
const mockApiRes = () => {
  const res = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
    setHeader: vi.fn().mockReturnThis(),
    end: vi.fn().mockReturnThis()
  } as unknown as NextApiResponse
  return res
}

describe('Login API Handler', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return 400 for non-POST requests', async () => {
    const req = mockApiReq({}, 'GET')
    const res = mockApiRes()

    await loginHandler(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: 'Method not allowed'
    })
  })

  it('should return 400 for missing email', async () => {
    const req = mockApiReq({ password: 'password123' })
    const res = mockApiRes()

    await loginHandler(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: 'Email and password are required'
    })
  })

  it('should return 400 for missing password', async () => {
    const req = mockApiReq({ email: 'test@example.com' })
    const res = mockApiRes()

    await loginHandler(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: 'Email and password are required'
    })
  })

  it('should return 400 for invalid email format', async () => {
    const req = mockApiReq({ 
      email: 'invalid-email', 
      password: 'password123' 
    })
    const res = mockApiRes()

    await loginHandler(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: 'Invalid email format'
    })
  })

  it('should return 400 for short password', async () => {
    const req = mockApiReq({ 
      email: 'test@example.com', 
      password: '123' 
    })
    const res = mockApiRes()

    await loginHandler(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      error: 'Password must be at least 6 characters'
    })
  })

  it('should return 401 for invalid credentials', async () => {
    const req = mockApiReq({ 
      email: 'test@example.com', 
      password: 'wrongpassword' 
    })
    const res = mockApiRes()

    mockSignInWithPassword.mockResolvedValueOnce({
      data: { user: null, session: null },
      error: { message: 'Invalid login credentials' }
    })

    await loginHandler(req, res)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({
      error: 'Invalid login credentials'
    })
  })

  it('should return 200 for successful login', async () => {
    const req = mockApiReq({ 
      email: 'test@example.com', 
      password: 'password123' 
    })
    const res = mockApiRes()

    const mockUser = {
      id: 'user-123',
      email: 'test@example.com',
      created_at: '2023-01-01T00:00:00Z'
    }

    const mockSession = {
      access_token: 'access-token',
      refresh_token: 'refresh-token',
      expires_at: 1234567890
    }

    mockSignInWithPassword.mockResolvedValueOnce({
      data: { user: mockUser, session: mockSession },
      error: null
    })

    await loginHandler(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({
      message: 'Login successful',
      user: {
        id: mockUser.id,
        email: mockUser.email
      }
    })
  })

  it('should return 500 for server errors', async () => {
    const req = mockApiReq({ 
      email: 'test@example.com', 
      password: 'password123' 
    })
    const res = mockApiRes()

    mockSignInWithPassword.mockRejectedValueOnce(new Error('Database connection failed'))

    await loginHandler(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({
      error: 'Internal server error'
    })
  })

  it('should handle Supabase auth errors', async () => {
    const req = mockApiReq({ 
      email: 'test@example.com', 
      password: 'password123' 
    })
    const res = mockApiRes()

    mockSignInWithPassword.mockResolvedValueOnce({
      data: { user: null, session: null },
      error: { message: 'Too many requests' }
    })

    await loginHandler(req, res)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({
      error: 'Too many requests'
    })
  })
})