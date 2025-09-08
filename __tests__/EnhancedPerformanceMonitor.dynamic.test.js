import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('EnhancedPerformanceMonitor.dynamic.test', () => {
  test('renders without crashing', () => {
    render(<EnhancedPerformanceMonitor />);
    expect(screen.getByTestId('enhancedperformancemonitor')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
