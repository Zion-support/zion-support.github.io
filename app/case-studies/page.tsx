import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Success Stories & Case Studies | Zion Tech Group',
  description: 'Explore real-world AI transformation success stories and case studies from Fortune 500 companies and leading enterprises.',
  keywords: 'AI case studies, success stories, enterprise AI, digital transformation, AI implementation',
};

const caseStudies = [
  {
    id: 'fortune-500-ai-transformation',
    title: 'Fortune 500 Manufacturing: $12M AI Transformation',
    excerpt: 'How a leading manufacturer achieved 90% process automation and $12M annual savings with autonomous AI operations.',
    industry: 'Manufacturing',
    results: '$12M Annual Savings',
    duration: '6 months',
    featured: true,
    image: '/images/case-studies/manufacturing.jpg',
  },
  {
    id: 'financial-services-fraud-detection',
    title: 'Global Bank: 95% Fraud Detection Accuracy',
    excerpt: 'Revolutionary AI-powered fraud detection system reducing false positives by 85% while improving accuracy.',
    industry: 'Financial Services',
    results: '95% Detection Accuracy',
    duration: '4 months',
    featured: true,
    image: '/images/case-studies/finance.jpg',
  },
  {
    id: 'healthcare-diagnostic-ai',
    title: 'Healthcare System: AI-Powered Diagnostics',
    excerpt: 'Transforming patient care with AI-driven diagnostic systems achieving 98% accuracy in medical imaging.',
    industry: 'Healthcare',
    results: '98% Diagnostic Accuracy',
    duration: '8 months',
    featured: false,
    image: '/images/case-studies/healthcare.jpg',
  },
  {
    id: 'retail-customer-experience',
    title: 'Retail Giant: Personalized Customer Experience',
    excerpt: 'Revolutionizing retail with AI-powered personalization increasing customer satisfaction by 85%.',
    industry: 'Retail',
    results: '85% Satisfaction Increase',
    duration: '5 months',
    featured: false,
    image: '/images/case-studies/retail.jpg',
  },
  {
    id: 'logistics-supply-chain-optimization',
    title: 'Logistics Leader: Supply Chain Optimization',
    excerpt: 'AI-driven supply chain optimization reducing costs by 40% and improving delivery times by 60%.',
    industry: 'Logistics',
    results: '40% Cost Reduction',
    duration: '7 months',
    featured: false,
    image: '/images/case-studies/logistics.jpg',
  },
  {
    id: 'energy-smart-grid-management',
    title: 'Energy Company: Smart Grid Management',
    excerpt: 'Intelligent grid management system improving efficiency by 35% and reducing outages by 90%.',
    industry: 'Energy',
    results: '35% Efficiency Gain',
    duration: '9 months',
    featured: false,
    image: '/images/case-studies/energy.jpg',
  },
];

export default function CaseStudiesPage() {
  const featuredStudies = caseStudies.filter(study => study.featured);
  const regularStudies = caseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Success Stories & Case Studies
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Discover how leading enterprises are transforming their operations with AI. 
              Real results, real impact, real transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Your AI Journey
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">$100M+</div>
              <div className="text-gray-600">Cost Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Average Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">6</div>
              <div className="text-gray-600">Months Avg. ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredStudies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.id}`} className="group">
                <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">{study.results}</div>
                      <div className="text-sm opacity-90">{study.industry}</div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      <span className="text-gray-500 text-sm">{study.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {study.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                        Read Full Case Study →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularStudies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.id}`} className="group">
                <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
                  <div className="h-32 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-1">{study.results}</div>
                      <div className="text-xs opacity-90">{study.industry}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                        {study.industry}
                      </span>
                      <span className="text-gray-500 text-xs">{study.duration}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {study.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join the ranks of successful enterprises that have transformed their operations with AI. 
            Let's build your success story together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Your AI Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}