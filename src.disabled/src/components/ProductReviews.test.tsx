import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ProductReviews from '../components/ProductReviews';'
describe('ProductReviews', () => {test('renders without crashing', () => {render(<ProductReviews />)expect(screen.getByTestId('productreviews')).toBeInTheDocument()})test('displays correct content', () => {render(<ProductReviews />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ProductReviews />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ProductReviews />)// Add styling tests here;'
  })})