import { render, screen } from '@testing-library/react'
import ContactCTA from './ContactCTA'

describe('ContactCTA', () => {
  it('renders', () => {
    render(<ContactCTA />)
    expect(screen.getByText(/./)).toBeTruthy()
  })
})