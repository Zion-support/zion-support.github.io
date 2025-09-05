>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedErrorBoundary from '../components/EnhancedErrorBoundary';

describe('EnhancedErrorBoundary', () => {
  test('renders without crashing', () => {
    render(<EnhancedErrorBoundary />);
    expect(screen.getByTestId('enhancederrorboundary')).toBeInTheDocument();
  });
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
