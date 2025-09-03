<<<<<<< HEAD
import { render, screen } from '@testing-library/react';""
import CaseStudies from './CaseStudies';""
describe('CaseStudies', () => {""
  it('renders without crashing', () => {""
=======
import { render, screen } from '@testing-library/react
import CaseStudies from './CaseStudies
describe('CaseStudies', () => {"
  it('renders without crashing', () => {"
>>>>>>> main
    render(<CaseStudies /" >)"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();""
  it('displays expected content', () => {
<<<<<<< HEAD
    render(<CaseStudies /" >)"
    // Add specific test assertions based on component content, });
""
=======
    render(<CaseStudies /" >)
    // Add specific test assertions based on component content
})
"
>>>>>>> main
}}