<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import EnhancedPerformanceMonitor from '../components/EnhancedPerformanceMonitor;

describe('EnhancedPerformanceMonitor', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedPerformanceMonitor from '../components/EnhancedPerformanceMonitor';
<<<<<<< HEAD
  describe('EnhancedPerformanceMonitor', () => {
=======

describe('EnhancedPerformanceMonitor', () => {
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<EnhancedPerformanceMonitor />);
    expect(
      screen.getByTestId('enhancedperformancemonitor)
    ).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<EnhancedPerformanceMonitor />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import EnhancedPerformanceMonitor   from '../components/EnhancedPerformanceMonitor''
  describe('EnhancedPerformanceMonitor', () => {'
  test('renders without crashing', () => {'
    render(<EnhancedPerformanceMonitor  />)
    expect(
      screen.getByTestId('enhancedperformancemonitor')'
    ).toBeInTheDocument()
  })

  test('displays correct content', () => {'
    render(<EnhancedPerformanceMonitor  />)
>>>>>>> main
    // Add specific content tests based on component
  });
<<<<<<< HEAD

  test(handles user interactions', () => {
=======
<<<<<<< HEAD
;
  test('handles user interactions', () => {
>>>>>>> main
    render(<EnhancedPerformanceMonitor />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<EnhancedPerformanceMonitor />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<EnhancedPerformanceMonitor  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<EnhancedPerformanceMonitor  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
