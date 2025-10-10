'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, TrendingUp, Users, DollarSign, Clock, CheckCircle, Star } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Optimize production line efficiency and reduce downtime',
      solution: 'Implemented AI-powered predictive maintenance and quality control systems',
      results: [
        '40% reduction in unplanned downtime',
        '25% increase in production efficiency',
        '$2.5M annual cost savings',
        '99.8% quality improvement'
      ],
      duration: '6 months',
      team: '8 specialists',
      image: '🏭'
    },
    {
      title: 'Healthcare System Network',
      industry: 'Healthcare',
      challenge: 'Improve patient care and reduce operational costs',
      solution: 'Deployed AI-driven patient monitoring and diagnostic assistance tools',
      results: [
        '30% faster diagnosis times',
        '50% reduction in false positives',
        '35% improvement in patient outcomes',
        '$1.8M cost savings annually'
      ],
      duration: '8 months',
      team: '12 specialists',
      image: '🏥'
    },
    {
      title: 'Financial Services Corporation',
      industry: 'Finance',
      challenge: 'Enhance fraud detection and compliance monitoring',
      solution: 'Built advanced AI fraud detection system with real-time monitoring',
      results: [
        '95% fraud detection accuracy',
        '60% reduction in false positives',
        '80% faster transaction processing',
        '100% compliance achievement'
      ],
      duration: '4 months',
      team: '6 specialists',
      image: '🏦'
    },
    {
      title: 'E-commerce Platform',
      industry: 'Retail',
      challenge: 'Personalize customer experience and increase conversions',
      solution: 'Implemented AI-powered recommendation engine and customer analytics',
      results: [
        '45% increase in conversion rates',
        '60% improvement in customer satisfaction',
        '35% increase in average order value',
        '50% reduction in cart abandonment'
      ],
      duration: '5 months',
      team: '10 specialists',
      image: '🛒'
    },
    {
      title: 'Energy & Utilities Company',
      industry: 'Energy',
      challenge: 'Optimize energy distribution and reduce waste',
      solution: 'Deployed smart grid AI system with predictive analytics',
      results: [
        '30% reduction in energy waste',
        '25% improvement in grid efficiency',
        '40% faster outage response',
        '$3.2M annual savings'
      ],
      duration: '7 months',
      team: '9 specialists',
      image: '⚡'
    },
    {
      title: 'Logistics & Transportation',
      industry: 'Transportation',
      challenge: 'Optimize route planning and fleet management',
      solution: 'Built AI-powered logistics optimization platform',
      results: [
        '35% reduction in fuel costs',
        '50% improvement in delivery times',
        '25% increase in fleet utilization',
        '$2.1M annual cost savings'
      ],
      duration: '6 months',
      team: '7 specialists',
      image: '🚛'
    }
  ];

  const stats = [
    {
      number: '500+',
      label: 'Projects Completed',
      icon: <CheckCircle className="w-8 h-8 text-green-400" />
    },
    {
      number: '95%',
      label: 'Client Satisfaction',
      icon: <Star className="w-8 h-8 text-yellow-400" />
    },
    {
      number: '$50M+',
      label: 'Cost Savings Delivered',
      icon: <DollarSign className="w-8 h-8 text-green-400" />
    },
    {
      number: '24/7',
      label: 'Support Available',
      icon: <Clock className="w-8 h-8 text-blue-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped Fortune 500 companies achieve 40% cost savings and 95% client satisfaction with AI and IT solutions." />
        <meta name="keywords" content="AI case studies, IT success stories, enterprise solutions, Fortune 500 clients, AI implementation results" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Explore our success stories and case studies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped Fortune 500 companies and growing businesses 
            achieve remarkable results with our AI and IT solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{study.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                  {study.industry}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                
                <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {study.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {study.team}
                </span>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                Read Full Case Study
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join the companies that have transformed their operations with our AI and IT solutions. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;