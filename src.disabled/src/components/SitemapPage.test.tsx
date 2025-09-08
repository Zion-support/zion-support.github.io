import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import SitemapPage from '../components/SitemapPage';'
describe('SitemapPage', () => {test('renders without crashing', () => {render(<SitemapPage />)expect(screen.getByTestId('sitemappage')).toBeInTheDocument()})test('displays correct content', () => {render(<SitemapPage />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<SitemapPage />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<SitemapPage />)// Add styling tests here;'
  })})