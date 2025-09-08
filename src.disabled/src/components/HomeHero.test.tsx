import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import HomeHero from '../components/HomeHero';'
describe('HomeHero', () => {test('renders without crashing', () => {render(<HomeHero />)expect(screen.getByTestId('homehero')).toBeInTheDocument()})test('displays correct content', () => {render(<HomeHero />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<HomeHero />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<HomeHero />)// Add styling tests here;'
  })})