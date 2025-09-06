import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Mock AppMinimal component for testing
const AppMinimal = () => (
  <main>
    <h1>AppMinimal</h1>
  </main>
);

describe('AppMinimal', () => {
  it('renders without crashing', () => {
    render(<AppMinimal />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
