import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import LoadingSpinner from '../components/LoadingSpinner';'
describe('LoadingSpinner', () => {test('renders without crashing', () => {render(<LoadingSpinner />)expect(screen.getByTestId('loadingspinner')).toBeInTheDocument()})test('displays correct content', () => {render(<LoadingSpinner />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<LoadingSpinner />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<LoadingSpinner />)// Add styling tests here;'
  })})