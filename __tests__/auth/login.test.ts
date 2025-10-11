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
}))

describe('Login', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

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
    expect(result.user).toBeDefined()
  })

  it('should handle login errors', async () => {
    mockSignInWithPassword.mockResolvedValue({
      data: null,
      error: { message: 'Invalid credentials' }
    })

    const result = await loginUser('test@example.com', 'wrongpassword')

    expect(result.success).toBe(false)
    expect(result.error).toBe('Invalid credentials')
  })
})