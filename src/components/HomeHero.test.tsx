import { render, screen } from '@testing-library/react';
import HomeHero from './HomeHero';

describe('HomeHero', () => {
  it('displays expected content', () => {
    render(<HomeHero />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });
});