import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedNewsletter from '../components/EnhancedNewsletter';'
describe('EnhancedNewsletter', () => {test('renders without crashing', () => {render(<EnhancedNewsletter />)expect(screen.getByTestId('enhancednewsletter')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedNewsletter />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedNewsletter />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedNewsletter />)// Add styling tests here;'
  })})