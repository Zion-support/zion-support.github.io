import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import LoadingSpinner from '../src/components/LoadingSpinner';
import SEOEnhancer from '../src/components/SEOEnhancer';

describe('Component Tests', () => {
  test('LoadingSpinner renders correctly', () => {
    render(<LoadingSpinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
  test('SEOEnhancer renders without crashing', () => {
    render(
      <HelmetProvider>
        <SEOEnhancer />
      </HelmetProvider>
    )
    expect(document.head).toBeInTheDocument()
  })
})
