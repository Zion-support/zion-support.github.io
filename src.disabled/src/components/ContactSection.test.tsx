import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ContactSection from '../components/ContactSection';'
describe('ContactSection', () => {test('renders without crashing', () => {render(<ContactSection />)expect(screen.getByTestId('contactsection')).toBeInTheDocument()})test('displays correct content', () => {render(<ContactSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ContactSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ContactSection />)// Add styling tests here;'
  })})