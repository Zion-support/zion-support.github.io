import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedLayout from '../components/EnhancedLayout';'
describe('EnhancedLayout', () => {test('renders without crashing', () => {render(<EnhancedLayout />)expect(screen.getByTestId('enhancedlayout')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedLayout />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedLayout />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedLayout />)// Add styling tests here;'
  })})