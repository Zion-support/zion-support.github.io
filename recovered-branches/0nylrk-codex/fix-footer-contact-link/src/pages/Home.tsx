
<<<<<<< HEAD
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


import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { FeatureCTAs } from "@/components/home/FeatureCTAs",
import { FeatureHighlights } from "@/components/home/FeatureHighlights",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function Home() {
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
  )

<<<<<<< HEAD
<<<<<<< HEAD

}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  return (;
    <div className="min-h-screen bg-background">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <CategoriesSection />;
      <BenefitsSection />;
      <HowItWorksSection />;
      <FeaturedListingsSection />;
      <NewsletterSection />;
      <Footer />;
<<<<<<< HEAD

    </div>);
}

;


<<<<<<< HEAD
    </div>);
}
    </div>;
  );
} export default function Home () {
  return (<div className="min-h-screen bg-background" > 
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;
  );
}
;
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
