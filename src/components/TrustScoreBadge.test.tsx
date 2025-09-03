<<<<<<< HEAD
import { render, screen } from '@testing-library/react';""
import TrustScoreBadge from './TrustScoreBadge';""
describe('TrustScoreBadge', () => {""
  it('renders without crashing', () => {""
=======
import { render, screen } from '@testing-library/react
import TrustScoreBadge from './TrustScoreBadge
describe('TrustScoreBadge', () => {"
  it('renders without crashing', () => {"
>>>>>>> main
    render(<TrustScoreBadge /" >)"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();""
  it('displays expected content', () => {
<<<<<<< HEAD
    render(<TrustScoreBadge /" >)"
    // Add specific test assertions based on component content, });
""
=======
    render(<TrustScoreBadge /" >)
    // Add specific test assertions based on component content
})
"
>>>>>>> main
}}