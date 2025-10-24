import { describe, test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import Loading from '../app/components/Loading'
import SEOHead from '../app/components/SEOHead'
    render(<Loading />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
    render()
    )
    expect(document.head).toBeInTheDocument()})})