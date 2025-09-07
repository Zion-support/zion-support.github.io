import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ModernNavigation from '../components/ModernNavigation';'
describe('ModernNavigation', () => {test('renders without crashing', () => {render(<ModernNavigation />)expect(screen.getByTestId('modernnavigation')).toBeInTheDocument()})test('displays correct content', () => {render(<ModernNavigation />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ModernNavigation />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ModernNavigation />)// Add styling tests here;'
  })})