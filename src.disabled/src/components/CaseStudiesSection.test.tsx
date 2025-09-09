import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import CaseStudiesSection from '../components/CaseStudiesSection';'
describe('CaseStudiesSection', () => {test('renders without crashing', () => {render(<CaseStudiesSection />)expect(screen.getByTestId('casestudiessection')).toBeInTheDocument()})test('displays correct content', () => {render(<CaseStudiesSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<CaseStudiesSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<CaseStudiesSection />)// Add styling tests here;'
  })})