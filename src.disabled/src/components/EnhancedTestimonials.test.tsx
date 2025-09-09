import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import EnhancedTestimonials from '../components/EnhancedTestimonials';'
describe('EnhancedTestimonials', () => {test('renders without crashing', () => {render(<EnhancedTestimonials />)expect(screen.getByTestId('enhancedtestimonials')).toBeInTheDocument()})test('displays correct content', () => {render(<EnhancedTestimonials />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<EnhancedTestimonials />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<EnhancedTestimonials />)// Add styling tests here;'
  })})