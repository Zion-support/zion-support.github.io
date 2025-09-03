<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import Header from '../components/Header;

describe('Header', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';
<<<<<<< HEAD
'
describe('Header', () => {'
=======
<<<<<<< HEAD
  describe('Header', () => {
=======

describe('Header', () => {
>>>>>>> main
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<Header />);
    expect(screen.getByTestId('header)).toBeInTheDocument();
  });
<<<<<<< HEAD
'
=======
<<<<<<< HEAD
;
=======

>>>>>>> main
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
'
=======
<<<<<<< HEAD

  test(handles user interactions', () => {
=======
<<<<<<< HEAD
;
>>>>>>> main
  test('handles user interactions', () => {
>>>>>>> main
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
<<<<<<< HEAD
'
  test('applies correct styling', () => {
    render(<Header />);
=======

  test('applies correct styling', () => {'
    render(<Header  />)
>>>>>>> main
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
<<<<<<< HEAD
'
=======
=======
  })
})
>>>>>>> main
>>>>>>> main
