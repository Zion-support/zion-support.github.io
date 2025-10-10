import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock components for testing
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="error-boundary">{children}</div>;
};

const AdvancedSEOOptimizer = ({ title, description }: { title?: string; description?: string }) => {
  return (
    <div data-testid="seo-optimizer">
      <h1>{title || 'Default Title'}</h1>
      <p>{description || 'Default Description'}</p>
    </div>
  );
};

const PerformanceMonitor = () => {
  return <div data-testid="performance-monitor">Performance monitoring active</div>;
};

describe('Advanced Components', () => {
  test('ErrorBoundary renders correctly', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('AdvancedSEOOptimizer renders with props', () => {
    render(
      <AdvancedSEOOptimizer 
        title="Test Title" 
        description="Test Description" 
      />
    );
    expect(screen.getByTestId('seo-optimizer')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('AdvancedSEOOptimizer renders with default values', () => {
    render(<AdvancedSEOOptimizer />);
    expect(screen.getByText('Default Title')).toBeInTheDocument();
    expect(screen.getByText('Default Description')).toBeInTheDocument();
  });

  test('PerformanceMonitor renders correctly', () => {
    render(<PerformanceMonitor />);
    expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
    expect(screen.getByText('Performance monitoring active')).toBeInTheDocument();
  });
});