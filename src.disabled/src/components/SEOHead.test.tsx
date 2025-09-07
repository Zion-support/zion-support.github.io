import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import SEOHead from '../components/SEOHead';'
describe('SEOHead', () => {test('renders without crashing', () => {render(<SEOHead />)expect(screen.getByTestId('seohead')).toBeInTheDocument()})test('displays correct content', () => {render(<SEOHead />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<SEOHead />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<SEOHead />)// Add styling tests here;'
  })})