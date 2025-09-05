import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactFormdynamic from '../components/ContactForm.dynamic';

describe('ContactFormdynamic', () => {
  test('renders without crashing', () => {
    render(<ContactFormdynamic />);
    expect(screen.getByTestId('contactform.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
