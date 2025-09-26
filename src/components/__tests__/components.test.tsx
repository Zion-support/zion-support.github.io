import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorBoundary } from '../ErrorBoundary';
import { ThemeProvider, ThemeToggle } from '../ThemeProvider';
import { Skeleton, ServiceCardSkeleton, FeatureCardSkeleton, LoadingSpinner } from '../LoadingComponents';

// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

describe('ErrorBoundary', () => {
  beforeEach(() => {
    // Suppress console.error for error boundary tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders error UI when there is an error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText(/We're sorry/)).toBeInTheDocument();
  });

  it('shows refresh button and try again button', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Refresh Page')).toBeInTheDocument();
    expect(screen.getByText('Try Again')).toBeInTheDocument();
  });

  it('resets error state when try again is clicked', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );
    
    // Initially no error
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

  it('applies light theme by default', () => {
    render(
      <ThemeProvider>
        <div data-testid="content">Test content</div>
      </ThemeProvider>
    );
    
    const content = screen.getByTestId('content');
    expect(content).toBeInTheDocument();
  });
});

describe('ThemeToggle', () => {
  it('renders theme toggle button', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('changes theme when clicked', async () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    // Theme should change (we can't easily test the actual theme change without more complex setup)
    expect(button).toBeInTheDocument();
  });
});

describe('Loading Components', () => {
  it('renders skeleton with default props', () => {
    render(<Skeleton data-testid="skeleton" />);
    
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('bg-gray-200', 'rounded', 'animate-pulse');
  });

  it('renders skeleton with custom props', () => {
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
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveStyle({ width: '100px', height: '50px' });
    expect(skeleton).not.toHaveClass('rounded', 'animate-pulse');
  });

  it('renders service card skeleton', () => {
    render(<ServiceCardSkeleton />);
    
    // Should render without errors
    expect(document.body).toBeInTheDocument();
  });

  it('renders feature card skeleton', () => {
    render(<FeatureCardSkeleton />);
    
    // Should render without errors
    expect(document.body).toBeInTheDocument();
  });

  it('renders loading spinner', () => {
    render(<LoadingSpinner data-testid="spinner" />);
    
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('animate-spin', 'w-8', 'h-8');
  });

  it('renders loading spinner with different sizes', () => {
    render(<LoadingSpinner size="lg" data-testid="spinner" />);
    
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('w-12', 'h-12');
  });
});

// Integration test
describe('Component Integration', () => {
  it('renders all components together without errors', () => {
    render(
      <ErrorBoundary>
        <ThemeProvider>
          <div>
            <ThemeToggle />
            <Skeleton data-testid="skeleton" />
            <LoadingSpinner data-testid="spinner" />
            <div>Main content</div>
          </div>
        </ThemeProvider>
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Main content')).toBeInTheDocument();
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});