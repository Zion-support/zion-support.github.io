import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import PricingSection from '../components/PricingSection';'
describe('PricingSection', () => {test('renders without crashing', () => {render(<PricingSection />)expect(screen.getByTestId('pricingsection')).toBeInTheDocument()})test('displays correct content', () => {render(<PricingSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<PricingSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<PricingSection />)// Add styling tests here;'
  })})