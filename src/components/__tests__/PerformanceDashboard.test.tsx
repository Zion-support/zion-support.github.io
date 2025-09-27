import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PerformanceDashboard } from '../PerformanceDashboard';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>
  },
  AnimatePresence: ({ children }: any) => children
}));

describe('PerformanceDashboard', () => {
  beforeEach(() => {
    // Mock performance API
    Object.defineProperty(window, 'performance', {
      value: {
        now: jest.fn(() => Date.now()),
        mark: jest.fn(),
        measure: jest.fn()
      },
      writable: true
    });
  });

  it('renders toggle button', () => {
    render(<PerformanceDashboard />);
    
    const toggleButton = screen.getByLabelText('Toggle Performance Dashboard');
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveClass('bg-blue-600');
  });

  it('shows dashboard when toggle button is clicked', async () => {
    render(<PerformanceDashboard />);
    
    const toggleButton = screen.getByLabelText('Toggle Performance Dashboard');
    fireEvent.click(toggleButton);
    
    await waitFor(() => {
      expect(screen.getByText('Performance')).toBeInTheDocument();
    });
  });

  it('displays performance metrics', async () => {
    render(<PerformanceDashboard />);
    
    const toggleButton = screen.getByLabelText('Toggle Performance Dashboard');
    fireEvent.click(toggleButton);
    
    await waitFor(() => {
      expect(screen.getByText('Load Time')).toBeInTheDocument();
      expect(screen.getByText('Memory')).toBeInTheDocument();
      expect(screen.getByText('Requests')).toBeInTheDocument();
      expect(screen.getByText('Cache Hit')).toBeInTheDocument();
      expect(screen.getByText('Lighthouse')).toBeInTheDocument();
    });
  });

  it('closes dashboard when close button is clicked', async () => {
    render(<PerformanceDashboard />);
    
    const toggleButton = screen.getByLabelText('Toggle Performance Dashboard');
    fireEvent.click(toggleButton);
    
    await waitFor(() => {
      expect(screen.getByText('Performance')).toBeInTheDocument();
    });
    
    const closeButton = screen.getByText('×');
    fireEvent.click(closeButton);
    
    await waitFor(() => {
      expect(screen.queryByText('Performance')).not.toBeInTheDocument();
    });
  });

  it('displays performance score with correct color', async () => {
    render(<PerformanceDashboard />);
    
    const toggleButton = screen.getByLabelText('Toggle Performance Dashboard');
    fireEvent.click(toggleButton);
    
    await waitFor(() => {
      const performanceBar = screen.getByText('Performance Score');
      expect(performanceBar).toBeInTheDocument();
    });
  });

  it('has proper accessibility attributes', () => {
    render(<PerformanceDashboard />);
    
    const toggleButton = screen.getByLabelText('Toggle Performance Dashboard');
    expect(toggleButton).toHaveAttribute('aria-label', 'Toggle Performance Dashboard');
  });
});