/**
 * Tests for the new enhancement utilities
 */

import performanceEnhancer from '../utils/performanceEnhancements';
import securityEnhancer from '../utils/securityEnhancements';
import accessibilityEnhancer from '../utils/accessibilityEnhancements';

// Mock DOM APIs
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

Object.defineProperty(window, 'crypto', {
  value: {
    getRandomValues: jest.fn().mockImplementation(arr => {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 256);
      }
      return arr;
    }),
  },
});

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock PerformanceObserver
global.PerformanceObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  supportedEntryTypes: [],
}));

describe('Performance Enhancements', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('should initialize performance enhancer', () => {
    expect(performanceEnhancer).toBeDefined();
  });

  test('should preload resources', () => {
    const link = document.createElement('link');
    document.head.appendChild = jest.fn();
    
    performanceEnhancer.preloadResource('/test.js', 'script');
    
    expect(document.head.appendChild).toHaveBeenCalled();
  });

  test('should prefetch resources', () => {
    document.head.appendChild = jest.fn();
    
    performanceEnhancer.prefetchResource('/test.css');
    
    expect(document.head.appendChild).toHaveBeenCalled();
  });

  test('should cleanup properly', () => {
    expect(() => performanceEnhancer.cleanup()).not.toThrow();
  });
});

describe('Security Enhancements', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.head.innerHTML = '';
  });

  test('should initialize security enhancer', () => {
    expect(securityEnhancer).toBeDefined();
  });

  test('should generate security report', () => {
    const report = securityEnhancer.generateSecurityReport();
    
    expect(report).toHaveProperty('score');
    expect(report).toHaveProperty('headers');
    expect(report).toHaveProperty('csp');
    expect(report).toHaveProperty('csrf');
    expect(report).toHaveProperty('rateLimiting');
    expect(report).toHaveProperty('timestamp');
  });

  test('should get security score', () => {
    const score = securityEnhancer.getSecurityScore();
    
    expect(typeof score).toBe('number');
    expect(score).toBeGreaterThanOrEqual(0);
    expect(score).toBeLessThanOrEqual(100);
  });

  test('should cleanup properly', () => {
    expect(() => securityEnhancer.cleanup()).not.toThrow();
  });
});

describe('Accessibility Enhancements', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.head.innerHTML = '';
  });

  test('should initialize accessibility enhancer', () => {
    expect(accessibilityEnhancer).toBeDefined();
  });

  test('should get accessibility metrics', () => {
    const metrics = accessibilityEnhancer.getAccessibilityMetrics();
    
    expect(metrics).toHaveProperty('keyboardNavigable');
    expect(metrics).toHaveProperty('screenReaderCompatible');
    expect(metrics).toHaveProperty('colorContrast');
    expect(metrics).toHaveProperty('focusableElements');
    expect(metrics).toHaveProperty('ariaLabels');
    expect(metrics).toHaveProperty('skipLinks');
  });

  test('should announce messages', () => {
    // Mock aria-live region
    const mockAriaLiveRegion = {
      setAttribute: jest.fn(),
      textContent: '',
    };
    
    // Create a mock document with aria-live region
    document.createElement = jest.fn().mockImplementation((tagName) => {
      if (tagName === 'div') {
        return mockAriaLiveRegion;
      }
      return {};
    });
    
    document.body.appendChild = jest.fn();
    
    expect(() => accessibilityEnhancer.announce('Test message')).not.toThrow();
  });

  test('should cleanup properly', () => {
    expect(() => accessibilityEnhancer.cleanup()).not.toThrow();
  });
});

describe('Integration Tests', () => {
  test('all enhancers should work together', () => {
    // Test that all enhancers can be initialized without conflicts
    expect(() => {
      const perfReport = performanceEnhancer;
      const securityReport = securityEnhancer.generateSecurityReport();
      const accessibilityMetrics = accessibilityEnhancer.getAccessibilityMetrics();
      
      expect(perfReport).toBeDefined();
      expect(securityReport).toBeDefined();
      expect(accessibilityMetrics).toBeDefined();
    }).not.toThrow();
  });

  test('should handle cleanup of all enhancers', () => {
    expect(() => {
      performanceEnhancer.cleanup();
      securityEnhancer.cleanup();
      accessibilityEnhancer.cleanup();
    }).not.toThrow();
  });
});