<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import ContactForm from '../components/ContactForm;

describe('ContactForm', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../components/ContactForm';
<<<<<<< HEAD
'
describe('ContactForm', () => {'
=======
<<<<<<< HEAD
  describe('ContactForm', () => {
=======

describe('ContactForm', () => {
>>>>>>> main
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<ContactForm />);
    expect(screen.getByTestId('contactform)).toBeInTheDocument();
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
    render(<ContactForm />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import ContactForm   from '../components/ContactForm''
  describe('ContactForm', () => {'
  test('renders without crashing', () => {'
    render(<ContactForm  />)
    expect(screen.getByTestId('contactform')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<ContactForm  />)
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
    render(<ContactForm />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<ContactForm />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<ContactForm  />)
    // Add interaction tests based on component functionality
  });
<<<<<<< HEAD
'
  test('applies correct styling', () => {
    render(<ContactForm />);
=======

  test('applies correct styling', () => {'
    render(<ContactForm  />)
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
