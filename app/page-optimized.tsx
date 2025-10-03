// import React from 'react';
import { UnifiedBanner, bannerConfigurations } from './components/UnifiedBannerSystem';
import { LazyWrapper } from './components/LazyLoader';
import { SEOOptimizer } from './components/SEOOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load heavy components
const LazyContentShowcase = React.lazy(() => import('./components/ContentShowcase'));
const LazyFeaturedServiceCard = React.lazy(() => import('./components/FeaturedServiceCard'));
const LazyNewServicesHero = React.lazy(() => import('./components/NewServicesHero'));

export default function HomePage() {
  return (
    <>
      <SEOOptimizer
        title="Zion Tech Group - Leading AI & IT Solutions"
        description="Transform your business with cutting-edge AI solutions, micro SaaS services, and comprehensive IT consulting. Expert technology solutions for modern enterprises."
        keywords={[
          'AI solutions',
          'micro SaaS',
          'IT consulting', 
          'business automation',
          'cloud services',
          'artificial intelligence',
          'machine learning',
          'data analytics'
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading provider of AI-powered solutions and IT consulting services",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          }
        }}
      />
      
      <AccessibilityEnhancer />
      <PerformanceMonitor />

      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <LazyWrapper>
          <LazyNewServicesHero />
        </LazyWrapper>

        {/* Featured Banners */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Innovative Solutions for Modern Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered solutions and IT services designed to transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <UnifiedBanner {...bannerConfigurations.aiShowcase} />
              <UnifiedBanner {...bannerConfigurations.innovation} />
              <UnifiedBanner {...bannerConfigurations.breakthrough} />
            </div>
          </div>
        </section>

        {/* Content Showcase */}
        <LazyWrapper>
          <LazyContentShowcase />
        </LazyWrapper>

        {/* Featured Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Featured Services
              </h2>
              <p className="text-xl text-gray-600">
                Explore our most popular and effective solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <LazyWrapper>
                <LazyFeaturedServiceCard
                  title="AI Customer Support"
                  description="Automate customer interactions with intelligent chatbots and support systems"
                  features={[
                    "24/7 automated support",
                    "Natural language processing",
                    "Multi-channel integration",
                    "Real-time analytics"
                  ]}
                  price="$299/month"
                  link="/services/ai-customer-support"
                />
              </LazyWrapper>
              
              <LazyWrapper>
                <LazyFeaturedServiceCard
                  title="Financial Analysis Platform"
                  description="Advanced AI-powered financial insights and predictive analytics"
                  features={[
                    "Real-time market analysis",
                    "Predictive modeling",
                    "Risk assessment",
                    "Automated reporting"
                  ]}
                  price="$499/month"
                  link="/services/ai-financial-analysis"
                />
              </LazyWrapper>
              
              <LazyWrapper>
                <LazyFeaturedServiceCard
                  title="Project Management Suite"
                  description="Intelligent project management with AI-driven insights and automation"
                  features={[
                    "Smart task allocation",
                    "Progress tracking",
                    "Resource optimization",
                    "Team collaboration tools"
                  ]}
                  price="$399/month"
                  link="/services/ai-project-management"
                />
              </LazyWrapper>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss how our AI and IT solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}