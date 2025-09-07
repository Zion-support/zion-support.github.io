import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ResponsiveNavigation from '../components/ResponsiveNavigation';'
describe('ResponsiveNavigation', () => {test('renders without crashing', () => {render(<ResponsiveNavigation />)expect(screen.getByTestId('responsivenavigation')).toBeInTheDocument()})test('displays correct content', () => {render(<ResponsiveNavigation />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ResponsiveNavigation />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ResponsiveNavigation />)// Add styling tests here;'
  })})