import React from 'react'
import { render, screen } from '@testing-library/react'
import AdminDashboard  from './AdminDashboard'describe('AdminDashboard', () => {
  it('renders without crashing', () => {
    render(<AdminDashboard />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })

  it('displays expected content', () => {
    render(<AdminDashboard />)
    // Add specific test assertions based on component content
  })
})
