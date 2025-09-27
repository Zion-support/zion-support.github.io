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
    
    // Mobile menu container should not be visible initially
    const mobileMenuContainer = screen.queryByText('Home')?.closest('div')?.parentElement;
    expect(mobileMenuContainer).not.toBeVisible();
    
    // Click to open menu
    fireEvent.click(hamburgerButton);
    
    // Mobile menu should be open - check for the mobile nav container
    const mobileNavContainer = document.querySelector('.md\\:hidden');
    expect(mobileNavContainer).toBeVisible();
    
    // Click to close menu
    fireEvent.click(hamburgerButton);
    
    // Mobile menu should be closed again
    expect(mobileNavContainer).not.toBeVisible();
  });

  test('closes mobile menu when navigation link is clicked', () => {
    renderWithRouter(<Header />);
    const hamburgerButton = screen.getByLabelText('Toggle menu');
    
    // Open menu
    fireEvent.click(hamburgerButton);
    const mobileNavContainer = document.querySelector('.md\\:hidden');
    expect(mobileNavContainer).toBeVisible();
    
    // Click on a navigation link in the mobile menu
    const mobileAboutLink = screen.getAllByText('About').find(link => 
      link.closest('nav')?.parentElement?.classList.contains('md:hidden')
    );
    fireEvent.click(mobileAboutLink!);
    
    // Menu should be closed
    expect(mobileNavContainer).not.toBeVisible();
  });

  test('has proper accessibility attributes', () => {
    renderWithRouter(<Header />);
    const hamburgerButton = screen.getByLabelText('Toggle menu');
    expect(hamburgerButton).toHaveAttribute('aria-label', 'Toggle menu');
  });
});