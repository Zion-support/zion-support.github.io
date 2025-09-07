import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ClientSuccessStoriesSection from '../components/ClientSuccessStoriesSection';'
describe('ClientSuccessStoriesSection', () => {test('renders without crashing', () => {render(<ClientSuccessStoriesSection />)expect(screen.getByTestId('clientsuccessstoriessection')).toBeInTheDocument()})test('displays correct content', () => {render(<ClientSuccessStoriesSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ClientSuccessStoriesSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ClientSuccessStoriesSection />)// Add styling tests here;'
  })})