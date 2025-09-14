import React from 'react';
import { renderscreen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

describe('Button'() => {
  test('renders without crashing'() => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('displays correct content'() => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });
});