import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import BundleAnalyzer from '../components/BundleAnalyzer';'
describe('BundleAnalyzer', () => {test('renders without crashing', () => {render(<BundleAnalyzer />)expect(screen.getByTestId('bundleanalyzer')).toBeInTheDocument()})test('displays correct content', () => {render(<BundleAnalyzer />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<BundleAnalyzer />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<BundleAnalyzer />)// Add styling tests here;'
  })})