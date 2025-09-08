import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ServicesGrid from '../components/ServicesGrid';'
describe('ServicesGrid', () => {test('renders without crashing', () => {render(<ServicesGrid />)expect(screen.getByTestId('servicesgrid')).toBeInTheDocument()})test('displays correct content', () => {render(<ServicesGrid />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ServicesGrid />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ServicesGrid />)// Add styling tests here;'
  })})