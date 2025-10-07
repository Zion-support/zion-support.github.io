import React from 'react';
import App from '../App';

// Mock the components that App depends on
jest.mock('../components/ErrorBoundary', () => {
  return function MockErrorBoundary({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div data-testid='error-boundary'>{children}</div>;
  };
});

jest.mock('../components/SEO', () => {
  return function MockSEO() {
    return <div data-testid='seo'>SEO Component</div>;
  };
});

jest.mock('../components/Loading', () => {
  return function MockLoading() {
    return <div data-testid='loading'>Loading...</div>;
  };
});

// Mock the pages
jest.mock('../pages/Home', () => {
  return function MockHome() {
    return <div data-testid='home-page'>Home Page</div>;
  };
});

jest.mock('../pages/About', () => {
  return function MockAbout() {
    return <div data-testid='about-page'>About Page</div>;
  };
});

jest.mock('../pages/Services', () => {
  return function MockServices() {
    return <div data-testid='services-page'>Services Page</div>;
  };
});

jest.mock('../pages/Blog', () => {
  return function MockBlog() {
    return <div data-testid='blog-page'>Blog Page</div>;
  };
});

jest.mock('../pages/Contact', () => {
  return function MockContact() {
    return <div data-testid='contact-page'>Contact Page</div>;
  };
});

jest.mock('../pages/Team', () => {
  return function MockTeam() {
    return <div data-testid='team-page'>Team Page</div>;
  };
});

jest.mock('../pages/Privacy', () => {
  return function MockPrivacy() {
    return <div data-testid='privacy-page'>Privacy Page</div>;
  };
});

jest.mock('../pages/Terms', () => {
  return function MockTerms() {
    return <div data-testid='terms-page'>Terms Page</div>;
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
});
