import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../components/Footer';

const renderWithRouter = (ui: React.ReactElement) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('Footer', () => {
  test('renders company logo and name', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  test('renders company description', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/Leading the future of technology/)).toBeInTheDocument();
  });

  test('renders quick links section', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders services section', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('AI Solutions')).toBeInTheDocument();
    expect(screen.getByText('Cloud Infrastructure')).toBeInTheDocument();
    expect(screen.getByText('Cybersecurity')).toBeInTheDocument();
    expect(screen.getByText('Data Analytics')).toBeInTheDocument();
    expect(screen.getByText('Software Development')).toBeInTheDocument();
  });

  test('renders social media links', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
  });

  test('renders copyright notice', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/© 2024 Zion Tech Group. All rights reserved./)).toBeInTheDocument();
  });

  test('renders legal links', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Cookie Policy')).toBeInTheDocument();
  });

  test('has proper accessibility attributes for social links', () => {
    renderWithRouter(<Footer />);
    const linkedinLink = screen.getByLabelText('LinkedIn');
    const twitterLink = screen.getByLabelText('Twitter');
    const githubLink = screen.getByLabelText('GitHub');
    
    expect(linkedinLink).toHaveAttribute('aria-label', 'LinkedIn');
    expect(twitterLink).toHaveAttribute('aria-label', 'Twitter');
    expect(githubLink).toHaveAttribute('aria-label', 'GitHub');
  });
});