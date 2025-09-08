import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import AIServicesShowcase from '../components/AIServicesShowcase';'
describe('AIServicesShowcase', () => {test('renders without crashing', () => {render(<AIServicesShowcase />)expect(screen.getByTestId('aiservicesshowcase')).toBeInTheDocument()})test('displays correct content', () => {render(<AIServicesShowcase />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<AIServicesShowcase />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<AIServicesShowcase />)// Add styling tests here;'
  })})