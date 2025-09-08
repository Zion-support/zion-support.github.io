import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedSEOManager from '../components/EnhancedSEOManager';'
describe('EnhancedSEOManager', () => {test('renders without crashing', () => {render(<EnhancedSEOManager />)expect(screen.getByTestId('enhancedseomanager')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedSEOManager />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedSEOManager />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedSEOManager />)// Add styling tests here;'
  })})