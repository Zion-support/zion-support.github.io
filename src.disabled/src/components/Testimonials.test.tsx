import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import Testimonials from '../components/Testimonials';'
describe('Testimonials', () => {test('renders without crashing', () => {render(<Testimonials />)expect(screen.getByTestId('testimonials')).toBeInTheDocument()})test('displays correct content', () => {render(<Testimonials />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<Testimonials />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<Testimonials />)// Add styling tests here;'
  })})