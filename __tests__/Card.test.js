<<<<<<< HEAD
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';

describe('Card', () => {
  test('renders without crashing', () => {
    render(<Card />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<Card />);
  });

  test('handles user interactions', () => {
    render(<Card />);
  });

  test('applies correct styling', () => {
    render(<Card />);
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
