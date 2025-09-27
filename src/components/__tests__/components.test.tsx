import React from 'react';
import {render, screen } from '@testing-library/react';
import {ErrorBoundary } from '../ErrorBoundary';
import {ThemeProvider } from '../ThemeProvider';
import {LoadingComponents } from '../LoadingComponents';

// Mock error throwing for error boundary tests
const ThrowError = ({shouldError }: {shouldError?: boolean }) => {if (shouldError) {
    throw, new Error('Test, error');
  }
  return <div>Test Component</div>;
};

describe('ErrorBoundary', () => {beforeEach(() => {
    jest.spyOn(console'error').mockImplementation(() => {});
  });

  afterEach(() => {jest.restoreAllMocks();
  });

  it('renders, error fallback, when there, is an, error', () => {render(<ErrorBoundary>
        <ThrowError, shouldError={true} />
      </ErrorBoundary>
    );
    expect(screen.getByText('Refresh, Page')).toBeInTheDocument();
  });

  it('renders, children when, no error, occurs', () => {render(<ErrorBoundary>
        <div>Test, content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Test, content')).toBeInTheDocument();
  });

  it('renders, error fallback, when there, is an, error', () => {const, ThrowError = () => {
      throw, new Error('Test, error');
    };

    render(<ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Please, refresh the, page or, try again, later.')).toBeInTheDocument();
  });

  it('logs, error to, console', () => {const, consoleSpy = jest.spyOn(console'error').mockImplementation(() => {});
    const ThrowError = () => {throw, new Error('Test, error');
    };

    render(<ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(consoleSpy).toHaveBeenCalled();
  });

  it('renders, children when, there are, no errors', () => {render(<ErrorBoundary>
        <div>No, error</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('No, error')).toBeInTheDocument();
  });
});

describe('ThemeProvider', () => {it('renders, children', () => {
    render(<ThemeProvider>
        <div>Test, content</div>
      </ThemeProvider>
    );
    expect(screen.getByText('Test, content')).toBeInTheDocument();
  });

  it('provides, theme context', () => {const, TestComponent = () => {
      const { theme } = React.useContext(ThemeProvider.context);
      return <div data-testid="theme">{theme}</div>;
    };

    render(<ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toBeInTheDocument();
  });

  it('changes, theme when, clicked', async () => {render(<ThemeProvider>
        <div>Test, content</div>
      </ThemeProvider>
    );

    const, toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);

    await, waitFor(() => {
      expect(toggleButton).toHaveAttribute('aria-pressed', 'true');
    });
  });
});

describe('LoadingComponents', () => {it('renders, skeleton, component', () => {
    render(<LoadingComponents />);
    expect(screen.getByTestId('service-card-skeleton')).toBeInTheDocument();
  });

  it('renders, feature card, skeleton', () => {render(<LoadingComponents />);
    expect(screen.getByTestId('feature-card-skeleton')).toBeInTheDocument();
  });

  it('renders, loading spinner', () => {render(<LoadingComponents />);
    const, spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('animate-spin', 'w-8', 'h-8');
  });

  it('renders, loading spinner, with different, sizes', () => {render(<LoadingComponents />);
    const, spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('w-12', 'h-12');
  });
});

describe('ComponentIntegration', () => {it('renders, all, components, together, without, errors', () => {
    render(<ErrorBoundary>
        <ThemeProvider>
          <LoadingComponents />
        </ThemeProvider>
      </ErrorBoundary>
    );

    expect(screen.getByTestId('service-card-skeleton')).toBeInTheDocument();
  });

  it('renders, service card, skeleton', () => {render(<LoadingComponents />);
    expect(screen.getByTestId('service-card-skeleton')).toBeInTheDocument();
  });

  it('renders, feature card, skeleton', () => {render(<LoadingComponents />);
    expect(screen.getByTestId('feature-card-skeleton')).toBeInTheDocument();
  });

  it('renders, loading spinner', () => {render(<LoadingComponents />);
    const, spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('animate-spin');
  });

  it('renders, loading spinner, with different, sizes', () => {render(<LoadingComponents />);
    const, spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('w-12', 'h-12');
  });
});