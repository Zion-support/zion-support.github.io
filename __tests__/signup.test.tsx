import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Signup from '@/components/Signup';
import { useNavigate } from 'react-router-dom';

// Import useNavigate
// Assuming ToastData or similar is exported
// To get types for mocked useAuth

// Define types for mockFetch responses
interface MockResponse {
  ok: boolean;
  status: number;
  json: () => Promise<Record<string, unknown> | { message: string } | { error: string }>; // More specific than any
}

// Mock useAuth
vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    loginWithGoogle: vi.fn(),
    loginWithFacebook: vi.fn(),
    loginWithTwitter: vi.fn(),
    // Ensure the mock for signup matches the expected signature from AuthContextType
    signup: vi.fn().mockResolvedValue({
      error: null,
      data: {
        user: { id: 'test-user-id' },
        session: { access_token: 'jwt' }
      }
    }),
    login: vi.fn(),
    logout: vi.fn(),
    user: null,
    loading: false
  })
}));

// Mock useNavigate
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn()
}));

// Mock toast
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: {
      success: vi.fn(),
      error: vi.fn()
    }
  })
}));

describe('Signup Component', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useNavigate as any).mockReturnValue(mockNavigate);
  });

  it('renders signup form', () => {
    render(<Signup />);
    
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });

  it('handles successful signup', async () => {
    render(<Signup />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    const signupButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

    fireEvent.click(signupButton);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('validates password confirmation', async () => {
    render(<Signup />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    const signupButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'different123' } });

    fireEvent.click(signupButton);

    await waitFor(() => {
      expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    render(<Signup />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    const signupButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

    fireEvent.click(signupButton);

    await waitFor(() => {
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    });
  });

  it('validates password strength', async () => {
    render(<Signup />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    const signupButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: '123' } });

    fireEvent.click(signupButton);

    await waitFor(() => {
      expect(screen.getByText(/password must be at least 6 characters/i)).toBeInTheDocument();
    });
  });

  it('handles signup errors', async () => {
    const { useAuth } = await import('@/hooks/useAuth');
    const mockUseAuth = useAuth as any;
    mockUseAuth.mockReturnValueOnce({
      signup: vi.fn().mockResolvedValue({
        error: { message: 'Email already exists' },
        data: null
      }),
      loginWithGoogle: vi.fn(),
      loginWithFacebook: vi.fn(),
      loginWithTwitter: vi.fn(),
      login: vi.fn(),
      logout: vi.fn(),
      user: null,
      loading: false
    });

    render(<Signup />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    const signupButton = screen.getByRole('button', { name: /sign up/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

    fireEvent.click(signupButton);

    await waitFor(() => {
      expect(screen.getByText(/email already exists/i)).toBeInTheDocument();
    });
  });
});