import React from 'react'
import { render, screen } from '@testing-library/react'
import TransformationServices  from './TransformationServices'describe('TransformationServices', () => {
  it('renders without crashing', () => {
    render(<TransformationServices />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })

  it('displays expected content', () => {
    render(<TransformationServices />)
    // Add specific test assertions based on component content
  })
})
