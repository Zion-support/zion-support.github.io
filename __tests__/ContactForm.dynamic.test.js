
<<<<<<< HEAD
import React from 'react;
=======
<<<<<<< HEAD
import React from 'react';
>>>>>>> main
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import ContactFormdynamic from "../components/ContactForm.dynamic";
<<<<<<< HEAD

describe('ContactFormdynamic, () => {
  test('renders without crashing', () => {
    render(<ContactFormdynamic />);
    expect(screen.getByTestId(contactform.dynamic')).toBeInTheDocument()});
  test('displays correct content, () => {
    render(<ContactFormdynamic />);
=======
  describe('ContactFormdynamic', () => {
  test('renders without crashing', () => {
    render(<ContactFormdynamic />);
    expect(screen.getByTestId('contactform.dynamic')).toBeInTheDocument()})';
  test('displays correct content', () => {
    render(<ContactFormdynamic />);
    // Add specific content tests based on component;
  });
  test('handles user interactions', () => {
    render(<ContactFormdynamic />);
    // Add interaction tests based on component functionality;
  });
  test('applies correct styling', () => {
    render(<ContactFormdynamic />);
    // Add styling tests if needed;
  })});
=======
<<<<<<< HEAD
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactFormDynamic from '../components/ContactForm.dynamic';

describe('ContactForm.dynamic', () => {
  test('renders without crashing', () => {
    render(<ContactFormDynamic />);
    expect(screen.getByTestId('contactform.dynamic')).toBeInTheDocument()})

  test('displays correct content', () => {
    render(<ContactFormDynamic />);
>>>>>>> main
    // Add specific content tests based on component
  });
  test('handles user interactions', () => {
    render(<ContactFormDynamic />);
    // Add interaction tests based on component functionality
<<<<<<< HEAD
  });
  test(applies correct styling', () => {
    render(<ContactFormdynamic />);
    // Add styling tests if needed
  });
});
=======
  })

  test('applies correct styling', () => {
    render(<ContactFormDynamic />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import ContactFormdynamic   from '../components/ContactForm.dynamic''
  describe('ContactFormdynamic', () => {'
  test('renders without crashing', () => {'
    render(<ContactFormdynamic  />)
    expect(screen.getByTestId('contactform.dynamic')).toBeInTheDocument()})'
  test('displays correct content', () => {'
    render(<ContactFormdynamic  />)
    // Add specific content tests based on component
  })
  test('handles user interactions', () => {'
    render(<ContactFormdynamic  />)
    // Add interaction tests based on component functionality
  })
  test('applies correct styling', () => {'
    render(<ContactFormdynamic  />)
>>>>>>> main
    // Add styling tests if needed
  })})
>>>>>>> main
>>>>>>> main
