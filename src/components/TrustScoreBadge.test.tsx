import { render, screen } from '@testing-library/react';
import TrustScoreBadge from './TrustScoreBadge';
describe('TrustScoreBadge', () => {'
  it('renders without crashing', () => {'
    render(<TrustScoreBadge />)""
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  it('displays expected content', () => {
    render(<TrustScoreBadge />);
    // Add specific test assertions based on component content
  });