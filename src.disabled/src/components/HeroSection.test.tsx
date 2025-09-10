import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import HeroSection from '../components/HeroSection';'
describe('HeroSection', () => {test('renders without crashing', () => {render(<HeroSection />)expect(screen.getByTestId('herosection')).toBeInTheDocument()})test('displays correct content', () => {render(<HeroSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<HeroSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<HeroSection />)// Add styling tests here;'
  })})