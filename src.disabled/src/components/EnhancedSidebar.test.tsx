import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedSidebar from '../components/EnhancedSidebar';'
describe('EnhancedSidebar', () => {test('renders without crashing', () => {render(<EnhancedSidebar />)expect(screen.getByTestId('enhancedsidebar')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedSidebar />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedSidebar />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedSidebar />)// Add styling tests here;'
  })})