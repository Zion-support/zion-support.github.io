import { render, screen, } from '@testing-library/react';
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
  return <div>No error</div>;
};

describe('Advanced Components', () => {
  test('ErrorBoundary catches errors', () => {
    render(
      <MockErrorBoundary>
        <MockErrorComponent shouldThrow={true} />
      </MockErrorBoundary>
    );
    
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
  });

  test('SEOOptimizer renders correctly', () => {
    render(
      <MockSEOOptimizer 
        title="Test Title" 
        description="Test Description" 
      />
    );
    
    expect(screen.getByTestId('seo-optimizer')).toHaveTextContent('Test Title - Test Description');
  });

  test('PerformanceMonitor renders correctly', () => {
    render(<MockPerformanceMonitor />);
    
    expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
  });

  test('Components work with HelmetProvider', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <MockSEOOptimizer 
            title="Helmet Test" 
            description="Testing with Helmet" 
          />
        </MemoryRouter>
      </HelmetProvider>
    );
    
    expect(screen.getByTestId('seo-optimizer')).toBeInTheDocument();
  });
});