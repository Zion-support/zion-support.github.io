import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import NewsletterSubscription from '../components/NewsletterSubscription';'
describe('NewsletterSubscription', () => {test('renders without crashing', () => {render(<NewsletterSubscription />)expect(screen.getByTestId('newslettersubscription')).toBeInTheDocument()})test('displays correct content', () => {render(<NewsletterSubscription />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<NewsletterSubscription />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<NewsletterSubscription />)// Add styling tests here;'
  })})