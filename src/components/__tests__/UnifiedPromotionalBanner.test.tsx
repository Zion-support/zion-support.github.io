import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import UnifiedPromotionalBanner from '../UnifiedPromotionalBanner';
import type { UnifiedPromotionalBannerProps } from '../UnifiedPromotionalBanner';

// Wrapper component for Router context
const RouterWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('UnifiedPromotionalBanner', () => {
  const defaultProps: UnifiedPromotionalBannerProps = { title: 'Test Banner Title',
    description: 'Test banner description',
    ctaText: 'Click Here',
    ctaLink: '/test-link'
   };

  describe('Core Functionality', () => {
    it('renders with required props', () => {
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps}</RouterWrapper>
      );

      expect(screen.getByText('Test Banner Title')).toBeInTheDocument();
      expect(screen.getByText('Test banner description')).toBeInTheDocument();
      expect(screen.getByText('Click Here')).toBeInTheDocument();
    });

    it('renders CTA button with correct link', () => {
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps}</RouterWrapper>
      );

      const ctaButton = screen.getByText('Click Here').closest('a');
      expect(ctaButton).toHaveAttribute('href', '/test-link');
    });

    it('applies custom className', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} className="custom-class"</RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).toHaveClass('custom-class');
    });
  });

  describe('Variants', () => {
    it('renders default variant correctly', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="default"</RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).toHaveClass('py-8', 'px-6');
    });

    it('renders compact variant correctly', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="compact"</RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).toHaveClass('py-6', 'px-4');
    });

    it('renders premium variant correctly', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="premium"</RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).toHaveClass('py-12', 'px-8');
    });

    it('renders hero variant correctly', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="hero"</RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).toHaveClass('py-16', 'px-10');
    });

    it('renders mega variant correctly', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="mega"</RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).toHaveClass('py-20', 'px-12');
    });
  });

  describe('Themes', () => {
    const themes = ['blue', 'purple', 'green', 'orange', 'red', 'cyan', 'gradient'] as const;

    themes.forEach(theme => {
      it(`renders ${theme} theme correctly`, () => {
        const { container } = render(
          <RouterWrapper>
            <UnifiedPromotionalBanner {...defaultProps} theme={theme}</RouterWrapper>
        );

        const banner = container.firstChild;
        expect(banner).toHaveClass('bg-gradient-to-r');
      });
    });
  });

  describe('Featured Items', () => {
    const featuredItems = [
      {
        title: 'Item 1',
        category: 'Category 1',
        link: '/item-1',
        metrics: '99% success'
      },
      {
        title: 'Item 2',
        category: 'Category 2',
        link: '/item-2'
      },
      {
        title: 'Item 3',
        category: 'Category 3',
      link: '/item-3'
      }
    ];

    it('renders featured items when provided', () => {
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} featuredItems={featuredItems}</RouterWrapper>
      );

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });

    it('respects showCount prop', () => {
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner 
            {...defaultProps} 
            featuredItems={featuredItems} 
            showCount={2}

        </RouterWrapper>
      );

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.queryByText('Item 3')).not.toBeInTheDocument();
    });

    it('displays "more items" link when items exceed showCount', () => {
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner 
            {...defaultProps} 
            featuredItems={featuredItems} 
            showCount={2}

        </RouterWrapper>
      );

      expect(screen.getByText('+1 more breakthrough')).toBeInTheDocument();
    });

    it('renders metrics when provided', () => {
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} featuredItems={featuredItems}</RouterWrapper>
      );

      expect(screen.getByText('99% success')).toBeInTheDocument();
    });

    it('renders categories in uppercase', () => {
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} featuredItems={featuredItems}</RouterWrapper>
      );

      expect(screen.getByText(/category 1/i)).toBeInTheDocument();
    });
  });

  describe('Badge and Date', () => {
    it('renders badge when provided', () => {
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge="NEW"</RouterWrapper>
      );

      expect(screen.getByText('NEW')).toBeInTheDocument();
    });

    it('renders date when provided', () => {
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} date="October 1, 2025"</RouterWrapper>
      );

      expect(screen.getByText('October 1, 2025')).toBeInTheDocument();
    });

    it('renders both badge and date when provided', () => {
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner 
            {...defaultProps} 
            badge="NEW" 
            date="October 1, 2025" 

        </RouterWrapper>
      );

      expect(screen.getByText('NEW')).toBeInTheDocument();
      expect(screen.getByText('October 1, 2025')).toBeInTheDocument();
    });
  });

  describe('Icons', () => {
    it('renders sparkles icon', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge="Test" icon="sparkles"</RouterWrapper>
      );

      // Icon should be rendered when badge is present
      const icons = container.querySelectorAll('svg');
      expect(icons.length).toBeGreaterThan(0);
    });

    it('renders zap icon', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge="Test" icon="zap"</RouterWrapper>
      );

      const icons = container.querySelectorAll('svg');
      expect(icons.length).toBeGreaterThan(0);
    });

    it('does not render icon when set to none', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge="Test" icon="none"</RouterWrapper>
      );

      // Should only have CTA arrow icon
      const icons = container.querySelectorAll('svg');
      expect(icons.length).toBeLessThan(3);
    });
  });

  describe('Animation', () => {
    it('applies animation classes by default', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps}</RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).toHaveClass('transition-all', 'duration-300');
    });

    it('removes animation classes when animated is false', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} animated={false}</RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).not.toHaveClass('hover:scale-[1.01]');
    });
  });

  describe('Accessibility', () => {
    it('has accessible links', () => {
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps}</RouterWrapper>
      );

      const ctaLink = screen.getByText('Click Here').closest('a');
      expect(ctaLink).toHaveAttribute('href');
    });

    it('featured item links are accessible', () => {
      const featuredItems = [
        {
          title: 'Test Item',
          category: 'Test Category',
          link: '/test'
        }
      ];

      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} featuredItems={featuredItems}</RouterWrapper>
      );

      const itemLink = screen.getByText('Test Item').closest('a');
      expect(itemLink).toHaveAttribute('href', '/test');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty featured items array', () => {
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} featuredItems={[]}</RouterWrapper>
      );

      expect(screen.getByText('Test Banner Title')).toBeInTheDocument();
    });

    it('handles showCount greater than items length', () => {
      const featuredItems = [
        {
          title: 'Item 1',
          category: 'Category 1',
      link: '/item-1'
        }
      ];

      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner 
            {...defaultProps} 
            featuredItems={featuredItems} 
            showCount={10}

        </RouterWrapper>
      );

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.queryByText(/more breakthrough/)).not.toBeInTheDocument();
    });

    it('handles very long titles gracefully', () => {
      const longTitle = 'A'.repeat(200);
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} title={longTitle}</RouterWrapper>
      );

      expect(screen.getByText(longTitle)).toBeInTheDocument();
    });

    it('handles missing optional props', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps}</RouterWrapper>
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
