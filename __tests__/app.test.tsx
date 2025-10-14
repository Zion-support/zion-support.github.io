import React from 'react''
import { render, screen } from '@testing-library/react''
import HomePage from '../app/page''
describe('HomePage', () => {'
  it('renders without crashing', () => {
    render(<HomePage />)'
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument()
  })'
  it('renders navigation links', () => {
    render(<HomePage />)'
    expect(screen.getByText('Explore Services')).toBeInTheDocument()'
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })
})'