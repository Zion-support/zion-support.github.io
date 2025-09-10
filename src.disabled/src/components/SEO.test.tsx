import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import SEO from '../components/SEO';'
describe('SEO', () => {test('renders without crashing', () => {render(<SEO />)expect(screen.getByTestId('seo')).toBeInTheDocument()})test('displays correct content', () => {render(<SEO />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<SEO />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<SEO />)// Add styling tests here;'
  })})