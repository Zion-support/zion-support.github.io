import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';'
describe('EnhancedServicesShowcase', () => {test('renders without crashing', () => {render(<EnhancedServicesShowcase />)expect(screen.getByTestId('enhancedservicesshowcase')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedServicesShowcase />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedServicesShowcase />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedServicesShowcase />)// Add styling tests here;'
  })})