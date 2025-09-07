import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import TestimonialsSection from '../components/TestimonialsSection';'
describe('TestimonialsSection', () => {test('renders without crashing', () => {render(<TestimonialsSection />)expect(screen.getByTestId('testimonialssection')).toBeInTheDocument()})test('displays correct content', () => {render(<TestimonialsSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<TestimonialsSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<TestimonialsSection />)// Add styling tests here;'
  })})