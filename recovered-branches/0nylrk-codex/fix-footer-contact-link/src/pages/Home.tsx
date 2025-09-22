
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
export default function Home() {
import { FeatureHighlights } from "@/components/home/FeatureHighlights",export default function Home() {
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
export default function Home() {
  return (
import React from "react";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { CategoriesSection } from "@/components/CategoriesSection";"
import { BenefitsSection } from "@/components/BenefitsSection";"
import { HowItWorksSection } from "@/components/HowItWorksSection";"
import { NewsletterSection } from "@/components/NewsletterSection";"
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";"
import { SEO } from "@/components/SEO";"
import { HeroSection } from "@/components/HeroSection";"
import { QuickAccess } from "@/components/home/QuickAccess";"
import { FeatureCTAs } from "@/components/home/FeatureCTAs";"
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
export default function Home() {}
  return ("
    <div className="min-h-screen bg-background">
      <SEO"
        title="Zion - The Tech & AI Marketplace""
        description="Discover top AI and tech talent, services, and equipment in one place.""
        keywords="AI, technology, marketplace, services, talent""
        canonical="https: //app.ziontechgroup.com/"

export default function Home() {
  return ("
    <div className="min-h-screen bg-background">"
</div>
      <SEO;"
        title="Zion - The Tech & AI Marketplace"""
        description="Discover top AI and tech talent, services, and equipment in one place."""
        keywords="AI, technology, marketplace, services, talent"""
        canonical="https: //app.ziontechgroup.com/""

      />

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
</div>
  )
}
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


</Footer>
    </div>)
    </div>);
}
    </div>;
  );
} export default function Home() { return null; }
}
;

    </div>);
}

"
    </div>;"
  return (<div className="min-h-screen bg-background" >"
    </div>;)
    </div>);"
pr-12325

