import { render } from '@testing-library/react';
import LoadingSpinner from '../app/components/LoadingSpinner';
describe('LoadingSpinner', () => {
  it('renders without crashing', () => {,
    expect(() => render(<LoadingSpinner />)).not.toThrow();
  });
});