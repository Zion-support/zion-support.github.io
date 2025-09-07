import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import Sidebar from '../components/Sidebar';'
describe('Sidebar', () => {test('renders without crashing', () => {render(<Sidebar />)expect(screen.getByTestId('sidebar')).toBeInTheDocument()})test('displays correct content', () => {render(<Sidebar />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<Sidebar />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<Sidebar />)// Add styling tests here;'
  })})