import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import MobileOptimizer from '../components/MobileOptimizer';'
describe('MobileOptimizer', () => {test('renders without crashing', () => {render(<MobileOptimizer />)expect(screen.getByTestId('mobileoptimizer')).toBeInTheDocument()})test('displays correct content', () => {render(<MobileOptimizer />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<MobileOptimizer />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<MobileOptimizer />)// Add styling tests here;'
  })})