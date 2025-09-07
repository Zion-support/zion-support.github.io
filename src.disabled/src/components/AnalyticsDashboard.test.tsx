import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import AnalyticsDashboard from '../components/AnalyticsDashboard';'
describe('AnalyticsDashboard', () => {test('renders without crashing', () => {render(<AnalyticsDashboard />)expect(screen.getByTestId('analyticsdashboard')).toBeInTheDocument()})test('displays correct content', () => {render(<AnalyticsDashboard />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<AnalyticsDashboard />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<AnalyticsDashboard />)// Add styling tests here;'
  })})