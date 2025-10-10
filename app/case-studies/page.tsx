'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock, Target } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticket routing system',
      results: [
        '60% reduction in response time',
        '40% cost savings on customer service',
        '95% customer satisfaction rate'
      ],
      duration: '3 months',
      team: '8 specialists'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems causing security vulnerabilities and scalability issues',
      solution: 'Complete cloud migration with enhanced security protocols',
      results: [
        '99.9% uptime achieved',
        '50% faster transaction processing',
        'Zero security incidents'
      ],
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'HIPAA compliance and increasing cyber threats',
      solution: 'Comprehensive security audit and implementation of advanced threat detection',
      results: [
        '100% HIPAA compliance',
        '90% reduction in security incidents',
        '24/7 threat monitoring'
      ],
      duration: '4 months',
      team: '10 specialists'
    },
    {
      id: 4,
      title: 'Quantum Computing Integration',
      client: 'Research Institute',
      industry: 'Research & Development',
      image: '/api/placeholder/600/400',
      challenge: 'Complex data processing requirements for scientific research',
      solution: 'Quantum computing infrastructure and algorithm optimization',
      results: [
        '1000x faster data processing',
        'Breakthrough in molecular simulation',
        'Published 3 research papers'
      ],
      duration: '8 months',
      team: '15 specialists'
    },
    {
      id: 5,
      title: 'Digital Transformation for Manufacturing',
      client: 'AutoManufacturing Inc',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Outdated production systems and lack of real-time monitoring',
      solution: 'IoT integration and AI-powered predictive maintenance',
      results: [
        '25% increase in production efficiency',
        '30% reduction in downtime',
        'Real-time quality monitoring'
      ],
      duration: '5 months',
      team: '14 specialists'
    },
    {
      id: 6,
      title: 'Autonomous Systems for Logistics',
      client: 'LogiTech Solutions',
      industry: 'Logistics',
      image: '/api/placeholder/600/400',
      challenge: 'Manual warehouse operations and delivery inefficiencies',
      solution: 'Autonomous robots and AI-powered route optimization',
      results: [
        '70% faster order fulfillment',
        '45% reduction in operational costs',
        '99.5% delivery accuracy'
      ],
      duration: '7 months',
      team: '18 specialists'
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
            <h1 className="text-5xl font-bold text-white mb-6">
              Success <span className="text-cyan-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-500/20"></div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-300 mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{study.client}</span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-300 text-sm">
                            <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Target className="w-4 h-4 mr-1" />
                        <span>{study.team}</span>
                      </div>
                      
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
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
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Write Your <span className="text-cyan-400">Success Story</span>?
              </h2>
              <p className="text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can transform your business. Contact us for a personalized consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/demo"
                  className="bg-white/20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
