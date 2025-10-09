import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedErrorBoundary from '../../app/components/EnhancedErrorBoundary';

// Mock console methods
const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

// Component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

// Mock fetch
global.fetch = jest.fn();

describe('EnhancedErrorBoundary', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockResolvedValue({ ok: true });
  });

  afterEach(() => {
    consoleSpy.mockClear();
  });

  it('renders children when there is no error', () => {
    render(
      <EnhancedErrorBoundary>
        <ThrowError shouldThrow={false} />
      </EnhancedErrorBoundary>
    );

    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  it('renders error UI when there is an error', async () => {
    render(
      <EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    await waitFor(() => {
      expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    });

    expect(screen.getByText(/We're sorry, but something unexpected happened/)).toBeInTheDocument();
    expect(screen.getByText('Try Again')).toBeInTheDocument();
    expect(screen.getByText('Reload Page')).toBeInTheDocument();
    expect(screen.getByText('Go Home')).toBeInTheDocument();
  });

  it('shows error ID for support', async () => {
    render(
      <EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    await waitFor(() => {
      expect(screen.getByText('Error ID (for support):')).toBeInTheDocument();
    });

    const errorId = screen.getByText(/error_/);
    expect(errorId).toBeInTheDocument();
  });

  it('handles retry functionality', async () => {
    render(
      <EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    await waitFor(() => {
      expect(screen.getByText('Try Again')).toBeInTheDocument();
    });

    const retryButton = screen.getByText('Try Again');
    fireEvent.click(retryButton);

    // Should show retry count
    await waitFor(() => {
      expect(screen.getByText(/Retry attempts: 1\/3/)).toBeInTheDocument();
    });
  });

  it('handles reload functionality', async () => {
    const reloadSpy = jest.spyOn(window.location, 'reload').mockImplementation(() => {});

    render(
      <EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    await waitFor(() => {
      expect(screen.getByText('Reload Page')).toBeInTheDocument();
    });

    const reloadButton = screen.getByText('Reload Page');
    fireEvent.click(reloadButton);

    expect(reloadSpy).toHaveBeenCalled();
    reloadSpy.mockRestore();
  });

  it('handles go home functionality', async () => {
    const assignSpy = jest.spyOn(window.location, 'href', 'set');

    render(
      <EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    await waitFor(() => {
      expect(screen.getByText('Go Home')).toBeInTheDocument();
    });

    const goHomeButton = screen.getByText('Go Home');
    fireEvent.click(goHomeButton);

    expect(assignSpy).toHaveBeenCalledWith('/');
    assignSpy.mockRestore();
  });

  it('shows technical details when showDetails is true', async () => {
    render(
      <EnhancedErrorBoundary showDetails={true}>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    await waitFor(() => {
      expect(screen.getByText('Technical Details (Click to expand)')).toBeInTheDocument();
    });

    const detailsElement = screen.getByText('Technical Details (Click to expand)');
    fireEvent.click(detailsElement);

    await waitFor(() => {
      expect(screen.getByText('Error:')).toBeInTheDocument();
      expect(screen.getByText('Test error')).toBeInTheDocument();
    });
  });

  it('does not show technical details when showDetails is false', async () => {
    render(
      <EnhancedErrorBoundary showDetails={false}>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    await waitFor(() => {
      expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    });

    expect(screen.queryByText('Technical Details (Click to expand)')).not.toBeInTheDocument();
  });

  it('reports error to analytics', async () => {
    const gtagSpy = jest.fn();
    (global as any).gtag = gtagSpy;

    render(
      <EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    await waitFor(() => {
      expect(gtagSpy).toHaveBeenCalledWith('event', 'exception', expect.objectContaining({
        description: 'Test error',
        fatal: false,
      }));
    });
  });

  it('stores error in localStorage', async () => {
    render(
      <EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'error_logs',
        expect.stringContaining('Test error')
      );
    });
  });

  it('sends error report to API', async () => {
    render(
      <EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/errors', expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: expect.stringContaining('Test error'),
      }));
    });
  });

  it('handles custom fallback', () => {
    const customFallback = <div data-testid="custom-fallback">Custom Error UI</div>;

    render(
      <EnhancedErrorBoundary fallback={customFallback}>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    expect(screen.getByTestId('custom-fallback')).toBeInTheDocument();
    expect(screen.getByText('Custom Error UI')).toBeInTheDocument();
  });

  it('calls custom onError handler', async () => {
    const onErrorSpy = jest.fn();

    render(
      <EnhancedErrorBoundary onError={onErrorSpy}>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    await waitFor(() => {
      expect(onErrorSpy).toHaveBeenCalledWith(
        expect.any(Error),
        expect.objectContaining({
          componentStack: expect.any(String),
        })
      );
    });
  });

  it('limits retry attempts', async () => {
    render(
      <EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    // Click retry 3 times
    for (let i = 0; i < 3; i++) {
      await waitFor(() => {
        expect(screen.getByText('Try Again')).toBeInTheDocument();
      });

      const retryButton = screen.getByText('Try Again');
      fireEvent.click(retryButton);
    }

    // Should not show retry button after max attempts
    await waitFor(() => {
      expect(screen.queryByText('Try Again')).not.toBeInTheDocument();
    });
  });
});