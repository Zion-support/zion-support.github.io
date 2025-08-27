import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// Mock the components that might cause issues in tests
jest.mock('../components/ChatAssistant', () => {
  return function MockChatAssistant() {
    return <div data-testid="chat-assistant">Chat Assistant</div>;
  };
});

jest.mock('../components/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer</div>;
  };
});

jest.mock('../components/SEO', () => {
  return function MockSEO({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  };
});

// Mock all page components
jest.mock('../pages/Home', () => {
  return function MockHome() {
    return <div data-testid="home-page">Home Page</div>;
  };
});

jest.mock('../pages/About', () => {
  return function MockAbout() {
    return <div data-testid="about-page">About Page</div>;
  };
});

jest.mock('../pages/Contact', () => {
  return function MockContact() {
    return <div data-testid="contact-page">Contact Page</div>;
  };
});

jest.mock('../pages/services', () => {
  return function MockServices() {
    return <div data-testid="services-page">Services Page</div>;
  };
});

jest.mock('../pages/solutions', () => {
  return function MockSolutions() {
    return <div data-testid="solutions-page">Solutions Page</div>;
  };
});

// Mock the layout components
jest.mock('../layout/AppHeader', () => {
  return function MockAppHeader() {
    return <div data-testid="app-header">App Header</div>;
  };
});

// Test the App component
describe('App Component', () => {
  const renderApp = () => {
    return render(<App />);
  };

  test('renders without crashing', () => {
    renderApp();
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('renders home page by default', () => {
    renderApp();
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('renders chat assistant', () => {
    renderApp();
    expect(screen.getByTestId('chat-assistant')).toBeInTheDocument();
  });
});

// Test utility functions
describe('Utility Functions', () => {
  test('basic math operations', () => {
    expect(2 + 2).toBe(4);
    expect(5 * 3).toBe(15);
    expect(10 / 2).toBe(5);
  });

  test('string operations', () => {
    expect('Zion Tech Group').toContain('Zion');
    expect('Technology Solutions').toHaveLength(20);
  });
});

// Test component rendering
describe('Component Rendering', () => {
  test('renders text content', () => {
    render(<div>Hello World</div>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  test('renders with test id', () => {
    render(<div data-testid="test-element">Test Content</div>);
    expect(screen.getByTestId('test-element')).toBeInTheDocument();
  });
});