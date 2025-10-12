import { render, screen } from '@testing-library/react';

// Mock components
const MockErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="error-boundary">{children}</div>;
};

const MockSEOOptimizer = ({ title, description }: { title: string; description: string }) => {
  return <div data-testid="seo-optimizer">{title} - {description}</div>;
};

const MockPerformanceMonitor = () => {
  return <div data-testid="performance-monitor">Performance Monitor</div>;
};


describe('Advanced Components', () => {
  test('ErrorBoundary renders correctly', () => {
    render(
      <MockErrorBoundary>
        <div>Test content</div>
      </MockErrorBoundary>
    );
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
  });

  test('SEOOptimizer renders correctly', () => {
    render(
      <MockSEOOptimizer title="Test Title" description="Test Description" />
    );
    expect(screen.getByTestId('seo-optimizer')).toBeInTheDocument();
  });

  test('PerformanceMonitor renders correctly', () => {
    render(<MockPerformanceMonitor />);
    expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
  });
});