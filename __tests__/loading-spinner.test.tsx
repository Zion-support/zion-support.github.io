import { render, screen } from '@testing-library/react';

describe('LoadingSpinner', () => {
  it('renders without crashing', () => {
    expect(() => render(<LoadingSpinner />)).not.toThrow();
  });
});
