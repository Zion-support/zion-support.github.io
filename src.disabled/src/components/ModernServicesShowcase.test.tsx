import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ModernServicesShowcase from '../components/ModernServicesShowcase';'
describe('ModernServicesShowcase', () => {test('renders without crashing', () => {render(<ModernServicesShowcase />)expect(screen.getByTestId('modernservicesshowcase')).toBeInTheDocument()})test('displays correct content', () => {render(<ModernServicesShowcase />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ModernServicesShowcase />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ModernServicesShowcase />)// Add styling tests here;'
  })})