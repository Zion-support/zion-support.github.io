import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedPerformanceMonitordynamic from '../components/EnhancedPerformanceMonitor.dynamic';

describe('EnhancedPerformanceMonitordynamic', () => {
  test('renders without crashing', () => {
    render(<EnhancedPerformanceMonitordynamic />);
    expect(screen.getByTestId('enhancedperformancemonitor.dynamic')).toBeInTheDocument();
  });
});
});
