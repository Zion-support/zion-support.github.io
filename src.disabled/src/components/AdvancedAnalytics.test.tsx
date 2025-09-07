import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import AdvancedAnalytics from '../components/AdvancedAnalytics';'
describe('AdvancedAnalytics', () => {test('renders without crashing', () => {render(<AdvancedAnalytics />)expect(screen.getByTestId('advancedanalytics')).toBeInTheDocument()})test('displays correct content', () => {render(<AdvancedAnalytics />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<AdvancedAnalytics />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<AdvancedAnalytics />)// Add styling tests here;'
  })})