import { render, screen } from '@testing-library/react';
import AppMinimal from './AppMinimal';
describe('AppMinimal', () => {
  it('renders without crashing', () => {
    render(<AppMinimal />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});