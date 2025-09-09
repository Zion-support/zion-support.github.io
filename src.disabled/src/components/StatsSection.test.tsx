import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import StatsSection from '../components/StatsSection';'
describe('StatsSection', () => {test('renders without crashing', () => {render(<StatsSection />)expect(screen.getByTestId('statssection')).toBeInTheDocument()})test('displays correct content', () => {render(<StatsSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<StatsSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<StatsSection />)// Add styling tests here;'
  })})