import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ModernErrorBoundary from '../components/ModernErrorBoundary';'
describe('ModernErrorBoundary', () => {test('renders without crashing', () => {render(<ModernErrorBoundary />)expect(screen.getByTestId('modernerrorboundary')).toBeInTheDocument()})test('displays correct content', () => {render(<ModernErrorBoundary />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ModernErrorBoundary />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ModernErrorBoundary />)// Add styling tests here;'
  })})