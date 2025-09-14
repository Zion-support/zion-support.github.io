import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import ErrorBoundary from '../components/ErrorBoundary';
import SEO from '../components/SEO';
import LoadingSpinner from '../components/LoadingSpinner';

// Import our new promotional components
import AI2025_2026UltimateBreakthroughBanner from '../components/AI2025-2026UltimateBreakthroughBanner';
import RevolutionaryTransformationSuccessBanner from '../components/RevolutionaryTransformationSuccessBanner';

// Lazy load heavy components
const ROICalculator = lazy(() => import('../components/ROICalculator'));
const StructuredData = lazy(() => import('../components/StructuredData'));

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: ['AI automation', 'cloud computing', 'micro SaaS', 'technology consulting', 'enterprise solutions', 'digital transformation'],
};

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
        {/* NEW 2025-2026 Revolutionary Content - Featured Prominently */}
        <AI2025_2026UltimateBreakthroughBanner />
        <RevolutionaryTransformationSuccessBanner />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🚀 AI & TECHNOLOGY SOLUTIONS</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with AI
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Cutting-edge AI, cloud infrastructure, and micro SaaS solutions. 
                Expert consulting and implementation services for enterprise success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
                <div className="text-gray-600">Average ROI Increase</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Automation</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent automation solutions that streamline operations and boost productivity across your organization.
                </p>
                <Link href="/services/ai-automation" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Scalable, secure cloud solutions designed to support your business growth and digital transformation.
                </p>
                <Link href="/services/cloud-infrastructure" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
                <p className="text-gray-600 mb-4">
                  Custom micro SaaS applications that solve specific business challenges with modern, scalable solutions.
                </p>
                <Link href="/services/micro-saas" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* New Content Promotion */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest AI Breakthrough Content</h2>
              <p className="text-xl text-gray-600">
                Discover revolutionary AI technologies and success stories from 2025-2026
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI 2025-2026: The Ultimate Breakthrough Revolution
                </h3>
                <p className="text-gray-600 mb-6">
                  Discover the revolutionary AI breakthroughs transforming businesses at quantum speed. 
                  From autonomous enterprise systems to quantum-enhanced neural networks.
                </p>
                <Link 
                  href="/blog/ai-2025-2026-ultimate-breakthrough-revolution"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Read Full Article
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Revolutionary Transformation: 2,500% ROI Success Story
                </h3>
                <p className="text-gray-600 mb-6">
                  Learn how a Fortune 100 company achieved unprecedented success through 
                  revolutionary AI transformation, increasing revenue from $45B to $157.5B.
                </p>
                <Link 
                  href="/case-studies/ai-2025-2026-revolutionary-transformation-2500-roi-success"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Structured Data */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading..." />}>
          <StructuredData 
            type="Organization" 
            data={{
              name: "Zion Tech Group",
              description: "Transforming businesses through cutting-edge technology solutions",
              url: "https://zion.app",
              logo: "https://zion.app/images/zion-tech-group-logo.png",
              sameAs: [
                "https://twitter.com/ZionTechGroup",
                "https://linkedin.com/company/zion-tech-group"
              ]
            }} 
          />
          <StructuredData 
            type="WebSite" 
            data={{
              name: "Zion Tech Group",
              url: "https://zion.app",
              potentialAction: {
                "@type": "SearchAction",
                "target": "https://zion.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }} 
          />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}