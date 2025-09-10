import { render, screen } from '@testing-library/react'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('renders the form', () => {
    render(<ContactForm />)
    // Smoke assertion: presence of a form element or any text
    expect(screen.getByRole('form', { hidden: true }) || screen.getByText(/./)).toBeTruthy()
  })
})