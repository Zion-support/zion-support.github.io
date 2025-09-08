import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedErrorBoundary from '../components/EnhancedErrorBoundary';'
describe('EnhancedErrorBoundary', () => {test('renders without crashing', () => {render(<EnhancedErrorBoundary />)expect(screen.getByTestId('enhancederrorboundary')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedErrorBoundary />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedErrorBoundary />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedErrorBoundary />)// Add styling tests here;'
  })})