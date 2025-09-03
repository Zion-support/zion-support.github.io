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
  // const _mockSignInWithPassword = vi.fn()
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
        signInWithPassword: mockSignInWithPassword,
        signUp: _mockSignUp,
        onAuthStateChange: _mockOnAuthStateChange,
        getSession: _mockGetSession
      }
    }))
  };
});

describe('Auth Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('loginUser', () => {
    it('should successfully login with valid credentials', async () => {
      const mockUser = {
        id: 'user1',
        email: 'test@example.com',
        user_metadata: {
          name: 'Test User'
        }
      };

      const mockSession = {
        access_token: 'mock-token',
        refresh_token: 'mock-refresh-token',
        user: mockUser
      };

      mockSignInWithPassword.mockResolvedValueOnce({
        data: {
          user: mockUser,
          session: mockSession
        },
        error: null
      });

      const result = await loginUser('test@example.com', 'password123');

      expect(result.success).toBe(true);
      expect(result.user).toEqual(mockUser);
      expect(result.session).toEqual(mockSession);
      expect(mockSignInWithPassword).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
      });
    });

    it('should return error for invalid credentials', async () => {
      mockSignInWithPassword.mockResolvedValueOnce({
        data: {
          user: null,
          session: null
        },
        error: {
          message: 'Invalid login credentials'
        }
      });

      const result = await loginUser('test@example.com', 'wrongpassword');

      expect(result.success).toBe(false);
      expect(result.error).toBe('Invalid login credentials');
      expect(result.user).toBeNull();
      expect(result.session).toBeNull();
    });

    it('should handle network errors', async () => {
      mockSignInWithPassword.mockRejectedValueOnce(new Error('Network error'));

      const result = await loginUser('test@example.com', 'password123');

      expect(result.success).toBe(false);
      expect(result.error).toBe('Network error');
      expect(result.user).toBeNull();
      expect(result.session).toBeNull();
    });

    it('should validate email format', async () => {
      const result = await loginUser('invalid-email', 'password123');

      expect(result.success).toBe(false);
      expect(result.error).toBe('Invalid email format');
      expect(mockSignInWithPassword).not.toHaveBeenCalled();
    });

    it('should validate password length', async () => {
      const result = await loginUser('test@example.com', '123');

      expect(result.success).toBe(false);
      expect(result.error).toBe('Password must be at least 6 characters');
      expect(mockSignInWithPassword).not.toHaveBeenCalled();
    });
  });
});