import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedImageLoader from '../components/EnhancedImageLoader';'
describe('EnhancedImageLoader', () => {test('renders without crashing', () => {render(<EnhancedImageLoader />)expect(screen.getByTestId('enhancedimageloader')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedImageLoader />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedImageLoader />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedImageLoader />)// Add styling tests here;'
  })})