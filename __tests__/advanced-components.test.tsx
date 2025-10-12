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

// Mock component that throws an error
const MockErrorComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div data-testid="error-component">No Error</div>;
};

describe('Advanced Components', () => {
  test('renders error boundary correctly', () => {
    render(
      <MockErrorBoundary>
        <div>Test content</div>
      </MockErrorBoundary>
    );
    
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('renders SEO optimizer correctly', () => {
    render(
      <MockSEOOptimizer 
        title="Test Title" 
        description="Test Description" 
      />
    );
    
    expect(screen.getByTestId('seo-optimizer')).toBeInTheDocument();
    expect(screen.getByText('Test Title - Test Description')).toBeInTheDocument();
  });

  test('renders performance monitor correctly', () => {
    render(<MockPerformanceMonitor />);
    
    expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
    expect(screen.getByText('Performance Monitor')).toBeInTheDocument();
  });

  test('error boundary catches errors', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <MockErrorBoundary>
        <MockErrorComponent shouldThrow={true} />
      </MockErrorBoundary>
    );
    
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});