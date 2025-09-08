import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedLoading from '../components/EnhancedLoading';'
describe('EnhancedLoading', () => {test('renders without crashing', () => {render(<EnhancedLoading />)expect(screen.getByTestId('enhancedloading')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedLoading />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedLoading />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedLoading />)// Add styling tests here;'
  })})