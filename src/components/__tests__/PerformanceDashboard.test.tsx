import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PerformanceDashboard from '../PerformanceDashboard';

// Mock the performance utilities
const mockPerformanceOptimizer = {
  getMetrics: jest.fn().mockResolvedValue({
    lcp: 1200,
    fid: 50,
    cls: 0.1,
    overallScore: 85,
    suggestions: [
      { description: 'Optimize images', impact: 'high' },
      { description: 'Minify CSS', impact: 'medium' }
    ]
  }),
  optimize: jest.fn().mockResolvedValue(true)
};

jest.mock('../../utils/performanceOptimizer', () => ({
  performanceOptimizer: mockPerformanceOptimizer
}));

describe('PerformanceDashboard', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders when visible', () => {
    render(<PerformanceDashboard isVisible={true} onClose={mockOnClose} />);
    
    expect(screen.getByText('Performance Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Core Web Vitals')).toBeInTheDocument();
  });

  it('does not render when not visible', () => {
    render(<PerformanceDashboard isVisible={false} onClose={mockOnClose} />);
    
    expect(screen.queryByText('Performance Dashboard')).not.toBeInTheDocument();
  });

  it('displays performance metrics when loaded', async () => {
    render(<PerformanceDashboard isVisible={true} onClose={mockOnClose} />);
    
    await waitFor(() => {
      expect(screen.getByText('85')).toBeInTheDocument();
      expect(screen.getByText('1200ms')).toBeInTheDocument();
      expect(screen.getByText('50ms')).toBeInTheDocument();
    });
  });

  it('shows optimization suggestions', async () => {
    render(<PerformanceDashboard isVisible={true} onClose={mockOnClose} />);
    
    await waitFor(() => {
      expect(screen.getByText('Optimize images')).toBeInTheDocument();
      expect(screen.getByText('Minify CSS')).toBeInTheDocument();
    });
  });

  it('calls onClose when close button is clicked', () => {
    render(<PerformanceDashboard isVisible={true} onClose={mockOnClose} />);
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('handles optimize button click', async () => {
    render(<PerformanceDashboard isVisible={true} onClose={mockOnClose} />);
    
    await waitFor(() => {
      const optimizeButton = screen.getByText('Optimize Performance');
      fireEvent.click(optimizeButton);
    });
    
    expect(mockPerformanceOptimizer.optimize).toHaveBeenCalled();
  });

  it('displays loading state initially', () => {
    render(<PerformanceDashboard isVisible={true} onClose={mockOnClose} />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('handles error state gracefully', async () => {
    mockPerformanceOptimizer.getMetrics.mockRejectedValueOnce(new Error('Failed to load'));
    
    render(<PerformanceDashboard isVisible={true} onClose={mockOnClose} />);
    
    await waitFor(() => {
      expect(screen.getByText('Error loading performance data')).toBeInTheDocument();
    });
  });
});