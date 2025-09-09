import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import AdvancedPerformanceMonitor from '../components/AdvancedPerformanceMonitor';'
describe('AdvancedPerformanceMonitor', () => {test('renders without crashing', () => {render(<AdvancedPerformanceMonitor />)expect(screen.getByTestId('advancedperformancemonitor')).toBeInTheDocument()})test('displays correct content', () => {render(<AdvancedPerformanceMonitor />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<AdvancedPerformanceMonitor />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<AdvancedPerformanceMonitor />)// Add styling tests here;'
  })})