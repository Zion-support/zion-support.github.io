import React from 'react';
import { render, screen } from '@testing-library/react';
import EnhancedErrorBoundary from '../EnhancedErrorBoundary';

describe('EnhancedErrorBoundary', () => {
  it('renders without crashing', () => {
    render(<EnhancedErrorBoundary />);
    expect(screen.getByText('EnhancedErrorBoundary')).toBeInTheDocument();
  });
});