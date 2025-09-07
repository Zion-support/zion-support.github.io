import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ErrorBoundary from '../components/ErrorBoundary';'
describe('ErrorBoundary', () => {test('renders without crashing', () => {render(<ErrorBoundary />)expect(screen.getByTestId('errorboundary')).toBeInTheDocument()})test('displays correct content', () => {render(<ErrorBoundary />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ErrorBoundary />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ErrorBoundary />)// Add styling tests here;'
  })})