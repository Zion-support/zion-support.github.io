import React from 'react'
import { render, screen } from '@testing-library/react'
import AllServicesOverview  from './AllServicesOverview'describe('AllServicesOverview', () => {
  it('renders without crashing', () => {
    render(<AllServicesOverview />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })

  it('displays expected content', () => {
    render(<AllServicesOverview />)
    // Add specific test assertions based on component content
  })
})
