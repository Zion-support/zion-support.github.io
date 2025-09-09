import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedTestimonialsSection from '../components/EnhancedTestimonialsSection';'
describe('EnhancedTestimonialsSection', () => {test('renders without crashing', () => {render(<EnhancedTestimonialsSection />)expect(screen.getByTestId('enhancedtestimonialssection')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedTestimonialsSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedTestimonialsSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedTestimonialsSection />)// Add styling tests here;'
  })})