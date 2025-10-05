import React from 'react';
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// Mock react-router-dom components
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  Routes: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Route: ({ element }: { element: React.ReactNode }) => <>{element}</>,
  Link: ({
    children,
    to,
    ...props
  }: {
    children: React.ReactNode;
    to: string;
    [key: string]: unknown;
  }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

// Mock other components that might cause issues
jest.mock('../components/Header', () => {
  return function MockHeader() {
    return <div data-testid="header">Header Component</div>;
   };
});

jest.mock('../components/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer Component</div>;
   };
});

describe('App', () => {
  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    // Check if the app renders without throwing errors
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
   });

  test('contains main application structure', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    // Verify basic app structure is present
    const header = screen.getByTestId('header');
    const footer = screen.getByTestId('footer');
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
   });
=======
import App from '../App';

// Mock the components that App depends on
jest.mock('../components/ErrorBoundary', () => {
  return function MockErrorBoundary({ children }: { children: React.ReactNode }) {
    return <div data-testid="error-boundary">{children}</div>;
  };
});

jest.mock('../components/SEO', () => {
  return function MockSEO() {
    return <div data-testid="seo">SEO Component</div>;
  };
});

jest.mock('../components/Loading', () => {
  return function MockLoading() {
    return <div data-testid="loading">Loading...</div>;
  };
});

// Mock the pages
jest.mock('../pages/Home', () => {
  return function MockHome() {
    return <div data-testid="home-page">Home Page</div>;
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

jest.mock('../pages/Team', () => {
  return function MockTeam() {
    return <div data-testid="team-page">Team Page</div>;
  };
});

jest.mock('../pages/Privacy', () => {
  return function MockPrivacy() {
    return <div data-testid="privacy-page">Privacy Page</div>;
  };
});

jest.mock('../pages/Terms', () => {
  return function MockTerms() {
    return <div data-testid="terms-page">Terms Page</div>;
  };
});

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
    expect(screen.getByTestId('seo')).toBeInTheDocument();
  });

  it('renders the home page by default', () => {
    render(<App />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
>>>>>>> cursor/fix-errors-and-merge-to-main-0af9
});