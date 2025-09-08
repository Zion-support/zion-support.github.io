import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedHeroSection from '../components/EnhancedHeroSection';'
describe('EnhancedHeroSection', () => {test('renders without crashing', () => {render(<EnhancedHeroSection />)expect(screen.getByTestId('enhancedherosection')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedHeroSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedHeroSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedHeroSection />)// Add styling tests here;'
  })})