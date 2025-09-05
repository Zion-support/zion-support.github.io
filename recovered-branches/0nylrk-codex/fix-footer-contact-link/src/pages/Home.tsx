
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

export default function Home() {
  return (
    <div className=&quot;min-h-screen bg-background&quot;>
      <SEO 
        title=&quot;Zion - The Tech & AI Marketplace&quot; 
        description=&quot;Discover top AI and tech talent, services, and equipment in one place.&quot;
        keywords=&quot;AI, technology, marketplace, services, talent&quot;
        canonical=&quot;https://app.ziontechgroup.com/&quot;
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
  );
}
