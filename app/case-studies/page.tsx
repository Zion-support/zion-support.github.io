'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Clock, Target, Award } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
      results: [
        '300% increase in conversion rates',
        '50% reduction in customer service costs',
        '25% increase in average order value',
        '99.9% uptime achieved'
      ],
      duration: '6 months',
      team: '8 specialists',
      investment: '$150,000',
      roi: '450%'
    },
    {
      id: 2,
      title: 'Healthcare AI Implementation',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Manual medical record processing and diagnosis delays',
      solution: 'AI-powered medical imaging and document processing system',
      results: [
        '80% faster diagnosis times',
        '95% accuracy in image analysis',
        '60% reduction in processing errors',
        'HIPAA compliance maintained'
      ],
      duration: '8 months',
      team: '12 specialists',
      investment: '$300,000',
      roi: '320%'
    },
    {
      id: 3,
      title: 'Financial Services Automation',
      company: 'FinTech Global',
      industry: 'Financial Services',
      challenge: 'Manual fraud detection and slow loan processing',
      solution: 'AI-powered fraud detection and automated loan processing',
      results: [
        '90% reduction in false positives',
        '70% faster loan processing',
        '99.5% fraud detection accuracy',
        '40% cost reduction'
      ],
      duration: '10 months',
      team: '15 specialists',
      investment: '$500,000',
      roi: '280%'
    },
    {
      id: 4,
      title: 'Manufacturing Quality Control',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'High defect rates and manual quality inspection',
      solution: 'Computer vision AI for automated quality control',
      results: [
        '95% reduction in defects',
        '50% faster inspection process',
        '30% increase in production efficiency',
        'Zero false rejections'
      ],
      duration: '4 months',
      team: '6 specialists',
      investment: '$200,000',
      roi: '380%'
    },
    {
      id: 5,
      title: 'Cloud Migration & Optimization',
      company: 'Enterprise Corp',
      industry: 'Technology',
      challenge: 'Legacy system migration and cost optimization',
      solution: 'Comprehensive cloud migration with AI-powered optimization',
      results: [
        '60% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '50% faster application performance',
        'Zero downtime migration'
      ],
      duration: '12 months',
      team: '20 specialists',
      investment: '$800,000',
      roi: '250%'
    },
    {
      id: 6,
      title: 'Cybersecurity Enhancement',
      company: 'SecureBank Ltd',
      industry: 'Banking',
      challenge: 'Advanced persistent threats and security breaches',
      solution: 'AI-powered threat detection and response system',
      results: [
        '99.8% threat detection accuracy',
        '90% reduction in response time',
        'Zero successful breaches',
        '24/7 automated monitoring'
      ],
      duration: '6 months',
      team: '10 specialists',
      investment: '$400,000',
      roi: '400%'
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: '350%',
      label: 'Average ROI',
      description: 'Across all projects'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered'
    },
    {
      icon: DollarSign,
      value: '$50M+',
      label: 'Cost Savings',
      description: 'Generated for clients'
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Success Rate',
      description: 'Project completion'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Results</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies. Real results from real clients across various industries." />
        <meta name="keywords" content="AI case studies, IT success stories, technology implementation, business transformation, ROI results" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Success Stories">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with AI and IT solutions. Real results from real clients.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card hologram-card p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-400 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've transformed businesses across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300 group">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Award className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">{study.roi} ROI</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-4">{study.company}</p>
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
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{study.duration}</div>
                      <div className="text-gray-400 text-xs">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{study.team}</div>
                      <div className="text-gray-400 text-xs">Team Size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{study.investment}</div>
                      <div className="text-gray-400 text-xs">Investment</div>
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
            <div className="cyber-card hologram-card p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with AI and IT solutions. 
                Get a free consultation and see what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </button>
                <button className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Download Case Study PDF
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