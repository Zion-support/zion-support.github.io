import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import UltimateServicesShowcase from '../components/UltimateServicesShowcase';'
describe('UltimateServicesShowcase', () => {test('renders without crashing', () => {render(<UltimateServicesShowcase />)expect(screen.getByTestId('ultimateservicesshowcase')).toBeInTheDocument()})test('displays correct content', () => {render(<UltimateServicesShowcase />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<UltimateServicesShowcase />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<UltimateServicesShowcase />)// Add styling tests here;'
  })})