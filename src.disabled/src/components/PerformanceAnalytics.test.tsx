import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import PerformanceAnalytics from '../components/PerformanceAnalytics';'
describe('PerformanceAnalytics', () => {test('renders without crashing', () => {render(<PerformanceAnalytics />)expect(screen.getByTestId('performanceanalytics')).toBeInTheDocument()})test('displays correct content', () => {render(<PerformanceAnalytics />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<PerformanceAnalytics />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<PerformanceAnalytics />)// Add styling tests here;'
  })})