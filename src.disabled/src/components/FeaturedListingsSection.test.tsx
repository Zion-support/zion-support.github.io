import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import FeaturedListingsSection from '../components/FeaturedListingsSection';'
describe('FeaturedListingsSection', () => {test('renders without crashing', () => {render(<FeaturedListingsSection />)expect(screen.getByTestId('featuredlistingssection')).toBeInTheDocument()})test('displays correct content', () => {render(<FeaturedListingsSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<FeaturedListingsSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<FeaturedListingsSection />)// Add styling tests here;'
  })})