import React from 'react';
import { render, screen } from '@testing-library/react';
import AIChatbotSystem from '../src/components/AIChatbotSystem';

test('renders AI Chatbot System', () => {
  render(<AIChatbotSystem />);
  const heading = screen.getByText(/AI Chatbot System/i);
  expect(heading).toBeInTheDocument();
});