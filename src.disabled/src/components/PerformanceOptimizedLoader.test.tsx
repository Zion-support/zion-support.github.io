import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import PerformanceOptimizedLoader from '../components/PerformanceOptimizedLoader';'
describe('PerformanceOptimizedLoader', () => {test('renders without crashing', () => {render(<PerformanceOptimizedLoader />)expect(screen.getByTestId('performanceoptimizedloader')).toBeInTheDocument()})test('displays correct content', () => {render(<PerformanceOptimizedLoader />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<PerformanceOptimizedLoader />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<PerformanceOptimizedLoader />)// Add styling tests here;'
  })})