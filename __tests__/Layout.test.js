<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import Layout from '../components/Layout;

describe('Layout', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '../components/Layout';
<<<<<<< HEAD
  describe('Layout', () => {
=======

describe('Layout', () => {
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<Layout />);
    expect(screen.getByTestId('layout)).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<Layout />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import Layout   from '../components/Layout''
  describe('Layout', () => {'
  test('renders without crashing', () => {'
    render(<Layout  />)
    expect(screen.getByTestId('layout')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<Layout  />)
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
    render(<Layout />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<Layout />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<Layout  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<Layout  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
