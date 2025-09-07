import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import AdvancedSearch from '../components/AdvancedSearch';'
describe('AdvancedSearch', () => {test('renders without crashing', () => {render(<AdvancedSearch />)expect(screen.getByTestId('advancedsearch')).toBeInTheDocument()})test('displays correct content', () => {render(<AdvancedSearch />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<AdvancedSearch />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<AdvancedSearch />)// Add styling tests here;'
  })})