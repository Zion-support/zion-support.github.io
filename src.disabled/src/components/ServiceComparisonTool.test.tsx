import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ServiceComparisonTool from '../components/ServiceComparisonTool';'
describe('ServiceComparisonTool', () => {test('renders without crashing', () => {render(<ServiceComparisonTool />)expect(screen.getByTestId('servicecomparisontool')).toBeInTheDocument()})test('displays correct content', () => {render(<ServiceComparisonTool />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ServiceComparisonTool />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ServiceComparisonTool />)// Add styling tests here;'
  })})