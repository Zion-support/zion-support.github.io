import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import MobileNavigation from '../components/MobileNavigation';'
describe('MobileNavigation', () => {test('renders without crashing', () => {render(<MobileNavigation />)expect(screen.getByTestId('mobilenavigation')).toBeInTheDocument()})test('displays correct content', () => {render(<MobileNavigation />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<MobileNavigation />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<MobileNavigation />)// Add styling tests here;'
  })})