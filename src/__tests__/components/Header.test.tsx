import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }: { children: React.ReactNode; to: string; [key: string]: unknown }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon" />,
  X: () => <div data-testid="x-icon" />,
}));

describe('Header', () => {
  test('renders header component', () => {
    render(<Header />);
    
    // Check if header renders
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('renders navigation menu', () => {
    render(<Header />);
    
    // Check if navigation is present
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('renders mobile menu toggle', () => {
    render(<Header />);
    
    // Check if mobile menu toggle is present
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  });
});