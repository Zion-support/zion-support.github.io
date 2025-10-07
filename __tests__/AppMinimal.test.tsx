import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from './app/page-minimal';
import React from 'react';

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
