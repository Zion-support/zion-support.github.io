import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ListingCard from '../components/ListingCard';'
describe('ListingCard', () => {test('renders without crashing', () => {render(<ListingCard />)expect(screen.getByTestId('listingcard')).toBeInTheDocument()})test('displays correct content', () => {render(<ListingCard />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ListingCard />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ListingCard />)// Add styling tests here;'
  })})