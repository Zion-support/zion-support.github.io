import React from 'react';
import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const UnifiedContentPromotion = lazy(() => import('./components/UnifiedContentPromotion'));
const InteractiveAIROICalculator = lazy(() => import('./components/InteractiveAIROICalculator'));
const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
const InteractiveContentShowcase2026 = lazy(() => import('./components/InteractiveContentShowcase2026'));

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
        alt: 'Zion Tech Group AI Enterprise Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI Enterprise Transformation & IT Services',
    description: 'Transform your enterprise with AI-powered solutions. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const HomePage = React.memo(function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI-powered enterprise solutions and digital transformation services",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
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
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ],
    "offers": {
      "@type": "Offer",
      "name": "AI Enterprise Transformation Services",
      "description": "Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains",
      "price": "50000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Unified Content Promotion - Replaces multiple redundant banners */}
      <UnifiedContentPromotion />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business with
            <span className="text-yellow-400"> AI-Powered Solutions</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl">
            Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
            and enterprise IT solutions that drive growth, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Explore Our Services
            </Link>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call +1 302 464 0950
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">500+</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">99.9%</div>
              <div className="text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">24/7</div>
              <div className="text-sm">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">$2M+</div>
              <div className="text-sm">Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive AI ROI Calculator */}
      <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 rounded"></div>}>
        <InteractiveAIROICalculator />
      </Suspense>

      {/* Dynamic Content Showcase */}
      <Suspense fallback={<div className="animate-pulse bg-gray-200 h-48 rounded"></div>}>
        <ContentShowcase />
      </Suspense>

      {/* Interactive Content Showcase 2026 */}
      <Suspense fallback={<div className="animate-pulse bg-gray-200 h-48 rounded"></div>}>
        <InteractiveContentShowcase2026 />
      </Suspense>

      {/* Enhanced Newsletter Signup */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Newsletter Signup */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-4">
                Stay Ahead with AI & Tech Insights
              </h2>
              <p className="text-gray-600 mb-6">
                Get weekly updates on AI trends, tech innovations, and exclusive service offers
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Join 10,000+ professionals. Unsubscribe anytime.
              </p>
            </div>

            {/* Content Highlights */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Latest Content Highlights</h3>
              <div className="space-y-4">
                <a href="/blog/ai-2026-enterprise-rag-guardrails" className="flex items-start gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="text-2xl">🛡️</div>
                  <div>
                    <h4 className="font-semibold">Enterprise RAG Guardrails 2026</h4>
                    <p className="text-gray-600 text-sm">Safe, reliable RAG with verifiable citations</p>
                  </div>
                </a>
                <a href="/blog/ai-2026-autonomous-enterprise-operations" className="flex items-start gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="text-2xl">🏭</div>
                  <div>
                    <h4 className="font-semibold">Autonomous Enterprise Operations 2026</h4>
                    <p className="text-gray-600 text-sm">90% efficiency, 300% ROI with guardrailed agents</p>
                  </div>
                </a>
                <a href="/blog/ai-cloud-cost-optimization-2025" className="flex items-start gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="text-2xl">💸</div>
                  <div>
                    <h4 className="font-semibold">AI Cloud Cost Optimization</h4>
                    <p className="text-gray-600 text-sm">Cut spend by 70–85% with smart routing</p>
                  </div>
                </a>
              </div>
              <div className="mt-6">
                <Link
                  to="/blog"
                  className="text-blue-600 hover:text-blue-800 font-semibold">
                  View All Content →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how our AI and IT solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get Free Consultation
            </a>
          </div>
          <div className="mt-8 text-sm">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </section>
    </div>
  );
});

export default $1;