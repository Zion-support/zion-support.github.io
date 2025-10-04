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
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('App Component', () => {
  test('renders without crashing', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('renders header component', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('renders footer component', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders performance monitor', () => {
    renderWithRouter(<App />);
    expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
  });

  test('renders accessibility enhancer', () => {
    renderWithRouter(<App />);
    expect(screen.getByTestId('accessibility-enhancer')).toBeInTheDocument();
  });
});