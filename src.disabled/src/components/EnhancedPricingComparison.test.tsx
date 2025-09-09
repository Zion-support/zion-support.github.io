import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedPricingComparison from '../components/EnhancedPricingComparison';'
describe('EnhancedPricingComparison', () => {test('renders without crashing', () => {render(<EnhancedPricingComparison />)expect(screen.getByTestId('enhancedpricingcomparison')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedPricingComparison />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedPricingComparison />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedPricingComparison />)// Add styling tests here;'
  })})