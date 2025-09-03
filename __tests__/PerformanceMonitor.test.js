<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import PerformanceMonitor from '../components/PerformanceMonitor;

describe('PerformanceMonitor', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PerformanceMonitor from '../components/PerformanceMonitor';
<<<<<<< HEAD
  describe('PerformanceMonitor', () => {
=======

describe('PerformanceMonitor', () => {
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<PerformanceMonitor />);
    expect(screen.getByTestId('performancemonitor)).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<PerformanceMonitor />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import PerformanceMonitor   from '../components/PerformanceMonitor''
  describe('PerformanceMonitor', () => {'
  test('renders without crashing', () => {'
    render(<PerformanceMonitor  />)
    expect(screen.getByTestId('performancemonitor')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<PerformanceMonitor  />)
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
    render(<PerformanceMonitor />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<PerformanceMonitor />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<PerformanceMonitor  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<PerformanceMonitor  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
