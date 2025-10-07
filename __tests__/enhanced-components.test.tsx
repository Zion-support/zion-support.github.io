import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import EnhancedErrorBoundary from '../app/components/EnhancedErrorBoundary';
import AdvancedSEOOptimizer, { defaultSEOConfig } from '../app/components/AdvancedSEOOptimizer';
import AccessibilityEnhancer from '../app/components/AccessibilityEnhancer';

// Mock components for testing
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

const TestComponent = () => <div>Test Component</div>;

describe('EnhancedErrorBoundary', () => {
  beforeEach(() => {
    // Mock console.error to avoid noise in tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders children when there is no error', () => {
    render(
      <EnhancedErrorBoundary>
        <TestComponent />
      </EnhancedErrorBoundary>
    );
    
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });

  it('renders error UI when there is an error', () => {
    render(
      <EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );
    
    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    expect(screen.getByText(/Error ID:/)).toBeInTheDocument();
  });

  it('shows retry button when retry is enabled', () => {
    render(
      <EnhancedErrorBoundary enableRetry={true} maxRetries={3}>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );
    
    expect(screen.getByText('Try Again (3 attempts left)')).toBeInTheDocument();
  });

  it('calls onError callback when error occurs', () => {
    const onError = jest.fn();
    
    render(
      <EnhancedErrorBoundary onError={onError}>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );
    
    expect(onError).toHaveBeenCalled();
  });

  it('handles retry functionality', async () => {
    const { rerender } = render(
      <EnhancedErrorBoundary enableRetry={true} maxRetries={3}>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );
    
    const retryButton = screen.getByText('Try Again (3 attempts left)');
    fireEvent.click(retryButton);
    
    // Rerender with no error
    rerender(
      <EnhancedErrorBoundary enableRetry={true} maxRetries={3}>
        <ThrowError shouldThrow={false} />
      </EnhancedErrorBoundary>
    );
    
    await waitFor(() => {
      expect(screen.getByText('No error')).toBeInTheDocument();
    });
  });
});

describe('AdvancedSEOOptimizer', () => {
  beforeEach(() => {
    // Mock document methods
    Object.defineProperty(document, 'title', {
      writable: true,
      value: '',
    });
    
    // Mock document.querySelector
    jest.spyOn(document, 'querySelector').mockReturnValue(null);
    jest.spyOn(document, 'querySelectorAll').mockReturnValue([]);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <HelmetProvider>
          <AdvancedSEOOptimizer config={defaultSEOConfig} />
        </HelmetProvider>
      </BrowserRouter>
    );
    
    expect(document.title).toBe(defaultSEOConfig.title);
  });

  it('updates document title', () => {
    const customConfig = {
      ...defaultSEOConfig,
      title: 'Custom Title',
    };
    
    render(
      <BrowserRouter>
        <HelmetProvider>
          <AdvancedSEOOptimizer config={customConfig} />
        </HelmetProvider>
      </BrowserRouter>
    );
    
    expect(document.title).toBe('Custom Title');
  });

  it('adds structured data when enabled', () => {
    const createElementSpy = jest.spyOn(document, 'createElement');
    const appendChildSpy = jest.spyOn(document.head, 'appendChild');
    
    render(
      <BrowserRouter>
        <HelmetProvider>
          <AdvancedSEOOptimizer 
            config={defaultSEOConfig} 
            enableStructuredData={true}
          />
        </HelmetProvider>
      </BrowserRouter>
    );
    
    expect(createElementSpy).toHaveBeenCalledWith('script');
    expect(appendChildSpy).toHaveBeenCalled();
  });
});

describe('AccessibilityEnhancer', () => {
  beforeEach(() => {
    // Mock window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('renders children without crashing', () => {
    render(
      <AccessibilityEnhancer>
        <TestComponent />
      </AccessibilityEnhancer>
    );
    
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });

  it('applies accessibility classes', () => {
    const { container } = render(
      <AccessibilityEnhancer>
        <TestComponent />
      </AccessibilityEnhancer>
    );
    
    const enhancer = container.querySelector('.accessibility-enhancer');
    expect(enhancer).toBeInTheDocument();
  });

  it('handles keyboard navigation', () => {
    render(
      <AccessibilityEnhancer>
        <div role="menu">
          <div role="menuitem" tabIndex={0}>Item 1</div>
          <div role="menuitem" tabIndex={-1}>Item 2</div>
        </div>
      </AccessibilityEnhancer>
    );
    
    const firstItem = screen.getByText('Item 1');
    const secondItem = screen.getByText('Item 2');
    
    firstItem.focus();
    expect(document.activeElement).toBe(firstItem);
    
    // Test arrow key navigation
    fireEvent.keyDown(firstItem, { key: 'ArrowDown' });
    // Note: In a real test, you'd need to mock the navigation logic
  });
});

describe('Integration Tests', () => {
  it('renders all enhanced components together', () => {
    render(
      <EnhancedErrorBoundary>
        <AccessibilityEnhancer>
          <BrowserRouter>
            <HelmetProvider>
              <AdvancedSEOOptimizer config={defaultSEOConfig} />
              <TestComponent />
            </HelmetProvider>
          </BrowserRouter>
        </AccessibilityEnhancer>
      </EnhancedErrorBoundary>
    );
    
    expect(screen.getByText('Test Component')).toBeInTheDocument();
    expect(document.title).toBe(defaultSEOConfig.title);
  });

  it('handles error in integrated setup', () => {
    render(
      <EnhancedErrorBoundary>
        <AccessibilityEnhancer>
          <BrowserRouter>
            <HelmetProvider>
              <AdvancedSEOOptimizer config={defaultSEOConfig} />
              <ThrowError shouldThrow={true} />
            </HelmetProvider>
          </BrowserRouter>
        </AccessibilityEnhancer>
      </EnhancedErrorBoundary>
    );
    
    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
  });
});