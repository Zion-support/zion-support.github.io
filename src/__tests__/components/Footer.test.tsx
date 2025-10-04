import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../components/Footer';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    footer: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <footer {...props}>{children}</footer>,
    div: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => <div {...props}>{children}</div>,
  },
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Footer Component', () => {
  test('renders footer', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders company information', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('renders social media links', () => {
    renderWithRouter(<Footer />);
    
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  test('renders copyright information', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText(/© \d{4}/)).toBeInTheDocument();
  });
});