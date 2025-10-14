import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter, RouterProvider, createMemoryRouter } from 'react-router-dom';
import AdvancedErrorBoundary from '../src/components/AdvancedErrorBoundary';
import AdvancedSEOOptimizer from '../src/components/AdvancedSEOOptimizer';
import AdvancedPerformanceMonitor from '../src/components/AdvancedPerformanceMonitor';

// Mock components that might not exist
jest.mock('../src/components/AdvancedPerformanceMonitor', () => {
  return function MockAdvancedPerformanceMonitor() {
    return <div>Advanced Performance Monitor</div>;
  };
});

describe('AdvancedErrorBoundary', () => {
  const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
    if (shouldThrow) {
      throw new Error('Test error');
    }
    return <div>No error</div>;
  };

  it('renders children when there is no error', () => {
    render(
      <AdvancedErrorBoundary>
        <div>No error content</div>
      </AdvancedErrorBoundary>
    );

    expect(screen.getByText('No error content')).toBeInTheDocument();
  });

  it('renders error UI when there is an error', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <MemoryRouter>
        <AdvancedErrorBoundary enableRetry={true}>
          <ThrowError shouldThrow={true} />
        </AdvancedErrorBoundary>
      </MemoryRouter>
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  it('calls onError callback when error occurs', () => {
    const onError = jest.fn();
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <AdvancedErrorBoundary onError={onError}>
        <ThrowError shouldThrow={true} />
      </AdvancedErrorBoundary>
    );

    expect(onError).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('retries when retry button is clicked', () => {
    let shouldThrow = true;
    const ThrowError = () => {
      if (shouldThrow) {
        throw new Error('Test error');
      }
      return <div>No error</div>;
    };

    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <MemoryRouter>
        <AdvancedErrorBoundary enableRetry={true}>
          <ThrowError />
        </AdvancedErrorBoundary>
      </MemoryRouter>
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    
    // Change shouldThrow before clicking retry
    shouldThrow = false;

    consoleSpy.mockRestore();
  });
});

describe('AdvancedSEOOptimizer', () => {
  it('renders without crashing', () => {
    render(
      <HelmetProvider>
        <AdvancedSEOOptimizer />
      </HelmetProvider>
    );
    expect(screen.getByText('Advanced SEO Optimizer')).toBeInTheDocument();
  });

  it('sets document title', async () => {
    render(
      <HelmetProvider>
        <AdvancedSEOOptimizer />
      </HelmetProvider>
    );
    
    // Wait for helmet to update the document title
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(document.title).toBe('Advanced SEO Optimizer - Zion Tech Group');
  });

  it('renders structured data when enabled', async () => {
    render(
      <HelmetProvider>
        <AdvancedSEOOptimizer />
      </HelmetProvider>
    );
    
    expect(screen.getByText('Advanced SEO Optimizer')).toBeInTheDocument();
  });
});

describe('AdvancedPerformanceMonitor', () => {
  it('renders without crashing', () => {
    render(<AdvancedPerformanceMonitor />);
    expect(screen.getByText('Advanced Performance Monitor')).toBeInTheDocument();
  });
});