import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedErrorBoundarydynamic from '../components/EnhancedErrorBoundary.dynamic';

describe('EnhancedErrorBoundarydynamic', () => {
  test('renders without crashing', () => {
    render(<EnhancedErrorBoundarydynamic />);
    expect(screen.getByTestId('enhancederrorboundary.dynamic')).toBeInTheDocument();
  });
});
});
