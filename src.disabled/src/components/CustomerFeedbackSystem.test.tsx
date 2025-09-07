import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import CustomerFeedbackSystem from '../components/CustomerFeedbackSystem';'
describe('CustomerFeedbackSystem', () => {test('renders without crashing', () => {render(<CustomerFeedbackSystem />)expect(screen.getByTestId('customerfeedbacksystem')).toBeInTheDocument()})test('displays correct content', () => {render(<CustomerFeedbackSystem />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<CustomerFeedbackSystem />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<CustomerFeedbackSystem />)// Add styling tests here;'
  })})