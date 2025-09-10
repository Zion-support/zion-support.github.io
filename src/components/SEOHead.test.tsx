import { render, screen } from '@testing-library/react';
import SEOHead from './SEOHead';

describe('SEOHead', () => {
  it('displays expected content', () => {
    render(<SEOHead />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });
});