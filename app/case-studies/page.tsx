import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Case Studies - Success Stories & ROI Results | Zion Tech Group',
  description: 'Explore real-world AI transformation success stories. See how organizations achieved 300% ROI, $50M+ savings, and 90% efficiency gains with our AI solutions.',
  keywords: 'AI case studies, AI success stories, AI ROI, enterprise AI transformation, AI implementation results',
};

const caseStudies = [
  {
    title: 'Global Manufacturing AI Transformation: $50M Savings & 95% Efficiency',
    slug: 'global-manufacturing-ai-transformation',
    excerpt: 'See how a Fortune 500 manufacturer achieved $50M annual savings and 95% efficiency improvements through comprehensive AI transformation across 47 countries.',
    industry: 'Manufacturing',
    company: 'Fortune 500 Global Manufacturer',
    results: {
      savings: '$50M+',
      roi: '300%',
      efficiency: '95%',
      timeline: '24 months'
    },
    image: '🏭',
    color: 'green'
  },
  {
    title: 'FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings',
    slug: 'fintech-ai-risk-compliance',
    excerpt: 'See how a leading fintech achieved 70% risk reduction with automated governance frameworks and achieved $2.5M in annual savings.',
    industry: 'FinTech',
    company: 'Leading FinTech Company',
    results: {
      savings: '$2.5M',
      roi: '250%',
      efficiency: '70%',
      timeline: '12 months'
    },
    image: '💳',
    color: 'blue'
  },
  {
    title: 'Healthcare AI Implementation: 40% Better Diagnostics & 60% Improved Outcomes',
    slug: 'healthcare-ai-implementation',
    excerpt: 'Discover how a hospital system improved patient outcomes by 40% with AI diagnostics and achieved 60% improvement in treatment accuracy.',
    industry: 'Healthcare',
    company: 'Regional Hospital System',
    results: {
      savings: '$8M',
      roi: '200%',
      efficiency: '40%',
      timeline: '18 months'
    },
    image: '🏥',
    color: 'purple'
  },
  {
    title: 'Retail AI Optimization: 150% Revenue Growth & 80% Cost Reduction',
    slug: 'retail-ai-optimization',
    excerpt: 'See how a retail chain increased revenue by 150% and achieved 80% cost reduction with AI-powered personalization and inventory optimization.',
    industry: 'Retail',
    company: 'National Retail Chain',
    results: {
      savings: '$15M',
      roi: '400%',
      efficiency: '80%',
      timeline: '15 months'
    },
    image: '🛍️',
    color: 'orange'
  },
  {
    title: 'Supply Chain AI Optimization: 60% Cost Reduction & 90% Efficiency',
    slug: 'supply-chain-ai-optimization',
    excerpt: 'Learn how a global logistics company achieved 60% cost reduction and 90% efficiency improvement with AI-powered supply chain optimization.',
    industry: 'Logistics',
    company: 'Global Logistics Provider',
    results: {
      savings: '$12M',
      roi: '280%',
      efficiency: '90%',
      timeline: '20 months'
    },
    image: '🚚',
    color: 'indigo'
  },
  {
    title: 'TechCorp AI Transformation: 90% Efficiency Gain & $500K Savings',
    slug: 'techcorp-ai-transformation',
    excerpt: 'See how TechCorp achieved $500K annual savings and 90% efficiency improvement with AI transformation across their e-commerce operations.',
    industry: 'E-commerce',
    company: 'TechCorp Inc.',
    results: {
      savings: '$500K',
      roi: '180%',
      efficiency: '90%',
      timeline: '8 months'
    },
    image: '💻',
    color: 'teal'
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Success Stories:
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {' '}Real Results, Real Impact
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore real-world AI transformation success stories. See how organizations 
              achieved 300% ROI, $50M+ savings, and 90% efficiency gains with our AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link key={index} href={`/case-studies/${study.slug}`} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-green-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      study.color === 'green' ? 'bg-green-100 text-green-800' :
                      study.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                      study.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                      study.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                      study.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' :
                      study.color === 'teal' ? 'bg-teal-100 text-teal-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-500">{study.company}</span>
                  </div>
                  
                  <div className="text-4xl mb-4">{study.image}</div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {study.excerpt}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-green-600">{study.results.savings}</div>
                      <div className="text-xs text-gray-500">Savings</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">{study.results.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">{study.results.efficiency}</div>
                      <div className="text-xs text-gray-500">Efficiency</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-orange-600">{study.results.timeline}</div>
                      <div className="text-xs text-gray-500">Timeline</div>
                    </div>
                  </div>
                  
                  <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                    View Case Study →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Proven Results Across Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions have delivered consistent, measurable results across diverse industries and use cases.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
              <div className="text-gray-600 font-semibold">Average ROI</div>
              <div className="text-sm text-gray-500 mt-1">Across all implementations</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600 font-semibold">Total Savings</div>
              <div className="text-sm text-gray-500 mt-1">Generated for clients</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-gray-600 font-semibold">Efficiency Gains</div>
              <div className="text-sm text-gray-500 mt-1">Average improvement</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600 font-semibold">Projects Delivered</div>
              <div className="text-sm text-gray-500 mt-1">Successfully completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the organizations achieving remarkable results with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Our Services
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}