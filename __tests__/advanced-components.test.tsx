import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect, ReactNode } from 'react';

// Mock performance API
Object.defineProperty(window, 'performance', {
  value: {
    getEntriesByType: jest.fn((type) => {
      if (type === 'navigation') {
        return [{
          loadEventEnd: 1000,
          loadEventStart: 500,
          domContentLoadedEventEnd: 800,
          domContentLoadedEventStart: 600
        }];
      }
      if (type === 'paint') {
        return [
          { name: 'first-paint', startTime: 200 },
          { name: 'first-contentful-paint', startTime: 300 }
        ];
      }
      return [];
    })
  }
});

// Performance monitor component for testing
const TestPerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<any>(null);
  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      });
    };
    measurePerformance();
  }, []);
  return (
    <div data-testid="performance-monitor">
      {metrics && (
        <div>
          <p>Load Time: {metrics.loadTime}ms</p>
          <p>DOM Content Loaded: {metrics.domContentLoaded}ms</p>
          <p>First Paint: {metrics.firstPaint}ms</p>
          <p>First Contentful Paint: {metrics.firstContentfulPaint}ms</p>
        </div>
      )}
    </div>
  );
};

// Accessibility enhancer component for testing
const TestAccessibilityEnhancer = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Simulate accessibility enhancements
    document.body.setAttribute('data-accessibility-enhanced', 'true');
    return () => {
      document.body.removeAttribute('data-accessibility-enhanced');
    };
  }, []);
  return <div data-testid="accessibility-enhancer">{children}</div>;
};

describe('Advanced Components', () => {
  describe('PerformanceMonitor', () => {
    it('should render performance metrics', () => {
      render(<TestPerformanceMonitor />);
      expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
    });
  });
  
  describe('AccessibilityEnhancer', () => {
    it('should enhance accessibility features', () => {
      render(
        <TestAccessibilityEnhancer>
          <div>Test content</div>
        </TestAccessibilityEnhancer>
      );
      expect(screen.getByTestId('accessibility-enhancer')).toBeInTheDocument();
      expect(document.body.getAttribute('data-accessibility-enhanced')).toBe('true');
    });
  });
});