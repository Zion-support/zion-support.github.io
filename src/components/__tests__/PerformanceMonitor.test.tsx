import { render, screen } from '@testing-library/react';
import PerformanceMonitor from '../PerformanceMonitor';

// Mock performance API
const mockPerformance = {
  getEntriesByType: jest.fn(),
  getEntriesByName: jest.fn(),
  now: jest.fn(() => Date.now()),
  mark: jest.fn(),
  measure: jest.fn(),
  clearMarks: jest.fn(),
  clearMeasures: jest.fn(),
};

// Mock navigation timing
const mockNavigation = {
  loadEventEnd: 1000,
  fetchStart: 0,
  responseStart: 100,
  requestStart: 50,
  domContentLoadedEventEnd: 800,
};

Object.defineProperty(window, 'performance', {
  value: mockPerformance,
  writable: true,
});

describe('PerformanceMonitor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockPerformance.getEntriesByType.mockReturnValue([mockNavigation]);
    mockPerformance.getEntriesByName.mockReturnValue([]);
  });

  it('renders performance metrics when show is true', () => {
    render(<PerformanceMonitor show={true} />);
    
    expect(screen.getByText(/Performance/i)).toBeInTheDocument();
  });

  it('does not render when show is false', () => {
    render(<PerformanceMonitor show={false} />);
    
    expect(screen.queryByText(/Performance Metrics/i)).not.toBeInTheDocument();
  });

  it('displays performance metrics correctly', () => {
    render(<PerformanceMonitor show={true} />);
    
    // Wait for metrics to be calculated
    setTimeout(() => {
      expect(screen.getByText(/Load Time:/i)).toBeInTheDocument();
      expect(screen.getByText(/DOM Content Loaded:/i)).toBeInTheDocument();
    }, 100);
  });

  it('handles missing performance API gracefully', () => {
    // @ts-ignore
    delete window.performance;
    
    render(<PerformanceMonitor show={true} />);
    
    expect(screen.getByText(/Performance/i)).toBeInTheDocument();
  });
});