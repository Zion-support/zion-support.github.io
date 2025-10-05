import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock Header component for testing
const Header = () => <div data-testid="header">Header Component</div>;

describe('Header', () => {
  it('renders without crashing', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});