<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../components/ContactForm';
<<<<<<< HEAD
  describe('ContactForm', () => {
=======

describe('ContactForm', () => {
>>>>>>> main
  test('renders without crashing', () => {
    render(<ContactForm />);
    expect(screen.getByTestId('contactform')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

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
;
  test('handles user interactions', () => {
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

  test('applies correct styling', () => {'
    render(<ContactForm  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
