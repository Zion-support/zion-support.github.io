import React from 'react'
import { render, screen } from '@testing-library/react'
import Interviews  from './Interviews'describe('Interviews', () => {
  it('renders without crashing', () => {
    render(<Interviews />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })

  it('displays expected content', () => {
    render(<Interviews />)
    // Add specific test assertions based on component content
  })
})
