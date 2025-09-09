import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import InteractiveTestimonials from '../components/InteractiveTestimonials';'
describe('InteractiveTestimonials', () => {test('renders without crashing', () => {render(<InteractiveTestimonials />)expect(screen.getByTestId('interactivetestimonials')).toBeInTheDocument()})test('displays correct content', () => {render(<InteractiveTestimonials />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<InteractiveTestimonials />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<InteractiveTestimonials />)// Add styling tests here;'
  })})