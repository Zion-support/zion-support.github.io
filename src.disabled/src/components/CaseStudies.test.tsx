import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import CaseStudies from '../components/CaseStudies';'
describe('CaseStudies', () => {test('renders without crashing', () => {render(<CaseStudies />)expect(screen.getByTestId('casestudies')).toBeInTheDocument()})test('displays correct content', () => {render(<CaseStudies />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<CaseStudies />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<CaseStudies />)// Add styling tests here;'
  })})