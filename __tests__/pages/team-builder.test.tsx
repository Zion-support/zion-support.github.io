import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamBuilderPage from '@/pages/team-builder'; // Adjust path if needed
import { AppLayout } from '@/layout/AppLayout'; // Mocked
import { useAuth } from '@/hooks/useAuth'; // Mocked
import { supabase } from '@/integrations/supabase/client'; // Mocked for any direct calls if they existed
import { toast } from 'sonner';

// Mocks
jest.mock('@/layout/AppLayout', () => ({
  AppLayout: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="app-layout">{children}</div>
  )
}));

jest.mock('@/hooks/useAuth', () => ({
  useAuth: jest.fn(() => ({ user: { id: 'test-user-id' } })) // Mock a logged-in user
}));

// Mock sonner toast
jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    loading: jest.fn(),
    dismiss: jest.fn()
  }
}));

// Mock Supabase
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    from: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn()
  }
}));

describe('TeamBuilderPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the page title', () => {
    render(<TeamBuilderPage />);
    expect(screen.getByText('Team Builder')).toBeInTheDocument();
  });

  it('renders project brief form', () => {
    render(<TeamBuilderPage />);
    
    expect(screen.getByLabelText(/project name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/goals/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/timeline/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/budget/i)).toBeInTheDocument();
  });

  it('allows user to input project details', async () => {
    render(<TeamBuilderPage />);
    
    const projectNameInput = screen.getByLabelText(/project name/i);
    const goalsInput = screen.getByLabelText(/goals/i);
    
    fireEvent.change(projectNameInput, { target: { value: 'Test Project' } });
    fireEvent.change(goalsInput, { target: { value: 'Build a great app' } });
    
    expect(projectNameInput).toHaveValue('Test Project');
    expect(goalsInput).toHaveValue('Build a great app');
  });

  it('shows generate team button', () => {
    render(<TeamBuilderPage />);
    expect(screen.getByRole('button', { name: /generate team/i })).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const mockInvoke = supabase.functions.invoke as jest.Mock;
    mockInvoke.mockResolvedValueOnce({
      data: { recommendations: [] },
      error: null
    });

    render(<TeamBuilderPage />);
    
    const projectNameInput = screen.getByLabelText(/project name/i);
    const goalsInput = screen.getByLabelText(/goals/i);
    const generateButton = screen.getByRole('button', { name: /generate team/i });
    
    fireEvent.change(projectNameInput, { target: { value: 'Test Project' } });
    fireEvent.change(goalsInput, { target: { value: 'Build a great app' } });
    
    await act(async () => {
      fireEvent.click(generateButton);
    });
    
    expect(mockInvoke).toHaveBeenCalledWith('generate-team', {
      body: expect.objectContaining({
        projectName: 'Test Project',
        goals: 'Build a great app'
      })
    });
  });

  it('displays team recommendations', async () => {
    const mockRecommendations = [
      {
        role: 'Frontend Developer',
        skills: ['React', 'TypeScript'],
        experience: '3-5 years',
        salary: '$80k-100k'
      },
      {
        role: 'Backend Developer',
        skills: ['Node.js', 'PostgreSQL'],
        experience: '3-5 years',
        salary: '$85k-105k'
      }
    ];

    const mockInvoke = supabase.functions.invoke as jest.Mock;
    mockInvoke.mockResolvedValueOnce({
      data: { recommendations: mockRecommendations },
      error: null
    });

    render(<TeamBuilderPage />);
    
    const projectNameInput = screen.getByLabelText(/project name/i);
    const goalsInput = screen.getByLabelText(/goals/i);
    const generateButton = screen.getByRole('button', { name: /generate team/i });
    
    fireEvent.change(projectNameInput, { target: { value: 'Test Project' } });
    fireEvent.change(goalsInput, { target: { value: 'Build a great app' } });
    
    await act(async () => {
      fireEvent.click(generateButton);
    });
    
    await waitFor(() => {
      expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
      expect(screen.getByText('Backend Developer')).toBeInTheDocument();
    });
  });

  it('handles generation errors', async () => {
    const mockInvoke = supabase.functions.invoke as jest.Mock;
    mockInvoke.mockResolvedValueOnce({
      data: null,
      error: { message: 'Generation failed' }
    });

    render(<TeamBuilderPage />);
    
    const projectNameInput = screen.getByLabelText(/project name/i);
    const goalsInput = screen.getByLabelText(/goals/i);
    const generateButton = screen.getByRole('button', { name: /generate team/i });
    
    fireEvent.change(projectNameInput, { target: { value: 'Test Project' } });
    fireEvent.change(goalsInput, { target: { value: 'Build a great app' } });
    
    await act(async () => {
      fireEvent.click(generateButton);
    });
    
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Failed to generate team recommendations');
    });
  });

  it('validates required fields', async () => {
    render(<TeamBuilderPage />);
    
    const generateButton = screen.getByRole('button', { name: /generate team/i });
    
    await act(async () => {
      fireEvent.click(generateButton);
    });
    
    expect(screen.getByText(/required/i)).toBeInTheDocument();
  });
});