import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import AdvancedAnalyticsDashboard from '../components/AdvancedAnalyticsDashboard';'
describe('AdvancedAnalyticsDashboard', () => {test('renders without crashing', () => {render(<AdvancedAnalyticsDashboard />)expect(screen.getByTestId('advancedanalyticsdashboard')).toBeInTheDocument()})test('displays correct content', () => {render(<AdvancedAnalyticsDashboard />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<AdvancedAnalyticsDashboard />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<AdvancedAnalyticsDashboard />)// Add styling tests here;'
  })})