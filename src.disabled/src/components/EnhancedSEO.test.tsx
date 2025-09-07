import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedSEO from '../components/EnhancedSEO';'
describe('EnhancedSEO', () => {test('renders without crashing', () => {render(<EnhancedSEO />)expect(screen.getByTestId('enhancedseo')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedSEO />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedSEO />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedSEO />)// Add styling tests here;'
  })})