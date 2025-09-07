import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedServiceShowcase from '../components/EnhancedServiceShowcase';'
describe('EnhancedServiceShowcase', () => {test('renders without crashing', () => {render(<EnhancedServiceShowcase />)expect(screen.getByTestId('enhancedserviceshowcase')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedServiceShowcase />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedServiceShowcase />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedServiceShowcase />)// Add styling tests here;'
  })})