import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Lazy load heavy components
const UnifiedContentPromotion = dynamic(() => import('./components/UnifiedContentPromotion'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>
});

const InteractiveAIROICalculator = dynamic(() => import('./components/InteractiveAIROICalculator'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded"></div>
});

const ContentShowcase = dynamic(() => import('./components/ContentShowcase'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded"></div>
});

const InteractiveContentShowcase2026 = dynamic(() => import('./components/InteractiveContentShowcase2026'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded"></div>
});

export const metadata = {
  title: 'Zion Tech Group — AI Enterprise Transformation & IT Services | 300% ROI Guaranteed',
  description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains. Expert AI consulting, autonomous systems, and digital transformation services.',
  keywords: 'AI enterprise transformation, AI consulting, autonomous AI systems, enterprise AI services, digital transformation, AI implementation, AI ROI calculator, manufacturing AI, AI automation, AI strategy',
  openGraph: {
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    type: 'website',
    url: 'https://ziontechgroup.com',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Zion Tech Group AI Enterprise Transformation'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    images: ['/og-image.jpg']
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Enterprise Transformation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/services" 
                className="border border-blue-600 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <UnifiedContentPromotion />
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveAIROICalculator />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContentShowcase />
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveContentShowcase2026 />
        </div>
      </section>
    </div>
  );
}