>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactFormEnhanced from '../components/ContactFormEnhanced';

describe('ContactFormEnhanced', () => {
  test('renders without crashing', () => {
    render(<ContactFormEnhanced />);
    expect(screen.getByTestId('contactformenhanced')).toBeInTheDocument();
  });
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
