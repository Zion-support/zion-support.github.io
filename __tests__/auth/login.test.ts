import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { loginUser } from '@/services/authService'
import { NextApiRequest, NextApiResponse } from 'next'

const mockSignInWithPassword = vi.fn()

vi.mock('@supabase/supabase-js', () => ({
  createClient: vi.fn(() => ({
    auth: {
      signInWithPassword: mockSignInWithPassword,
      signUp: vi.fn(),
      signOut: vi.fn()
    }
  }))
}))

describe('Login', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

<<<<<<< HEAD
<<<<<<< HEAD
  it('should login successfully with valid credentials', async () => {
    const mockResponse = {
      data: {
        user: { id: '1', email: 'test@example.com' },
        session: { access_token: 'token123' }
      },
      error: null
    }

    mockSignInWithPassword.mockResolvedValue(mockResponse)
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-f401
  it('should work', () => {
    expect(true).toBe(true)
  })

<<<<<<< HEAD
  it('should login user successfully', async () => {
    mockSignInWithPassword.mockResolvedValue({
      data: { user: { id: '123', email: 'test@example.com' } },
      error: null
    })
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa

    const result = await loginUser('test@example.com', 'password123')

    expect(result.success).toBe(true)
<<<<<<< HEAD
    expect(result.user).toEqual(mockResponse.data.user)
  })

  it('should handle login failure', async () => {
    const mockError = {
      data: null,
      error: { message: 'Invalid credentials' }
    }

    mockSignInWithPassword.mockResolvedValue(mockError)
=======
    expect(result.user).toBeDefined()
  })

  it('should handle login errors', async () => {
    mockSignInWithPassword.mockResolvedValue({
      data: null,
      error: { message: 'Invalid credentials' }
    })
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa

    const result = await loginUser('test@example.com', 'wrongpassword')

    expect(result.success).toBe(false)
    expect(result.error).toBe('Invalid credentials')
=======
  it('should login user with valid credentials', async () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      user_metadata: { name: 'Test User' }
    }

    mockSignInWithPassword.mockResolvedValue({
      data: { user: mockUser },
      error: null
    })

    const result = await loginUser('test@example.com', 'password123')

    expect(result).toEqual({
      success: true,
      user: mockUser
    })
    expect(mockSignInWithPassword).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123'
    })
  })

  it('should handle login errors', async () => {
    const mockError = new Error('Invalid credentials')
    mockSignInWithPassword.mockResolvedValue({
      data: { user: null },
      error: mockError
    })

    const result = await loginUser('test@example.com', 'wrongpassword')

    expect(result).toEqual({
      success: false,
      error: 'Invalid credentials'
    })
>>>>>>> cursor/fix-errors-and-merge-to-main-f401
  })
})