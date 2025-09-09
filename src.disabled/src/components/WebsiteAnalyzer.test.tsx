import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import WebsiteAnalyzer from '../components/WebsiteAnalyzer';'
describe('WebsiteAnalyzer', () => {test('renders without crashing', () => {render(<WebsiteAnalyzer />)expect(screen.getByTestId('websiteanalyzer')).toBeInTheDocument()})test('displays correct content', () => {render(<WebsiteAnalyzer />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<WebsiteAnalyzer />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<WebsiteAnalyzer />)// Add styling tests here;'
  })})