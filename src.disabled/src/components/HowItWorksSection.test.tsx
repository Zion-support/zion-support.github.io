import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import HowItWorksSection from '../components/HowItWorksSection';'
describe('HowItWorksSection', () => {test('renders without crashing', () => {render(<HowItWorksSection />)expect(screen.getByTestId('howitworkssection')).toBeInTheDocument()})test('displays correct content', () => {render(<HowItWorksSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<HowItWorksSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<HowItWorksSection />)// Add styling tests here;'
  })})