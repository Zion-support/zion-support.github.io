import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Success Stories & Case Studies | Zion Tech Group',
  description: 'Discover how leading companies achieve remarkable results with AI transformation. Real case studies showing 300% ROI, $50M+ savings, and 90% efficiency gains.',
  keywords: 'AI case studies, AI success stories, enterprise AI, AI ROI, AI transformation, Fortune 500 AI',
  openGraph: {
    title: 'AI Success Stories & Case Studies | Zion Tech Group',
    description: 'Discover how leading companies achieve remarkable results with AI transformation.',
    type: 'website',
    url: 'https://ziontechgroup.com/case-studies',
  },
};

const caseStudies = [
  {
    title: 'Fortune 500 AI Transformation: $50M Savings Achieved',
    excerpt: 'Learn how a Fortune 500 company achieved $50M annual savings, 300% ROI, and 90% efficiency improvement through comprehensive AI transformation.',
    href: '/case-studies/fortune-500-ai-transformation-success',
    company: 'Fortune 500 Manufacturing',
    industry: 'Manufacturing',
    results: {
      savings: '$50M',
      roi: '300%',
      efficiency: '90%'
    },
    image: '/case-studies/fortune-500-ai-transformation.jpg',
    featured: true
  },
  {
    title: 'Multimodal AI Customer Service: 80% Faster Response Times',
    excerpt: 'See how a leading e-commerce company achieved 80% faster response times, 95% accuracy, and 60% cost reduction with multimodal AI.',
    href: '/case-studies/multimodal-ai-customer-service-transformation',
    company: 'Global E-commerce Platform',
    industry: 'E-commerce',
    results: {
      savings: '$15M',
      roi: '250%',
      efficiency: '80%'
    },
    image: '/case-studies/multimodal-ai-customer-service.jpg',
    featured: true
  },
  {
    title: 'AI Finance Automation: 95% Process Reduction',
    excerpt: 'Learn how AI automation achieved 95% process reduction and $3M annual savings for a leading financial services company.',
    href: '/case-studies/ai-finance-automation',
    company: 'Financial Services Firm',
    industry: 'Finance',
    results: {
      savings: '$3M',
      roi: '400%',
      efficiency: '95%'
    },
    image: '/case-studies/ai-finance-automation.jpg',
    featured: false
  },
  {
    title: 'Healthcare AI Implementation: 99.7% Diagnostic Accuracy',
    excerpt: 'Discover how a healthcare provider achieved 99.7% diagnostic accuracy and 50% reduction in diagnosis time with AI-powered medical imaging.',
    href: '/case-studies/healthcare-ai-diagnostic-accuracy',
    company: 'Regional Healthcare System',
    industry: 'Healthcare',
    results: {
      savings: '$8M',
      roi: '350%',
      efficiency: '99.7%'
    },
    image: '/case-studies/healthcare-ai-diagnostic.jpg',
    featured: false
  },
  {
    title: 'Retail AI Optimization: 60% Inventory Reduction',
    excerpt: 'See how a retail chain achieved 60% inventory reduction, 40% cost savings, and 95% demand forecasting accuracy with AI.',
    href: '/case-studies/retail-ai-inventory-optimization',
    company: 'National Retail Chain',
    industry: 'Retail',
    results: {
      savings: '$25M',
      roi: '280%',
      efficiency: '60%'
    },
    image: '/case-studies/retail-ai-inventory.jpg',
    featured: false
  },
  {
    title: 'Manufacturing AI Quality Control: 95% Defect Detection',
    excerpt: 'Learn how a manufacturing company achieved 95% improvement in defect detection and 70% reduction in quality control time.',
    href: '/case-studies/manufacturing-ai-quality-control',
    company: 'Industrial Manufacturer',
    industry: 'Manufacturing',
    results: {
      savings: '$12M',
      roi: '320%',
      efficiency: '95%'
    },
    image: '/case-studies/manufacturing-ai-quality.jpg',
    featured: false
  }
];

const industries = [
  { name: 'All', count: caseStudies.length },
  { name: 'Manufacturing', count: caseStudies.filter(cs => cs.industry === 'Manufacturing').length },
  { name: 'E-commerce', count: caseStudies.filter(cs => cs.industry === 'E-commerce').length },
  { name: 'Finance', count: caseStudies.filter(cs => cs.industry === 'Finance').length },
  { name: 'Healthcare', count: caseStudies.filter(cs => cs.industry === 'Healthcare').length },
  { name: 'Retail', count: caseStudies.filter(cs => cs.industry === 'Retail').length }
];

export default function CaseStudiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Success Stories & Case Studies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how leading companies achieve remarkable results with AI transformation. 
          Real case studies showing 300% ROI, $50M+ savings, and 90% efficiency gains.
        </p>
      </header>

      {/* Industry Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {industries.map((industry) => (
          <button
            key={industry.name}
            className="px-6 py-3 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            {industry.name} ({industry.count})
          </button>
        ))}
      </div>

      {/* Featured Case Studies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.filter(cs => cs.featured).map((caseStudy) => (
            <Link key={caseStudy.href} href={caseStudy.href} className="group">
              <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-6xl">🏆</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Success Story
                    </span>
                    <span className="text-gray-500 text-sm">{caseStudy.industry}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {caseStudy.excerpt}
                  </p>
                  
                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{caseStudy.results.savings}</div>
                      <div className="text-xs text-gray-600">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{caseStudy.results.roi}</div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{caseStudy.results.efficiency}</div>
                      <div className="text-xs text-gray-600">Efficiency</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{caseStudy.company}</span>
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* All Case Studies */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">All Case Studies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <Link key={caseStudy.href} href={caseStudy.href} className="group">
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <div className="text-white text-4xl">💼</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {caseStudy.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {caseStudy.excerpt}
                  </p>
                  
                  {/* Mini Results */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{caseStudy.results.savings}</div>
                      <div className="text-xs text-gray-600">Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{caseStudy.results.roi}</div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{caseStudy.results.efficiency}</div>
                      <div className="text-xs text-gray-600">Efficiency</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{caseStudy.company}</span>
                    <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                      View →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Proven Results Across Industries
          </h3>
          <p className="text-xl opacity-90">
            Our AI solutions have delivered measurable results for companies of all sizes and industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
            <div className="text-sm opacity-90">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-300 mb-2">300%</div>
            <div className="text-sm opacity-90">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-300 mb-2">$2B+</div>
            <div className="text-sm opacity-90">Client Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-300 mb-2">99.9%</div>
            <div className="text-sm opacity-90">Success Rate</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Join the growing number of companies achieving remarkable results with AI transformation. 
            Get a free consultation and custom implementation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}