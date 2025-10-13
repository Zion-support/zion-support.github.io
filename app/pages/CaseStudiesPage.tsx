import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function CaseStudiesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Case Studies - Zion Tech Group",
    "description": "Explore our successful projects and case studies showcasing our AI and IT solutions.",
    "url": "https://ziontechgroup.com/case-studies"
  };

  const caseStudies = [
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      description: 'Implemented AI-powered recommendation engine and inventory optimization system.',
      results: ['40% increase in sales', '25% reduction in inventory costs', '60% improvement in customer satisfaction'],
      image: '/case-studies/ecommerce-ai.jpg'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      description: 'Developed comprehensive data analytics platform for patient care optimization.',
      results: ['30% improvement in patient outcomes', '50% reduction in data processing time', '99.9% uptime'],
      image: '/case-studies/healthcare-analytics.jpg'
    },
    {
      title: 'Financial Services AI Chatbot',
      client: 'FinTech Global',
      industry: 'Financial Services',
      description: 'Created intelligent chatbot for customer service and financial advice.',
      results: ['80% reduction in support tickets', '24/7 customer support', '95% customer satisfaction'],
      image: '/case-studies/fintech-chatbot.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <SEOHead 
        title="Case Studies - Zion Tech Group"
        description="Explore our successful projects and case studies showcasing our AI and IT solutions."
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover how we've helped businesses transform their operations with innovative AI and IT solutions. 
              Explore our success stories and see the real impact of our work.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. See how we've helped businesses achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{study.client.charAt(0)}</div>
                    <div className="text-sm opacity-90">{study.industry}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Results:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Read Full Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Let us help you achieve similar results with our innovative AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-indigo-600 bg-white hover:bg-gray-100 transition-colors duration-200">
              Start Your Project
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-indigo-600 transition-colors duration-200">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}