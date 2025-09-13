'use client';

import React from 'react';
import SEO from '../components/SEO';

// Import all promotional banners
import AI2025RevolutionaryBreakthroughPromotionBanner from '../components/AI2025RevolutionaryBreakthroughPromotionBanner';
import AI2026UltimateBreakthroughPromotionBanner from '../components/AI2026UltimateBreakthroughPromotionBanner';
import QuantumNeuralFusion2026PromotionBanner from '../components/QuantumNeuralFusion2026PromotionBanner';
import UltimateContentRevolutionBanner2025 from '../components/UltimateContentRevolutionBanner2025';
import UltimateContentRevolutionBanner2026 from '../components/UltimateContentRevolutionBanner2026';

// Import new promotional banners
import AI2025UltimateTrendsBreakthroughPromotionBanner from '../components/AI2025UltimateTrendsBreakthroughPromotionBanner';
import AI2025GlobalTransformation15000ROIPromotionBanner from '../components/AI2025GlobalTransformation15000ROIPromotionBanner';
import NewContent2025PromotionBanner from '../components/NewContent2025PromotionBanner';
import AI2025RevolutionaryBreakthroughBanner from '../components/AI2025RevolutionaryBreakthroughBanner';
import QuantumNeuralFusionBanner from '../components/QuantumNeuralFusionBanner';
import NewContentPromotionBanner from '../components/NewContentPromotionBanner';
import InteractiveContentDiscoveryWidget from '../components/InteractiveContentDiscoveryWidget';

// Import content showcase components
import AI2025BreakthroughShowcase from '../components/AI2025BreakthroughShowcase';
import AI2026_2030FuturePredictionsShowcase from '../components/AI2026_2030FuturePredictionsShowcase';
import HighROICaseStudiesShowcase from '../components/HighROICaseStudiesShowcase';

// Import new content components
import NewContent2025RevolutionaryBanner from '../components/NewContent2025RevolutionaryBanner';
import UltimateContentPromotionBanner2025 from '../components/UltimateContentPromotionBanner2025';
import InteractiveContentDiscoveryWidget2025 from '../components/InteractiveContentDiscoveryWidget2025';
import InteractiveContentShowcase from '../components/InteractiveContentShowcase';
import FeaturedContentShowcase2025 from '../components/FeaturedContentShowcase2025';
import AI2026QuantumNeuralFusionPromotionBanner from '../components/AI2026QuantumNeuralFusionPromotionBanner';
import InteractiveContentDiscoveryWidget2026 from '../components/InteractiveContentDiscoveryWidget2026';
import NewsletterSignup2026 from '../components/NewsletterSignup2026';
import NewContent2026PromotionBanner from '../components/NewContent2026PromotionBanner';
import RevolutionaryContentBanner2026 from '../components/RevolutionaryContentBanner2026';

// Import main components
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-red-50 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function HomePage() {
  return (
    <ErrorBoundary>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services."
        keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation"
        url="/"
      />
      
      <div className='min-h-screen bg-white'>
        {/* NEW AI 2025 REVOLUTIONARY BREAKTHROUGH BANNER */}
        <AI2025RevolutionaryBreakthroughPromotionBanner />
        
        {/* NEW AI 2026 ULTIMATE BREAKTHROUGH BANNER */}
        <AI2026UltimateBreakthroughPromotionBanner />
        
        {/* QUANTUM-NEURAL FUSION 2026 BREAKTHROUGH BANNER */}
        <QuantumNeuralFusion2026PromotionBanner />
        
        {/* ULTIMATE CONTENT REVOLUTION BANNER 2026 */}
        <UltimateContentRevolutionBanner2026 />
        
        {/* AI 2025 BREAKTHROUGH SHOWCASE */}
        <AI2025BreakthroughShowcase />
        
        {/* AI 2026-2030 FUTURE PREDICTIONS SHOWCASE */}
        <AI2026_2030FuturePredictionsShowcase />
        
        {/* HIGH ROI CASE STUDIES SHOWCASE */}
        <HighROICaseStudiesShowcase />
        
        {/* ULTIMATE CONTENT REVOLUTION BANNER 2025 */}
        <UltimateContentRevolutionBanner2025 />
        
        {/* ULTIMATE CONTENT PROMOTION BANNER 2025 */}
        <UltimateContentPromotionBanner2025 />
        
        {/* NEW CONTENT 2025 REVOLUTIONARY BANNER */}
        <NewContent2025RevolutionaryBanner />
        
        {/* NEW CONTENT 2025 PROMOTION BANNER */}
        <NewContent2025PromotionBanner />
        
        {/* AI 2025 ULTIMATE TRENDS BREAKTHROUGH PROMOTION BANNER */}
        <AI2025UltimateTrendsBreakthroughPromotionBanner />
        
        {/* AI 2025 GLOBAL TRANSFORMATION 15000 ROI PROMOTION BANNER */}
        <AI2025GlobalTransformation15000ROIPromotionBanner />
        
        {/* AI 2025 REVOLUTIONARY BREAKTHROUGH BANNER */}
        <AI2025RevolutionaryBreakthroughBanner />
        
        {/* QUANTUM NEURAL FUSION BANNER */}
        <QuantumNeuralFusionBanner />
        
        {/* NEW CONTENT PROMOTION BANNER */}
        <NewContentPromotionBanner />
        
        {/* INTERACTIVE CONTENT DISCOVERY WIDGET */}
        <InteractiveContentDiscoveryWidget />
        
        {/* INTERACTIVE CONTENT SHOWCASE */}
        <InteractiveContentShowcase />
        
        {/* FEATURED CONTENT SHOWCASE 2025 */}
        <FeaturedContentShowcase2025 />
        
        {/* AI 2026 QUANTUM NEURAL FUSION PROMOTION BANNER */}
        <AI2026QuantumNeuralFusionPromotionBanner />
        
        {/* INTERACTIVE CONTENT DISCOVERY WIDGET 2026 */}
        <InteractiveContentDiscoveryWidget2026 />
        
        {/* NEWSLETTER SIGNUP 2026 */}
        <NewsletterSignup2026 />
        
        {/* NEW CONTENT 2026 PROMOTION BANNER */}
        <NewContent2026PromotionBanner />
        
        {/* REVOLUTIONARY CONTENT BANNER 2026 */}
        <RevolutionaryContentBanner2026 />
        
        {/* INTERACTIVE CONTENT DISCOVERY WIDGET 2025 */}
        <InteractiveContentDiscoveryWidget2025 />
        
        {/* Main Hero Section */}
        <HeroSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}