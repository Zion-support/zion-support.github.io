import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import MobileSidebarToggle from '../components/MobileSidebarToggle';'
describe('MobileSidebarToggle', () => {test('renders without crashing', () => {render(<MobileSidebarToggle />)expect(screen.getByTestId('mobilesidebartoggle')).toBeInTheDocument()})test('displays correct content', () => {render(<MobileSidebarToggle />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<MobileSidebarToggle />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<MobileSidebarToggle />)// Add styling tests here;'
  })})