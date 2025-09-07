import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import SEOOptimizer from '../components/SEOOptimizer';'
describe('SEOOptimizer', () => {test('renders without crashing', () => {render(<SEOOptimizer />)expect(screen.getByTestId('seooptimizer')).toBeInTheDocument()})test('displays correct content', () => {render(<SEOOptimizer />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<SEOOptimizer />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<SEOOptimizer />)// Add styling tests here;'
  })})