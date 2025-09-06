import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders the main content', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  });
});