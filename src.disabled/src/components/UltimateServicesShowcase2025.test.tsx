import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import UltimateServicesShowcase2025 from '../components/UltimateServicesShowcase2025';'
describe('UltimateServicesShowcase2025', () => {test('renders without crashing', () => {render(<UltimateServicesShowcase2025 />)expect(screen.getByTestId('ultimateservicesshowcase2025')).toBeInTheDocument()})test('displays correct content', () => {render(<UltimateServicesShowcase2025 />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<UltimateServicesShowcase2025 />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<UltimateServicesShowcase2025 />)// Add styling tests here;'
  })})