<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import PerformanceEnhancer from '../components/PerformanceEnhancer;

describe('PerformanceEnhancer', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PerformanceEnhancer from '../components/PerformanceEnhancer';
<<<<<<< HEAD
  describe('PerformanceEnhancer', () => {
=======

describe('PerformanceEnhancer', () => {
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<PerformanceEnhancer />);
    expect(screen.getByTestId('performanceenhancer)).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<PerformanceEnhancer />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import PerformanceEnhancer   from '../components/PerformanceEnhancer''
  describe('PerformanceEnhancer', () => {'
  test('renders without crashing', () => {'
    render(<PerformanceEnhancer  />)
    expect(screen.getByTestId('performanceenhancer')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<PerformanceEnhancer  />)
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
    render(<PerformanceEnhancer />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<PerformanceEnhancer />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<PerformanceEnhancer  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<PerformanceEnhancer  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
