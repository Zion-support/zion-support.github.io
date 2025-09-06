<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {CategoriesSection} from "@/components/CategoriesSection";
import {BenefitsSection} from "@/components/BenefitsSection";
import {HowItWorksSection} from "@/components/HowItWorksSection";
import {NewsletterSection} from "@/components/NewsletterSection";
import {FeaturedListingsSection} from "@/components/FeaturedListingsSection";
import {SEO} from "@/components/SEO";
import {HeroSection} from "@/components/HeroSection";
import {QuickAccess} from "@/components/home/QuickAccess";
import {FeatureCTAs} from "@/components/home/FeatureCTAs";
import {FeatureHighlights} from "@/components/home/FeatureHighlights";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { CategoriesSection } from "@/components/CategoriesSection",
import { BenefitsSection } from "@/components/BenefitsSection",
import { HowItWorksSection } from "@/components/HowItWorksSection",
import { NewsletterSection } from "@/components/NewsletterSection",
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",
import { SEO } from "@/components/SEO",
import { HeroSection } from "@/components/HeroSection",
import { QuickAccess } from "@/components/home/QuickAccess",
<<<<<<< HEAD
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { FeatureCTAs } from "@/components/home/FeatureCTAs",
<<<<<<< HEAD
import { FeatureHighlights } from "@/components/home/FeatureHighlights",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export default function Home() {
=======
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { FeatureCTAs } from "@/components/home/FeatureCTAs",
import { FeatureHighlights } from "@/components/home/FeatureHighlights",export default function Home() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { FeatureHighlights } from "@/components/home/FeatureHighlights",export default function Home() {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Zion - The Tech & AI Marketplace"
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https: //app.ziontechgroup.com/"
      />
      <Header />

      <HeroSection />

      <QuickAccess />

      <FeatureCTAs />

      <FeatureHighlights />

      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
      <Footer />
    </div>
<<<<<<< HEAD
  )
<<<<<<< HEAD
}
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {CategoriesSection} from "@/components/CategoriesSection";
import {BenefitsSection} from "@/components/BenefitsSection";
import {HowItWorksSection} from "@/components/HowItWorksSection";
import {NewsletterSection} from "@/components/NewsletterSection";
import {FeaturedListingsSection} from "@/components/FeaturedListingsSection";
import {SEO} from "@/components/SEO";
import {HeroSection} from "@/components/HeroSection";
import {QuickAccess} from "@/components/home/QuickAccess";
import {FeatureCTAs} from "@/components/home/FeatureCTAs";
import {FeatureHighlights} from "@/components/home/FeatureHighlights";

<<<<<<< HEAD

<<<<<<< HEAD
=======
=======

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react',;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { CategoriesSection } from "@/components/CategoriesSection",;
import { BenefitsSection } from "@/components/BenefitsSection",;
import { HowItWorksSection } from "@/components/HowItWorksSection",;
import { NewsletterSection } from "@/components/NewsletterSection",;
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",;
import { SEO } from "@/components/SEO",;
import { HeroSection } from "@/components/HeroSection",;
import { QuickAccess } from "@/components/home/QuickAccess",;
import { FeatureCTAs } from "@/components/home/FeatureCTAs",;
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
<<<<<<< HEAD
<<<<<<< HEAD

