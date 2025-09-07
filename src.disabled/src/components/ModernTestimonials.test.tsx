import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ModernTestimonials from '../components/ModernTestimonials';'
describe('ModernTestimonials', () => {test('renders without crashing', () => {render(<ModernTestimonials />)expect(screen.getByTestId('moderntestimonials')).toBeInTheDocument()})test('displays correct content', () => {render(<ModernTestimonials />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ModernTestimonials />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ModernTestimonials />)// Add styling tests here;'
  })})