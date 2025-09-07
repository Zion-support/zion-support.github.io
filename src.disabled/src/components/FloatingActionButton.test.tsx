import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import FloatingActionButton from '../components/FloatingActionButton';'
describe('FloatingActionButton', () => {test('renders without crashing', () => {render(<FloatingActionButton />)expect(screen.getByTestId('floatingactionbutton')).toBeInTheDocument()})test('displays correct content', () => {render(<FloatingActionButton />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<FloatingActionButton />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<FloatingActionButton />)// Add styling tests here;'
  })})