import { render, screen } from '@testing-library/react';
import FuturisticButton from '../app/components/FuturisticButton';
describe('Advanced Components', () => {
  it('renders FuturisticButton without crashing', () => {,
    render(<FuturisticButton>Test Button</FuturisticButton>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });
});