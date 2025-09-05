import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactFormEnhanceddynamic from '../components/ContactFormEnhanced.dynamic';

describe('ContactFormEnhanceddynamic', () => {
  test('renders without crashing', () => {
    render(<ContactFormEnhanceddynamic />);
    expect(screen.getByTestId('contactformenhanced.dynamic')).toBeInTheDocument();
  });
});
});
