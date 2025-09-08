import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import InnovativeServicesShowcase2025 from '../components/InnovativeServicesShowcase2025';'
describe('InnovativeServicesShowcase2025', () => {test('renders without crashing', () => {render(<InnovativeServicesShowcase2025 />)expect(screen.getByTestId('innovativeservicesshowcase2025')).toBeInTheDocument()})test('displays correct content', () => {render(<InnovativeServicesShowcase2025 />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<InnovativeServicesShowcase2025 />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<InnovativeServicesShowcase2025 />)// Add styling tests here;'
  })})