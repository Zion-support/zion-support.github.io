import { loginUser } from '@/services/authService'; // registerUser removed as it's not the focus
import { NextApiRequest, NextApiResponse } from 'next';
import { vi, Mock, describe, it, expect, beforeEach, afterEach } from 'vitest';

// Mock Supabase client
// Changed from let to const as mockSignInWithPassword is not reassigned, only its properties (mock state) are changed.
const mockSignInWithPassword: Mock = vi.fn();

vi.mock('@supabase/supabase-js', async importOriginal => {
  // Using Record<string, unknown> for a general module structure.
  const actual = (await importOriginal()) as Record<string, unknown>;
  // _mockSignInWithPassword is assigned to the global mockSignInWithPassword later
  // const _mockSignInWithPassword = vi.fn();
  const _mockSignUp = vi.fn();
  const _mockOnAuthStateChange = vi.fn(() => ({
    data: { subscription: { unsubscribe: vi.fn() } }
  }));
  const _mockGetSession = vi
    .fn()
    .mockResolvedValue({ data: { session: null }, error: null });

  return {
    ...actual,
    createClient: vi.fn(() => ({
      auth: {
        signInWithPassword: mockSignInWithPassword, // Use the global mock
        signUp: _mockSignUp,
        onAuthStateChange: _mockOnAuthStateChange,
        getSession: _mockGetSession
      },
      from: vi.fn().mockReturnThis()
    }))
  };
});

describe('Authentication Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('loginUser', () => {
    it('should successfully login with valid credentials', async () => {
      const mockUser = {
        id: 'user-123',
        email: 'test@example.com',
        user_metadata: { name: 'Test User' }
      };

      const mockResponse = {
        data: {
          user: mockUser,
          session: {
            access_token: 'mock-token',
            refresh_token: 'mock-refresh-token'
          }
        },
        error: null
      };

      mockSignInWithPassword.mockResolvedValueOnce(mockResponse);

      const result = await loginUser('test@example.com', 'password123');

      expect(mockSignInWithPassword).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
      });

      expect(result).toEqual({
        success: true,
        user: mockUser,
        session: mockResponse.data.session
      });
    });

    it('should handle login failure with invalid credentials', async () => {
      const mockError = {
        message: 'Invalid login credentials',
        status: 400
      };

      mockSignInWithPassword.mockResolvedValueOnce({
        data: { user: null, session: null },
        error: mockError
      });

      const result = await loginUser('test@example.com', 'wrongpassword');

      expect(result).toEqual({
        success: false,
        error: mockError.message
      });
    });

    it('should handle network errors during login', async () => {
      const networkError = new Error('Network error');
      mockSignInWithPassword.mockRejectedValueOnce(networkError);

      const result = await loginUser('test@example.com', 'password123');

      expect(result).toEqual({
        success: false,
        error: 'Network error'
      });
    });

    it('should validate email format', async () => {
      const result = await loginUser('invalid-email', 'password123');

      expect(result).toEqual({
        success: false,
        error: 'Invalid email format'
      });

      expect(mockSignInWithPassword).not.toHaveBeenCalled();
    });

    it('should validate password length', async () => {
      const result = await loginUser('test@example.com', '123');

      expect(result).toEqual({
        success: false,
        error: 'Password must be at least 6 characters long'
      });

      expect(mockSignInWithPassword).not.toHaveBeenCalled();
    });
  });
});