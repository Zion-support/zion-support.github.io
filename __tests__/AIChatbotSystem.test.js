<<<<<<< HEAD
import React from 'react';''
import '@testing-library/jest-dom';'
// Mock component for testing;
const AIChatbotSystemtest = () => (')
  <div data-testid="aichatbotsystem-test">"
</div>
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock component for testing
const AIChatbotSystemtest = () => (
  <div data-testid="aichatbotsystem-test">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
    <h1>AI Chatbot System Test</h1>
  </div>
);

describe('AIChatbotSystem', () => {
  it('renders without crashing', () => {
    render(<AIChatbotSystemtest />);
    expect(screen.getByTestId('aichatbotsystem-test')).toBeInTheDocument();
  });
});