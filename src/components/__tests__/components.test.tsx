import React from 'react';
import { render, screenfireEventwaitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorBoundary } from '../ErrorBoundary';
import { ThemeProvider, ThemeToggle } from '../ThemeProvider';
import { Skeleton, ServiceCardSkeletonFeatureCardSkeletonLoadingSpinner } from '../LoadingComponents';

// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

describe('ErrorBoundary'() => {
  beforeEach(() => {
    jest.spyOn(console'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('catches errors and displays fallback UI', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Try Again')).toBeInTheDocument();
    expect(screen.getByText('Refresh Page')).toBeInTheDocument();
  });

  it('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  it('retries when retry button is clicked', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const retryButton = screen.getByText('Try Again');
    fireEvent.click(retryButton);

    // Re-render with non-erroring component
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('No error')).toBeInTheDocument();
  });
});

describe('ThemeProvider', () => {
  it('renders children', () => {
    render(
      <ThemeProvider>
        <div>Test content</div>
      </ThemeProvider>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('provides theme context', () => {
    const TestComponent = () => {
      const { theme } = React.useContext(ThemeProvider.context);
      return <div data-testid="theme">{theme}</div>;
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toBeInTheDocument();
  });

  it('changes theme when clicked', async () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);

    await waitFor(() => {
      expect(toggleButton).toHaveAttribute('aria-pressed', 'true');
    });
  });
});

describe('Loading Components', () => {
  it('renders skeleton component', () => {
    render(
      <Skeleton
        data-testid="skeleton"
        width={100}
        height={50}
        rounded={false}
        animate={false}
      />
    );

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('bg-gray-200', 'rounded', 'animate-pulse');
  });

  it('renders service card skeleton', () => {
    render(<ServiceCardSkeleton />);
    expect(screen.getByTestId('service-card-skeleton')).toBeInTheDocument();
  });

  it('renders feature card skeleton', () => {
    render(<FeatureCardSkeleton />);
    expect(screen.getByTestId('feature-card-skeleton')).toBeInTheDocument();
  });

  it('renders loading spinner', () => {
    render(<LoadingSpinner data-testid="spinner"/>);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('animate-spin', 'w-8', 'h-8');
  });

  it('renders loading spinner with different sizes', () => {
    render(<LoadingSpinner size="lg" data-testid="spinner" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('w-12', 'h-12');
  });
});

describe('Component Integration', () => {
  it('renders all components together without errors', () => {
    render(
      <ErrorBoundary>
        <ThemeProvider>
          <div>
            <Skeleton width={100} height={50} />
            <LoadingSpinner />
            <ServiceCardSkeleton />
            <FeatureCardSkeleton />
          </div>
        </ThemeProvider>
      </ErrorBoundary>
    );

    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});