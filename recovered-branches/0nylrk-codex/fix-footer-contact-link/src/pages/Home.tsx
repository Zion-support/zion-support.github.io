
<<<<<<< HEAD
<<<<<<< HEAD
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
import { FeatureCTAs } from "@/components/home/FeatureCTAs",
import { FeatureHighlights } from "@/components/home/FeatureHighlights",
=======
import React from 'react';
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { CategoriesSection } from &quot;@/components/CategoriesSection&quot;;
import { BenefitsSection } from &quot;@/components/BenefitsSection&quot;;
import { HowItWorksSection } from &quot;@/components/HowItWorksSection&quot;;
import { NewsletterSection } from &quot;@/components/NewsletterSection&quot;;
import { FeaturedListingsSection } from &quot;@/components/FeaturedListingsSection&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { HeroSection } from &quot;@/components/HeroSection&quot;;
import { QuickAccess } from &quot;@/components/home/QuickAccess&quot;;
import { FeatureCTAs } from &quot;@/components/home/FeatureCTAs&quot;;
import { FeatureHighlights } from &quot;@/components/home/FeatureHighlights&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function Home() {
  return (
    <div className=&quot;min-h-screen bg-background&quot;>
      <SEO 
<<<<<<< HEAD
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https: //app.ziontechgroup.com/"
=======
        title=&quot;Zion - The Tech & AI Marketplace&quot; 
        description=&quot;Discover top AI and tech talent, services, and equipment in one place.&quot;
        keywords=&quot;AI, technology, marketplace, services, talent&quot;
        canonical=&quot;https://app.ziontechgroup.com/&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
export default function Home() {;
  return (;
    <div className="min-h-screen bg-background">;
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
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;