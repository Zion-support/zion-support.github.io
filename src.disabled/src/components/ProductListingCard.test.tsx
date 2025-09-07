import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ProductListingCard from '../components/ProductListingCard';'
describe('ProductListingCard', () => {test('renders without crashing', () => {render(<ProductListingCard />)expect(screen.getByTestId('productlistingcard')).toBeInTheDocument()})test('displays correct content', () => {render(<ProductListingCard />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ProductListingCard />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ProductListingCard />)// Add styling tests here;'
  })})