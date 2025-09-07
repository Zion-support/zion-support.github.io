import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ErrorFallback from '../components/ErrorFallback';'
describe('ErrorFallback', () => {test('renders without crashing', () => {render(<ErrorFallback />)expect(screen.getByTestId('errorfallback')).toBeInTheDocument()})test('displays correct content', () => {render(<ErrorFallback />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ErrorFallback />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ErrorFallback />)// Add styling tests here;'
  })})