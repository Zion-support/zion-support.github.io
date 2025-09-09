import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ProtectedRoute from '../components/ProtectedRoute';'
describe('ProtectedRoute', () => {test('renders without crashing', () => {render(<ProtectedRoute />)expect(screen.getByTestId('protectedroute')).toBeInTheDocument()})test('displays correct content', () => {render(<ProtectedRoute />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ProtectedRoute />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ProtectedRoute />)// Add styling tests here;'
  })})