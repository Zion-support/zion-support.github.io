import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    nav: ({
      children,
      ...props
    }: {
      children: React.ReactNode;
      [key: string]: unknown;
    }) => <nav {...props}>{children}</nav>,
    div: ({
      children,
      ...props
    }: {
      children: React.ReactNode;
      [key: string]: unknown;
    }) => <div {...props}>{children}</div>,
    button: ({
      children,
      ...props
    }: {
      children: React.ReactNode;
      [key: string]: unknown;
    }) => <button {...props}>{children}</button>,
  },
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Header Component', () => {
  test('renders header with navigation', () => {
    renderWithRouter(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('renders company name', () => {
    renderWithRouter(<Header />);

    const logo = screen.getByText('Zion Tech Group');
    expect(logo).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithRouter(<Header />);

    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders get started button', () => {
    renderWithRouter(<Header />);

    const getStartedButton = screen.getByText('Get Started');
    expect(getStartedButton).toBeInTheDocument();
  });
});
