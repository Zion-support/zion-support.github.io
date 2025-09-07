import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import PerformanceDashboard from '../components/PerformanceDashboard';'
describe('PerformanceDashboard', () => {test('renders without crashing', () => {render(<PerformanceDashboard />)expect(screen.getByTestId('performancedashboard')).toBeInTheDocument()})test('displays correct content', () => {render(<PerformanceDashboard />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<PerformanceDashboard />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<PerformanceDashboard />)// Add styling tests here;'
  })})