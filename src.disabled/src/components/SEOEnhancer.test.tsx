import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import SEOEnhancer from '../components/SEOEnhancer';'
describe('SEOEnhancer', () => {test('renders without crashing', () => {render(<SEOEnhancer />)expect(screen.getByTestId('seoenhancer')).toBeInTheDocument()})test('displays correct content', () => {render(<SEOEnhancer />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<SEOEnhancer />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<SEOEnhancer />)// Add styling tests here;'
  })})