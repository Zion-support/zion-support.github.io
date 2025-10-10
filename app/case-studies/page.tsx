'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Shield, Cloud } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticket routing system',
      results: [
        '60% reduction in response time',
        '40% cost savings on customer service',
        '95% customer satisfaction rate'
      ],
      image: '/api/placeholder/600/400',
      duration: '3 months',
      teamSize: '5 developers'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'Legacy system migration and compliance requirements',
      solution: 'Complete cloud migration with enhanced security measures',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        'Full compliance with financial regulations'
      ],
      image: '/api/placeholder/600/400',
      duration: '6 months',
      teamSize: '8 developers'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'HIPAA compliance and data security vulnerabilities',
      solution: 'Comprehensive security audit and implementation of advanced protection',
      results: [
        '100% HIPAA compliance',
        'Zero security breaches',
        'Automated threat detection system'
      ],
      image: '/api/placeholder/600/400',
      duration: '4 months',
      teamSize: '6 security experts'
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard for E-commerce',
      client: 'ShopSmart',
      industry: 'E-commerce',
      challenge: 'Lack of real-time business insights and data visibility',
      solution: 'Custom analytics dashboard with AI-powered insights',
      results: [
        'Real-time business metrics',
        '25% increase in sales',
        'Data-driven decision making'
      ],
      image: '/api/placeholder/600/400',
      duration: '2 months',
      teamSize: '4 developers'
    },
    {
      id: 5,
      title: 'AI-Powered Inventory Management',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Inventory optimization and demand forecasting',
      solution: 'Machine learning algorithms for predictive inventory management',
      results: [
        '30% reduction in stockouts',
        '20% decrease in excess inventory',
        'Automated reorder system'
      ],
      image: '/api/placeholder/600/400',
      duration: '3 months',
      teamSize: '5 AI specialists'
    },
    {
      id: 6,
      title: 'Mobile App Development for Logistics',
      client: 'LogiFlow',
      industry: 'Logistics',
      challenge: 'Outdated tracking system and poor customer experience',
      solution: 'Modern mobile app with real-time tracking and AI optimization',
      results: [
        '50% improvement in delivery efficiency',
        '4.8/5 app store rating',
        'Real-time package tracking'
      ],
      image: '/api/placeholder/600/400',
      duration: '5 months',
      teamSize: '7 developers'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400/50">📊</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {study.industry}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{study.duration}</span>
                        <span>•</span>
                        <span>{study.teamSize}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h2>
                    
                    <p className="text-cyan-400 font-medium mb-4">
                      Client: {study.client}
                    </p>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-300 mb-2">Challenge:</h3>
                      <p className="text-gray-400 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-300 mb-2">Solution:</h3>
                      <p className="text-gray-400 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-300 mb-2">Results:</h3>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Get Free Consultation
                </button>
                <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;