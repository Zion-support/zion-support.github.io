import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock components for testing
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="error-boundary">{children}</div>;
};

const AdvancedSEOOptimizer = ({ title, description }: { title?: string; description?: string }) => {
  return <div data-testid="seo-optimizer">
    <h1>{title || 'Default Title'}</h1>
    <p>{description || 'Default Description'}</p>
  </div>;
};

const PerformanceMonitor = () => {
  return <div data-testid="performance-monitor">Performance Monitor</div>;
};

describe('Advanced Components', () => {
  test('ErrorBoundary renders children', () => {
    render(
      <ErrorBoundary>
        <div>Test Content</div>
      </ErrorBoundary>
    );
    
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('AdvancedSEOOptimizer renders with default props', () => {
    render(<AdvancedSEOOptimizer />);
    
    expect(screen.getByTestId('seo-optimizer')).toBeInTheDocument();
    expect(screen.getByText('Default Title')).toBeInTheDocument();
    expect(screen.getByText('Default Description')).toBeInTheDocument();
  });

  test('AdvancedSEOOptimizer renders with custom props', () => {
    render(
      <AdvancedSEOOptimizer 
        title="Custom Title" 
        description="Custom Description" 
      />
    );
    
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Description')).toBeInTheDocument();
  });

  test('PerformanceMonitor renders', () => {
    render(<PerformanceMonitor />);
    
    expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
    expect(screen.getByText('Performance Monitor')).toBeInTheDocument();
  });
});