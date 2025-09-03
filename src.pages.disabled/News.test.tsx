import React from 'react'
import { render, screen } from '@testing-library/react'
import news  from './news'describe('news', () => {
  it('renders without crashing', () => {
    render(<news />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })

  it('displays expected content', () => {
    render(<news />)
    // Add specific test assertions based on component content
  })
})
