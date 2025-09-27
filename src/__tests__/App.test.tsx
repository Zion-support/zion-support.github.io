import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from '../router';

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

// Mock development components
jest.mock('../components/SystemDashboard', () => {
  return function MockSystemDashboard() {
    return null;
  };
});

jest.mock('../components/AccessibilityTester', () => {
  return function MockAccessibilityTester() {
    return null;
  };
});

jest.mock('../components/PerformanceProfiler', () => {
  return function MockPerformanceProfiler() {
    return null;
  };
});

// Import the components we need to test
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import NotFound from '../pages/NotFound';

describe('App Pages', () => {
  test('renders home page correctly', () => {
    render(
      <Layout>
        <Home />
      </Layout>
    );
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('renders blog page correctly', () => {
    render(
      <Layout>
        <Blog />
      </Layout>
    );
    expect(screen.getByTestId('blog-page')).toBeInTheDocument();
  });

  test('renders contact page correctly', () => {
    render(
      <Layout>
        <Contact />
      </Layout>
    );
    expect(screen.getByTestId('contact-page')).toBeInTheDocument();
  });

  test('renders about page correctly', () => {
    render(
      <Layout>
        <About />
      </Layout>
    );
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('renders services page correctly', () => {
    render(
      <Layout>
        <Services />
      </Layout>
    );
    expect(screen.getByTestId('services-page')).toBeInTheDocument();
  });

  test('renders portfolio page correctly', () => {
    render(
      <Layout>
        <Portfolio />
      </Layout>
    );
    expect(screen.getByTestId('portfolio-page')).toBeInTheDocument();
  });

  test('renders not found page correctly', () => {
    render(
      <Layout>
        <NotFound />
      </Layout>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });

  test('has skip link for accessibility', () => {
    render(
      <Layout>
        <Home />
      </Layout>
    );
    const skipLinks = screen.getAllByText('Skip to main content');
    expect(skipLinks.length).toBeGreaterThan(0);
    skipLinks.forEach(skipLink => {
      expect(skipLink).toHaveAttribute('href', '#main-content');
    });
  });

  test('has main content with correct id', () => {
    render(
      <Layout>
        <Home />
      </Layout>
    );
    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveAttribute('id', 'main-content');
  });
});