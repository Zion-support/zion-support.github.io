'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Clock } from 'lucide-react';

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
        '75% reduction in response time',
        '60% cost savings',
        '95% customer satisfaction rate',
        '24/7 availability'
      ],
      duration: '3 months',
      team: '5 specialists',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with enhanced security and compliance',
      results: [
        '99.9% uptime achieved',
        '50% performance improvement',
        '100% compliance maintained',
        '40% infrastructure cost reduction'
      ],
      duration: '6 months',
      team: '8 specialists',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'HIPAA compliance and patient data security concerns',
      solution: 'Comprehensive security audit and implementation of advanced threat protection',
      results: [
        '100% HIPAA compliance',
        'Zero security breaches',
        '99.8% threat detection rate',
        '50% faster incident response'
      ],
      duration: '4 months',
      team: '6 specialists',
      featured: false
    },
    {
      id: 4,
      title: 'AI Analytics Dashboard for E-commerce',
      client: 'ShopSmart',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'Lack of real-time insights and data-driven decision making',
      solution: 'Custom AI-powered analytics platform with predictive insights',
      results: [
        '300% increase in data insights',
        '25% boost in sales',
        '90% reduction in reporting time',
        'Real-time decision making'
      ],
      duration: '2 months',
      team: '4 specialists',
      featured: false
    },
    {
      id: 5,
      title: 'Mobile App Development for Retail',
      client: 'RetailMax',
      industry: 'Retail',
      image: '/api/placeholder/600/400',
      challenge: 'Outdated mobile presence and poor user experience',
      solution: 'Native mobile app with AI-powered recommendations and seamless UX',
      results: [
        '4.8/5 app store rating',
        '200% increase in mobile engagement',
        '150% boost in mobile sales',
        '50% reduction in cart abandonment'
      ],
      duration: '5 months',
      team: '7 specialists',
      featured: false
    },
    {
      id: 6,
      title: 'Process Automation for Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Manual processes causing inefficiencies and errors',
      solution: 'End-to-end process automation with AI monitoring and optimization',
      results: [
        '80% process automation',
        '45% efficiency improvement',
        '90% error reduction',
        '30% cost savings'
      ],
      duration: '4 months',
      team: '6 specialists',
      featured: false
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: Star },
    { label: 'Client Satisfaction', value: '98%', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Years Experience', value: '5+', icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results, real impact." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform with cutting-edge AI and IT solutions. 
              Real projects, real results, real impact.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Featured Case Study</h2>
            {caseStudies.filter(study => study.featured).map((study) => (
              <div key={study.id} className="quantum-card p-8 mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">• {study.duration}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      <strong>Client:</strong> {study.client}
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{study.duration}</div>
                        <div className="text-gray-400 text-sm">Duration</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{study.team}</div>
                        <div className="text-gray-400 text-sm">Team Size</div>
                      </div>
                    </div>
                    <button className="cyber-button">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-80 flex items-center justify-center">
                    <div className="text-6xl">📊</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">All Case Studies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-48 flex items-center justify-center mb-4">
                    <div className="text-4xl">📈</div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-xs">• {study.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    <strong>Client:</strong> {study.client}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 3).map((result, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                      {study.results.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          +{study.results.length - 3} more results
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="quantum-card p-12">
              <h2 className="text-3xl font-bold text-white mb-4 holographic-text">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our proven AI and IT solutions. 
                Join hundreds of satisfied clients who have achieved remarkable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button">
                  Start Your Project
                </a>
                <a href="/pricing" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  View Pricing
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