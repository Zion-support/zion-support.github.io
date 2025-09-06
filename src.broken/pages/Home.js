import React from 'react';
:src.broken/pages/Home.js
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
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PricingSection } from "@/components/PricingSection";
import { TechSolutionsSection } from "@/components/TechSolutionsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TeamExpertiseSection } from "@/components/TeamExpertiseSection";
import { GlobalPresenceSection } from "@/components/GlobalPresenceSection";
import { InnovationResearchSection } from "@/components/InnovationResearchSection";
import { ClientSuccessStoriesSection } from "@/components/ClientSuccessStoriesSection";
import { TechnologyStackSection } from "@/components/TechnologyStackSection";
import { SecurityComplianceSection } from "@/components/SecurityComplianceSection";
import { AIServicesShowcase } from "@/components/AIServicesShowcase";
import { InteractiveTestimonials } from "@/components/InteractiveTestimonials";
export default function Home() {
    return (<>
      <SEO title="Zion Tech Group - Leading AI & Technology Solutions" description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem." canonical="/" url="https://ziontechgroup.com"/>
      
      <HeroSection />
      <QuickAccess />
      <AIServicesShowcase />
      <FeatureCTAs />
      <FeatureHighlights />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TechSolutionsSection />
      <CaseStudiesSection />
      <TeamExpertiseSection />
      <GlobalPresenceSection />
      <InnovationResearchSection />
      <ClientSuccessStoriesSection />
      <InteractiveTestimonials />
      <TechnologyStackSection />
      <SecurityComplianceSection />
      <PricingSection />
      <FeaturedListingsSection />
      <NewsletterSection />
      <ITServiceRequestHero />
      <FloatingCTA />
    </>);

export default function Home() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-foreground mb-6">
                    Welcome to Zion Tech Group
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                    Leading provider of innovative technology solutions, specializing in AI, 
                    cloud computing, cybersecurity, and digital transformation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">AI Solutions</h3>
                        <p className="text-muted-foreground">
                            Cutting-edge artificial intelligence solutions to transform your business operations.
                        </p>
                    </div>
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">Cloud Services</h3>
                        <p className="text-muted-foreground">
                            Comprehensive cloud computing and migration services for modern businesses.
                        </p>
                    </div>
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">Cybersecurity</h3>
                        <p className="text-muted-foreground">
                            Advanced security solutions to protect your digital assets and infrastructure.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
