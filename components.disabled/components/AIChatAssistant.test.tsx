import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import AIChatAssistant from '../components/AIChatAssistant';
describe('AIChatAssistant', () => {test('renders without crashing', () => {render(<AIChatAssistant />)expect(screen.getByTestId('aichatassistant')).toBeInTheDocument()})test('displays correct content', () => {render(<AIChatAssistant />)// Add specific content tests here;
  })test('handles user interactions', () => {render(<AIChatAssistant />)// Add interaction tests here;
  })test('applies correct styling', () => {render(<AIChatAssistant />)// Add styling tests here;
  })})