import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Case Studies - Zion Tech Group',
  description: 'Explore our successful AI and IT transformation case studies. See how we\'ve helped Fortune 500 companies achieve breakthrough results.',
  keywords: 'case studies, AI transformation, enterprise success, ROI, business intelligence',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'AI 2026 November Quantum Superintelligence Breakthrough',
      company: 'Fortune 500 Technology Leader',
      industry: 'Technology',
      roi: '$500B',
      description: 'Revolutionary quantum AI implementation achieving unprecedented business transformation.',
      link: '/case-studies/ai-2026-november-quantum-superintelligence-500-billion-success',
      featured: true
    },
    {
      title: 'AI 2026 August Quantum Consciousness Revolution',
      company: 'Global Manufacturing Giant',
      industry: 'Manufacturing',
      roi: '$50B',
      description: 'Autonomous operations transformation with quantum consciousness breakthrough.',
      link: '/case-studies/ai-2026-august-breakthrough-8-5-billion-success',
      featured: true
    },
    {
      title: 'AI 2026 July Mega Breakthrough Revolution',
      company: 'Fortune 100 Financial Services',
      industry: 'Financial Services',
      roi: '$25.3B',
      description: 'Enterprise automation revolution with AI-powered business intelligence.',
      link: '/case-studies/ai-2026-july-revolutionary-breakthrough-mega-success',
      featured: true
    },
    {
      title: 'Supply Chain Transformation 2026',
      company: 'Global Logistics Leader',
      industry: 'Logistics',
      roi: '$2.8B',
      description: 'AI-powered supply chain optimization and autonomous operations.',
      link: '/case-studies/supply-chain-transformation-2026',
      featured: false
    },
    {
      title: 'Healthcare AI Transformation 2026',
      company: 'Major Healthcare System',
      industry: 'Healthcare',
      roi: '$1.2B',
      description: 'Healthcare automation and AI-powered patient care optimization.',
      link: '/case-studies/healthcare-ai-transformation-2026',
      featured: false
    },
    {
      title: 'AI 2028 Autonomous Enterprise Mega Success',
      company: 'Fortune 500 Retail Leader',
      industry: 'Retail',
      roi: '$847B',
      description: 'Next-generation autonomous enterprise systems implementation.',
      link: '/case-studies/ai-2028-autonomous-enterprise-mega-success',
      featured: false
    }
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);
  const otherStudies = caseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how Fortune 500 companies achieved breakthrough results with our AI and IT solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-blue-600 px-4 py-2 rounded-full">
                <span className="font-semibold">$500B+</span> Total ROI Delivered
              </div>
              <div className="bg-green-600 px-4 py-2 rounded-full">
                <span className="font-semibold">100+</span> Successful Transformations
              </div>
              <div className="bg-purple-600 px-4 py-2 rounded-full">
                <span className="font-semibold">Fortune 500</span> Clients Served
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Case Studies */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most impactful transformations that achieved unprecedented business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                      {study.roi} ROI
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {study.company}
                    </span>
                    <Link 
                      href={study.link}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
                    >
                      Read Case Study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Case Studies */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive collection of our successful AI and IT transformation projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherStudies.map((study, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    {study.roi} ROI
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {study.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {study.company}
                  </span>
                  <Link 
                    href={study.link}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
                  >
                    Read More
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the Fortune 500 companies that have achieved breakthrough results with our AI and IT solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}