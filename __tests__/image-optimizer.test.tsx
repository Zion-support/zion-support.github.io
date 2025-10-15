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
}';'