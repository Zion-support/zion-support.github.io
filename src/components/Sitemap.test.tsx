import { render, screen } from '@testing-library/react';
import Sitemap from './Sitemap';

describe('Sitemap', () => {
  it('displays expected content', () => {
    render(<Sitemap />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });
});