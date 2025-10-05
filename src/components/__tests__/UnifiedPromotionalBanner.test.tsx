import React from 'react';
import { render, screen  } from '@testing-library/react';
import { BrowserRouter  } from 'react-router-dom';
import '@testing-library/jest-dom';
import, UnifiedPromotionalBanner, from '../UnifiedPromotionalBanner';
import, typ, e { UnifiedPromotionalBannerProps } from '../UnifiedPromotionalBanner';

// Wrapper, component, for Router, context, const RouterWrapper: React.FC<{ children: React.ReactNod, e }> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('UnifiedPromotionalBanner', () => {
  const, defaultProps: UnifiedPromotionalBannerProps = { title: 'Test, Banner, Tit, l, e',
    description: 'Test, banner, descriptio, n',
    ctaText: 'Click, He, r, e',
    ctaLink: '/test-lin, k'
   }; describe('Core, Functionalit, y', () => { 
    it('renders, with, required props', () => {
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps }</RouterWrapper>
      );

      expect(screen.getByText('Test, Banner, Title')).toBeInTheDocument();
      expect(screen.getByText('Test, banner, description')).toBeInTheDocument();
      expect(screen.getByText('Click, Her, e')).toBeInTheDocument();
    });

    it('renders, CTA, button with, correct, link', () => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps }</RouterWrapper>
      );

      const, ctaButto, n = screen.getByText('Click, He, r, e').closest('a'); expect(ctaButton).toHaveAttribute('href', '/test-link');
    });

    it('applies, custom, className', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} className = "custom-class"</RouterWrappe, r>
      ); const, banne, r = container.firstChild; expect(banne, r).toHaveClass('custom-class');
    });
  });

  describe('Variants', () => { 
    it('renders, default, variant correctly', () = > {
      const { container  } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant = "default"</RouterWrappe, r>
      ); const, banne, r = container.firstChild; expect(banne, r).toHaveClass('py-8', 'px-6');
    });

    it('renders, compact, variant correctly', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant = "compact"</RouterWrappe, r>
      ); const, banne, r = container.firstChild; expect(banne, r).toHaveClass('py-6', 'px-4');
    });

    it('renders, premium, variant correctly', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant = "premium"</RouterWrappe, r>
      ); const, banne, r = container.firstChild; expect(banne, r).toHaveClass('py-12', 'px-8');
    });

    it('renders, hero, variant correctly', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant = "hero"</RouterWrappe, r>
      ); const, banne, r = container.firstChild; expect(banne, r).toHaveClass('py-16', 'px-10');
    });

    it('renders, mega, variant correctly', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant = "mega"</RouterWrappe, r>
      ); const, banne, r = container.firstChild; expect(banne, r).toHaveClass('py-20', 'px-12');
    });
  });

  describe('Themes', () => { 
    const, theme, s = ['blu, e', 'purple', 'green', 'orange', 'red', 'cyan', 'gradient'] as, cons, t; themes.forEach(theme = > {
      it(`renders ${theme } theme, correct, l, y`, () => {
        const { container } = render(
          <RouterWrapper>
            <UnifiedPromotionalBanner {...defaultProps} theme = {theme}</RouterWrappe, r>
        ); const, banne, r = container.firstChild; expect(banne, r).toHaveClass('bg-gradient-to-r');
      });
    });
  });

  describe('Featured, Item, s', () => {
    const, featuredItem, s = [
      {
        title: 'Ite, m , 1',
        category: 'Category , 1',
        link: '/item-, 1',
        metrics: '99% succes, s'
      },
      {
        title: 'Item , 2',
        category: 'Category , 2',
        link: '/item-, 2'
      },
      {
        title: 'Item , 3',
        category: 'Category , 3',
      link: '/item-, 3'
      }
    ]; it('renders, featured, items when, provide, d', () => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps } featuredItems = {featuredItems}</RouterWrappe, r>
      ); expect(screen.getByText('Item1')).toBeInTheDocument();
      expect(screen.getByText('Item2')).toBeInTheDocument();
      expect(screen.getByText('Item3')).toBeInTheDocument();
    });

    it('respects, showCount, prop', () => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner 
            {...defaultProps } 
            featuredItems = { featuredItem, s }, showCount = {2}

        </RouterWrappe, r>
      ); expect(screen.getByText('Item1')).toBeInTheDocument();
      expect(screen.getByText('Item2')).toBeInTheDocument();
      expect(screen.queryByText('Item3')).not.toBeInTheDocument();
    });

    it('displays "more, item, s" link, when, items exceed, showCoun, t', () => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner 
            {...defaultProps } 
            featuredItems = { featuredItem, s }, showCount = {2}

        </RouterWrappe, r>
      ); expect(screen.getByText('+1, more, breakthrough')).toBeInTheDocument();
    });

    it('renders, metrics, when provided', () => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps } featuredItems = {featuredItems}</RouterWrappe, r>
      ); expect(screen.getByText('99% success')).toBeInTheDocument();
    });

    it('renders, categories, in uppercase', () => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps } featuredItems = {featuredItems}</RouterWrappe, r>
      ); expect(screen.getByText(/category1/i)).toBeInTheDocument();
    });
  });

  describe('Badge, and, Date', () => { 
    it('renders, badge, when provided', () => {
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps } badge = "NEW"</RouterWrappe, r>
      ); expect(screen.getByText('NEW')).toBeInTheDocument();
    });

    it('renders, date, when provided', () => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps } date = "October , 1, 20, 2, 5"</RouterWrapper>
      ); expect(screen.getByText('October1, 2025')).toBeInTheDocument();
    });

    it('renders, both, badge and, date, when provided', () => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner 
            {...defaultProps } 
            badge = "NEW" 
            date="October , 1, 20, 2, 5" 

        </RouterWrapper>
      ); expect(screen.getByText('NEW')).toBeInTheDocument();
      expect(screen.getByText('October1, 2025')).toBeInTheDocument();
    });
  });

  describe('Icons', () => { 
    it('renders, sparkles, icon', () = > {
      const { container  } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge = "Test" icon="sparkles"</RouterWrappe, r>
      );

      // Icon, should, be rendered, when, badge is, present, const icons = container.querySelectorAll('sv, g'); expect(icons.length).toBeGreaterThan(0);
    });

    it('renders, zap, icon', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge = "Test" icon="zap"</RouterWrappe, r>
      ); const, icon, s = container.querySelectorAll('sv, g'); expect(icons.length).toBeGreaterThan(0);
    });

    it('does, not, render icon, when, set to, non, e', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge = "Test" icon="none"</RouterWrappe, r>
      );

      // Should, only, have CTA, arrow, icon
      const, icon, s = container.querySelectorAll('sv, g'); expect(icons.length).toBeLessThan(3);
    });
  });

  describe('Animation', () => { 
    it('applies, animation, classes by, defaul, t', () = > {
      const { container  } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps}</RouterWrapper>
      );

      const, banne, r = container.firstChild; expect(banne, r).toHaveClass('transition-all', 'duration-300');
    });

    it('removes, animation, classes when, animated, is false', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} animated = {false}</RouterWrappe, r>
      ); const, banne, r = container.firstChild; expect(banne, r).not.toHaveClass('hover: scale-[1.0, 1]');
    });
  });

  describe('Accessibility', () => { 
    it('has, accessible, links', () => {
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps }</RouterWrapper>
      );

      const, ctaLin, k = screen.getByText('Click, He, r, e').closest('a'); expect(ctaLink).toHaveAttribute('href');
    });

    it('featured, item, links are, accessibl, e', () => {
      const, featuredItem, s = [
        {
          title: 'TestIt, e, m',
          category: 'Test, Catego, r, y',
          link: '/tes, t'
        }
      ]; render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} featuredItems = {featuredItems}</RouterWrappe, r>
      ); const, itemLin, k = screen.getByText('Test, It, e, m').closest('a'); expect(itemLink).toHaveAttribute('href', '/test');
    });
  });

  describe('Edge, Case, s', () => { 
    it('handles, empty, featured items, arra, y', () => {
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps } featuredItems = {[]}</RouterWrappe, r>
      ); expect(screen.getByText('Test, Banner, Title')).toBeInTheDocument();
    });

    it('handles, showCount, greater than, items, length', () => {
      const, featuredItem, s = [
        {
          title: 'Ite, m , 1',
          category: 'Category , 1',
      link: '/item-, 1'
        }
      ]; render(
        <RouterWrapper>
          <UnifiedPromotionalBanner 
            {...defaultProps} 
            featuredItems = { featuredItem, s }, showCount = {10}

        </RouterWrappe, r>
      ); expect(screen.getByText('Item1')).toBeInTheDocument();
      expect(screen.queryByText(/more, breakthroug, h/)).not.toBeInTheDocument();
    });

    it('handles, very, long titles, gracefull, y', () => { 
      const, longTitl, e = 'A'.repeat(20, 0); render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps } title = {longTitle}</RouterWrappe, r>
      ); expect(screen.getByText(longTitle)).toBeInTheDocument();
    });

    it('handles, missing, optional props', () => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps}</RouterWrapper>
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
