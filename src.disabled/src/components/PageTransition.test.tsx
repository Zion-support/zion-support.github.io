import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import PageTransition from '../components/PageTransition';'
describe('PageTransition', () => {test('renders without crashing', () => {render(<PageTransition />)expect(screen.getByTestId('pagetransition')).toBeInTheDocument()})test('displays correct content', () => {render(<PageTransition />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<PageTransition />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<PageTransition />)// Add styling tests here;'
  })})