import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Success Stories & Case Studies | Real Results & ROI | Zion Tech Group',
  description: 'Discover real AI success stories and case studies. See how companies achieved 300% ROI, 70% cost reduction, and 90% efficiency gains with our AI solutions.',
  keywords: 'AI case studies, success stories, AI ROI, AI results, AI transformation, business outcomes',
  openGraph: {
    title: 'AI Success Stories & Case Studies | Real Results & ROI',
    description: 'Discover real AI success stories and case studies. See how companies achieved 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    type: 'website',
    url: 'https://ziontechgroup.com/case-studies',
    images: [
      {
        url: '/og-case-studies.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI Case Studies',
      },
    ],
  },
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Manufacturing AI Transformation: 60% Cost Reduction & 90% Efficiency',
      excerpt: 'See how a global manufacturer achieved 60% cost reduction, 90% efficiency improvement, and $12M annual savings with comprehensive AI transformation.',
      href: '/case-studies/manufacturing-ai-transformation-2026',
      industry: 'Manufacturing',
      results: ['60% Cost Reduction', '90% Efficiency', '$12M Savings'],
      image: '/case-studies/manufacturing-ai-transformation-2026.jpg',
      tags: ['Manufacturing', 'AI Transformation', 'Cost Reduction', 'Efficiency']
    },
    {
      title: 'Multimodal AI Customer Service: 80% Faster Response Times',
      excerpt: 'See how a leading e-commerce company achieved 80% faster response times, 95% accuracy, and 60% cost reduction with multimodal AI.',
      href: '/case-studies/multimodal-ai-customer-service-transformation',
      industry: 'E-commerce',
      results: ['80% Faster Response', '95% Accuracy', '60% Cost Reduction'],
      image: '/case-studies/multimodal-ai-customer-service.jpg',
      tags: ['Customer Service', 'Multimodal AI', 'E-commerce', 'Automation']
    },
    {
      title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain',
      excerpt: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.',
      href: '/case-studies/ai-supply-chain-optimization-2025',
      industry: 'Manufacturing',
      results: ['60% Cost Reduction', '90% Efficiency', '$12M Savings'],
      image: '/case-studies/ai-supply-chain-optimization.jpg',
      tags: ['Supply Chain', 'AI Optimization', 'Manufacturing', 'Efficiency']
    },
    {
      title: 'FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings',
      excerpt: 'See how a leading fintech achieved 70% risk reduction with automated governance frameworks.',
      href: '/case-studies/fintech-ai-risk-compliance-2025',
      industry: 'FinTech',
      results: ['70% Risk Reduction', '$2.5M Savings', '95% Compliance'],
      image: '/case-studies/fintech-ai-risk-compliance.jpg',
      tags: ['FinTech', 'Risk Management', 'Compliance', 'AI Governance']
    },
    {
      title: 'TechCorp: 90% Efficiency Gain with AI',
      excerpt: 'See how TechCorp achieved $500K annual savings and 90% efficiency improvement with AI transformation.',
      href: '/case-studies/techcorp-ai-transformation',
      industry: 'E-commerce',
      results: ['90% Efficiency', '$500K Savings', '300% ROI'],
      image: '/case-studies/techcorp-ai-transformation.jpg',
      tags: ['E-commerce', 'AI Transformation', 'Efficiency', 'ROI']
    },
    {
      title: 'RetailAI Corp: 150% Revenue Growth',
      excerpt: 'See how RetailAI Corp achieved 150% revenue growth and 80% cost reduction with AI transformation.',
      href: '/case-studies/retail-ai-transformation',
      industry: 'Retail',
      results: ['150% Revenue Growth', '80% Cost Reduction', '400% ROI'],
      image: '/case-studies/retail-ai-transformation.jpg',
      tags: ['Retail', 'Revenue Growth', 'AI Transformation', 'Cost Reduction']
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Success Stories & Case Studies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover real results from companies that transformed their business with AI. See how they achieved 300% ROI, 70% cost reduction, and 90% efficiency gains.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <Link key={index} href={study.href} className="group">
            <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">{study.industry}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {study.excerpt}
                </p>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.results.map((result, resultIndex) => (
                      <span key={resultIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>View Case Study</span>
                  <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-gray-600 mb-6">
            Join hundreds of companies that have transformed their business with AI. Get a free consultation to discover your AI potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              Explore Our Services
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 hover:text-white transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}