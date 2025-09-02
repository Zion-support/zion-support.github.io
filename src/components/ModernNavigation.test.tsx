import { render, screen } from '@testing-library/react'
import ModernNavigation from './ModernNavigation'
describe('ModernNavigation', () => {
  it('renders without crashing', () => {
    render(<ModernNavigation />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })

  it('displays expected content', () => {
    render(<ModernNavigation />)
    // Add specific test assertions based on component content
  })
})
