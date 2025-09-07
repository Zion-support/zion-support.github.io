import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import Sitemap from '../components/Sitemap';'
describe('Sitemap', () => {test('renders without crashing', () => {render(<Sitemap />)expect(screen.getByTestId('sitemap')).toBeInTheDocument()})test('displays correct content', () => {render(<Sitemap />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<Sitemap />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<Sitemap />)// Add styling tests here;'
  })})