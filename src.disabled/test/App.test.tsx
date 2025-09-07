import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import App from '../components/App';'
describe('App', () => {test('renders without crashing', () => {render(<App />)expect(screen.getByTestId('app')).toBeInTheDocument()})test('displays correct content', () => {render(<App />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<App />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<App />)// Add styling tests here;'
  })})
import React from "React";"

