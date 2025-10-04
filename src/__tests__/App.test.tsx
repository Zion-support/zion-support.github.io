import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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

// Mock components that might not be available
jest.mock('../components/SEOHead', () => {
  return function SEOHead() {
    return <div data-testid="seo-head">SEO Head</div>;
  };
});

jest.mock('../components/PerformanceMonitor', () => {
  return function PerformanceMonitor() {
    return <div data-testid="performance-monitor">Performance Monitor</div>;
  };
});

jest.mock('../components/AccessibilityEnhancer', () => {
  return function AccessibilityEnhancer() {
    return <div data-testid="accessibility-enhancer">Accessibility Enhancer</div>;
  };
});

jest.mock('../components/LoadingSpinner', () => ({
  LoadingSpinner: ({ size, message }: { size?: string; message?: string }) => (
    <div data-testid="loading-spinner">
      Loading... {message}
    </div>
  ),
}));

const renderApp = () => {
  return render(<App />);
};

describe('App Component', () => {
  test('renders without crashing', () => {
    renderApp();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('renders header component', () => {
    renderApp();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('renders footer component', () => {
    renderApp();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});