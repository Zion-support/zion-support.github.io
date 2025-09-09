import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ResourceManagementSystem from '../components/ResourceManagementSystem';'
describe('ResourceManagementSystem', () => {test('renders without crashing', () => {render(<ResourceManagementSystem />)expect(screen.getByTestId('resourcemanagementsystem')).toBeInTheDocument()})test('displays correct content', () => {render(<ResourceManagementSystem />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ResourceManagementSystem />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ResourceManagementSystem />)// Add styling tests here;'
  })})