import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../app/components/LoadingSpinner';
describe('Component Tests', () => {
  test('LoadingSpinner renders correctly', () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole('status')).toBeTruthy();
  });
  test('LoadingSpinner has correct accessibility attributes', () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByRole('status');
    expect(spinner.getAttribute('aria-label')).toBe('Loading');
  });
});
