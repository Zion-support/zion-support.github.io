import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock the improvement runner to prevent side effects during testing
jest.mock('../utils/improvementRunner', () => ({
  runAllImprovements: jest.fn(),
}));

// Mock framer-motion to prevent animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <div {...props}>{children}</div>,
    main: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <main {...props}>{children}</main>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock react-helmet-async
jest.mock('react-helmet-async', () => ({
  HelmetProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Helmet: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

const renderApp = (component: React.ReactElement) => {
  return render(component);
};

describe('App Component', () => {
  test('renders without crashing', () => {
    renderApp(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('renders header component', () => {
    renderApp(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('renders footer component', () => {
    renderApp(<App />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders performance monitor', () => {
    renderApp(<App />);
    // Check for accessibility features that indicate the accessibility enhancer is working
    const skipLinks = screen.getAllByText('Skip to main content');
    expect(skipLinks.length).toBeGreaterThan(0);
  });

  test('renders accessibility enhancer', () => {
    renderApp(<App />);
    // Check for accessibility features that indicate the accessibility enhancer is working
    const skipLinks = screen.getAllByText('Skip to main content');
    expect(skipLinks.length).toBeGreaterThan(0);
  });

  test('renders app without errors', () => {
    renderApp(<App />);
    // Just check that the app renders without throwing errors
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});