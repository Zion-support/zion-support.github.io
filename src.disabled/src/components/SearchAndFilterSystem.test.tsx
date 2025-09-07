import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import SearchAndFilterSystem from '../components/SearchAndFilterSystem';'
describe('SearchAndFilterSystem', () => {test('renders without crashing', () => {render(<SearchAndFilterSystem />)expect(screen.getByTestId('searchandfiltersystem')).toBeInTheDocument()})test('displays correct content', () => {render(<SearchAndFilterSystem />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<SearchAndFilterSystem />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<SearchAndFilterSystem />)// Add styling tests here;'
  })})