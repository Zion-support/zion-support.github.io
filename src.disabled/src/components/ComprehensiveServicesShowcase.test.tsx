import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ComprehensiveServicesShowcase from '../components/ComprehensiveServicesShowcase';'
describe('ComprehensiveServicesShowcase', () => {test('renders without crashing', () => {render(<ComprehensiveServicesShowcase />)expect(screen.getByTestId('comprehensiveservicesshowcase')).toBeInTheDocument()})test('displays correct content', () => {render(<ComprehensiveServicesShowcase />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ComprehensiveServicesShowcase />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ComprehensiveServicesShowcase />)// Add styling tests here;'
  })})