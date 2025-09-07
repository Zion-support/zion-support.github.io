import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import Search from '../components/Search';'
describe('Search', () => {test('renders without crashing', () => {render(<Search />)expect(screen.getByTestId('search')).toBeInTheDocument()})test('displays correct content', () => {render(<Search />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<Search />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<Search />)// Add styling tests here;'
  })})