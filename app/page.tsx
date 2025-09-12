import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import NewContentPromoBanner from '../components/NewContentPromoBanner';
<<<<<<< HEAD
import ContentShowcase from '../components/ContentShowcase';
=======
import FeaturedNewContentShowcase from '../components/FeaturedNewContentShowcase';
import FeaturedContentShowcase from '../components/FeaturedContentShowcase';
import DynamicContentCarousel from '../components/DynamicContentCarousel';
import ContentDiscoverySection from '../components/ContentDiscoverySection';
import EnhancedNewsletter from '../components/EnhancedNewsletter';
import EnhancedNewsletterSignup from '../components/EnhancedNewsletterSignup';
import SuccessMetrics, { defaultMetrics, contentMetrics } from '../components/SuccessMetrics';
>>>>>>> origin/cursor/create-and-deploy-new-content-0928
import Card from '../components/ui/Card';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';

// Lazy load heavy components
const ROICalculator = lazy(() => import('../components/ROICalculator'));
const StructuredData = lazy(() => import('../components/StructuredData'));

export default function HomePage() {
  return (
    <ErrorBoundary>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services."
        keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation"
        url="/"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                AI-Powered Future
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions, cloud infrastructure, and innovative micro SaaS platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </Link>
                <Link
                  href="/content-showcase"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300"
                >
                  View Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Content Promotion Banner */}
        <NewContentPromoBanner variant="featured" maxItems={3} />
=======
        {/* New Content Promotion Banner */}
        <NewContentPromoBanner />

        {/* AI Tools Showcase Banner */}
        <section className="py-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-3">
                <span className="text-sm font-medium">🛠️ NEW AI TOOLS JUST LAUNCHED</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                🎯 Revolutionary AI Tools Suite: 10 Powerful Tools Now Available!
              </h2>
              <p className="text-lg opacity-90 mb-4 max-w-4xl mx-auto">
                Transform your AI journey with our comprehensive suite of tools: AI Readiness Assessment, ROI Calculator, 
                Implementation Roadmap Generator, Model Performance Monitor, Ethics Compliance Checker, Cost Optimizer, Security Assessment, Strategy Planner, Analytics Dashboard, and Training Simulator. 
                Get personalized insights and recommendations to maximize your AI success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  href="/tools/ai-tools-showcase"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  🛠️ Explore All AI Tools
                </Link>
                <Link
                  href="/tools/ai-readiness-assessment"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  🎯 Take Assessment
                </Link>
                <Link
                  href="/resources/ai-implementation-roadmap-2025"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  🗺️ View Roadmap
                </Link>
              </div>
              
              {/* Featured Tools Preview */}
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <Link href="/tools/ai-readiness-assessment" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-2xl mb-2">🎯</div>
                    <h3 className="text-sm font-semibold mb-1">AI Readiness Assessment</h3>
                    <p className="text-xs opacity-90">Evaluate your AI transformation readiness</p>
                  </div>
                </Link>
                <Link href="/tools/ai-roi-calculator" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-2xl mb-2">📊</div>
                    <h3 className="text-sm font-semibold mb-1">AI ROI Calculator</h3>
                    <p className="text-xs opacity-90">Calculate your AI investment returns</p>
                  </div>
                </Link>
                <Link href="/resources/ai-implementation-roadmap-2025" className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-2xl mb-2">🗺️</div>
                    <h3 className="text-sm font-semibold mb-1">Implementation Roadmap</h3>
                    <p className="text-xs opacity-90">32-week AI transformation guide</p>
                  </div>
                </Link>
                <Link
                  href="/resources/ai-automation-implementation-guide-2025"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Download Free Guide
                </Link>
              </div>
            </div>
          </div>
        </section>
>>>>>>> origin/cursor/create-and-deploy-new-content-0928

        {/* Featured Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI and technology solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="AI Automation"
                description="Streamline operations with intelligent automation solutions"
                icon="🤖"
                href="/services/ai-automation"
              />
              <FeatureCard
                title="Cloud Infrastructure"
                description="Scalable, secure, and cost-effective cloud solutions"
                icon="☁️"
                href="/services/cloud-infrastructure"
              />
              <FeatureCard
                title="Micro SaaS Development"
                description="Custom SaaS platforms for niche markets"
                icon="💼"
                href="/services/micro-saas"
              />
              <FeatureCard
                title="AI Consulting"
                description="Strategic guidance for AI implementation"
                icon="🧠"
                href="/services/ai-consulting"
              />
              <FeatureCard
                title="Edge Computing"
                description="Deploy AI at the edge for real-time processing"
                icon="⚡"
                href="/services/edge-computing"
              />
              <FeatureCard
                title="Quantum Computing"
                description="Next-generation computing solutions"
                icon="⚛️"
                href="/services/quantum-computing"
              />
            </div>
          </div>
        </section>

        {/* Content Showcase */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latest Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead with our latest research, case studies, and technical guides
              </p>
            </div>
            <ContentShowcase />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                See how we've helped businesses transform with AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Zion Tech Group transformed our operations with AI automation, reducing costs by 40% and improving efficiency by 60%."
                author="Sarah Johnson"
                company="TechCorp Inc."
                rating={5}
              />
              <TestimonialCard
                quote="Their cloud infrastructure solutions enabled us to scale globally while maintaining security and performance."
                author="Michael Chen"
                company="Global Solutions"
                rating={5}
              />
              <TestimonialCard
                quote="The micro SaaS platform they built for us has generated $2M in revenue in just 18 months."
                author="Emily Rodriguez"
                company="InnovateLab"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* ROI Calculator CTA */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Calculate Your AI ROI
            </h2>
            <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
              Discover the potential return on investment for your AI transformation
            </p>
            <Suspense fallback={<LoadingSpinner />}>
              <ROICalculator />
            </Suspense>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and technology solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </Link>
<<<<<<< HEAD
=======
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Carousel */}
      <DynamicContentCarousel />

      {/* New Content Promotional Banner */}
      <NewContentPromoBanner variant="featured" maxItems={3} />

      {/* Featured New Content Showcase */}
      <FeaturedNewContentShowcase title="Featured in January 2025" subtitle="Fresh articles, resources, and case studies just released" showViewAll={true} viewAllHref="/content-showcase" columns={3} />

      {/* Featured Content Showcase */}
      <FeaturedContentShowcase />

      {/* NEW CONTENT SPOTLIGHT SECTION */}
      <section className='py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6'>
              <span className='text-sm font-medium'>🔥 HOT THIS WEEK - JANUARY 2025</span>
            </div>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              🚀 Revolutionary AI Content Just Dropped
            </h2>
            <p className='text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed'>
              Discover our latest breakthrough content: AI 2025 Year in Review, Workforce Transformation strategies, 
              Sustainability success stories, and the complete AI Implementation Master Guide 2026. Expert insights 
              to accelerate your AI success in 2025 and beyond.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
>>>>>>> origin/cursor/create-and-deploy-new-content-0928
              <Link
                href="/content-showcase"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </section>

        {/* Structured Data */}
        <Suspense fallback={null}>
          <StructuredData />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}