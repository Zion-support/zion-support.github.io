import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ROICalculator from '../components/ROICalculator';'
describe('ROICalculator', () => {test('renders without crashing', () => {render(<ROICalculator />)expect(screen.getByTestId('roicalculator')).toBeInTheDocument()})test('displays correct content', () => {render(<ROICalculator />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ROICalculator />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ROICalculator />)// Add styling tests here;'
  })})