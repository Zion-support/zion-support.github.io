import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import RealTimeMonitor from '../RealTimeMonitor';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

describe('RealTimeMonitor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders toggle button', () => {
    render(<RealTimeMonitor />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle real-time monitoring/i });
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveClass('bg-blue-600');
  });

  it('shows monitor dashboard when toggle button is clicked', async () => {
    render(<RealTimeMonitor />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle real-time monitoring/i });
    fireEvent.click(toggleButton);
    
    await waitFor(() => {
      expect(screen.getByText('Real-Time Monitor')).toBeInTheDocument();
    });
  });

  it('displays connection status', async () => {
    render(<RealTimeMonitor />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle real-time monitoring/i });
    fireEvent.click(toggleButton);
    
    await waitFor(() => {
      expect(screen.getByText('Connected')).toBeInTheDocument();
    });
  });

  it('shows system metrics', async () => {
    render(<RealTimeMonitor />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle real-time monitoring/i });
    fireEvent.click(toggleButton);
    
    await waitFor(() => {
      expect(screen.getByText('System Metrics')).toBeInTheDocument();
      expect(screen.getByText('CPU Usage')).toBeInTheDocument();
      expect(screen.getByText('Memory Usage')).toBeInTheDocument();
      expect(screen.getByText('Response Time')).toBeInTheDocument();
      expect(screen.getByText('Active Users')).toBeInTheDocument();
    });
  });

  it('shows recent alerts section', async () => {
    render(<RealTimeMonitor />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle real-time monitoring/i });
    fireEvent.click(toggleButton);
    
    await waitFor(() => {
      expect(screen.getByText('Recent Alerts')).toBeInTheDocument();
    });
  });

  it('updates metrics over time', async () => {
    render(<RealTimeMonitor />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle real-time monitoring/i });
    fireEvent.click(toggleButton);
    
    await waitFor(() => {
      expect(screen.getByText('System Metrics')).toBeInTheDocument();
    });
    
    // Fast-forward time to trigger metric updates
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    
    // Metrics should still be present (values may have changed)
    expect(screen.getByText('CPU Usage')).toBeInTheDocument();
  });

  it('hides dashboard when toggle button is clicked again', async () => {
    render(<RealTimeMonitor />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle real-time monitoring/i });
    
    // Show dashboard
    fireEvent.click(toggleButton);
    await waitFor(() => {
      expect(screen.getByText('Real-Time Monitor')).toBeInTheDocument();
    });
    
    // Hide dashboard
    fireEvent.click(toggleButton);
    await waitFor(() => {
      expect(screen.queryByText('Real-Time Monitor')).not.toBeInTheDocument();
    });
  });

  it('has proper accessibility attributes', () => {
    render(<RealTimeMonitor />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle real-time monitoring/i });
    expect(toggleButton).toHaveAttribute('aria-label', 'Toggle real-time monitoring');
  });

  it('displays no alerts message when no alerts are present', async () => {
    render(<RealTimeMonitor />);
    
    const toggleButton = screen.getByRole('button', { name: /toggle real-time monitoring/i });
    fireEvent.click(toggleButton);
    
    await waitFor(() => {
      expect(screen.getByText('No alerts')).toBeInTheDocument();
    });
  });

  it('shows connection indicator', () => {
    render(<RealTimeMonitor />);
    
    // Connection indicator should be visible on toggle button
    const connectionIndicator = screen.getByRole('button').querySelector('.bg-green-400');
    expect(connectionIndicator).toBeInTheDocument();
  });
});