import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../app/page';

// Mock the lazy components
jest.mock('../app/components/ContentPromotionBanner', () => {
  return function MockContentPromotionBanner() {
    return <div data-testid="content-promotion-banner">Content Promotion Banner</div>;
  };
});

jest.mock('../app/components/ContentCarousel', () => {
  return function MockContentCarousel() {
    return <div data-testid="content-carousel">Content Carousel</div>;
  };
});

jest.mock('../app/components/DynamicContentShowcase', () => {
  return function MockDynamicContentShowcase() {
    return <div data-testid="dynamic-content-showcase">Dynamic Content Showcase</div>;
  };
});

jest.mock('../app/components/ContentStatistics', () => {
  return function MockContentStatistics() {
    return <div data-testid="content-statistics">Content Statistics</div>;
  };
});

jest.mock('../app/components/ContentNewsletterSignup', () => {
  return function MockContentNewsletterSignup() {
    return <div data-testid="content-newsletter-signup">Content Newsletter Signup</div>;
  };
});

// Mock performance optimizer
jest.mock('../app/utils/performanceOptimizer', () => ({
  preloadCriticalResources: jest.fn(),
  optimizeImages: jest.fn(),
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders main heading', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  test('renders subtitle', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('Advanced AI and IT Solutions')).toBeInTheDocument();
  });

  test('renders service cards', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('AI Solutions')).toBeInTheDocument();
    expect(screen.getByText('Digital Transformation')).toBeInTheDocument();
    expect(screen.getByText('Cloud Services')).toBeInTheDocument();
  });

  test('renders call to action section', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('Ready to Get Started?')).toBeInTheDocument();
    expect(screen.getByText('Contact Us: (302) 600-9898')).toBeInTheDocument();
  });

  test('renders skip to main content link', () => {
    renderWithRouter(<HomePage />);
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  test('renders lazy loaded components', async () => {
    renderWithRouter(<HomePage />);
    
    await waitFor(() => {
      expect(screen.getByTestId('content-promotion-banner')).toBeInTheDocument();
    });
    
    await waitFor(() => {
      expect(screen.getByTestId('content-carousel')).toBeInTheDocument();
    });
    
    await waitFor(() => {
      expect(screen.getByTestId('dynamic-content-showcase')).toBeInTheDocument();
    });
    
    await waitFor(() => {
      expect(screen.getByTestId('content-statistics')).toBeInTheDocument();
    });
    
    await waitFor(() => {
      expect(screen.getByTestId('content-newsletter-signup')).toBeInTheDocument();
    });
  });

  test('has proper ARIA labels', () => {
    renderWithRouter(<HomePage />);
    
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute('id', 'main-content');
    
    const heroHeading = screen.getByRole('heading', { level: 1 });
    expect(heroHeading).toHaveAttribute('id', 'hero-heading');
    
    const ctaHeading = screen.getByRole('heading', { level: 2 });
    expect(ctaHeading).toHaveAttribute('id', 'cta-heading');
  });

  test('phone number has proper accessibility attributes', () => {
    renderWithRouter(<HomePage />);
    
    const phoneLink = screen.getByText('Contact Us: (302) 600-9898');
    expect(phoneLink).toHaveAttribute('aria-label', 'Call us at (302) 600-9898');
    expect(phoneLink).toHaveAttribute('href', 'tel:+13026009898');
  });

  test('applies proper CSS classes for styling', () => {
    renderWithRouter(<HomePage />);
    
    const container = screen.getByRole('main');
    expect(container).toHaveClass('container', 'mx-auto', 'px-4', 'py-16');
    
    const heroSection = screen.getByRole('heading', { level: 1 }).closest('section');
    expect(heroSection).toHaveClass('text-center', 'mb-16');
  });
});