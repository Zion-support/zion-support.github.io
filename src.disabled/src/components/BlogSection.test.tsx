import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import BlogSection from '../components/BlogSection';'
describe('BlogSection', () => {test('renders without crashing', () => {render(<BlogSection />)expect(screen.getByTestId('blogsection')).toBeInTheDocument()})test('displays correct content', () => {render(<BlogSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<BlogSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<BlogSection />)// Add styling tests here;'
  })})