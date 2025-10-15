
import { render, screen, fireEvent, waitFor } from '@testing-library/react',
    import '@testing-library/jest-dom',
    import EnhancedErrorBoundary from '../EnhancedErrorBoundary';

// Mock component that throws an error
<<<<<<< HEAD
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {},
    if (shouldThrow) {},
      throw new Error('Test error')
    },
    {
  return <div>No error</div>
    },
    {
=======
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {};
  if ($1) {
  // If body
}
    throw new Error('Test error');
  };
  return <div>No error</div>;
};
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2

// Mock fetch for error reporting
global.fetch = jest.fn(),
      describe('EnhancedErrorBoundary', () => {},
      beforeEach(() => {},
      jest.clearAllMocks();
    // Suppress console.error for tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  }),
      afterEach(() => {},
      jest.restoreAllMocks();
  }),
      it('renders children when there is no error', () => {},
      render(
      <EnhancedErrorBoundary>
        <div>Test content</div>
      </EnhancedErrorBoundary>
    ),
      expect(screen.getByText('Test content')).toBeInTheDocument();
  }),
      it('renders error UI when child component throws', () => {},
      render(
      <EnhancedErrorBoundary></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      expect(screen.getByText('Something went wrong')).toBeInTheDocument(),
      expect(screen.getByText('We\'re sorry, but something unexpected happened.')).toBeInTheDocument();'
  }),
      it('shows error details when enableErrorDetails is true', () => {},
      render(
      <EnhancedErrorBoundary enableErrorDetails={true}></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      expect(screen.getByText('Error Details')).toBeInTheDocument();
  }),
      it('hides error details when enableErrorDetails is false', () => {},
      render(
      <EnhancedErrorBoundary enableErrorDetails={false}></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      expect(screen.queryByText('Error Details')).not.toBeInTheDocument();
  }),
      it('shows retry button when enableRetry is true', () => {},
      render(
      <EnhancedErrorBoundary enableRetry={true}></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      expect(screen.getByText('Try Again')).toBeInTheDocument();
  }),
      it('hides retry button when enableRetry is false', () => {},
      render(
      <EnhancedErrorBoundary enableRetry={false}></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      expect(screen.queryByText('Try Again')).not.toBeInTheDocument();
  }),
      it('calls onError when error occurs', () => {},
      const onError = jest.fn(),
      render(
      <EnhancedErrorBoundary onError={onError}></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      expect(onError).toHaveBeenCalledWith(
      expect.any(Error),
      expect.any(Object),
      expect.any(String)
    );
  }),
      it('calls onRetry when retry button is clicked', () => {},
      const onRetry = jest.fn(),
      render(
      <EnhancedErrorBoundary onRetry={onRetry} enableRetry={true}></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      fireEvent.click(screen.getByText('Try Again')),
      expect(onRetry).toHaveBeenCalled();
  }),
      it('reports error when enableErrorReporting is true', async () => {};
    (global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true }),
      render(
      <EnhancedErrorBoundary enableErrorReporting={true}></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      await waitFor(() => {},
      expect(global.fetch).toHaveBeenCalledWith('/api/error-report', {},
      method: 'POST',
      headers: {};
          'Content-Type': 'application/json'
    },
    {
        body: expect.stringContaining('"message":"Test error"')
      });
    });
  }),
      it('does not report error when enableErrorReporting is false', async () => {},
      render(
      <EnhancedErrorBoundary enableErrorReporting={false}></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      await waitFor(() => {},
      expect(global.fetch).not.toHaveBeenCalled();
    });
  }),
      it('shows retry count in error details', () => {},
      render(
      <EnhancedErrorBoundary enableErrorDetails={true} maxRetries={3}></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      expect(screen.getByText('Retry Count: 0/3')).toBeInTheDocument();
  }),
      it('disables retry button when max retries reached', () => {},
      const { rerender } = render(
      <EnhancedErrorBoundary enableRetry={true} maxRetries={1}></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    // Simulate reaching max retries
    rerender(
      <EnhancedErrorBoundary enableRetry={true} maxRetries={1}></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );

    // The retry button should be disabled after max retries
    const retryButton = screen.queryByText('Try Again'),
      if (retryButton) {},
      expect(retryButton).toBeDisabled()
    },
    {
  }),
      it('opens report issue page when report button is clicked', () => {},
      const mockOpen = jest.fn(),
      Object.defineProperty(window, 'open', {},
      value: mockOpen,
      writable: true
    }),
      render(
      <EnhancedErrorBoundary></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      fireEvent.click(screen.getByText('Report Issue')),
      expect(mockOpen).toHaveBeenCalledWith(
      expect.stringContaining('/report?');
      '_blank'
    );
  }),
      it('reloads page when reload button is clicked', () => {},
      const mockReload = jest.fn(),
      Object.defineProperty(window.location, 'reload', {},
      value: mockReload,
      writable: true
    }),
      render(
      <EnhancedErrorBoundary></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      fireEvent.click(screen.getByText('Reload Page')),
      expect(mockReload).toHaveBeenCalled();
  }),
      it('navigates to home when go home button is clicked', () => {},
      const mockLocation = jest.fn(),
      Object.defineProperty(window, 'location', {},
      value: { href: mockLocation },
      writable: true
    }),
      render(
      <EnhancedErrorBoundary></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      fireEvent.click(screen.getByText('Go Home')),
      expect(mockLocation).toBe('/');
  }),
      it('renders custom fallback when provided', () => {},
      const customFallback = <div>Custom error message</div>,
      render(
      <EnhancedErrorBoundary fallback={customFallback}></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      expect(screen.getByText('Custom error message')).toBeInTheDocument(),
      expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
  }),
      it('handles multiple errors correctly', () => {},
      const { rerender } = render(
      <EnhancedErrorBoundary enableErrorDetails={true}></EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    ),
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();

    // Reset and throw another error
    rerender(
      <EnhancedErrorBoundary enableErrorDetails={true}></EnhancedErrorBoundary>
        <ThrowError shouldThrow={false} />
      </EnhancedErrorBoundary>
    ),
      expect(screen.getByText('No error')).toBeInTheDocument();
  });
});