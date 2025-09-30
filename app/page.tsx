import React from 'react';
import Link from 'next/link';
import Revolutionary2026ContentBreakthroughBanner from '../components/Revolutionary2026ContentBreakthroughBanner';
import AI2026RevolutionaryBreakthroughShowcaseBanner from '../components/AI2026RevolutionaryBreakthroughShowcaseBanner';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
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

export default function HomePage() {
  return (
    <>
      <div className="animate-fade-in">
        {/* 🚀 REVOLUTIONARY 2026 CONTENT BREAKTHROUGH BANNER */}
        <Revolutionary2026ContentBreakthroughBanner />
        
        {/* 🌟 AI 2026 REVOLUTIONARY BREAKTHROUGH SHOWCASE */}
        <AI2026RevolutionaryBreakthroughShowcaseBanner />
        
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                {' '}AI-Powered Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
              and enterprise IT solutions that drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Expert Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">$2M+</div>
                <div className="text-gray-600">Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Latest Revolutionary AI Content
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the most groundbreaking AI insights and success stories
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/blog/ai-2026-future-trends-breakthrough" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      BREAKTHROUGH 2026
                    </span>
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      REVOLUTIONARY
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI 2026: Revolutionary Future Trends and Breakthrough Technologies
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Explore the most revolutionary AI trends and breakthrough technologies that will transform industries in 2026, including quantum AI, neuromorphic computing, and autonomous systems.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">15 min read • January 20, 2026</span>
                    <span className="text-blue-600 font-semibold group-hover:text-blue-800">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-2026-global-enterprise-transformation-success" className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      $500M ROI
                    </span>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      FORTUNE 100
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Global Enterprise AI Transformation: $500M ROI Success Story 2026
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Discover how a Fortune 100 global enterprise achieved $500M ROI through revolutionary AI transformation, including quantum-enhanced systems and autonomous operations.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">18 min read • January 25, 2026</span>
                    <span className="text-blue-600 font-semibold group-hover:text-blue-800">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Revolutionary AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge AI solutions that deliver measurable business outcomes
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Autonomous Operations 2026</h3>
                <p className="text-gray-600 mb-6">
                  Revolutionary AI-driven autonomous business operations with 95% automation and quantum-enhanced decision making.
                </p>
                <Link 
                  href="/services/ai-autonomous-operations-2026"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quantum AI Computing</h3>
                <p className="text-gray-600 mb-6">
                  Next-generation quantum-enhanced AI systems delivering 1000x performance improvements and breakthrough capabilities.
                </p>
                <Link 
                  href="/services/ai-quantum-computing"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 border border-green-200">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Neuromorphic AI Systems</h3>
                <p className="text-gray-600 mb-6">
                  Brain-inspired computing architectures enabling real-time learning with 90% energy reduction.
                </p>
                <Link 
                  href="/services/neuromorphic-ai"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business with Revolutionary AI?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the Fortune 100 companies already achieving breakthrough results with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Your Transformation
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}