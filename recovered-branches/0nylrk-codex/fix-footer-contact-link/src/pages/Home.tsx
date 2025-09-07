<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Zion - The Tech & AI Marketplace"
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https: //app.ziontechgroup.com/"
      />
=======
<<<<<<< HEAD
=======


import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { FeatureCTAs } from "@/components/home/FeatureCTAs",
import { FeatureHighlights } from "@/components/home/FeatureHighlights",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function Home() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (

    <div className="min-h-screen bg-background">
      <SEO"
        title="Zion - The Tech & AI Marketplace""
        description="Discover top AI and tech talent, services, and equipment in one place.""
        keywords="AI, technology, marketplace, services, talent""
        canonical="https: //app.ziontechgroup.com/"

      />

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <Header />

</Header>

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
<<<<<<< HEAD

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
<<<<<<< HEAD
    </div>
  )
=======

<<<<<<< HEAD

}
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
import React from 'react';'
import {Header} from "@/components/Header";"
import {Footer} from "@/components/Footer";"
import {CategoriesSection} from "@/components/CategoriesSection";"
import {BenefitsSection} from "@/components/BenefitsSection";"
import {HowItWorksSection} from "@/components/HowItWorksSection";"
import {NewsletterSection} from "@/components/NewsletterSection";"
import {FeaturedListingsSection} from "@/components/FeaturedListingsSection";"
import {SEO} from "@/components/SEO";"
import {HeroSection} from "@/components/HeroSection";"
import {QuickAccess} from "@/components/home/QuickAccess";"
import {FeatureCTAs} from "@/components/home/FeatureCTAs";"
import {FeatureHighlights} from "@/components/home/FeatureHighlights";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer",;"
import { CategoriesSection } from "@/components/CategoriesSection",;"
import { BenefitsSection } from "@/components/BenefitsSection",;"
import { HowItWorksSection } from "@/components/HowItWorksSection",;"
import { NewsletterSection } from "@/components/NewsletterSection",;"
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",;"
import { SEO } from "@/components/SEO",;"
import { HeroSection } from "@/components/HeroSection",;"
import { QuickAccess } from "@/components/home/QuickAccess",;"
import { FeatureCTAs } from "@/components/home/FeatureCTAs",;"
=======

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
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
export default function Home() {;
  return (;
    <div className="min-h-screen bg-background">;
=======

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <CategoriesSection />;
      <BenefitsSection />;
      <HowItWorksSection />;
      <FeaturedListingsSection />;
      <NewsletterSection />;
      <Footer />;

}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;

</Footer>
    </div>)
    </div>);

<<<<<<< HEAD
    </div>);
}
=======
<<<<<<< HEAD
    </div>);
>>>>>>> merged-prs-20250907-203621
}
=======
<<<<<<< HEAD
    </div>);
}
    </div>;
  );
} export default function Home () {
  return (<div className="min-h-screen bg-background" > 
    </div>;
  );
}
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
