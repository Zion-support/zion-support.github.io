<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../components/Navigation';
<<<<<<< HEAD
  describe('Navigation', () => {
=======

describe('Navigation', () => {
>>>>>>> main
  test('renders without crashing', () => {
    render(<Navigation />);
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<Navigation />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import Navigation   from '../components/Navigation''
  describe('Navigation', () => {'
  test('renders without crashing', () => {'
    render(<Navigation  />)
    expect(screen.getByTestId('navigation')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<Navigation  />)
>>>>>>> main
    // Add specific content tests based on component
  });
<<<<<<< HEAD
;
  test('handles user interactions', () => {
    render(<Navigation />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<Navigation />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<Navigation  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<Navigation  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
