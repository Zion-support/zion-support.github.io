import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

const renderWithRouter = (ui: React.ReactElement) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('Header', () => {
  test('renders logo and company name', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders get started button', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  test('toggles mobile menu when hamburger button is clicked', () => {
    renderWithRouter(<Header />);
    const hamburgerButton = screen.getByLabelText('Toggle menu');
    
    // Menu should be closed initially
    expect(screen.queryByText('Home')).not.toBeVisible();
    
    // Click to open menu
    fireEvent.click(hamburgerButton);
    
    // Menu should be open
    expect(screen.getByText('Home')).toBeVisible();
    
    // Click to close menu
    fireEvent.click(hamburgerButton);
    
    // Menu should be closed again
    expect(screen.queryByText('Home')).not.toBeVisible();
  });

  test('closes mobile menu when navigation link is clicked', () => {
    renderWithRouter(<Header />);
    const hamburgerButton = screen.getByLabelText('Toggle menu');
    
    // Open menu
    fireEvent.click(hamburgerButton);
    expect(screen.getByText('Home')).toBeVisible();
    
    // Click on a navigation link
    fireEvent.click(screen.getByText('About'));
    
    // Menu should be closed
    expect(screen.queryByText('Home')).not.toBeVisible();
  });

  test('has proper accessibility attributes', () => {
    renderWithRouter(<Header />);
    const hamburgerButton = screen.getByLabelText('Toggle menu');
    expect(hamburgerButton).toHaveAttribute('aria-label', 'Toggle menu');
  });
});