import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import PerformanceOptimizedHero from '../components/PerformanceOptimizedHero';'
describe('PerformanceOptimizedHero', () => {test('renders without crashing', () => {render(<PerformanceOptimizedHero />)expect(screen.getByTestId('performanceoptimizedhero')).toBeInTheDocument()})test('displays correct content', () => {render(<PerformanceOptimizedHero />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<PerformanceOptimizedHero />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<PerformanceOptimizedHero />)// Add styling tests here;'
  })})