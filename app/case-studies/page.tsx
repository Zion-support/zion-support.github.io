'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Global',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system.',
      results: [
        '85% reduction in response time',
        '60% decrease in customer service costs',
        '95% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      duration: '3 months',
      teamSize: '8 specialists'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems limiting scalability and increasing operational costs.',
      solution: 'Complete cloud migration with enhanced security and compliance measures.',
      results: [
        '99.9% uptime achieved',
        '40% reduction in infrastructure costs',
        '50% faster application deployment',
        'Full compliance with financial regulations'
      ],
      duration: '6 months',
      teamSize: '12 specialists'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'Increasing cyber threats and need for HIPAA compliance.',
      solution: 'Comprehensive security framework with AI-powered threat detection.',
      results: [
        'Zero security breaches in 12 months',
        '100% HIPAA compliance achieved',
        'Real-time threat detection and response',
        '50% reduction in security incidents'
      ],
      duration: '4 months',
      teamSize: '10 specialists'
    },
    {
      id: 4,
      title: 'AI Analytics for E-commerce Optimization',
      client: 'ShopSmart Retail',
      industry: 'Retail',
      image: '/api/placeholder/600/400',
      challenge: 'Low conversion rates and poor customer experience on e-commerce platform.',
      solution: 'AI-powered analytics and personalization engine implementation.',
      results: [
        '35% increase in conversion rates',
        '25% boost in average order value',
        '40% improvement in customer retention',
        'Real-time personalization capabilities'
      ],
      duration: '5 months',
      teamSize: '6 specialists'
    },
    {
      id: 5,
      title: 'Quantum Computing Research Platform',
      client: 'Quantum Research Labs',
      industry: 'Research & Development',
      image: '/api/placeholder/600/400',
      challenge: 'Need for advanced computing power for complex research simulations.',
      solution: 'Custom quantum computing platform with hybrid classical-quantum algorithms.',
      results: [
        '1000x faster computation for specific algorithms',
        'Breakthrough in molecular simulation accuracy',
        'Published 3 research papers',
        'Patent applications filed'
      ],
      duration: '12 months',
      teamSize: '15 specialists'
    },
    {
      id: 6,
      title: 'Autonomous Manufacturing System',
      client: 'AutoManufacturing Inc',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Manual processes causing inefficiencies and quality issues.',
      solution: 'AI-powered autonomous manufacturing system with predictive maintenance.',
      results: [
        '30% increase in production efficiency',
        '45% reduction in defects',
        'Predictive maintenance preventing 90% of downtime',
        'ROI of 300% within first year'
      ],
      duration: '8 months',
      teamSize: '20 specialists'
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
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform with cutting-edge AI and IT solutions.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 font-medium">
                      Client: {study.client}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm mb-3">{study.challenge}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {study.teamSize}
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
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

          {/* Statistics Section */}
          <div className="max-w-6xl mx-auto mt-20">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Our Impact in Numbers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">$50M+</div>
                  <div className="text-gray-600">Cost Savings Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-xl p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h3>
              <p className="text-cyan-100 mb-8 text-lg">
                Let us help you achieve similar results with our proven AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Start Your Project
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors flex items-center justify-center"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;