import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinner from '../app/components/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />);
    // Should render the spinner icon but no text by default
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    const customText = 'Loading data...';
    render(<LoadingSpinner text={customText} />);
    expect(screen.getByText(customText)).toBeInTheDocument();
  });

  it('renders with full screen option', () => {
    render(<LoadingSpinner fullScreen text="Loading..." />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});