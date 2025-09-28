import React from 'react';
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Header', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('displays the logo and company name', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
    expect(screen.getByText('Z')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('toggles mobile menu when button is clicked', () => {
    renderWithRouter(<Header />);
    const menuButton = screen.getByLabelText('Toggle menu');
    
    // Initially mobile menu should not be visible (only desktop version)
    expect(screen.getAllByText('Home')).toHaveLength(1); // Only desktop version
    
    // Click to open mobile menu
    fireEvent.click(menuButton);
    
    // Mobile menu should now be visible (both desktop and mobile versions)
    expect(screen.getAllByText('Home')).toHaveLength(2); // Desktop + mobile versions
    
    // Click to close mobile menu
    fireEvent.click(menuButton);
    
    // Menu should be closed (only desktop version visible)
    expect(screen.getAllByText('Home')).toHaveLength(1); // Only desktop version
  });

  it('has proper accessibility attributes', () => {
    renderWithRouter(<Header />);
    const menuButton = screen.getByLabelText('Toggle menu');
    expect(menuButton).toHaveAttribute('aria-label', 'Toggle menu');
  });

  it('closes mobile menu when a link is clicked', () => {
    renderWithRouter(<Header />);
    const menuButton = screen.getByLabelText('Toggle menu');
    
    // Open mobile menu
    fireEvent.click(menuButton);
    expect(screen.getAllByText('Home')).toHaveLength(2); // Desktop + mobile versions
    
    // Click on a link (mobile version)
    const homeLinks = screen.getAllByText('Home');
    const mobileHomeLink = homeLinks[1]; // Get the mobile Home link
    fireEvent.click(mobileHomeLink);
    
    // Menu should be closed (only desktop version visible)
    expect(screen.getAllByText('Home')).toHaveLength(1); // Only desktop version
  });
});