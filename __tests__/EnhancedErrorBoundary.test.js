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
});
