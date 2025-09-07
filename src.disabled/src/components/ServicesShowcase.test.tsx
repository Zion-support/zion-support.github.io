import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ServicesShowcase from '../components/ServicesShowcase';'
describe('ServicesShowcase', () => {test('renders without crashing', () => {render(<ServicesShowcase />)expect(screen.getByTestId('servicesshowcase')).toBeInTheDocument()})test('displays correct content', () => {render(<ServicesShowcase />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ServicesShowcase />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ServicesShowcase />)// Add styling tests here;'
  })})