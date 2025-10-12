import { describe, test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import Loading from '../app/components/Loading'
import SEOHead from '../app/components/SEOHead'
describe('Component Tests', () => {
  test('Loading renders correctly', () => {
    render(<Loading />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
  test('SEOHead renders without crashing', () => {
    render(
  return (
      <HelmetProvider>
        <SEOHead />
      </HelmetProvider>
    )
    expect(document.head).toBeInTheDocument()})})