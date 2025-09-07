import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import FloatingCTA from '../components/FloatingCTA';'
describe('FloatingCTA', () => {test('renders without crashing', () => {render(<FloatingCTA />)expect(screen.getByTestId('floatingcta')).toBeInTheDocument()})test('displays correct content', () => {render(<FloatingCTA />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<FloatingCTA />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<FloatingCTA />)// Add styling tests here;'
  })})