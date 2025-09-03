import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useParams, Link } from 'react-router-dom';
import OriginalWhitepaperViewPage from '@/pages/WhitepaperViewPage'; // Renamed for clarity
import { supabase } from '@/lib/supabaseClient';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel';

// Define types for mocked hook and props
interface MockUseAuthReturn {
  isAdmin: boolean;
  // Add other properties if useAuth returns more thats relevant to this page
}

// Props for the page component - assuming it takes no specific props itself
type WhitepaperViewPageProps = Record<string, never>;

// Mock dependencies
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  Link: jest.fn(({ children, to, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ))
}));

jest.mock('@/lib/supabaseClient', () => ({
  supabase: {
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn()
  }
}));

jest.mock('@/components/WhitepaperPreviewPanel', () => {
  return function MockWhitepaperPreviewPanel({ whitepaper }: { whitepaper: any }) {
    return (
      <div data-testid="whitepaper-preview">
        <h1>{whitepaper.title}</h1>
        <p>{whitepaper.summary}</p>
      </div>
    );
  };
});

jest.mock('@/hooks/useAuth', () => ({
  useAuth: (): MockUseAuthReturn => ({
    isAdmin: false
  })
}));

describe('WhitepaperViewPage', () => {
  const mockUseParams = useParams as jest.Mock;
  const mockSupabaseSingle = supabase.from().select().eq().single as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state initially', () => {
    mockUseParams.mockReturnValue({ id: '1' });
    mockSupabaseSingle.mockImplementation(() => new Promise(() => {})); // Never resolves

    render(<OriginalWhitepaperViewPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders whitepaper when data is loaded', async () => {
    const mockWhitepaper = {
      id: '1',
      title: 'Test Whitepaper',
      summary: 'Test summary',
      content: 'Test content',
      author: { name: 'Test Author' },
      createdAt: '2023-01-01'
    };

    mockUseParams.mockReturnValue({ id: '1' });
    mockSupabaseSingle.mockResolvedValue({
      data: mockWhitepaper,
      error: null
    });

    render(<OriginalWhitepaperViewPage />);

    await waitFor(() => {
      expect(screen.getByText('Test Whitepaper')).toBeInTheDocument();
    });

    expect(screen.getByText('Test summary')).toBeInTheDocument();
  });

  it('renders error message when whitepaper not found', async () => {
    mockUseParams.mockReturnValue({ id: 'nonexistent' });
    mockSupabaseSingle.mockResolvedValue({
      data: null,
      error: { message: 'Not found' }
    });

    render(<OriginalWhitepaperViewPage />);

    await waitFor(() => {
      expect(screen.getByText(/not found/i)).toBeInTheDocument();
    });
  });

  it('shows admin controls for admin users', async () => {
    const mockWhitepaper = {
      id: '1',
      title: 'Test Whitepaper',
      summary: 'Test summary',
      content: 'Test content',
      author: { name: 'Test Author' },
      createdAt: '2023-01-01'
    };

    mockUseParams.mockReturnValue({ id: '1' });
    mockSupabaseSingle.mockResolvedValue({
      data: mockWhitepaper,
      error: null
    });

    // Mock admin user
    jest.doMock('@/hooks/useAuth', () => ({
      useAuth: (): MockUseAuthReturn => ({
        isAdmin: true
      })
    }));

    render(<OriginalWhitepaperViewPage />);

    await waitFor(() => {
      expect(screen.getByText('Test Whitepaper')).toBeInTheDocument();
    });

    // Admin controls should be visible
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
    expect(screen.getByText(/delete/i)).toBeInTheDocument();
  });

  it('handles network errors gracefully', async () => {
    mockUseParams.mockReturnValue({ id: '1' });
    mockSupabaseSingle.mockRejectedValue(new Error('Network error'));

    render(<OriginalWhitepaperViewPage />);

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});