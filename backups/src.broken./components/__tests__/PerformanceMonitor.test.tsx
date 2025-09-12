import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PerformanceMonitor from '../PerformanceMonitor';

// Mock performance API
const mockPerformance = {
  getEntriesByType: jest.fn(),
  memory: {
    usedJSHeapSize: 1024 * 1024 * 10 // 10MB
  }
};

const mockNavigation = {
  loadEventEnd: 1000,
  loadEventStart: 500
};

const mockPaint = [
  { name: 'first-contentful-paint', startTime: 200 }
];

// Mock navigator.connection
const mockConnection = {
  effectiveType: '4g'
};

Object.defineProperty(global, 'performance', {
  value: mockPerformance,
  writable: true
});

Object.defineProperty(global.navigator, 'connection', {
  value: mockConnection,
  writable: true
});

describe('PerformanceMonitor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockPerformance.getEntriesByType.mockImplementation((type) => {
      if (type === 'navigation') return [mockNavigation];
      if (type === 'paint') return mockPaint;
      return [];
    });
  });

  it('does not render in production', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';
    
    render(<PerformanceMonitor />);
    expect(screen.queryByText('Performance')).not.toBeInTheDocument();
    
    process.env.NODE_ENV = originalEnv;
  });

  it('renders performance metrics in development', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    
    render(<PerformanceMonitor />);
    
    // Simulate page load
    fireEvent.load(window);
    
    expect(screen.getByText('Performance')).toBeInTheDocument();
    expect(screen.getByText(/Load:/)).toBeInTheDocument();
    expect(screen.getByText(/Render:/)).toBeInTheDocument();
    expect(screen.getByText(/Memory:/)).toBeInTheDocument();
    expect(screen.getByText(/Connection:/)).toBeInTheDocument();
    
    process.env.NODE_ENV = originalEnv;
  });

  it('toggles visibility with Ctrl+Shift+P', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    
    render(<PerformanceMonitor />);
    
    // Initially not visible
    expect(screen.queryByText('Performance')).not.toBeInTheDocument();
    
    // Simulate page load to make it visible
    fireEvent.load(window);
    expect(screen.getByText('Performance')).toBeInTheDocument();
    
    // Toggle with keyboard shortcut
    fireEvent.keyDown(window, { key: 'P', ctrlKey: true, shiftKey: true });
    expect(screen.queryByText('Performance')).not.toBeInTheDocument();
    
    process.env.NODE_ENV = originalEnv;
  });

  it('can be closed with close button', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    
    render(<PerformanceMonitor />);
    
    // Simulate page load
    fireEvent.load(window);
    expect(screen.getByText('Performance')).toBeInTheDocument();
    
    // Click close button
    fireEvent.click(screen.getByText('×'));
    expect(screen.queryByText('Performance')).not.toBeInTheDocument();
    
    process.env.NODE_ENV = originalEnv;
  });

  it('detects slow connection', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    
    // Mock slow connection
    Object.defineProperty(global.navigator, 'connection', {
      value: { effectiveType: '2g' },
      writable: true
    });
    
    render(<PerformanceMonitor />);
    fireEvent.load(window);
    
    expect(screen.getByText('Connection: Slow')).toBeInTheDocument();
    expect(screen.getByText('Connection: Slow')).toHaveClass('text-yellow-400');
    
    process.env.NODE_ENV = originalEnv;
  });
});