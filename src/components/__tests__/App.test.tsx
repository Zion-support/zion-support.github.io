import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

// Mock the components to avoid complex dependencies
jest.mock('../../layout/AppHeader', () => ({
  AppHeader: () => <div data-testid="app-header">App Header</div>
}));

jest.mock('../../components/Footer', () => ({
  Footer: () => <div data-testid="footer">Footer</div>
}));

jest.mock('../../components/ChatAssistant', () => ({
  ChatAssistant: () => <div data-testid="chat-assistant">Chat Assistant</div>
}));

jest.mock('../../pages/Home', () => ({
  __esModule: true,
  default: () => <div data-testid="home-page">Home Page</div>
}));

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('chat-assistant')).toBeInTheDocument();
  });
});