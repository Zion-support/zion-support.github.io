import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import AccessibilityEnhancer from '../app/components/AccessibilityEnhancer';
import AdAnalytics from '../app/components/AdAnalytics';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
}));

describe('Advanced Components', () => {
  describe('AccessibilityEnhancer', () => {
    test('renders without crashing', () => {
      render(
        <HelmetProvider>
          <AccessibilityEnhancer />
        </HelmetProvider>
      );
    });

    test('renders with custom props', () => {
      render(
        <HelmetProvider>
          <AccessibilityEnhancer 
            isHighContrast={true}
            isReducedMotion={true}
            fontSize="large"
          />
        </HelmetProvider>
      );
    });

    test('renders skip to main content link', () => {
      render(
        <HelmetProvider>
          <AccessibilityEnhancer />
        </HelmetProvider>
      );
      
      const skipLink = screen.getByText('Skip to main content');
      expect(skipLink).toBeInTheDocument();
    });

    test('renders accessibility controls', () => {
      render(
        <HelmetProvider>
          <AccessibilityEnhancer />
        </HelmetProvider>
      );
      
      const controlsTitle = screen.getByText('Accessibility Options');
      expect(controlsTitle).toBeInTheDocument();
    });
  });

  describe('AdAnalytics', () => {
    test('renders without crashing', () => {
      render(
        <HelmetProvider>
          <AdAnalytics />
        </HelmetProvider>
      );
    });

    test('renders main heading', () => {
      render(
        <HelmetProvider>
          <AdAnalytics />
        </HelmetProvider>
      );
      
      const heading = screen.getByText('Ad Analytics');
      expect(heading).toBeInTheDocument();
    });

    test('renders feature cards', () => {
      render(
        <HelmetProvider>
          <AdAnalytics />
        </HelmetProvider>
      );
      
      const expertSolutions = screen.getByText('Expert Solutions');
      const customImplementation = screen.getByText('Custom Implementation');
      const support = screen.getByText('24/7 Support');
      
      expect(expertSolutions).toBeInTheDocument();
      expect(customImplementation).toBeInTheDocument();
      expect(support).toBeInTheDocument();
    });

    test('renders get started button', () => {
      render(
        <HelmetProvider>
          <AdAnalytics />
        </HelmetProvider>
      );
      
      const button = screen.getByText('Get Started Today');
      expect(button).toBeInTheDocument();
    });
  });
});