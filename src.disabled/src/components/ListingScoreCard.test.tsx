import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ListingScoreCard from '../components/ListingScoreCard';'
describe('ListingScoreCard', () => {test('renders without crashing', () => {render(<ListingScoreCard />)expect(screen.getByTestId('listingscorecard')).toBeInTheDocument()})test('displays correct content', () => {render(<ListingScoreCard />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ListingScoreCard />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ListingScoreCard />)// Add styling tests here;'
  })})