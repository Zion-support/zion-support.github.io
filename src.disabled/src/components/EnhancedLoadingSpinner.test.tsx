import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedLoadingSpinner from '../components/EnhancedLoadingSpinner';'
describe('EnhancedLoadingSpinner', () => {test('renders without crashing', () => {render(<EnhancedLoadingSpinner />)expect(screen.getByTestId('enhancedloadingspinner')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedLoadingSpinner />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedLoadingSpinner />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedLoadingSpinner />)// Add styling tests here;'
  })})