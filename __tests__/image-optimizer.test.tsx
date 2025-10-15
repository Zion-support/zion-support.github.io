import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageOptimizer from '../app/components/ImageOptimizer'

// Mock the image loading
const mockImage = {
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  src: '',
  onload: null,
  onerror: null
}

// Mock global Image constructor
global.Image = jest.fn(() => mockImage) as any

describe('ImageOptimizer', () => {
  it('renders without crashing', () => {
    render(<ImageOptimizer />)
  })
  
  it('applies lazy loading by default', () => {
    const { container } = render(<ImageOptimizer />)
    const images = container.querySelectorAll('img')
    images.forEach(img => {
      expect(img).toHaveAttribute('loading', 'lazy')
    })
  })
})