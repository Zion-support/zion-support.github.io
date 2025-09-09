import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import FooterNewsletter from '../components/FooterNewsletter';'
describe('FooterNewsletter', () => {test('renders without crashing', () => {render(<FooterNewsletter />)expect(screen.getByTestId('footernewsletter')).toBeInTheDocument()})test('displays correct content', () => {render(<FooterNewsletter />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<FooterNewsletter />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<FooterNewsletter />)// Add styling tests here;'
  })})