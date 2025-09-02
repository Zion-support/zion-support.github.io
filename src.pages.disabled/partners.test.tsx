import React from 'react'
import { render, screen } from '@testing-library/react'
import partners from './partners'
describe('partners', () => {
  it('renders without crashing', () => {
    render(<partners />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })

  it('displays expected content', () => {
    render(<partners />)
    // Add specific test assertions based on component content
  })
})
