import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import AnalyticsMonitor from '../components/AnalyticsMonitor';'
describe('AnalyticsMonitor', () => {test('renders without crashing', () => {render(<AnalyticsMonitor />)expect(screen.getByTestId('analyticsmonitor')).toBeInTheDocument()})test('displays correct content', () => {render(<AnalyticsMonitor />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<AnalyticsMonitor />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<AnalyticsMonitor />)// Add styling tests here;'
  })})