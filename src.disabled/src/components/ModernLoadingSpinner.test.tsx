import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ModernLoadingSpinner from '../components/ModernLoadingSpinner';'
describe('ModernLoadingSpinner', () => {test('renders without crashing', () => {render(<ModernLoadingSpinner />)expect(screen.getByTestId('modernloadingspinner')).toBeInTheDocument()})test('displays correct content', () => {render(<ModernLoadingSpinner />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ModernLoadingSpinner />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ModernLoadingSpinner />)// Add styling tests here;'
  })})