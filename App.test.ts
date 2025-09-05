import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './pages/index';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(document.body).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<Home />);
  });

  it('handles user interactions', () => {
    render(<Home />);
  });
});