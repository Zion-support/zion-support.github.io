import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedServicesNavigation from '../components/EnhancedServicesNavigation';'
describe('EnhancedServicesNavigation', () => {test('renders without crashing', () => {render(<EnhancedServicesNavigation />)expect(screen.getByTestId('enhancedservicesnavigation')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedServicesNavigation />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedServicesNavigation />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedServicesNavigation />)// Add styling tests here;'
  })})