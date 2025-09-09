import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import AdvancedAIServicesHub from '../components/AdvancedAIServicesHub';'
describe('AdvancedAIServicesHub', () => {test('renders without crashing', () => {render(<AdvancedAIServicesHub />)expect(screen.getByTestId('advancedaiserviceshub')).toBeInTheDocument()})test('displays correct content', () => {render(<AdvancedAIServicesHub />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<AdvancedAIServicesHub />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<AdvancedAIServicesHub />)// Add styling tests here;'
  })})