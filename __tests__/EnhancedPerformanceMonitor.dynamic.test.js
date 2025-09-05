import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedPerformanceMonitordynamic from '../components/EnhancedPerformanceMonitor.dynamic';

describe('EnhancedPerformanceMonitordynamic', () => {
  test('renders without crashing', () => {
    render(<EnhancedPerformanceMonitordynamic />);
    expect(screen.getByTestId('enhancedperformancemonitor.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
