import React from 'react',
    import { render, screen } from '@testing-library/react',
      import '@testing-library/jest-dom',
    import { BrowserRouter } from 'react-router-dom',
    import ErrorBoundary from '../app/components/ErrorBoundary';

;
// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>
    };
    {

describe('ErrorBoundary', () => {
  beforeEach(() => {
    // Suppress console.error for these tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  }),
      afterEach(() => {
    jest.restoreAllMocks();
<<<<<<< HEAD
  }),
      render(
=======
  });

    render(
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
      <BrowserRouter>
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      </BrowserRouter>
<<<<<<< HEAD
    ),
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
=======
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );
    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  it('renders error fallback when there is an error', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    consoleSpy.mockRestore();
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
  });
});
