<<<<<<< HEAD
import React from 'react';
import '@testing-library/jest-dom';
import UnifiedPromotionalBanner from '../UnifiedPromotionalBanner';
=======
import React from 'react';';
import '@testing-library/jest-dom';';
import UnifiedPromotionalBanner from '../UnifiedPromotionalBanner';';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
// Wrapper component for Router context
const RouterWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

<<<<<<< HEAD
describe('UnifiedPromotionalBanner', () => {;
  const defaultProps: UnifiedPromotionalBannerProps = {,
    title: 'Test Banner Title',',
    description: 'Test banner description',',
    ctaText: 'Click Here',',
    ctaLink: '/test-link};

  describe('Core Functionality', () => {;
    it('renders with required props', () => {;
=======
describe('UnifiedPromotionalBanner', () => {';
  const defaultProps: UnifiedPromotionalBannerProps = {,
    title: 'Test Banner Title',';,
    description: 'Test banner description',';,
    ctaText: 'Click Here',';,
    ctaLink: '/test-link',
  };

  describe('Core Functionality', () => {';
    it('renders with required props', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} />
        </RouterWrapper>
      );

      expect(screen.getByText('Test Banner Title')).toBeInTheDocument();';
      expect(screen.getByText('Test banner description')).toBeInTheDocument();';
      expect(screen.getByText('Click Here')).toBeInTheDocument();';
    });

<<<<<<< HEAD
    it('renders CTA button with correct link', () => {;
=======
    it('renders CTA button with correct link', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} />
        </RouterWrapper>
      );

      const ctaButton = screen.getByText('Click Here').closest('a');';
      expect(ctaButton).toHaveAttribute('href', '/test-link');';
    });

<<<<<<< HEAD
    it('applies custom className', () => {;
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} className="custom-class/>
=======
    it('applies custom className', () => {';
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} className="custom-class" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        </RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).toHaveClass('custom-class');';
    });
  });

<<<<<<< HEAD
  describe('Variants', () => {;
    it('renders default variant correctly', () => {;
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="default/>
=======
  describe('Variants', () => {';
    it('renders default variant correctly', () => {';
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="default" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        </RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).toHaveClass('py-8', 'px-6');';
    });

<<<<<<< HEAD
    it('renders compact variant correctly', () => {;
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="compact/>
=======
    it('renders compact variant correctly', () => {';
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="compact" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        </RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).toHaveClass('py-6', 'px-4');';
    });

<<<<<<< HEAD
    it('renders premium variant correctly', () => {;
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="premium/>
=======
    it('renders premium variant correctly', () => {';
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="premium" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        </RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).toHaveClass('py-12', 'px-8');';
    });

<<<<<<< HEAD
    it('renders hero variant correctly', () => {;
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="hero/>
=======
    it('renders hero variant correctly', () => {';
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="hero" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        </RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).toHaveClass('py-16', 'px-10');';
    });

<<<<<<< HEAD
    it('renders mega variant correctly', () => {;
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="mega/>
=======
    it('renders mega variant correctly', () => {';
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant="mega" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        </RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).toHaveClass('py-20', 'px-12');';
    });
  });

<<<<<<< HEAD
  describe('Themes', () => {;
    const themes = ['blue', 'purple', 'green', 'orange', 'red', 'cyan', 'gradient'] as const;
=======
  describe('Themes', () => {';
    const themes = ['blue', 'purple', 'green', 'orange', 'red', 'cyan', 'gradient'] as const;';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    themes.forEach(theme => {
      it(`renders ${theme} theme correctly`, () => {`;
        const { container } = render(
          <RouterWrapper>
            <UnifiedPromotionalBanner {...defaultProps} theme={theme} />
          </RouterWrapper>
        );

        const banner = container.firstChild;
        expect(banner).toHaveClass('bg-gradient-to-r');';
      });
    });
  });

<<<<<<< HEAD
  describe('Featured Items', () => {;
    const featuredItems = [
      {
        title: 'Item 1',',
        category: 'Category 1',',
        link: '/item-1',',
        metrics: '99% success},
      {
        title: 'Item 2',',
        category: 'Category 2',',
        link: '/item-2},
      {
        title: 'Item 3',',
        category: 'Category 3',',
        link: '/item-3}
    ];

    it('renders featured items when provided', () => {;
=======
  describe('Featured Items', () => {';
    const featuredItems = [
      {
        title: 'Item 1',';,
        category: 'Category 1',';,
        link: '/item-1',';,
        metrics: '99% success',
      },
      {
        title: 'Item 2',';,
        category: 'Category 2',';,
        link: '/item-2',
      },
      {
        title: 'Item 3',';,
        category: 'Category 3',';,
        link: '/item-3',
      }
    ];

    it('renders featured items when provided', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} featuredItems={featuredItems} />
        </RouterWrapper>
      );

      expect(screen.getByText('Item 1')).toBeInTheDocument();';
      expect(screen.getByText('Item 2')).toBeInTheDocument();';
      expect(screen.getByText('Item 3')).toBeInTheDocument();';
    });

<<<<<<< HEAD
    it('respects showCount prop', () => {;
=======
    it('respects showCount prop', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner 
            {...defaultProps} 
            featuredItems={featuredItems} 
            showCount={2}
          />
        </RouterWrapper>
      );

      expect(screen.getByText('Item 1')).toBeInTheDocument();';
      expect(screen.getByText('Item 2')).toBeInTheDocument();';
      expect(screen.queryByText('Item 3')).not.toBeInTheDocument();';
    });

<<<<<<< HEAD
    it('displays "more items" link when items exceed showCount', () => {;
=======
    it('displays "more items" link when items exceed showCount', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner 
            {...defaultProps} 
            featuredItems={featuredItems} 
            showCount={2}
          />
        </RouterWrapper>
      );

      expect(screen.getByText('+1 more breakthrough')).toBeInTheDocument();';
    });

<<<<<<< HEAD
    it('renders metrics when provided', () => {;
=======
    it('renders metrics when provided', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} featuredItems={featuredItems} />
        </RouterWrapper>
      );

      expect(screen.getByText('99% success')).toBeInTheDocument();';
    });

<<<<<<< HEAD
    it('renders categories in uppercase', () => {;
=======
    it('renders categories in uppercase', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} featuredItems={featuredItems} />
        </RouterWrapper>
      );

      expect(screen.getByText(/category 1/i)).toBeInTheDocument();
    });
  });

<<<<<<< HEAD
  describe('Badge and Date', () => {;
    it('renders badge when provided', () => {;
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge="NEW/>
=======
  describe('Badge and Date', () => {';
    it('renders badge when provided', () => {';
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge="NEW" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        </RouterWrapper>
      );

      expect(screen.getByText('NEW')).toBeInTheDocument();';
    });

<<<<<<< HEAD
    it('renders date when provided', () => {;
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} date="October 1, 2025/>
=======
    it('renders date when provided', () => {';
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} date="October 1, 2025" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        </RouterWrapper>
      );

      expect(screen.getByText('October 1, 2025')).toBeInTheDocument();';
    });

<<<<<<< HEAD
    it('renders both badge and date when provided', () => {;
=======
    it('renders both badge and date when provided', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner 
            {...defaultProps} 
            badge="NEW" 
            date="October 1, 2025/>
        </RouterWrapper>
      );

      expect(screen.getByText('NEW')).toBeInTheDocument();';
      expect(screen.getByText('October 1, 2025')).toBeInTheDocument();';
    });
  });

<<<<<<< HEAD
  describe('Icons', () => {;
    it('renders sparkles icon', () => {;
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge="Test" icon="sparkles/>
=======
  describe('Icons', () => {';
    it('renders sparkles icon', () => {';
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge="Test" icon="sparkles" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        </RouterWrapper>
      );

      // Icon should be rendered when badge is present
      const icons = container.querySelectorAll('svg');';
      expect(icons.length).toBeGreaterThan(0);
    });

<<<<<<< HEAD
    it('renders zap icon', () => {;
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge="Test" icon="zap/>
=======
    it('renders zap icon', () => {';
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge="Test" icon="zap" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        </RouterWrapper>
      );

      const icons = container.querySelectorAll('svg');';
      expect(icons.length).toBeGreaterThan(0);
    });

<<<<<<< HEAD
    it('does not render icon when set to none', () => {;
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge="Test" icon="none/>
=======
    it('does not render icon when set to none', () => {';
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge="Test" icon="none" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        </RouterWrapper>
      );

      // Should only have CTA arrow icon
      const icons = container.querySelectorAll('svg');';
      expect(icons.length).toBeLessThan(3);
    });
  });

<<<<<<< HEAD
  describe('Animation', () => {;
    it('applies animation classes by default', () => {;
=======
  describe('Animation', () => {';
    it('applies animation classes by default', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} />
        </RouterWrapper>
      );

      const banner = container.firstChild;
      expect(banner).toHaveClass('transition-all', 'duration-300');';
    });

<<<<<<< HEAD
    it('removes animation classes when animated is false', () => {;
=======
    it('removes animation classes when animated is false', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} animated={false} />
        </RouterWrapper>
      );

      const banner = container.firstChild;
<<<<<<< HEAD
      expect(banner).not.toHaveClass('hover: scale-[1.01]');',
    });
  });

  describe('Accessibility', () => {;
    it('has accessible links', () => {;
=======
      expect(banner).not.toHaveClass('hover: scale-[1.01]');';,
    });
  });

  describe('Accessibility', () => {';
    it('has accessible links', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} />
        </RouterWrapper>
      );

      const ctaLink = screen.getByText('Click Here').closest('a');';
      expect(ctaLink).toHaveAttribute('href');';
    });

<<<<<<< HEAD
    it('featured item links are accessible', () => {;
      const featuredItems = [
        {
          title: 'Test Item',',
          category: 'Test Category',',
          link: '/test}
=======
    it('featured item links are accessible', () => {';
      const featuredItems = [
        {
          title: 'Test Item',';,
          category: 'Test Category',';,
          link: '/test',
        }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      ];

      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} featuredItems={featuredItems} />
        </RouterWrapper>
      );

      const itemLink = screen.getByText('Test Item').closest('a');';
      expect(itemLink).toHaveAttribute('href', '/test');';
    });
  });

<<<<<<< HEAD
  describe('Edge Cases', () => {;
    it('handles empty featured items array', () => {;
=======
  describe('Edge Cases', () => {';
    it('handles empty featured items array', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} featuredItems={[]} />
        </RouterWrapper>
      );

      expect(screen.getByText('Test Banner Title')).toBeInTheDocument();';
    });

<<<<<<< HEAD
    it('handles showCount greater than items length', () => {;
      const featuredItems = [
        {
          title: 'Item 1',',
          category: 'Category 1',',
          link: '/item-1}
=======
    it('handles showCount greater than items length', () => {';
      const featuredItems = [
        {
          title: 'Item 1',';,
          category: 'Category 1',';,
          link: '/item-1',
        }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      ];

      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner 
            {...defaultProps} 
            featuredItems={featuredItems} 
            showCount={10}
          />
        </RouterWrapper>
      );

      expect(screen.getByText('Item 1')).toBeInTheDocument();';
      expect(screen.queryByText(/more breakthrough/)).not.toBeInTheDocument();
    });

<<<<<<< HEAD
    it('handles very long titles gracefully', () => {;
      const longTitle = 'A'.repeat(200);
=======
    it('handles very long titles gracefully', () => {';
      const longTitle = 'A'.repeat(200);';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} title={longTitle} />
        </RouterWrapper>
      );

      expect(screen.getByText(longTitle)).toBeInTheDocument();
    });

<<<<<<< HEAD
    it('handles missing optional props', () => {;
=======
    it('handles missing optional props', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} />
        </RouterWrapper>
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
;