import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UnifiedPromotionalBanner from '../UnifiedPromotionalBanner';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('UnifiedPromotionalBanner', () => {
  const defaultProps = {
    title: 'Test Banner',
    subtitle: 'Test Subtitle',
    description: 'Test description',
    primaryAction: {
      label: 'Get Started',
      link: '/get-started'
    }
  };

  it('renders with default props', () => {
    renderWithRouter(<UnifiedPromotionalBanner {...defaultProps} />);
    
    expect(screen.getByText('Test Banner')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('renders with featured items', () => {
    const featuredItems = [
      {
        title: 'Feature 1',
        category: 'Category 1',
        link: '/feature1',
        metrics: '100%'
      }
    ];

    renderWithRouter(
      <UnifiedPromotionalBanner 
        {...defaultProps} 
        featuredItems={featuredItems}
      />
    );

    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('renders with secondary action', () => {
    const secondaryAction = {
      label: 'Learn More',
      link: '/learn-more'
    };

    renderWithRouter(
      <UnifiedPromotionalBanner 
        {...defaultProps} 
        secondaryAction={secondaryAction}
      />
    );

    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('applies gradient variant correctly', () => {
    const { container } = renderWithRouter(
      <UnifiedPromotionalBanner 
        {...defaultProps} 
        variant="gradient"
      />
    );

    expect(container.firstChild).toHaveClass('bg-gradient-to-r');
  });

  it('applies dark variant correctly', () => {
    const { container } = renderWithRouter(
      <UnifiedPromotionalBanner 
        {...defaultProps} 
        variant="dark"
      />
    );

    expect(container.firstChild).toHaveClass('bg-gray-900');
  });
});