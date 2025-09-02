import React from 'react'
import { render, screen } from '@testing-library/react'
import CaseStudiesPage from './CaseStudiesPage'
describe('CaseStudiesPage', () => {
  it('renders without crashing', () => {
    render(<CaseStudiesPage />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })

  it('displays expected content', () => {
    render(<CaseStudiesPage />)
    // Add specific test assertions based on component content
  })
})
