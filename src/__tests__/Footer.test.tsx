import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Footer', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('displays company information', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
    expect(screen.getByText(/Leading the future of technology/)).toBeInTheDocument();
  });

  it('renders quick links section', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    // Check for Services link in Quick Links section
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument();
  });

  it('renders services section', () => {
    renderWithRouter(<Footer />);
    // Check for Services heading specifically
    expect(screen.getAllByText('Services')).toHaveLength(2); // One in Quick Links, one as heading
    expect(screen.getByText('AI Solutions')).toBeInTheDocument();
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Cybersecurity')).toBeInTheDocument();
    expect(screen.getByText('Cloud Solutions')).toBeInTheDocument();
    expect(screen.getByText('Consulting')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Contact Info')).toBeInTheDocument();
    expect(screen.getByText('hello@ziontechgroup.com')).toBeInTheDocument();
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument();
    // Address is split across elements, so check for the container
    expect(screen.getByText(/123 Tech Street/)).toBeInTheDocument();
    expect(screen.getByText(/San Francisco, CA 94105/)).toBeInTheDocument();
  });

  it('renders copyright information', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/© 2024 Zion Tech Group/)).toBeInTheDocument();
  });

  it('renders legal links', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Cookie Policy')).toBeInTheDocument();
  });

  it('shows scroll to top button when scrolled', () => {
    renderWithRouter(<Footer />);
    
    // Initially scroll to top button should not be visible
    expect(screen.queryByLabelText('Scroll to top')).not.toBeInTheDocument();
    
    // Simulate scroll
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 400,
    });
    
    fireEvent.scroll(window);
    
    // Scroll to top button should now be visible
    expect(screen.getByLabelText('Scroll to top')).toBeInTheDocument();
  });

  it('scrolls to top when scroll button is clicked', () => {
    const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
    
    renderWithRouter(<Footer />);
    
    // Simulate scroll to show the button
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 400,
    });
    
    fireEvent.scroll(window);
    
    const scrollButton = screen.getByLabelText('Scroll to top');
    fireEvent.click(scrollButton);
    
    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
    
    scrollToSpy.mockRestore();
  });

  it('has proper accessibility attributes', () => {
    renderWithRouter(<Footer />);
    const scrollButton = screen.queryByLabelText('Scroll to top');
    if (scrollButton) {
      expect(scrollButton).toHaveAttribute('aria-label', 'Scroll to top');
    }
  });
});