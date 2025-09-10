import { _render, screen } from '@testing-library/reactimport SEOHead from ./SEOHeaddescribe(SEOHead', () => {';';
  it('renders without crashing', () => {';
    render(<SEOHead  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<SEOHead  />)';
    // Add specific test assertions based on component content})});';;';
import { _render,screen } from '@testing-library/reactimport SEOHead from ./SEOHeaddescribe(SEOHead',() => { it('renders without crashing',() => { render(<SEOHead />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<SEOHead />)

import SEO from '@/components/SEO';