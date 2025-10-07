import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../app/page';

// Mock the lazy-loaded components
jest.mock('../app/components/ContentShowcase', () => {
  return function MockContentShowcase() {
    return <div data-testid="content-showcase">Content Showcase</div>;
  };
});

jest.mock('../app/components/InteractiveContentShowcase2026', () => {
  return function MockInteractiveContentShowcase2026() {
    return <div data-testid="interactive-content-showcase-2026">Interactive Content Showcase 2026</div>;
  };
});

jest.mock('../app/components/InteractiveAIROICalculator', () => {
  return function MockInteractiveAIROICalculator() {
    return <div data-testid="interactive-ai-roi-calculator">Interactive AI ROI Calculator</div>;
  };
});

jest.mock('../app/components/SEOOptimizer', () => {
  return function MockSEOOptimizer({ title, description, keywords }: any) {
    return (
      <div data-testid="seo-optimizer">
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
      </div>
    );
  };
});

jest.mock('../app/components/AccessibilityEnhancer', () => {
  return function MockAccessibilityEnhancer({ children }: { children: React.ReactNode }) {
    return <div data-testid="accessibility-enhancer">{children}</div>;
  };
});

// Mock gtag
const mockGtag = jest.fn();
Object.defineProperty(window, 'gtag', {
  value: mockGtag,
  writable: true,
});

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('HomePage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  test('displays main heading', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('Transform Your Business with')).toBeInTheDocument();
    expect(screen.getByText('AI-Powered Solutions')).toBeInTheDocument();
  });

  test('displays trust indicators', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('500+')).toBeInTheDocument();
    expect(screen.getByText('95%')).toBeInTheDocument();
    expect(screen.getByText('24/7')).toBeInTheDocument();
    expect(screen.getByText('99.9%')).toBeInTheDocument();
  });

  test('displays service sections', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('AI Micro SaaS Services')).toBeInTheDocument();
    expect(screen.getByText('Cloud Automation')).toBeInTheDocument();
    expect(screen.getByText('Enterprise Solutions')).toBeInTheDocument();
  });

  test('displays why choose us section', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('Why Choose Zion Tech Group?')).toBeInTheDocument();
    expect(screen.getByText('Fast Delivery')).toBeInTheDocument();
    expect(screen.getByText('Secure & Reliable')).toBeInTheDocument();
    expect(screen.getByText('Scalable Solutions')).toBeInTheDocument();
    expect(screen.getByText('Results-Driven')).toBeInTheDocument();
  });

  test('displays CTA section', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('Ready to Transform Your Business?')).toBeInTheDocument();
    expect(screen.getByText('Get Started Today')).toBeInTheDocument();
  });

  test('displays footer', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('© 2025 Zion Tech Group. All rights reserved.')).toBeInTheDocument();
  });

  test('phone click tracking works', () => {
    renderWithRouter(<HomePage />);
    const phoneButton = screen.getByText('Call +1 302 464 0950');
    fireEvent.click(phoneButton);
    expect(mockGtag).toHaveBeenCalledWith('event', 'phone_click', {
      event_category: 'engagement',
      event_label: 'main_phone_number'
    });
  });

  test('phone click tracking in CTA section works', () => {
    renderWithRouter(<HomePage />);
    const phoneButtons = screen.getAllByText('Call +1 302 464 0950');
    fireEvent.click(phoneButtons[1]); // Second phone button in CTA section
    expect(mockGtag).toHaveBeenCalledWith('event', 'phone_click', {
      event_category: 'engagement',
      event_label: 'main_phone_number'
    });
  });

  test('renders lazy-loaded components', async () => {
    renderWithRouter(<HomePage />);
    
    await waitFor(() => {
      expect(screen.getByTestId('content-showcase')).toBeInTheDocument();
    });
    
    await waitFor(() => {
      expect(screen.getByTestId('interactive-ai-roi-calculator')).toBeInTheDocument();
    });
    
    await waitFor(() => {
      expect(screen.getByTestId('interactive-content-showcase-2026')).toBeInTheDocument();
    });
  });

  test('SEO optimizer receives correct props', () => {
    renderWithRouter(<HomePage />);
    const seoOptimizer = screen.getByTestId('seo-optimizer');
    expect(seoOptimizer).toBeInTheDocument();
    expect(screen.getByText('Zion Tech Group - Advanced AI and IT Solutions')).toBeInTheDocument();
  });

  test('accessibility enhancer wraps content', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByTestId('accessibility-enhancer')).toBeInTheDocument();
  });

  test('navigation links are present', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Case Studies')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('mobile menu button is present', () => {
    renderWithRouter(<HomePage />);
    const mobileMenuButton = screen.getByRole('button');
    expect(mobileMenuButton).toBeInTheDocument();
  });
});