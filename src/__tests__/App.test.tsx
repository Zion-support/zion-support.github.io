import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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
const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui);
};

describe('App', () => {
  test('renders home page by default', async () => {
    renderWithRouter(<App />);
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });

  test('renders blog page when navigating to /blog', async () => {
    renderWithRouter(<App />, { route: '/blog' });
    await waitFor(() => {
      expect(screen.getByTestId('blog-page')).toBeInTheDocument();
    });
  });

  test('renders contact page when navigating to /contact', async () => {
    renderWithRouter(<App />, { route: '/contact' });
    await waitFor(() => {
      expect(screen.getByTestId('contact-page')).toBeInTheDocument();
    });
  });

  test('renders about page when navigating to /about', async () => {
    renderWithRouter(<App />, { route: '/about' });
    await waitFor(() => {
      expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });
  });

  test('renders services page when navigating to /services', async () => {
    renderWithRouter(<App />, { route: '/services' });
    await waitFor(() => {
      expect(screen.getByTestId('services-page')).toBeInTheDocument();
    });
  });

  test('renders portfolio page when navigating to /portfolio', async () => {
    renderWithRouter(<App />, { route: '/portfolio' });
    await waitFor(() => {
      expect(screen.getByTestId('portfolio-page')).toBeInTheDocument();
    });
  });

  test('renders not found page for unknown routes', async () => {
    renderWithRouter(<App />, { route: '/unknown-route' });
    await waitFor(() => {
      expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
  });

  test('has skip link for accessibility', () => {
    renderWithRouter(<App />);
    const skipLinks = screen.getAllByText('Skip to main content');
    expect(skipLinks.length).toBeGreaterThan(0);
    skipLinks.forEach(skipLink => {
      expect(skipLink).toHaveAttribute('href', '#main-content');
    });
  });

  test('has main content with correct id', () => {
    renderWithRouter(<App />);
    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveAttribute('id', 'main-content');
  });
});