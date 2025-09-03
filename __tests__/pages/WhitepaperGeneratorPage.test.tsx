import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act
} from '@testing-library/react';
import '@testing-library/jest-dom';
import WhitepaperGeneratorPage from '@/pages/WhitepaperGeneratorPage';
import { supabase } from '@/lib/supabaseClient';
import * as recharts from 'recharts'; // For mocking ResponsiveContainer

// --- Mocks ---
jest.mock('@/lib/supabaseClient', () => ({
  supabase: {
    functions: {
      invoke: jest.fn()
    }
  }
}));

jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    loading: jest.fn(),
    dismiss: jest.fn()
  }
}));

jest.mock('recharts', () => ({
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="responsive-container">{children}</div>
  ),
  PieChart: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="pie-chart">{children}</div>
  ),
  Pie: ({ data }: { data: any[] }) => (
    <div data-testid="pie">
      {data.map((item, index) => (
        <div key={index} data-testid={`pie-item-${item.name}`}>
          {item.name}: {item.value}
        </div>
      ))}
    </div>
  ),
  Cell: ({ fill }: { fill: string }) => (
    <div data-testid="cell" style={{ backgroundColor: fill }} />
  )
}));

describe('WhitepaperGeneratorPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the page title', () => {
    render(<WhitepaperGeneratorPage />);
    expect(screen.getByText('Whitepaper Generator')).toBeInTheDocument();
  });

  it('renders form fields', () => {
    render(<WhitepaperGeneratorPage />);
    
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/industry/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/target audience/i)).toBeInTheDocument();
  });

  it('allows user to input whitepaper details', async () => {
    render(<WhitepaperGeneratorPage />);
    
    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    
    fireEvent.change(titleInput, { target: { value: 'Test Whitepaper' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    
    expect(titleInput).toHaveValue('Test Whitepaper');
    expect(descriptionInput).toHaveValue('Test Description');
  });

  it('shows generate button', () => {
    render(<WhitepaperGeneratorPage />);
    expect(screen.getByRole('button', { name: /generate/i })).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const mockInvoke = supabase.functions.invoke as jest.Mock;
    mockInvoke.mockResolvedValueOnce({
      data: { content: 'Generated whitepaper content' },
      error: null
    });

    render(<WhitepaperGeneratorPage />);
    
    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const generateButton = screen.getByRole('button', { name: /generate/i });
    
    fireEvent.change(titleInput, { target: { value: 'Test Whitepaper' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    
    await act(async () => {
      fireEvent.click(generateButton);
    });
    
    expect(mockInvoke).toHaveBeenCalledWith('generate-whitepaper', {
      body: expect.objectContaining({
        title: 'Test Whitepaper',
        description: 'Test Description'
      })
    });
  });

  it('displays generated content', async () => {
    const mockInvoke = supabase.functions.invoke as jest.Mock;
    mockInvoke.mockResolvedValueOnce({
      data: { content: 'Generated whitepaper content' },
      error: null
    });

    render(<WhitepaperGeneratorPage />);
    
    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const generateButton = screen.getByRole('button', { name: /generate/i });
    
    fireEvent.change(titleInput, { target: { value: 'Test Whitepaper' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    
    await act(async () => {
      fireEvent.click(generateButton);
    });
    
    await waitFor(() => {
      expect(screen.getByText('Generated whitepaper content')).toBeInTheDocument();
    });
  });

  it('handles generation errors', async () => {
    const mockInvoke = supabase.functions.invoke as jest.Mock;
    mockInvoke.mockResolvedValueOnce({
      data: null,
      error: { message: 'Generation failed' }
    });

    render(<WhitepaperGeneratorPage />);
    
    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const generateButton = screen.getByRole('button', { name: /generate/i });
    
    fireEvent.change(titleInput, { target: { value: 'Test Whitepaper' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    
    await act(async () => {
      fireEvent.click(generateButton);
    });
    
    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });

  it('validates required fields', async () => {
    render(<WhitepaperGeneratorPage />);
    
    const generateButton = screen.getByRole('button', { name: /generate/i });
    
    await act(async () => {
      fireEvent.click(generateButton);
    });
    
    expect(screen.getByText(/required/i)).toBeInTheDocument();
  });
});