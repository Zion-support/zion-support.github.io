import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import SearchComponent from '../components/SearchComponent';'
describe('SearchComponent', () => {test('renders without crashing', () => {render(<SearchComponent />)expect(screen.getByTestId('searchcomponent')).toBeInTheDocument()})test('displays correct content', () => {render(<SearchComponent />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<SearchComponent />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<SearchComponent />)// Add styling tests here;'
  })})