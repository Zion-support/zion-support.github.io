import { render } from '@testing-library/react';
import { describe, test, expect, jest } from '@jest/globals';
import { usePerformanceMonitor } from '../hooks/usePerformanceMonitor';

// Mock web-vitals
jest.mock('web-vitals', () => ({/* content */}
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn()
}));

const TestComponent = () => {/* content */}
  usePerformanceMonitor();
  return <div>Test Component</div>;
};

describe('Performance Tests', () => {/* content */}
  test('performance monitor hook renders without errors', () => {/* content */}
    expect(() => render(<TestComponent />)).not.toThrow();
  });
});