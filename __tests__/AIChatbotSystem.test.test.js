import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AIChatbotSystem from '../src/components/AIChatbotSystem';

test('renders AI Chatbot System test', () => {
  render(<AIChatbotSystem />);
  const heading = screen.getByText(/AI Chatbot System/i);
  expect(heading).toBeInTheDocument();
});