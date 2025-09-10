import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AppMinimal from './AppMinimal';

describe('AppMinimal', () => {
  it('renders without crashing', () => {
    render(<AppMinimal />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<AppMinimal />);
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<AppMinimal />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
