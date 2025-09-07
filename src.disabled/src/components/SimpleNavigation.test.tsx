import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import SimpleNavigation from '../components/SimpleNavigation';'
describe('SimpleNavigation', () => {test('renders without crashing', () => {render(<SimpleNavigation />)expect(screen.getByTestId('simplenavigation')).toBeInTheDocument()})test('displays correct content', () => {render(<SimpleNavigation />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<SimpleNavigation />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<SimpleNavigation />)// Add styling tests here;'
  })})