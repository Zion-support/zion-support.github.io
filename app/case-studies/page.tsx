'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Zap } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: ['85% reduction in response time', '60% cost savings', '95% customer satisfaction'],
      duration: '3 months',
      team: '8 specialists'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy system migration and compliance requirements',
      solution: 'Seamless cloud migration with enhanced security',
      results: ['99.9% uptime achieved', '40% performance improvement', 'Full compliance maintained'],
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'HIPAA compliance and threat protection',
      solution: 'Comprehensive security suite with 24/7 monitoring',
      results: ['Zero security breaches', '100% HIPAA compliance', '50% faster threat detection'],
      duration: '4 months',
      team: '10 specialists'
    },
    {
      id: 4,
      title: 'E-commerce AI Optimization',
      client: 'RetailMax',
      industry: 'Retail',
      image: '/api/placeholder/600/400',
      challenge: 'Low conversion rates and poor user experience',
      solution: 'AI-powered personalization and recommendation engine',
      results: ['45% increase in conversions', '30% higher average order value', '25% reduction in cart abandonment'],
      duration: '5 months',
      team: '15 specialists'
    },
    {
      id: 5,
      title: 'Manufacturing Process Automation',
      client: 'AutoParts Inc',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Inefficient production processes and quality control',
      solution: 'IoT sensors and AI-powered quality control system',
      results: ['35% increase in efficiency', '90% reduction in defects', '20% cost savings'],
      duration: '8 months',
      team: '20 specialists'
    },
    {
      id: 6,
      title: 'Data Analytics Platform Development',
      client: 'DataDriven Corp',
      industry: 'Analytics',
      image: '/api/placeholder/600/400',
      challenge: 'Fragmented data sources and poor insights',
      solution: 'Unified data platform with real-time analytics',
      results: ['Real-time insights', '80% faster reporting', 'Data-driven decisions'],
      duration: '6 months',
      team: '12 specialists'
    }
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Real Results, Real Impact
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI and IT solutions. See the measurable results we've delivered.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="quantum-card p-6 energy-pulse">
                  <div className="mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-6xl">📊</div>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                        {study.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 neon-text">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Client: <span className="text-cyan-400 font-medium">{study.client}</span>
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.team}
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let us help you achieve similar results. Get a free consultation and discover 
                how our AI and IT solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-200"
                >
                  📞 Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
