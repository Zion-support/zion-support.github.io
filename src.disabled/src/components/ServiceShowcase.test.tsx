import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ServiceShowcase from '../components/ServiceShowcase';'
describe('ServiceShowcase', () => {test('renders without crashing', () => {render(<ServiceShowcase />)expect(screen.getByTestId('serviceshowcase')).toBeInTheDocument()})test('displays correct content', () => {render(<ServiceShowcase />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ServiceShowcase />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ServiceShowcase />)// Add styling tests here;'
  })})