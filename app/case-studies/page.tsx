'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered E-commerce Platform',
      client: 'TechCorp Solutions',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor user experience',
      solution: 'Implemented AI recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '60% improvement in user engagement',
        '25% increase in average order value'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceFirst Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '99.9% uptime achieved',
        '50% reduction in operational costs',
        '3x faster transaction processing'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Data Analytics Dashboard',
      client: 'ManufacturingCo',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time insights into production',
      solution: 'Custom analytics dashboard with predictive maintenance',
      results: [
        '30% reduction in downtime',
        '20% increase in production efficiency',
        '15% cost savings on maintenance'
      ],
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, business transformation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform and achieve remarkable results with our AI and technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="bg-cyan-500 text-white text-sm font-semibold px-3 py-1 rounded-full mr-4">
                          {study.industry}
                        </span>
                        <span className="text-gray-400 text-sm">{study.client}</span>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-4">{study.title}</h2>
                      <div className="space-y-4 mb-6">
                        <div>
                          <h3 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h3>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h3>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-4">Results</h3>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <Star className="w-5 h-5 text-cyan-400 mr-3" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                View More Cases
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;