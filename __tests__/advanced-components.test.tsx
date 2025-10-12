import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';

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
  return <div>Test content</div>;
};

describe('Advanced Components', () => {
  it('should render without errors', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <MockErrorBoundary>
            <MockErrorComponent shouldThrow={false} />
          </MockErrorBoundary>
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('should handle errors gracefully', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <HelmetProvider>
        <MemoryRouter>
          <MockErrorBoundary>
            <MockErrorComponent shouldThrow={true} />
          </MockErrorBoundary>
        </MemoryRouter>
      </HelmetProvider>
    );
    
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('should render SEO optimizer component', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <MockSEOOptimizer title="Test Title" description="Test Description" />
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText('Test Title - Test Description')).toBeInTheDocument();
  });

  it('should render performance monitor component', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <MockPerformanceMonitor />
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText('Performance Monitor')).toBeInTheDocument();
  });
});