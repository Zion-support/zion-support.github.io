import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ContactCTA from '../components/ContactCTA';'
describe('ContactCTA', () => {test('renders without crashing', () => {render(<ContactCTA />)expect(screen.getByTestId('contactcta')).toBeInTheDocument()})test('displays correct content', () => {render(<ContactCTA />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ContactCTA />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ContactCTA />)// Add styling tests here;'
  })})