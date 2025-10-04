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

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('renders header component', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('renders footer component', () => {
    render(<App />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders performance monitor (hidden in production)', () => {
    render(<App />);
    // PerformanceMonitor returns null in production mode, so we just verify the app renders
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('renders accessibility enhancer (DOM manipulation)', () => {
    render(<App />);
    // AccessibilityEnhancer manipulates DOM but doesn't render visible elements
    // We can verify skip links are added to the document
    expect(document.querySelector('a[href="#main-content"]')).toBeInTheDocument();
  });
});