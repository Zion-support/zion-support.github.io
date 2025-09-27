import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '../ErrorBoundary';
import { Skeleton } from '../Skeleton';
import { LoadingSpinner } from '../LoadingSpinner';
import { ServiceCardSkeleton } from '../ServiceCardSkeleton';
import { FeatureCardSkeleton } from '../FeatureCardSkeleton';

// Mock Next.js Head component
jest.mock('next/head', () => {
  return function Head({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  };
});

describe('ErrorBoundary', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders children when there are no errors', () => {
    render(
      <ErrorBoundary>
        <div data-testid="child">Test content</div>
      </ErrorBoundary>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders error fallback when there is an error', () => {
    const ThrowError = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    expect(screen.getByText('Please refresh the page or try again later.')).toBeInTheDocument();
  });

  it('logs error to console', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const ThrowError = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(consoleSpy).toHaveBeenCalled();
  });
});

describe('LoadingComponents', () => {
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
    expect(skeleton).toHaveClass('bg-gray-200');
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
    render(<LoadingSpinner data-testid="spinner" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('animate-spin');
  });

  it('renders loading spinner with different sizes', () => {
    render(<LoadingSpinner size="lg" data-testid="spinner" />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('w-12', 'h-12');
  });
});

describe('ComponentIntegration', () => {
  it('renders all components together without errors', () => {
    render(
      <ErrorBoundary>
        <div>
          <Skeleton width={100} height={50} />
          <LoadingSpinner />
          <ServiceCardSkeleton />
          <FeatureCardSkeleton />
        </div>
      </ErrorBoundary>
    );

    expect(screen.getByTestId('service-card-skeleton')).toBeInTheDocument();
    expect(screen.getByTestId('feature-card-skeleton')).toBeInTheDocument();
  });
});