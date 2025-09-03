<<<<<<< HEAD
import { render, screen } from '@testing-library/react';""
import Sitemap from './Sitemap';""
describe('Sitemap', () => {""
  it('renders without crashing', () => {""
=======
import { render, screen } from '@testing-library/react
import Sitemap from './Sitemap
describe('Sitemap', () => {"
  it('renders without crashing', () => {"
>>>>>>> main
    render(<Sitemap /" >)"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();""
  it('displays expected content', () => {
<<<<<<< HEAD
    render(<Sitemap /" >)"
    // Add specific test assertions based on component content, });
""
=======
    render(<Sitemap /" >)
    // Add specific test assertions based on component content
})
"
>>>>>>> main
}}