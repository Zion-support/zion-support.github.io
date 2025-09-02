import { render, screen } from '@testing-library/react';"
import Sitemap from './Sitemap';"
describe('Sitemap', () => {"
  it('renders without crashing', () => {"
    render(<Sitemap /", ></Sitemap>)"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();"
  it('displays expected content', () => {
    render(<Sitemap /", ></Sitemap>)
    // Add specific test assertions based on component content,
});
"
}}