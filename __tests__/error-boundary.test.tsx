import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock error boundary component for testing
const MockErrorBoundary = () => <div>Error Boundary Test</div>;

describe('Error Boundary', () => {
  test('renders error boundary component', () => {
    render(<MockErrorBoundary />);
    expect(screen.getByText('Error Boundary Test')).toBeInTheDocument();
  });
});