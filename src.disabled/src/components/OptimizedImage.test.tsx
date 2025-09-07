import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import OptimizedImage from '../components/OptimizedImage';'
describe('OptimizedImage', () => {test('renders without crashing', () => {render(<OptimizedImage />)expect(screen.getByTestId('optimizedimage')).toBeInTheDocument()})test('displays correct content', () => {render(<OptimizedImage />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<OptimizedImage />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<OptimizedImage />)// Add styling tests here;'
  })})