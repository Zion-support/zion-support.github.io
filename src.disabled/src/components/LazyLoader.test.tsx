import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import LazyLoader from '../components/LazyLoader';'
describe('LazyLoader', () => {test('renders without crashing', () => {render(<LazyLoader />)expect(screen.getByTestId('lazyloader')).toBeInTheDocument()})test('displays correct content', () => {render(<LazyLoader />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<LazyLoader />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<LazyLoader />)// Add styling tests here;'
  })})