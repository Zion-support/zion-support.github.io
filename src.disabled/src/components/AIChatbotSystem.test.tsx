import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import AIChatbotSystem from '../components/AIChatbotSystem';'
describe('AIChatbotSystem', () => {test('renders without crashing', () => {render(<AIChatbotSystem />)expect(screen.getByTestId('aichatbotsystem')).toBeInTheDocument()})test('displays correct content', () => {render(<AIChatbotSystem />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<AIChatbotSystem />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<AIChatbotSystem />)// Add styling tests here;'
  })})