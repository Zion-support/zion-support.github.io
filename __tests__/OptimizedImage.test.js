<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OptimizedImage from '../components/OptimizedImage';
<<<<<<< HEAD
  describe('OptimizedImage', () => {
=======

describe('OptimizedImage', () => {
>>>>>>> main
  test('renders without crashing', () => {
    render(<OptimizedImage />);
    expect(screen.getByTestId('optimizedimage')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<OptimizedImage />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import OptimizedImage   from '../components/OptimizedImage''
  describe('OptimizedImage', () => {'
  test('renders without crashing', () => {'
    render(<OptimizedImage  />)
    expect(screen.getByTestId('optimizedimage')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<OptimizedImage  />)
>>>>>>> main
    // Add specific content tests based on component
  });
<<<<<<< HEAD
;
  test('handles user interactions', () => {
    render(<OptimizedImage />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<OptimizedImage />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<OptimizedImage  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<OptimizedImage  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
