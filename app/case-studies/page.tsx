'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building2, Users, TrendingUp, Shield, Zap } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/images/case-studies/ai-customer-service.jpg',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '60% reduction in response time',
        '40% cost savings',
        '95% customer satisfaction rate'
      ],
      duration: '3 months',
      team: '5 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/images/case-studies/cloud-migration.jpg',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with enhanced security protocols',
      results: [
        '99.9% uptime achieved',
        '50% faster processing',
        'Zero security incidents'
      ],
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      challenge: 'Increasing cyber threats targeting patient data',
      solution: 'Comprehensive security audit and implementation of advanced protection',
      results: [
        '100% compliance with HIPAA',
        'Zero data breaches',
        '24/7 threat monitoring'
      ],
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'Quantum Computing Research Platform',
      client: 'Quantum Research Institute',
      industry: 'Research & Development',
      image: '/images/case-studies/quantum-computing.jpg',
      challenge: 'Need for advanced computing power for complex simulations',
      solution: 'Custom quantum computing platform with AI integration',
      results: [
        '1000x faster calculations',
        'Breakthrough research capabilities',
        'International recognition'
      ],
      duration: '12 months',
      team: '12 specialists'
    },
    {
      id: '5',
      title: 'E-commerce AI Optimization',
      client: 'RetailMax',
      industry: 'E-commerce',
      image: '/images/case-studies/ecommerce-ai.jpg',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'AI-powered recommendation engine and personalization',
      results: [
        '35% increase in conversions',
        '25% higher average order value',
        '80% improvement in user engagement'
      ],
      duration: '5 months',
      team: '7 specialists'
    },
    {
      id: '6',
      title: 'Autonomous Vehicle Fleet Management',
      client: 'AutoLogistics',
      industry: 'Transportation',
      image: '/images/case-studies/autonomous-vehicles.jpg',
      challenge: 'Inefficient fleet operations and high maintenance costs',
      solution: 'AI-driven autonomous vehicle management system',
      results: [
        '30% reduction in fuel costs',
        '45% decrease in maintenance',
        '99.5% safety record'
      ],
      duration: '8 months',
      team: '10 specialists'
    }
  ];

  const stats = [
    { icon: Building2, label: 'Projects Completed', value: '150+' },
    { icon: Users, label: 'Happy Clients', value: '200+' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
    { icon: Shield, label: 'Security Score', value: '100%' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and client results from our AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped businesses transform with AI and IT solutions.
=======
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white/60 text-sm">Case Study Image</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 mb-2">{study.client}</p>
                  <p className="text-purple-400 text-sm mb-4">{study.industry}</p>
                  <button className="flex items-center text-purple-400 hover:text-purple-300 font-semibold group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
=======
        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Featured Case Studies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-400/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">📊</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-gray-400">
                        <strong>Challenge:</strong> {study.challenge}
                      </p>
                      <p className="text-sm text-gray-400">
                        <strong>Solution:</strong> {study.solution}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                            <Zap className="w-3 h-3 text-cyan-400" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>Team: {study.team}</span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-2 px-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4" />
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
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Let us help you achieve similar results with our proven AI and IT solutions. 
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Explore Services
                  <ExternalLink className="w-4 h-4" />
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