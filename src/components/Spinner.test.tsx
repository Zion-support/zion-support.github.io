<<<<<<< HEAD
import { render, screen } from '@testing-library/react';""
import Spinner from './Spinner';""
describe('Spinner', () => {""
  it('renders without crashing', () => {""
=======
import { render, screen } from '@testing-library/react
import Spinner from './Spinner
describe('Spinner', () => {"
  it('renders without crashing', () => {"
>>>>>>> main
    render(<Spinner /" >)"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();""
  it('displays expected content', () => {
<<<<<<< HEAD
    render(<Spinner /" >)"
    // Add specific test assertions based on component content, });
""
=======
    render(<Spinner /" >)
    // Add specific test assertions based on component content
})
"
>>>>>>> main
}}