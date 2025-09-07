import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ScrollToTop from '../components/ScrollToTop';'
describe('ScrollToTop', () => {test('renders without crashing', () => {render(<ScrollToTop />)expect(screen.getByTestId('scrolltotop')).toBeInTheDocument()})test('displays correct content', () => {render(<ScrollToTop />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ScrollToTop />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ScrollToTop />)// Add styling tests here;'
  })})