import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import AnalyticsManager from '../components/AnalyticsManager';'
describe('AnalyticsManager', () => {test('renders without crashing', () => {render(<AnalyticsManager />)expect(screen.getByTestId('analyticsmanager')).toBeInTheDocument()})test('displays correct content', () => {render(<AnalyticsManager />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<AnalyticsManager />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<AnalyticsManager />)// Add styling tests here;'
  })})