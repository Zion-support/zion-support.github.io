import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import AdvancedReportingDashboard from '../components/AdvancedReportingDashboard';'
describe('AdvancedReportingDashboard', () => {test('renders without crashing', () => {render(<AdvancedReportingDashboard />)expect(screen.getByTestId('advancedreportingdashboard')).toBeInTheDocument()})test('displays correct content', () => {render(<AdvancedReportingDashboard />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<AdvancedReportingDashboard />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<AdvancedReportingDashboard />)// Add styling tests here;'
  })})