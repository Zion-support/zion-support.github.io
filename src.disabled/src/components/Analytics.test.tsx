import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import Analytics from '../components/Analytics';'
describe('Analytics', () => {test('renders without crashing', () => {render(<Analytics />)expect(screen.getByTestId('analytics')).toBeInTheDocument()})test('displays correct content', () => {render(<Analytics />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<Analytics />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<Analytics />)// Add styling tests here;'
  })})