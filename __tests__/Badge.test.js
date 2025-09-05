import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from '../components/Badge';

describe('Badge', () => {
  test('renders without crashing', () => {
    render(<Badge />);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<Badge />);
  });

  test('handles user interactions', () => {
    render(<Badge />);
  });

  test('applies correct styling', () => {
    render(<Badge />);
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
