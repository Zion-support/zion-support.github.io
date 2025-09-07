import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import sanity from '../components/sanity';'
describe('sanity', () => {test('renders without crashing', () => {render(<sanity />)expect(screen.getByTestId('sanity')).toBeInTheDocument()})test('displays correct content', () => {render(<sanity />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<sanity />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<sanity />)// Add styling tests here;'
  })})