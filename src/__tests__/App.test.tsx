import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock the lazy-loaded components
jest.mock('../pages/Home', () => {
  return function MockHome() {
    return <div data-testid="home-page">Home Page</div>;
  };
});

jest.mock('../pages/Blog', () => {
  return function MockBlog() {
    return <div data-testid="blog-page">Blog Page</div>;
  };
});

jest.mock('../pages/Contact', () => {
  return function MockContact() {
    return <div data-testid="contact-page">Contact Page</div>;
  };
});

jest.mock('../pages/About', () => {
  return function MockAbout() {
    return <div data-testid="about-page">About Page</div>;
  };
});

jest.mock('../pages/Services', () => {
  return function MockServices() {
    return <div data-testid="services-page">Services Page</div>;
  };
});

jest.mock('../pages/Portfolio', () => {
  return function MockPortfolio() {
    return <div data-testid="portfolio-page">Portfolio Page</div>;
  };
});

jest.mock('../pages/NotFound', () => {
  return function MockNotFound() {
    return <div data-testid="not-found-page">Not Found Page</div>;
  };
});

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui);
};

describe('App', () => {
  test('renders home page by default', () => {
    renderWithRouter(<App />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('renders blog page when navigating to /blog', () => {
    renderWithRouter(<App />, { route: '/blog' });
    expect(screen.getByTestId('blog-page')).toBeInTheDocument();
  });

  test('renders contact page when navigating to /contact', () => {
    renderWithRouter(<App />, { route: '/contact' });
    expect(screen.getByTestId('contact-page')).toBeInTheDocument();
  });

  test('renders about page when navigating to /about', () => {
    renderWithRouter(<App />, { route: '/about' });
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('renders services page when navigating to /services', () => {
    renderWithRouter(<App />, { route: '/services' });
    expect(screen.getByTestId('services-page')).toBeInTheDocument();
  });

  test('renders portfolio page when navigating to /portfolio', () => {
    renderWithRouter(<App />, { route: '/portfolio' });
    expect(screen.getByTestId('portfolio-page')).toBeInTheDocument();
  });

  test('renders not found page for unknown routes', () => {
    renderWithRouter(<App />, { route: '/unknown-route' });
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });

  test('has skip link for accessibility', () => {
    renderWithRouter(<App />);
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('has main content with correct id', () => {
    renderWithRouter(<App />);
    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveAttribute('id', 'main-content');
  });
});