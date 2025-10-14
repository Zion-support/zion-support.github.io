import React from 'react'
import { render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from '../app/page'

describe('HomePage', () => {
  it('renders without crashing', () => {
<<<<<<< HEAD
    render(
      <HelmetProvider>
        <HomePage />
      </HelmetProvider>
    )
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6257
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument()
  })
  
  it('renders navigation links', () => {
<<<<<<< HEAD
    render(
      <HelmetProvider>
        <HomePage />
      </HelmetProvider>
    )
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })
})
=======
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })
})
>>>>>>> cursor/fix-errors-and-merge-to-main-6257
