import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ThemeToggle from '../components/ThemeToggle';'
describe('ThemeToggle', () => {test('renders without crashing', () => {render(<ThemeToggle />)expect(screen.getByTestId('themetoggle')).toBeInTheDocument()})test('displays correct content', () => {render(<ThemeToggle />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ThemeToggle />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ThemeToggle />)// Add styling tests here;'
  })})