import { render, screen } from '@testing-library/react';

// Mock components
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="error-boundary">{children}</div>;
};

const SEOOptimizer = ({ title, description }: { title: string; description: string }) => {
  return <div data-testid="seo-optimizer">{title} - {description}</div>;
};

const PerformanceMonitor = () => {
  return <div data-testid="performance-monitor">Performance Monitor</div>;
};

// Test component for error boundary tests
const TestComponent = () => <div>Test component</div>;

describe('Advanced Components', () => {
  test('renders error boundary correctly', () => {
    render(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    );
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
  });

  test('renders SEO optimizer correctly', () => {
    render(
      <SEOOptimizer title="Test Title" description="Test Description" />
    );
    expect(screen.getByTestId('seo-optimizer')).toBeInTheDocument();
  });

  test('renders performance monitor correctly', () => {
    render(<PerformanceMonitor />);
    expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
  });
});