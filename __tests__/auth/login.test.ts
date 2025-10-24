import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { loginUser } from '@/services/authService'
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
  const res: Partial<NextApiResponse> = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
    setHeader: vi.fn().mockReturnThis(),
    end: vi.fn().mockReturnThis()
  }
  return res as NextApiResponse
}

describe('/api/auth/login API Handler', () => {
  beforeEach(() => {
    mockSignInWithPassword.mockReset()
  })

  it('should return 405 if method is not POST', async () => {
    const req = mockApiReq({}, 'GET')
    const res = mockApiRes()
    await loginHandler(req, res)
    expect(res.status).toHaveBeenCalledWith(405)
    expect(res.end).toHaveBeenCalled()
  })

  it('should successfully log in a verified user and set authToken cookie', async () => {
    const testEmail = 'verified@example.com'
    const testPassword = 'password123'
    const mockAuthToken = 'mock-access-token'
    const mockSessionData = {
      access_token: mockAuthToken,
      refresh_token: 'mock-refresh-token',
    }
    const mockUserData = { id: 'user-123', email: testEmail }

    mockSignInWithPassword.mockResolvedValueOnce({
      data: {
        user: mockUserData,
        session: mockSessionData
      },
      error: null
    })

    const req = mockApiReq({ email: testEmail, password: testPassword })
    const res = mockApiRes()

    await loginHandler(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      user: mockUserData,
      message: 'Login successful'
    })
    expect(res.setHeader).toHaveBeenCalledWith(
      'Set-Cookie',
      expect.stringContaining('authToken=')
    )
  })

  it('should return 400 for invalid credentials', async () => {
    mockSignInWithPassword.mockResolvedValueOnce({
      data: { user: null, session: null },
      error: { message: 'Invalid login credentials' }
    })

    const req = mockApiReq({ email: 'wrong@example.com', password: 'wrong' })
    const res = mockApiRes()

    await loginHandler(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: 'Invalid login credentials'
    })
  })

  it('should return 400 for missing email or password', async () => {
    const req = mockApiReq({ email: 'test@example.com' }) // missing password
    const res = mockApiRes()

    await loginHandler(req, res)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: 'Email and password are required'
    })
  })

  it('should return 500 for server errors', async () => {
    mockSignInWithPassword.mockRejectedValueOnce(new Error('Database connection failed'))

    const req = mockApiReq({ email: 'test@example.com', password: 'password' })
    const res = mockApiRes()

    await loginHandler(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: 'Internal server error'
    })
  })
})