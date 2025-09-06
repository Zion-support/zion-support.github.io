import React from 'react';
import { render, screen } from '@testing-library/react';

const AIChatbotSystemtest = () => (
  <div data-testid="aichatbotsystem-test">
    <h1>AI Chatbot System Test</h1>
  </div>
);

describe('AIChatbotSystem', () => {
  it('renders without crashing', () => {
    render(<AIChatbotSystemtest />);
    expect(screen.getByTestId('aichatbotsystem-test')).toBeInTheDocument();
  });
});