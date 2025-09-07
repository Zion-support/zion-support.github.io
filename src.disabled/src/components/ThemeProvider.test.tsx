import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ThemeProvider from '../components/ThemeProvider';'
describe('ThemeProvider', () => {test('renders without crashing', () => {render(<ThemeProvider />)expect(screen.getByTestId('themeprovider')).toBeInTheDocument()})test('displays correct content', () => {render(<ThemeProvider />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ThemeProvider />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ThemeProvider />)// Add styling tests here;'
  })})