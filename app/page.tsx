import React from 'react';
import Link from 'next/link';
// import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';
import LoadingSpinner from '../components/LoadingSpinner';

// Import working components only
import NewContent2025UltimateShowcaseBanner from '../components/NewContent2025UltimateShowcaseBanner';
import RevolutionaryContent2025Showcase from '../components/RevolutionaryContent2025Showcase';
import UltimateContentDiscoveryWidget2025 from '../components/UltimateContentDiscoveryWidget2025';

// Import additional components
import ROICalculator from '../components/ROICalculator';
import StructuredData from '../components/StructuredData';
import PerformanceMetrics from '../components/PerformanceMetrics';
import TechnologyStack from '../components/TechnologyStack';

// Import key promotional components that exist
import NewContentPromotionBanner from '../components/NewContentPromotionBanner';
import InteractiveContentDiscoveryWidget from '../components/InteractiveContentDiscoveryWidget';
import ComprehensiveSolutionsBanner2025 from '../components/ComprehensiveSolutionsBanner2025';
import NewServicesShowcase2025 from '../components/NewServicesShowcase2025';
import EnhancedContentPromotionBanner2026 from '../components/EnhancedContentPromotionBanner2026';
import ComprehensiveContentShowcase2026 from '../components/ComprehensiveContentShowcase2026';
import NewContentShowcase2025 from '../components/NewContentShowcase2025';
import SuccessStoriesBanner2025 from '../components/SuccessStoriesBanner2025';
import RevolutionaryContent2025Banner from '../components/RevolutionaryContent2025Banner';
import UltimateContentShowcase2025 from '../components/UltimateContentShowcase2025';

// Import AI 2026 Future Predictions promotional components
import AI2026FuturePredictionsUltimateBreakthroughBanner from '../components/AI2026FuturePredictionsUltimateBreakthroughBanner';

// Import Ultimate Digital Transformation promotional components
// import UltimateDigitalTransformationBanner from '../components/UltimateDigitalTransformationBanner';
// import UltimateDigitalTransformationShowcase from '../components/UltimateDigitalTransformationShowcase';

// Import AI 2025 Content Revolution Ultimate Banner
import AI2025ContentRevolutionUltimateBanner from '../components/AI2025ContentRevolutionUltimateBanner';

// Import Quantum Neural Fusion Revolution Banner
import QuantumNeuralFusionRevolutionBanner from '../components/QuantumNeuralFusionRevolutionBanner';

export default function HomePage() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - AI-Powered Business Solutions & Automation"
        description="Transform your business with cutting-edge AI solutions, automation, and digital transformation services. Get 50,000% ROI with our revolutionary AI technologies."
        keywords="AI automation, business transformation, digital solutions, ROI calculator, AI services"
      />
      
      <div className='min-h-screen bg-white'>
        {/* AI 2026 FUTURE PREDICTIONS ULTIMATE BREAKTHROUGH BANNER - NEWEST BREAKTHROUGH */}
        <AI2026FuturePredictionsUltimateBreakthroughBanner />

        {/* QUANTUM-NEURAL FUSION REVOLUTION BANNER - NEWEST BREAKTHROUGH */}
        <QuantumNeuralFusionRevolutionBanner />

        {/* ULTIMATE DIGITAL TRANSFORMATION 2025 BANNER - NEWEST BREAKTHROUGH */}
        {/* <UltimateDigitalTransformationBanner /> */}

        {/* AI 2025 CONTENT REVOLUTION ULTIMATE BANNER - NEWEST BREAKTHROUGH */}
        <AI2025ContentRevolutionUltimateBanner />

        {/* NEW CONTENT 2025 ULTIMATE SHOWCASE BANNER - NEWEST FEATURED */}
        <NewContent2025UltimateShowcaseBanner />
        
        {/* REVOLUTIONARY CONTENT 2025 SHOWCASE - NEWEST FEATURED */}
        <RevolutionaryContent2025Showcase />
        
        {/* ULTIMATE CONTENT DISCOVERY WIDGET 2025 - NEWEST FEATURED */}
        <UltimateContentDiscoveryWidget2025 />

        {/* NEW CONTENT PROMOTION BANNER */}
        <NewContentPromotionBanner />

        {/* INTERACTIVE CONTENT DISCOVERY WIDGET */}
        <InteractiveContentDiscoveryWidget />

        {/* COMPREHENSIVE SOLUTIONS BANNER 2025 */}
        <ComprehensiveSolutionsBanner2025 />

        {/* NEW SERVICES SHOWCASE 2025 */}
        <NewServicesShowcase2025 />

        {/* ENHANCED CONTENT PROMOTION BANNER 2026 */}
        <EnhancedContentPromotionBanner2026 />

        {/* COMPREHENSIVE CONTENT SHOWCASE 2026 */}
        <ComprehensiveContentShowcase2026 />

        {/* NEW CONTENT SHOWCASE 2025 */}
        <NewContentShowcase2025 />

        {/* SUCCESS STORIES BANNER 2025 */}
        <SuccessStoriesBanner2025 />

        {/* REVOLUTIONARY CONTENT 2025 BANNER */}
        <RevolutionaryContent2025Banner />

        {/* ULTIMATE CONTENT SHOWCASE 2025 */}
        <UltimateContentShowcase2025 />

        {/* ULTIMATE DIGITAL TRANSFORMATION SHOWCASE 2025 */}
        {/* <UltimateDigitalTransformationShowcase /> */}

        {/* Additional components */}
        <ROICalculator />
        <StructuredData />
        <PerformanceMetrics />
        <TechnologyStack />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
                <p className="text-gray-300">
                  Leading AI-powered business transformation solutions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/services" className="hover:text-white">AI Automation</Link></li>
                  <li><Link href="/services" className="hover:text-white">Digital Transformation</Link></li>
                  <li><Link href="/services" className="hover:text-white">Business Intelligence</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                  <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
                  <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <p className="text-gray-300">
                  Get in touch for your AI transformation journey.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}