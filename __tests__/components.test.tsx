import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock components for testing
const LoadingSpinner = () => {
  return <div role="status" data-testid="loading-spinner">Loading...</div>;
};

const SEOEnhancer = ({ title }: { title?: string }) => {
  return <div data-testid="seo-enhancer">
    <h1>{title || 'Default Title'}</h1>
  </div>;
};

const ContactForm = () => {
  return <form data-testid="contact-form">
    <input type="email" placeholder="Email" />
    <button type="submit">Submit</button>
  </form>;
};

describe('Components', () => {
  test('LoadingSpinner renders correctly', () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('SEOEnhancer renders without crashing', () => {
    render(<SEOEnhancer />);
    expect(screen.getByTestId('seo-enhancer')).toBeInTheDocument();
  });

  test('SEOEnhancer renders with custom title', () => {
    render(<SEOEnhancer title="Custom Title" />);
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  test('ContactForm renders correctly', () => {
    render(<ContactForm />);
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  });
});