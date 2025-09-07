import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import DataVisualization from '../components/DataVisualization';'
describe('DataVisualization', () => {test('renders without crashing', () => {render(<DataVisualization />)expect(screen.getByTestId('datavisualization')).toBeInTheDocument()})test('displays correct content', () => {render(<DataVisualization />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<DataVisualization />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<DataVisualization />)// Add styling tests here;'
  })})