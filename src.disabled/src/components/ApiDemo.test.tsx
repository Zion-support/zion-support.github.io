import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ApiDemo from '../components/ApiDemo';'
describe('ApiDemo', () => {test('renders without crashing', () => {render(<ApiDemo />)expect(screen.getByTestId('apidemo')).toBeInTheDocument()})test('displays correct content', () => {render(<ApiDemo />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ApiDemo />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ApiDemo />)// Add styling tests here;'
  })})