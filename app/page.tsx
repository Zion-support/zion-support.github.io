import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import NewContentPromoBanner from '../components/NewContentPromoBanner';
import ContentShowcase from '../components/ContentShowcase';
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

        {/* Content Promotion Banner */}
        <NewContentPromoBanner variant="featured" maxItems={3} />

        {/* Mega Content Drop Banner */}
        <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🚀 MEGA CONTENT DROP - JANUARY 2025</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Revolutionary AI Content Just Dropped
              </h2>
              <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
                New this week: AI Enterprise Automation Guide, $100M Success Case Study, 
                Implementation Master Guide, and 15+ expert resources. Transform your business today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-lg font-semibold mb-2">AI Enterprise Automation Revolution</h3>
                <p className="text-sm text-purple-200 mb-3">Complete implementation guide with 40% productivity gains</p>
                <div className="flex items-center text-xs text-purple-300">
                  <span>25 min read</span>
                  <span className="mx-2">•</span>
                  <span>NEW</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold mb-2">$100M Success Case Study</h3>
                <p className="text-sm text-purple-200 mb-3">Fortune 500 transformation with 340% ROI</p>
                <div className="flex items-center text-xs text-purple-300">
                  <span>18 min read</span>
                  <span className="mx-2">•</span>
                  <span>HOT</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold mb-2">Implementation Master Guide</h3>
                <p className="text-sm text-purple-200 mb-3">150+ pages of templates and strategies</p>
                <div className="flex items-center text-xs text-purple-300">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>25K+ Downloads</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold mb-2">AI Trends 2025 Predictions</h3>
                <p className="text-sm text-purple-200 mb-3">15 predictions shaping the future of AI</p>
                <div className="flex items-center text-xs text-purple-300">
                  <span>28 min read</span>
                  <span className="mx-2">•</span>
                  <span>TRENDING</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/content-showcase"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Explore All New Content →
              </Link>
            </div>
          </div>
        </section>

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
              <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">🔥 TRENDING NOW</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latest Insights & Expert Analysis
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead with our latest research, case studies, and technical guides. 
                Fresh content published weekly with actionable insights.
              </p>
            </div>

            {/* Featured Content Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Link href="/blog/ai-2025-enterprise-automation-revolution" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                    <div className="text-8xl">🤖</div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        AI & Automation
                      </span>
                      <span className="text-gray-500 text-sm">25 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      AI Enterprise Automation Revolution 2025
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Transform your enterprise with AI automation. Learn proven strategies to achieve 40% productivity gains, 
                      60% cost reduction, and 300% efficiency improvements.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-blue-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              <Link href="/case-studies/ai-2025-enterprise-transformation-success" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                    <div className="text-8xl">🏆</div>
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      HOT
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        Case Study
                      </span>
                      <span className="text-gray-500 text-sm">18 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      AI Enterprise Transformation Success: $100M Revenue Impact
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Discover how a Fortune 500 company achieved $100M revenue impact through comprehensive AI transformation. 
                      Learn the strategies, challenges, and results.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-green-600 font-medium group-hover:underline">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              <Link href="/resources/ai-implementation-master-guide-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                    <div className="text-8xl">📚</div>
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      FREE
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                        Free Resource
                      </span>
                      <span className="text-gray-500 text-sm">150+ pages</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">25K+ downloads</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      AI Implementation Master Guide 2025
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Master AI implementation with our comprehensive 150-page guide. Step-by-step framework, 
                      checklists, templates, and proven strategies for successful AI transformation.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-purple-600 font-medium group-hover:underline">
                        Download Guide →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>

            <div className="text-center">
              <Link 
                href="/content-showcase" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                View All Content
                <span>→</span>
              </Link>
            </div>
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

        {/* Special Offer Banner */}
        <section className="py-16 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🎯 LIMITED TIME OFFER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Free AI Transformation Assessment
            </h2>
            <p className="text-xl text-orange-200 mb-8 max-w-3xl mx-auto">
              Get a personalized AI readiness assessment and implementation roadmap worth $5,000. 
              Discover your AI potential and unlock hidden opportunities in your business.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">$5,000</div>
                <div className="text-orange-200">Value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">FREE</div>
                <div className="text-orange-200">Today</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">30</div>
                <div className="text-orange-200">Min Assessment</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/resources/ai-implementation-master-guide-2025"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg"
              >
                Download Master Guide
              </Link>
            </div>
            <p className="text-sm text-orange-200 mt-4">No commitment required • Instant results • 100% confidential</p>
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