import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import AIContentOptimizer from '../components/AIContentOptimizer';'
describe('AIContentOptimizer', () => {test('renders without crashing', () => {render(<AIContentOptimizer />)expect(screen.getByTestId('aicontentoptimizer')).toBeInTheDocument()})test('displays correct content', () => {render(<AIContentOptimizer />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<AIContentOptimizer />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<AIContentOptimizer />)// Add styling tests here;'
  })})