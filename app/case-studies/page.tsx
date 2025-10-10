'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building, Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbots and automated ticket routing',
      results: ['60% reduction in response time', '40% cost savings', '95% customer satisfaction'],
      duration: '3 months',
      team: '5 specialists'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with enhanced security measures',
      results: ['99.9% uptime achieved', '50% performance improvement', 'Zero security incidents'],
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'HIPAA compliance and advanced threat protection needed',
      solution: 'Comprehensive security audit and zero-trust implementation',
      results: ['100% HIPAA compliance', 'Zero data breaches', '24/7 threat monitoring'],
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: 4,
      title: 'E-commerce AI Optimization',
      client: 'RetailMax',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'AI-powered recommendation engine and personalization',
      results: ['35% increase in conversions', '25% boost in revenue', 'Enhanced user experience'],
      duration: '5 months',
      team: '7 specialists'
    },
    {
      id: 5,
      title: 'Manufacturing Process Automation',
      client: 'AutoParts Inc',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Manual processes causing delays and errors',
      solution: 'RPA implementation and predictive maintenance AI',
      results: ['70% process automation', '30% error reduction', 'Predictive maintenance'],
      duration: '8 months',
      team: '10 specialists'
    },
    {
      id: 6,
      title: 'Data Analytics Platform for Logistics',
      client: 'LogiFlow',
      industry: 'Logistics',
      image: '/api/placeholder/600/400',
      challenge: 'Poor visibility into supply chain operations',
      solution: 'Real-time analytics dashboard and predictive insights',
      results: ['Real-time visibility', '20% cost reduction', 'Improved efficiency'],
      duration: '4 months',
      team: '5 specialists'
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
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform with AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-48 flex items-center justify-center mb-6">
                    <div className="text-6xl">📊</div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <Building className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Client: {study.client}</h4>
                    <p className="text-gray-300 mb-4">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-gray-300 mb-4">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
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
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let us help you achieve similar results. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Get Started</span>
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  View Our Services
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
