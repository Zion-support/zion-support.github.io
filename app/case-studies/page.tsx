'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Star, Users, TrendingUp, Award } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Transformation',
      client: 'TechCorp Solutions',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '60% improvement in customer satisfaction',
        '35% boost in average order value'
      ],
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Cloud Migration Success Story',
      client: 'FinanceFirst Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues and high maintenance costs',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster application performance'
      ],
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement Project',
      client: 'HealthTech Systems',
      industry: 'Healthcare',
      challenge: 'Security vulnerabilities and compliance requirements',
      solution: 'Comprehensive security audit and implementation of zero-trust architecture',
      results: [
        '100% compliance with healthcare regulations',
        'Zero security incidents in 12 months',
        '50% reduction in security response time'
      ],
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with cutting-edge AI and technology solutions.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">Client: {study.client}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center">
                      Read Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let us help you achieve similar results with our proven AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;