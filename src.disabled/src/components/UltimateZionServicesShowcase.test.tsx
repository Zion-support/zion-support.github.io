import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import UltimateZionServicesShowcase from '../components/UltimateZionServicesShowcase';'
describe('UltimateZionServicesShowcase', () => {test('renders without crashing', () => {render(<UltimateZionServicesShowcase />)expect(screen.getByTestId('ultimatezionservicesshowcase')).toBeInTheDocument()})test('displays correct content', () => {render(<UltimateZionServicesShowcase />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<UltimateZionServicesShowcase />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<UltimateZionServicesShowcase />)// Add styling tests here;'
  })})