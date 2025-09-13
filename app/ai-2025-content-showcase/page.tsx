import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI 2025 Content Showcase | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI 2025 content including breakthrough technologies, case studies, implementation guides, and success stories.',
  keywords: ['AI 2025', 'Content Showcase', 'AI Breakthroughs', 'Case Studies', 'Implementation Guides'],
  openGraph: {
    title: 'AI 2025 Content Showcase',
    description: 'Comprehensive collection of AI 2025 breakthrough content, case studies, and implementation guides.',
    type: 'website',
  },
};

export default function AI2025ContentShowcase() {
  const contentCategories = [
    {
      title: '🚀 Breakthrough Technologies',
      description: 'Revolutionary AI technologies transforming industries in 2025',
      items: [
        {
          title: 'Advanced Autonomous Systems',
          description: 'Self-healing infrastructure and intelligent decision-making',
          href: '/blog/ai-2025-advanced-autonomous-systems',
          badge: 'BREAKTHROUGH',
          badgeColor: 'bg-red-100 text-red-800'
        },
        {
          title: 'Quantum-Neural Fusion',
          description: 'Next-generation AI combining quantum computing with neural networks',
          href: '/blog/ai-2025-quantum-neural-fusion',
          badge: 'REVOLUTIONARY',
          badgeColor: 'bg-purple-100 text-purple-800'
        },
        {
          title: 'Multimodal AI Revolution',
          description: 'AI systems that process text, images, and audio simultaneously',
          href: '/blog/ai-2025-multimodal-revolution',
          badge: 'NEW',
          badgeColor: 'bg-green-100 text-green-800'
        }
      ]
    },
    {
      title: '🏆 Success Stories',
      description: 'Real-world case studies showcasing extraordinary ROI and results',
      items: [
        {
          title: 'Autonomous Manufacturing Revolution',
          description: 'Fortune 500 manufacturer achieves 8,500% ROI',
          href: '/case-studies/ai-2025-autonomous-manufacturing-revolution',
          badge: '8,500% ROI',
          badgeColor: 'bg-green-100 text-green-800'
        },
        {
          title: 'Global Enterprise Transformation',
          description: '2,000% ROI through AI-driven business transformation',
          href: '/case-studies/ai-2025-global-enterprise-transformation-breakthrough',
          badge: '2,000% ROI',
          badgeColor: 'bg-blue-100 text-blue-800'
        },
        {
          title: 'Financial Services Revolution',
          description: '1,500% ROI in automated financial operations',
          href: '/case-studies/ai-2025-financial-services-revolution',
          badge: '1,500% ROI',
          badgeColor: 'bg-purple-100 text-purple-800'
        }
      ]
    },
    {
      title: '📚 Implementation Guides',
      description: 'Comprehensive guides for implementing AI solutions',
      items: [
        {
          title: 'AI 2025 Implementation Toolkit',
          description: 'Complete toolkit for AI implementation success',
          href: '/resources/ai-2025-ultimate-implementation-toolkit',
          badge: 'ESSENTIAL',
          badgeColor: 'bg-orange-100 text-orange-800'
        },
        {
          title: 'Enterprise AI Roadmap',
          description: 'Step-by-step roadmap for enterprise AI transformation',
          href: '/resources/ai-2025-enterprise-transformation-master-guide',
          badge: 'MASTER GUIDE',
          badgeColor: 'bg-indigo-100 text-indigo-800'
        },
        {
          title: 'AI Governance Framework',
          description: 'Comprehensive framework for AI governance and compliance',
          href: '/resources/ai-2025-ai-governance-best-practices',
          badge: 'BEST PRACTICES',
          badgeColor: 'bg-teal-100 text-teal-800'
        }
      ]
    },
    {
      title: '🔮 Future Predictions',
      description: 'Insights into the future of AI and technology',
      items: [
        {
          title: 'AI 2026 Future Predictions',
          description: 'Comprehensive predictions for AI development in 2026',
          href: '/blog/ai-2026-future-predictions-breakthrough',
          badge: 'FUTURE',
          badgeColor: 'bg-cyan-100 text-cyan-800'
        },
        {
          title: 'Quantum Computing Revolution',
          description: 'The future of quantum computing and AI integration',
          href: '/blog/ai-2025-quantum-machine-learning-breakthrough',
          badge: 'QUANTUM',
          badgeColor: 'bg-violet-100 text-violet-800'
        },
        {
          title: 'Edge AI Deployment',
          description: 'Next-generation edge AI systems and applications',
          href: '/blog/edge-ai-deployment',
          badge: 'EDGE',
          badgeColor: 'bg-emerald-100 text-emerald-800'
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI 2025 Content Showcase
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Explore our comprehensive collection of breakthrough AI content, featuring revolutionary technologies, 
          success stories, and implementation guides that are transforming industries in 2025.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
            BREAKTHROUGH CONTENT
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
            PROVEN ROI
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
            INDUSTRY LEADING
          </span>
        </div>
      </header>

      <div className="space-y-16">
        {contentCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                    <Link 
                      href={item.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations already benefiting from our AI solutions. 
            Get started with a personalized consultation and discover your ROI potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/webinars"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Attend a Webinar
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge AI technology with proven implementation expertise to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
            <p className="text-gray-600">Average 2,500% ROI across all implementations</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Implementation</h3>
            <p className="text-gray-600">World-class AI experts with decades of experience</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
            <p className="text-gray-600">Continuous optimization and 24/7 support</p>
          </div>
        </div>
      </section>
    </div>
  );
}