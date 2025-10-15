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

// Mock Image constructor
global.Image = jest.fn(() => mockImage) as any

describe('ImageOptimizer', () => {
  it('renders without crashing', () => {
    render(<ImageOptimizer src="test.jpg" alt="Test image" />)
    expect(screen.getByAltText('Test image')).toBeInTheDocument()
  })

  it('handles image load events', () => {
    render(<ImageOptimizer src="test.jpg" alt="Test image" />)
    expect(mockImage.addEventListener).toHaveBeenCalled()
  })
})
