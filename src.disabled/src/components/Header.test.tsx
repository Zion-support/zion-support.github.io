import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import Header from '../components/Header';'
describe('Header', () => {test('renders without crashing', () => {render(<Header />)expect(screen.getByTestId('header')).toBeInTheDocument()})test('displays correct content', () => {render(<Header />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<Header />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<Header />)// Add styling tests here;'
  })})