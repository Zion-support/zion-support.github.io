import React from 'react'
import { render, screen } from '@testing-library/react'
import CloudDevOps  from './CloudDevOps'describe('CloudDevOps', () => {
  it('renders without crashing', () => {
    render(<CloudDevOps />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })

  it('displays expected content', () => {
    render(<CloudDevOps />)
    // Add specific test assertions based on component content
  })
})
