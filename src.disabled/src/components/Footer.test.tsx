import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import Footer from '../components/Footer';'
describe('Footer', () => {test('renders without crashing', () => {render(<Footer />)expect(screen.getByTestId('footer')).toBeInTheDocument()})test('displays correct content', () => {render(<Footer />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<Footer />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<Footer />)// Add styling tests here;'
  })})