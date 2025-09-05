<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedFooter from '../components/EnhancedFooter';

describe('EnhancedFooter', () => {
  test('renders without crashing', () => {
    render(<EnhancedFooter />);
    expect(screen.getByTestId('enhancedfooter')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
});
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
