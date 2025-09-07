import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedSecurity from '../components/EnhancedSecurity';'
describe('EnhancedSecurity', () => {test('renders without crashing', () => {render(<EnhancedSecurity />)expect(screen.getByTestId('enhancedsecurity')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedSecurity />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedSecurity />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedSecurity />)// Add styling tests here;'
  })})