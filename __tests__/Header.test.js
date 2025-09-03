<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';
<<<<<<< HEAD
  describe('Header', () => {
=======

describe('Header', () => {
>>>>>>> main
  test('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<Header />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import Header   from '../components/Header''
  describe('Header', () => {'
  test('renders without crashing', () => {'
    render(<Header  />)
    expect(screen.getByTestId('header')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<Header  />)
>>>>>>> main
    // Add specific content tests based on component
  });
<<<<<<< HEAD
;
  test('handles user interactions', () => {
    render(<Header />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<Header />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<Header  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<Header  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
