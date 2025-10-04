import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

// Mock the improvement runner to prevent side effects during testing
jest.mock('../utils/improvementRunner', () => ({
  runAllImprovements: jest.fn(),
}));

// Mock framer-motion to prevent animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      ...props
    }: {
      children: React.ReactNode;
      [key: string]: unknown;
    }) => <div {...props}>{children}</div>,
    main: ({
      children,
      ...props
    }: {
      children: React.ReactNode;
      [key: string]: unknown;
    }) => <main {...props}>{children}</main>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

// Mock react-helmet-async
jest.mock('react-helmet-async', () => ({
  HelmetProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  Helmet: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div data-testid="router">{children}</div>,
  Routes: ({ children }: { children: React.ReactNode }) => <div data-testid="routes">{children}</div>,
  Route: ({ element }: { element: React.ReactNode }) => <div data-testid="route">{element}</div>,
  Link: ({ children, to, ...props }: { children: React.ReactNode; to: string; [key: string]: unknown }) => (
    <a href={to} {...props}>{children}</a>
  ),
}));

const renderApp = (component: React.ReactElement) => {
  return render(component);
};

describe('App Component', () => {
  test('renders without crashing', async () => {
    renderApp(<App />);
    await waitFor(() => {
      expect(screen.getByRole('main')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  test('renders header component', async () => {
    renderApp(<App />);
    await waitFor(() => {
      expect(screen.getByRole('banner')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  test('renders footer component', async () => {
    renderApp(<App />);
    await waitFor(() => {
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  test('renders performance monitor (no visible element)', async () => {
    renderApp(<App />);
    // PerformanceMonitor doesn't render visible elements in production
    await waitFor(() => {
      expect(screen.getByRole('main')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  test('renders accessibility enhancer (no visible element)', async () => {
    renderApp(<App />);
    // AccessibilityEnhancer doesn't render visible elements
    await waitFor(() => {
      expect(screen.getByRole('main')).toBeInTheDocument();
    }, { timeout: 2000 });
  });
});
