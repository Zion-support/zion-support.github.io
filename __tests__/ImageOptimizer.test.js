<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import ImageOptimizer from '../components/ImageOptimizer;

describe('ImageOptimizer', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageOptimizer from '../components/ImageOptimizer';
<<<<<<< HEAD
  describe('ImageOptimizer', () => {
=======

describe('ImageOptimizer', () => {
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<ImageOptimizer />);
    expect(screen.getByTestId('imageoptimizer)).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<ImageOptimizer />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import ImageOptimizer   from '../components/ImageOptimizer''
  describe('ImageOptimizer', () => {'
  test('renders without crashing', () => {'
    render(<ImageOptimizer  />)
    expect(screen.getByTestId('imageoptimizer')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<ImageOptimizer  />)
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
    render(<ImageOptimizer />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<ImageOptimizer />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<ImageOptimizer  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<ImageOptimizer  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
