<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';
<<<<<<< HEAD
  describe('Button', () => {
=======

describe('Button', () => {
>>>>>>> main
  test('renders without crashing', () => {
    render(<Button />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<Button />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import Button   from '../components/Button''
  describe('Button', () => {'
  test('renders without crashing', () => {'
    render(<Button  />)
    expect(screen.getByTestId('button')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<Button  />)
>>>>>>> main
    // Add specific content tests based on component
  });
<<<<<<< HEAD
;
  test('handles user interactions', () => {
    render(<Button />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<Button />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<Button  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<Button  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
