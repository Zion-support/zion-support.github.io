<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import PerformanceOptimizer from '../components/PerformanceOptimizer;

describe('PerformanceOptimizer', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
<<<<<<< HEAD
  describe('PerformanceOptimizer', () => {
=======

describe('PerformanceOptimizer', () => {
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<PerformanceOptimizer />);
    expect(screen.getByTestId('performanceoptimizer)).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<PerformanceOptimizer />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import PerformanceOptimizer   from '../components/PerformanceOptimizer''
  describe('PerformanceOptimizer', () => {'
  test('renders without crashing', () => {'
    render(<PerformanceOptimizer  />)
    expect(screen.getByTestId('performanceoptimizer')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<PerformanceOptimizer  />)
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
    render(<PerformanceOptimizer />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<PerformanceOptimizer />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<PerformanceOptimizer  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<PerformanceOptimizer  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
