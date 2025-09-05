import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactFormEnhanceddynamic from '../components/ContactFormEnhanced.dynamic';

describe('ContactFormEnhanceddynamic', () => {
  test('renders without crashing', () => {
    render(<ContactFormEnhanceddynamic />);
    expect(screen.getByTestId('contactformenhanced.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
