import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignupAutoLogin from '@/components/SignupAutoLogin';
import { User, Session, AuthResponse, AuthChangeEvent } from '@supabase/supabase-js';

// Import UserDetails and AuthResponse
// Supabase types
// Type for the onAuthStateChange callback
type AuthStateChangeCallback = (
  event: AuthChangeEvent,
  session: Session | null
) => void;

let authCallback: AuthStateChangeCallback | undefined;

// Mock services and hooks
const mockUser: User = {
  id: '1',
  email: 'john@example.com',
  app_metadata: {},
  user_metadata: {
    name: 'John Doe'
  },
  aud: 'authenticated',
  created_at: new Date().toISOString()
};

const mockSession: Session = {
  access_token: 'mock-access-token',
  refresh_token: 'mock-refresh-token',
  expires_in: 3600,
  token_type: 'bearer',
  user: mockUser
};

const mockSignupResolvedValue: AuthResponse = {
  data: {
    user: mockUser,
    session: mockSession
  },
  error: null
};

const mockLoginResolvedValue: AuthResponse = {
  data: {
    user: mockUser,
    session: mockSession
  },
  error: null
};

const mockSignupImpl = vi.fn().mockResolvedValue(mockSignupResolvedValue);
const mockLoginImpl = vi.fn().mockResolvedValue(mockLoginResolvedValue);

vi.mock('@/hooks/useAuthOperations', () => ({
  useAuthOperations: () => ({
    login: mockLoginImpl,
    signup: mockSignupImpl,
    logout: vi.fn().mockResolvedValue({ error: null }),
    resetPassword: vi.fn().mockResolvedValue({ error: null }),
    updateProfile: vi.fn().mockResolvedValue({ error: null }),
    loginWithGoogle: vi.fn().mockResolvedValue(undefined),
    loginWithFacebook: vi.fn().mockResolvedValue(undefined),
    loginWithTwitter: vi.fn().mockResolvedValue(undefined),
    loginWithWeb3: vi.fn().mockResolvedValue(undefined)
  })
}));

const mockLoginUserServiceSuccess = {
  res: {
    status: 200,
    ok: true,
    json: () => Promise.resolve({ accessToken: 'token', refreshToken: 'ref' })
  },
  data: { accessToken: 'token', refreshToken: 'ref' }
};

const mockLoginUser = vi.fn().mockResolvedValue(mockLoginUserServiceSuccess);

vi.mock('@/services/authService', () => ({
  loginUser: mockLoginUser
}));

vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      signUp: vi.fn(),
      // This will be called by useAuthOperations's signup
      signInWithPassword: vi.fn().mockResolvedValue({
        data: { session: mockSession, user: mockUser },
        error: null
      }),
      onAuthStateChange: vi.fn((callback) => {
        authCallback = callback;
        return { data: { subscription: { unsubscribe: vi.fn() } } };
      })
    }
  }
}));

describe('SignupAutoLogin', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    authCallback = undefined;
  });

  it('renders signup form', () => {
    render(<SignupAutoLogin />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });

  it('handles successful signup and auto-login', async () => {
    render(<SignupAutoLogin />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const signupButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(signupButton);

    await waitFor(() => {
      expect(mockSignupImpl).toHaveBeenCalledWith({
        email: 'john@example.com',
        password: 'password123'
      });
    });

    // Simulate auth state change
    if (authCallback) {
      authCallback('SIGNED_IN', mockSession);
    }

    await waitFor(() => {
      expect(mockLoginUser).toHaveBeenCalledWith(
        'john@example.com',
        'password123'
      );
    });
  });

  it('handles signup errors', async () => {
    mockSignupImpl.mockResolvedValueOnce({
      data: { user: null, session: null },
      error: { message: 'Email already registered' }
    });

    render(<SignupAutoLogin />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const signupButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(signupButton);

    await waitFor(() => {
      expect(screen.getByText(/email already registered/i)).toBeInTheDocument();
    });
  });

  it('validates form inputs', async () => {
    render(<SignupAutoLogin />);

    const signupButton = screen.getByRole('button', { name: /sign up/i });
    fireEvent.click(signupButton);

    await waitFor(() => {
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });
});