export default function Home() {;
  return (
    <div className="min-h-screen bg-background">;
      <SEO
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https: //app && app.ziontechgroup.com/"
      />;
      <Header />;

      <HeroSection />;

      <QuickAccess />;

      <FeatureCTAs />;

      <FeatureHighlights />;

=======
import React from 'react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { CategoriesSection } from '@/components / CategoriesSection';
import { BenefitsSection } from '@/components / BenefitsSection';
import { HowItWorksSection } from '@/components / HowItWorksSection';
import { NewsletterSection } from '@/components / NewsletterSection';
import { FeaturedListingsSection } from '@/components / FeaturedListingsSection';
import { SEO } from '@/components / SEO';
import { HeroSection } from '@/components / HeroSection';
import { QuickAccess } from '@/components / home / QuickAccess';
import { FeatureCTAs } from '@/components / home / FeatureCTAs';
import { FeatureHighlights } from '@/components / home / FeatureHighlights';
export default /**
 * Home - Function description
 */
function Home() {
  return (
    <div className="min - h-screen bg - background">;
=======
export default function Home() {;
  return (;
    <div className="min-h-screen bg-background">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <SEO;
        title="Zion - The Tech & AI Marketplace";
        description="Discover top AI and tech talent, services, and equipment in one place.";
        keywords="AI, technology, marketplace, services, talent";
        canonical="https: //app.ziontechgroup.com/";
      />;
      <Header />;
      <HeroSection />;
      <QuickAccess />;
      <FeatureCTAs />;
      <FeatureHighlights />;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

import React from 'react',;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { CategoriesSection } from "@/components/CategoriesSection",;
import { BenefitsSection } from "@/components/BenefitsSection",;
import { HowItWorksSection } from "@/components/HowItWorksSection",;
import { NewsletterSection } from "@/components/NewsletterSection",;
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",;
import { SEO } from "@/components/SEO",;
import { HeroSection } from "@/components/HeroSection",;
import { QuickAccess } from "@/components/home/QuickAccess",;
import { FeatureCTAs } from "@/components/home/FeatureCTAs",;
import { FeatureHighlights } from "@/components/home/FeatureHighlights",;
;
export default function Home() {;
  return (;
    <div className="min-h-screen bg-background">;
      <SEO ;
        title="Zion - The Tech & AI Marketplace" ;
        description="Discover top AI and tech talent, services, and equipment in one place.";
        keywords="AI, technology, marketplace, services, talent";
        canonical="https://app.ziontechgroup.com/";
      />;
      <Header />;
      ;
      <HeroSection />;
      ;
      <QuickAccess />;
      ;
      <FeatureCTAs />;
      ;
      <FeatureHighlights />;
      ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <CategoriesSection />;
      <BenefitsSection />;
      <HowItWorksSection />;
      <FeaturedListingsSection />;
      <NewsletterSection />;
      <Footer />;
<<<<<<< HEAD

    </div>);
<<<<<<< HEAD
=======
=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}

import React from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {CategoriesSection} from "@/components/CategoriesSection";
import {BenefitsSection} from "@/components/BenefitsSection";
import {HowItWorksSection} from "@/components/HowItWorksSection";
import {NewsletterSection} from "@/components/NewsletterSection";
import {FeaturedListingsSection} from "@/components/FeaturedListingsSection";
import {SEO} from "@/components/SEO";
import {HeroSection} from "@/components/HeroSection";
import {QuickAccess} from "@/components/home/QuickAccess";
import {FeatureCTAs} from "@/components/home/FeatureCTAs";
import {FeatureHighlights} from "@/components/home/FeatureHighlights";

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from 'react',;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { CategoriesSection } from "@/components/CategoriesSection",;
import { BenefitsSection } from "@/components/BenefitsSection",;
import { HowItWorksSection } from "@/components/HowItWorksSection",;
import { NewsletterSection } from "@/components/NewsletterSection",;
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",;
import { SEO } from "@/components/SEO",;
import { HeroSection } from "@/components/HeroSection",;
import { QuickAccess } from "@/components/home/QuickAccess",;
import { FeatureCTAs } from "@/components/home/FeatureCTAs",;
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
      <SEO;
        title="Zion - The Tech & AI Marketplace";
        description="Discover top AI and tech talent, services, and equipment in one place.";
        keywords="AI, technology, marketplace, services, talent";
        canonical="https: //app.ziontechgroup.com/";
      />;
      <Header />;
      <HeroSection />;
      <QuickAccess />;
      <FeatureCTAs />;
      <FeatureHighlights />;
      <CategoriesSection />;
      <BenefitsSection />;
      <HowItWorksSection />;
      <FeaturedListingsSection />;
      <NewsletterSection />;
      <Footer />;
    </div>);
}}
;

<<<<<<< HEAD
<<<<<<< HEAD

    </div>);
}
    </div>;
  );
} export default function Home () {
  return (<div className="min-h-screen bg-background" > 
    </div>;
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
;
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    </div>);
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
