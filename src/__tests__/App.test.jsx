import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import App from '../App'

jest.mock('../pages/Index', () => {
  return function MockIndex() {
    return <div data-testid="index-page">Index Page</div>
  }
})

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('App Component', () => {
  test('renders without crashing', () => {
    renderWithRouter(<App />)
    expect(screen.getByTestId('index-page')).toBeInTheDocument()
  })
})
