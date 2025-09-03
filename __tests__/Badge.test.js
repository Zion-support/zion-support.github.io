<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import Badge from '../components/Badge;

describe('Badge', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from '../components/Badge';
<<<<<<< HEAD
  describe('Badge', () => {
=======

describe('Badge', () => {
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<Badge />);
    expect(screen.getByTestId('badge)).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<Badge />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import Badge   from '../components/Badge''
  describe('Badge', () => {'
  test('renders without crashing', () => {'
    render(<Badge  />)
    expect(screen.getByTestId('badge')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<Badge  />)
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
    render(<Badge />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<Badge />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<Badge  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<Badge  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
