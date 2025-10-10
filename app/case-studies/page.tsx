'use client';
import React from 'react';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '75% reduction in response time',
        '60% cost savings on customer service',
        '95% customer satisfaction rate'
      ],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing operational inefficiencies',
      solution: 'Complete cloud migration with enhanced security',
      results: [
        '40% improvement in system performance',
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs'
      ],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive security framework and monitoring',
      results: [
        'Zero security breaches in 12 months',
        '100% compliance with HIPAA',
        '24/7 threat monitoring implemented'
      ],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Manufacturing Process Optimization',
      client: 'AutoParts Inc',
      industry: 'Manufacturing',
      challenge: 'Inefficient production lines and quality control',
      solution: 'AI-driven process optimization and quality monitoring',
      results: [
        '30% increase in production efficiency',
        '25% reduction in defects',
        '20% improvement in quality scores'
      ],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'E-commerce Platform Modernization',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Outdated e-commerce platform limiting growth',
      solution: 'Complete platform rebuild with AI recommendations',
      results: [
        '200% increase in conversion rates',
        '50% improvement in page load speed',
        '150% growth in online sales'
      ],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Data Analytics Implementation',
      client: 'LogisticsPro',
      industry: 'Logistics',
      challenge: 'Lack of data insights for decision making',
      solution: 'Advanced analytics dashboard and reporting system',
      results: [
        '35% improvement in delivery times',
        '45% reduction in fuel costs',
        '60% better route optimization'
      ],
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Featured Case Study</h2>
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                    {caseStudies[0].industry}
                  </span>
                  <span className="text-gray-400 text-sm">Featured</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{caseStudies[0].title}</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  <strong>Client:</strong> {caseStudies[0].client}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300">{caseStudies[0].challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300">{caseStudies[0].solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <ul className="space-y-2">
                      {caseStudies[0].results.map((result, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-400">Case Study Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">All Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(1).map((study) => (
              <div key={study.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="bg-gray-700 h-48 flex items-center justify-center">
                  <span className="text-gray-400">Case Study Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">
                      {study.industry}
                    </span>
                    <span className="text-xs">Case Study</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    <strong>Client:</strong> {study.client}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white">Challenge</h4>
                      <p className="text-gray-400 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Solution</h4>
                      <p className="text-gray-400 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{result}</span>
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
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Zap className="mr-2 h-5 w-5" />
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 flex items-center justify-center">
                <ExternalLink className="mr-2 h-5 w-5" />
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;