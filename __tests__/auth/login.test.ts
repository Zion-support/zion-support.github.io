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

  it('should login successfully with valid credentials', async () => {
    const mockResponse = {
      data: {
        user: { id: '1', email: 'test@example.com' },
        session: { access_token: 'token123' }
      },
      error: null
    }

    mockSignInWithPassword.mockResolvedValue(mockResponse)
  it('should work', () => {
    expect(true).toBe(true)
  })

  it('should login user successfully', async () => {
    mockSignInWithPassword.mockResolvedValue({
      data: { user: { id: '123', email: 'test@example.com' } },
      error: null
    })

    const result = await loginUser('test@example.com', 'password123')

    expect(result.success).toBe(true)
    expect(result.user).toEqual(mockResponse.data.user)
  })

  it('should handle login failure', async () => {
    const mockError = {
      data: null,
      error: { message: 'Invalid credentials' }
    }

    mockSignInWithPassword.mockResolvedValue(mockError)

    const result = await loginUser('test@example.com', 'wrongpassword')

    expect(result.success).toBe(false)
    expect(result.error).toBe('Invalid credentials')
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
  })
})