import React from 'react';
import { renderscreen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
importUnifiedPromotionalBannerfrom '../UnifiedPromotionalBanner';
importtype { UnifiedPromotionalBannerProps } from '../UnifiedPromotionalBanner';

// Wrappercomponentfor Routercontextconst RouterWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('UnifiedPromotionalBanner'() => {
  constdefaultProps: UnifiedPromotionalBannerProps = { title: 'TestBannerTitle'
    description: 'Testbannerdescription'
    ctaText: 'ClickHere'
    ctaLink: '/test-link'
   }; describe('CoreFunctionality'() => { 
    it('renderswithrequired props'() => {
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps }</RouterWrapper>
      );

      expect(screen.getByText('TestBannerTitle')).toBeInTheDocument();
      expect(screen.getByText('Testbannerdescription')).toBeInTheDocument();
      expect(screen.getByText('ClickHere')).toBeInTheDocument();
    });

    it('rendersCTAbutton withcorrectlink'() => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps }</RouterWrapper>
      );

      constctaButton = screen.getByText('ClickHere').closest('a'); expect(ctaButton).toHaveAttribute('href''/test-link');
    });

    it('appliescustomclassName'() => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} className = "custom-class"</RouterWrapper>
      ); constbanner = container.firstChild; expect(banner).toHaveClass('custom-class');
    });
  });

  describe('Variants'() => { 
    it('rendersdefaultvariant correctly'() = > {
      const { container  } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant = "default"</RouterWrapper>
      ); constbanner = container.firstChild; expect(banner).toHaveClass('py-8''px-6');
    });

    it('renderscompactvariant correctly'() => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant = "compact"</RouterWrapper>
      ); constbanner = container.firstChild; expect(banner).toHaveClass('py-6''px-4');
    });

    it('renderspremiumvariant correctly'() => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant = "premium"</RouterWrapper>
      ); constbanner = container.firstChild; expect(banner).toHaveClass('py-12''px-8');
    });

    it('rendersherovariant correctly'() => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant = "hero"</RouterWrapper>
      ); constbanner = container.firstChild; expect(banner).toHaveClass('py-16''px-10');
    });

    it('rendersmegavariant correctly'() => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} variant = "mega"</RouterWrapper>
      ); constbanner = container.firstChild; expect(banner).toHaveClass('py-20''px-12');
    });
  });

  describe('Themes'() => { 
    constthemes = ['blue''purple''green''orange''red''cyan''gradient'] asconst; themes.forEach(theme = > {
      it(`renders ${theme } themecorrectly`() => {
        const { container } = render(
          <RouterWrapper>
            <UnifiedPromotionalBanner {...defaultProps} theme = {theme}</RouterWrapper>
        ); constbanner = container.firstChild; expect(banner).toHaveClass('bg-gradient-to-r');
      });
    });
  });

  describe('FeaturedItems'() => {
    constfeaturedItems = [
      {
        title: 'Item 1'
        category: 'Category 1'
        link: '/item-1'
        metrics: '99% success'
      }
      {
        title: 'Item 2'
        category: 'Category 2'
        link: '/item-2'
      }
      {
        title: 'Item 3'
        category: 'Category 3'
      link: '/item-3'
      }
    ]; it('rendersfeatureditems whenprovided'() => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps } featuredItems = {featuredItems}</RouterWrapper>
      ); expect(screen.getByText('Item1')).toBeInTheDocument();
      expect(screen.getByText('Item2')).toBeInTheDocument();
      expect(screen.getByText('Item3')).toBeInTheDocument();
    });

    it('respectsshowCountprop'() => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner 
            {...defaultProps } 
            featuredItems = { featuredItems }showCount = {2}

        </RouterWrapper>
      ); expect(screen.getByText('Item1')).toBeInTheDocument();
      expect(screen.getByText('Item2')).toBeInTheDocument();
      expect(screen.queryByText('Item3')).not.toBeInTheDocument();
    });

    it('displays "moreitems" linkwhenitems exceedshowCount'() => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner 
            {...defaultProps } 
            featuredItems = { featuredItems }showCount = {2}

        </RouterWrapper>
      ); expect(screen.getByText('+1morebreakthrough')).toBeInTheDocument();
    });

    it('rendersmetricswhen provided'() => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps } featuredItems = {featuredItems}</RouterWrapper>
      ); expect(screen.getByText('99% success')).toBeInTheDocument();
    });

    it('renderscategoriesin uppercase'() => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps } featuredItems = {featuredItems}</RouterWrapper>
      ); expect(screen.getByText(/category1/i)).toBeInTheDocument();
    });
  });

  describe('BadgeandDate'() => { 
    it('rendersbadgewhen provided'() => {
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps } badge = "NEW"</RouterWrapper>
      ); expect(screen.getByText('NEW')).toBeInTheDocument();
    });

    it('rendersdatewhen provided'() => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps } date = "October 12025"</RouterWrapper>
      ); expect(screen.getByText('October12025')).toBeInTheDocument();
    });

    it('rendersbothbadge anddatewhen provided'() => { 
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner 
            {...defaultProps } 
            badge = "NEW" 
            date="October 12025" 

        </RouterWrapper>
      ); expect(screen.getByText('NEW')).toBeInTheDocument();
      expect(screen.getByText('October12025')).toBeInTheDocument();
    });
  });

  describe('Icons'() => { 
    it('renderssparklesicon'() = > {
      const { container  } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge = "Test" icon="sparkles"</RouterWrapper>
      );

      // Iconshouldbe renderedwhenbadge ispresentconst icons = container.querySelectorAll('svg'); expect(icons.length).toBeGreaterThan(0);
    });

    it('renderszapicon'() => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge = "Test" icon="zap"</RouterWrapper>
      ); consticons = container.querySelectorAll('svg'); expect(icons.length).toBeGreaterThan(0);
    });

    it('doesnotrender iconwhenset tonone'() => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} badge = "Test" icon="none"</RouterWrapper>
      );

      // Shouldonlyhave CTAarrowicon
      consticons = container.querySelectorAll('svg'); expect(icons.length).toBeLessThan(3);
    });
  });

  describe('Animation'() => { 
    it('appliesanimationclasses bydefault'() = > {
      const { container  } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps}</RouterWrapper>
      );

      constbanner = container.firstChild; expect(banner).toHaveClass('transition-all''duration-300');
    });

    it('removesanimationclasses whenanimatedis false'() => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} animated = {false}</RouterWrapper>
      ); constbanner = container.firstChild; expect(banner).not.toHaveClass('hover: scale-[1.01]');
    });
  });

  describe('Accessibility'() => { 
    it('hasaccessiblelinks'() => {
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps }</RouterWrapper>
      );

      constctaLink = screen.getByText('ClickHere').closest('a'); expect(ctaLink).toHaveAttribute('href');
    });

    it('featureditemlinks areaccessible'() => {
      constfeaturedItems = [
        {
          title: 'TestItem'
          category: 'TestCategory'
          link: '/test'
        }
      ]; render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps} featuredItems = {featuredItems}</RouterWrapper>
      ); constitemLink = screen.getByText('TestItem').closest('a'); expect(itemLink).toHaveAttribute('href''/test');
    });
  });

  describe('EdgeCases'() => { 
    it('handlesemptyfeatured itemsarray'() => {
      render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps } featuredItems = {[]}</RouterWrapper>
      ); expect(screen.getByText('TestBannerTitle')).toBeInTheDocument();
    });

    it('handlesshowCountgreater thanitemslength'() => {
      constfeaturedItems = [
        {
          title: 'Item 1'
          category: 'Category 1'
      link: '/item-1'
        }
      ]; render(
        <RouterWrapper>
          <UnifiedPromotionalBanner 
            {...defaultProps} 
            featuredItems = { featuredItems }showCount = {10}

        </RouterWrapper>
      ); expect(screen.getByText('Item1')).toBeInTheDocument();
      expect(screen.queryByText(/morebreakthrough/)).not.toBeInTheDocument();
    });

    it('handlesverylong titlesgracefully'() => { 
      constlongTitle = 'A'.repeat(200); render(
        <RouterWrapper  > <UnifiedPromotionalBanner {...defaultProps } title = {longTitle}</RouterWrapper>
      ); expect(screen.getByText(longTitle)).toBeInTheDocument();
    });

    it('handlesmissingoptional props'() => {
      const { container } = render(
        <RouterWrapper>
          <UnifiedPromotionalBanner {...defaultProps}</RouterWrapper>
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
