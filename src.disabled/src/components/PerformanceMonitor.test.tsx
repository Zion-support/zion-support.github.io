import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import PerformanceMonitor from '../components/PerformanceMonitor';'
describe('PerformanceMonitor', () => {test('renders without crashing', () => {render(<PerformanceMonitor />)expect(screen.getByTestId('performancemonitor')).toBeInTheDocument()})test('displays correct content', () => {render(<PerformanceMonitor />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<PerformanceMonitor />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<PerformanceMonitor />)// Add styling tests here;'
  })})