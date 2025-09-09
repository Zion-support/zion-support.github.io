import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import NewsletterSection from '../components/NewsletterSection';'
describe('NewsletterSection', () => {test('renders without crashing', () => {render(<NewsletterSection />)expect(screen.getByTestId('newslettersection')).toBeInTheDocument()})test('displays correct content', () => {render(<NewsletterSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<NewsletterSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<NewsletterSection />)// Add styling tests here;'
  })})