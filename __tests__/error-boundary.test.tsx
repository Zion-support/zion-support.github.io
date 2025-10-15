import React from 'react',
    import { render, screen } from '@testing-library/react',
      import '@testing-library/jest-dom',
    import ErrorBoundary from '../app/components/ErrorBoundary';


// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {}
  if (shouldThrow) {}
    throw new Error('Test error');
  }
<<<<<<< HEAD
  return <div>No error</div>
    };
    {}
describe('ErrorBoundary', () => {}
  beforeEach(() => {}
    // Suppress console.error for these tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  }),
      afterEach(() => {}
    jest.restoreAllMocks();
  });

    render()
      <>
=======
  return <div>No error</div>;
};

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {";
    render(
      <BrowserRouter>
        <ErrorBoundary>
          <ThrowError shouldThrow ={false} />
        </ErrorBoundary>
      </BrowserRouter>
    );
    
    expect(screen.getByText('No error')).toBeInTheDocument();";
  });

  it('renders error fallback when there is an error', () => {";
    render(
      <BrowserRouter>
>>>>>>> main
        <ErrorBoundary>
          <ThrowError shouldThrow ={true} />
        </ErrorBoundary>
      </>
    );
    
<<<<<<< HEAD
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  it('renders children when there is no error', () => {}
    render()
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );
    expect(screen.getByText('No error')).toBeInTheDocument();
=======
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();";
>>>>>>> main
  });

  it('renders error fallback when there is an error', () => {}
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render()
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    consoleSpy.mockRestore();
  });
});

