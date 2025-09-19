import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../test/testUtils';
import AIChatAssistant from '../components/AIChatAssistant';
describe('AIChatAssistant Integration Tests', () => {,
  beforeEach(() => {,
    // Clear any previous state,
    jest.clearAllMocks();
  });
  it('should render the AI assistant interface', () => {,
    renderWithProviders(<AIChatAssistant />);
    expect(screen.getByText('AI Assistant')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type your message...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('should send a message when user types and clicks send', async () => {,
    renderWithProviders(<AIChatAssistant />);
    const input = screen.getByPlaceholderText('Type your message...');
    const sendButton = screen.getByRole('button');
    fireEvent.change(input, { target: { value: 'Hello AI' ,} });
    fireEvent.click(sendButton);
    await waitFor(() => {,
      expect(screen.getByText('Hello AI')).toBeInTheDocument();
    });
  });
  it('should send a message when user presses Enter', async () => {,
    renderWithProviders(<AIChatAssistant />);
    const input = screen.getByPlaceholderText('Type your message...');
    fireEvent.change(input, { target: { value: 'Hello AI' ,} });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter' ,});
    await waitFor(() => {,
      expect(screen.getByText('Hello AI')).toBeInTheDocument();
    });
  });
  it('should not send empty messages', () => {,
    renderWithProviders(<AIChatAssistant />);
    const sendButton = screen.getByRole('button');
    expect(sendButton).toBeDisabled();
  });
  it('should display AI response after sending message', async () => {,
    renderWithProviders(<AIChatAssistant />);
    const input = screen.getByPlaceholderText('Type your message...');
    const sendButton = screen.getByRole('button');
    fireEvent.change(input, { target: { value: 'Hello AI' ,} });
    fireEvent.click(sendButton);
    // Wait for AI response,
    await waitFor(() => {,
      expect(screen.getByText(/I understand: "Hello AI"/)).toBeInTheDocument(),}, { timeout: 2000 ,});
  });
});