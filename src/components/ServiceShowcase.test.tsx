<<<<<<< HEAD
import { render, screen } from '@testing-library/react';""
import ServiceShowcase from './ServiceShowcase';""
describe('ServiceShowcase', () => {""
  it('renders without crashing', () => {""
=======
import { render, screen } from '@testing-library/react
import ServiceShowcase from './ServiceShowcase
describe('ServiceShowcase', () => {"
  it('renders without crashing', () => {"
>>>>>>> main
    render(<ServiceShowcase /" >)"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();""
  it('displays expected content', () => {
<<<<<<< HEAD
    render(<ServiceShowcase /" >)"
    // Add specific test assertions based on component content, });
""
=======
    render(<ServiceShowcase /" >)
    // Add specific test assertions based on component content
})
"
>>>>>>> main
}}