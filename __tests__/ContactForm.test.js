import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../components/ContactForm';

describe('ContactForm', () => {
  test('renders without crashing', () => {
    render(<ContactForm />);
    expect(screen.getByTestId('contactform')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<ContactForm />);
  });

  test('handles user interactions', () => {
    render(<ContactForm />);
  });

  test('applies correct styling', () => {
    render(<ContactForm />);
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
