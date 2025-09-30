import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Case Studies - Real Success Stories & Results | Zion Tech Group',
  description: 'Explore real AI transformation success stories from Fortune 500 companies. See how organizations achieved 300% ROI, 70% cost reduction, and 90% efficiency gains.',
  keywords: 'AI case studies, enterprise AI success stories, AI transformation results, Fortune 500 AI, AI ROI, AI implementation success',
};

const caseStudies = [
  {
    title: 'Fortune 500 AI Transformation 2026: $12M Savings & 95% Efficiency',
    slug: 'fortune-500-ai-transformation-2026',
    excerpt: 'See how a Fortune 500 company achieved $12M annual savings and 95% operational efficiency through comprehensive AI transformation.',
    company: 'Fortune 500 Manufacturing',
    industry: 'Manufacturing',
    results: {
      savings: '$12M',
      roi: '450%',
      efficiency: '95%',
      timeline: '18 months'
    },
    image: '🏆',
    color: 'purple'
  },
  {
    title: 'Global Financial Services AI Revolution',
    slug: 'financial-services-ai-revolution',
    excerpt: 'How a leading financial services firm achieved 99.8% fraud detection accuracy and 300% faster processing with AI implementation.',
    company: 'Global Financial Services',
    industry: 'Financial Services',
    results: {
      savings: '$8.5M',
      roi: '320%',
      efficiency: '88%',
      timeline: '12 months'
    },
    image: '💳',
    color: 'blue'
  },
  {
    title: 'Healthcare AI Transformation Success',
    slug: 'healthcare-ai-transformation',
    excerpt: 'Leading healthcare technology company achieves 98.5% diagnostic accuracy and 80% faster diagnosis with AI-powered systems.',
    company: 'Healthcare Technology Leader',
    industry: 'Healthcare',
    results: {
      savings: '$6.2M',
      roi: '280%',
      efficiency: '92%',
      timeline: '15 months'
    },
    image: '🏥',
    color: 'green'
  },
  {
    title: 'Manufacturing AI Automation Success',
    slug: 'manufacturing-ai-automation',
    excerpt: 'Industrial manufacturer achieves 99.9% uptime and 60% productivity increase with autonomous AI production systems.',
    company: 'Industrial Manufacturing Corp',
    industry: 'Manufacturing',
    results: {
      savings: '$4.8M',
      roi: '250%',
      efficiency: '85%',
      timeline: '10 months'
    },
    image: '🏭',
    color: 'orange'
  },
  {
    title: 'Retail AI Customer Experience Transformation',
    slug: 'retail-ai-customer-experience',
    excerpt: 'Major retailer improves customer satisfaction by 65% and reduces operational costs by 45% with AI-powered solutions.',
    company: 'Global Retail Chain',
    industry: 'Retail',
    results: {
      savings: '$3.5M',
      roi: '200%',
      efficiency: '78%',
      timeline: '8 months'
    },
    image: '🛍️',
    color: 'pink'
  },
  {
    title: 'Supply Chain AI Optimization Success',
    slug: 'supply-chain-ai-optimization',
    excerpt: 'Logistics company reduces inventory costs by 45% and improves delivery performance by 30% with AI optimization.',
    company: 'Global Logistics Provider',
    industry: 'Logistics',
    results: {
      savings: '$2.8M',
      roi: '180%',
      efficiency: '82%',
      timeline: '6 months'
    },
    image: '📦',
    color: 'indigo'
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real companies. See how leading organizations have achieved 
              extraordinary success with our AI transformation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">70%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">90%</div>
              <div className="text-sm text-gray-600">Efficiency Gains</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
                <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-${study.color}-100 rounded-xl flex items-center justify-center`}>
                        <span className="text-2xl">{study.image}</span>
                      </div>
                      <div>
                        <span className={`bg-${study.color}-100 text-${study.color}-800 px-3 py-1 rounded-full text-xs font-semibold`}>
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {study.excerpt}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Company: {study.company}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{study.results.savings}</div>
                        <div className="text-xs text-gray-500">Annual Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{study.results.roi}</div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{study.results.timeline}</span>
                      <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                        Read Case Study →
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join the ranks of successful organizations that have transformed their operations 
            with our proven AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/services"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}