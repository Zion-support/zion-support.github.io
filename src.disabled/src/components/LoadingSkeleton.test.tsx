import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import LoadingSkeleton from '../components/LoadingSkeleton';'
describe('LoadingSkeleton', () => {test('renders without crashing', () => {render(<LoadingSkeleton />)expect(screen.getByTestId('loadingskeleton')).toBeInTheDocument()})test('displays correct content', () => {render(<LoadingSkeleton />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<LoadingSkeleton />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<LoadingSkeleton />)// Add styling tests here;'
  })})