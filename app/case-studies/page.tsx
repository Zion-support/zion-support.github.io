'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and inconsistent response times',
      solution: 'Implemented AI chatbots and automated ticket routing',
      results: [
        '75% reduction in response time',
        '60% cost savings on customer service',
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
      challenge: 'Legacy systems limiting scalability and security concerns',
      solution: 'Complete cloud migration with enhanced security protocols',
      results: [
        '99.9% uptime achieved',
        '40% reduction in infrastructure costs',
        '50% faster application deployment'
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
      solution: 'Comprehensive security audit and implementation of advanced protection',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security breaches in 12 months',
        '99.8% system availability'
      ],
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: 4,
      title: 'Machine Learning for Supply Chain Optimization',
      client: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Inefficient inventory management and supply chain delays',
      solution: 'AI-powered demand forecasting and inventory optimization',
      results: [
        '30% reduction in inventory costs',
        '25% improvement in delivery times',
        '20% increase in profit margins'
      ],
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: 5,
      title: 'Digital Transformation for Retail Chain',
      client: 'RetailMax',
      industry: 'Retail',
      image: '/api/placeholder/600/400',
      challenge: 'Outdated systems and poor customer experience',
      solution: 'Complete digital overhaul with AI-powered personalization',
      results: [
        '45% increase in online sales',
        '35% improvement in customer retention',
        '50% faster checkout process'
      ],
      duration: '8 months',
      team: '15 specialists'
    },
    {
      id: 6,
      title: 'Quantum Computing Research Platform',
      client: 'Quantum Research Labs',
      industry: 'Research & Development',
      image: '/api/placeholder/600/400',
      challenge: 'Complex computational problems requiring quantum solutions',
      solution: 'Custom quantum computing platform and algorithm development',
      results: [
        '1000x faster computation for specific algorithms',
        'Breakthrough in optimization problems',
        'Published 3 research papers'
      ],
      duration: '12 months',
      team: '20 specialists'
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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform with cutting-edge AI and IT solutions. Real results, real impact.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-cyan-400 font-semibold mb-4">{study.client}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-white font-semibold mb-2">Challenge:</h3>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-semibold mb-2">Solution:</h3>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-semibold mb-2">Results:</h3>
                        <ul className="space-y-1">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-300">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{study.team}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
