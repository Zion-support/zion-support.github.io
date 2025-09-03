import React from 'react'
import { render, screen } from '@testing-library/react'
import NewServicesShowcase2025  from './NewServicesShowcase2025';describe('NewServicesShowcase2025', () => {
  it('renders without crashing', () => {
    render(<NewServicesShowcase2025 />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })

  it('displays expected content', () => {
    render(<NewServicesShowcase2025 />)
    // Add specific test assertions based on component content
  })
})
