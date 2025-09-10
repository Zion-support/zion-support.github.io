import { render, screen } from '@testing-library/react'
import CaseStudies from './CaseStudies'

describe('CaseStudies', () => {
  it('renders', () => {
    render(<CaseStudies />)
    expect(screen.getByText(/./)).toBeTruthy()
  })
})