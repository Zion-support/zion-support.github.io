import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import Spinner from '../components/Spinner';'
describe('Spinner', () => {test('renders without crashing', () => {render(<Spinner />)expect(screen.getByTestId('spinner')).toBeInTheDocument()})test('displays correct content', () => {render(<Spinner />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<Spinner />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<Spinner />)// Add styling tests here;'
  })})