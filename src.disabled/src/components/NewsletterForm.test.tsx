import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import NewsletterForm from '../components/NewsletterForm';'
describe('NewsletterForm', () => {test('renders without crashing', () => {render(<NewsletterForm />)expect(screen.getByTestId('newsletterform')).toBeInTheDocument()})test('displays correct content', () => {render(<NewsletterForm />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<NewsletterForm />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<NewsletterForm />)// Add styling tests here;'
  })})