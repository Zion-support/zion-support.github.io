
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
import { FeatureHighlights } from "@/components/home/FeatureHighlights",export default function Home() {
  return (
    <div className=&quot;min-h-screen bg-background&quot;>

export default function Home() {_return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https: //app.ziontechgroup.com/"        description="Discover top AI and tech talent, _services, _and equipment in one place."
        keywords="AI, _technology, _marketplace, _services, _talent"
        canonical="https://app.ziontechgroup.com/"
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
}