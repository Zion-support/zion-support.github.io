import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ChatAssistant from '../components/ChatAssistant';'
describe('ChatAssistant', () => {test('renders without crashing', () => {render(<ChatAssistant />)expect(screen.getByTestId('chatassistant')).toBeInTheDocument()})test('displays correct content', () => {render(<ChatAssistant />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ChatAssistant />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ChatAssistant />)// Add styling tests here;'
  })})