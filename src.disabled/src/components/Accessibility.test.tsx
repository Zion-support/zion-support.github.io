import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import Accessibility from '../components/Accessibility';'
describe('Accessibility', () => {test('renders without crashing', () => {render(<Accessibility />)expect(screen.getByTestId('accessibility')).toBeInTheDocument()})test('displays correct content', () => {render(<Accessibility />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<Accessibility />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<Accessibility />)// Add styling tests here;'
  })})