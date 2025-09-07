import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import AccessibilityProvider from '../components/AccessibilityProvider';'
describe('AccessibilityProvider', () => {test('renders without crashing', () => {render(<AccessibilityProvider />)expect(screen.getByTestId('accessibilityprovider')).toBeInTheDocument()})test('displays correct content', () => {render(<AccessibilityProvider />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<AccessibilityProvider />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<AccessibilityProvider />)// Add styling tests here;'
  })})