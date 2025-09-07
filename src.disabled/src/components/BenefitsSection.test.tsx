import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import BenefitsSection from '../components/BenefitsSection';'
describe('BenefitsSection', () => {test('renders without crashing', () => {render(<BenefitsSection />)expect(screen.getByTestId('benefitssection')).toBeInTheDocument()})test('displays correct content', () => {render(<BenefitsSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<BenefitsSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<BenefitsSection />)// Add styling tests here;'
  })})