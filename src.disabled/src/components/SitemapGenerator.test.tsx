import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import SitemapGenerator from '../components/SitemapGenerator';'
describe('SitemapGenerator', () => {test('renders without crashing', () => {render(<SitemapGenerator />)expect(screen.getByTestId('sitemapgenerator')).toBeInTheDocument()})test('displays correct content', () => {render(<SitemapGenerator />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<SitemapGenerator />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<SitemapGenerator />)// Add styling tests here;'
  })})