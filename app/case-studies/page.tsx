'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building2, Users, TrendingUp, Shield, Zap } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/images/case-studies/ai-customer-service.jpg',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      duration: '3 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      image: '/images/case-studies/cloud-migration.jpg',
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated CI/CD pipelines.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment cycles',
        'Enhanced security compliance'
      ],
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement Program',
      client: 'Healthcare Plus',
      industry: 'Healthcare',
      image: '/images/case-studies/cybersecurity.jpg',
      challenge: 'Increasing cyber threats and compliance requirements for patient data protection.',
      solution: 'Comprehensive security audit and implementation of zero-trust architecture with advanced threat detection.',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security incidents in 12 months',
        '40% improvement in threat detection time',
        'Enhanced data encryption standards'
      ],
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'Manufacturing Corp',
      industry: 'Manufacturing',
      image: '/images/case-studies/iot-manufacturing.jpg',
      challenge: 'Manual monitoring processes and lack of real-time insights into production efficiency.',
      solution: 'Deployed comprehensive IoT platform with sensors, edge computing, and predictive analytics.',
      results: [
        '25% increase in production efficiency',
        '30% reduction in equipment downtime',
        'Real-time production monitoring',
        'Predictive maintenance capabilities'
      ],
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: '5',
      title: 'Data Analytics Dashboard for Retail',
      client: 'RetailMax',
      industry: 'Retail',
      image: '/images/case-studies/data-analytics.jpg',
      challenge: 'Scattered data sources and lack of unified insights for business decision-making.',
      solution: 'Built comprehensive data warehouse with real-time analytics dashboard and machine learning insights.',
      results: [
        '35% improvement in inventory management',
        '20% increase in sales through better insights',
        'Real-time business intelligence',
        'Automated reporting systems'
      ],
      duration: '3 months',
      team: '7 specialists'
    },
    {
      id: '6',
      title: 'DevOps Transformation for E-commerce',
      client: 'ShopFast',
      industry: 'E-commerce',
      image: '/images/case-studies/devops.jpg',
      challenge: 'Slow deployment cycles and frequent production issues affecting customer experience.',
      solution: 'Implemented complete DevOps pipeline with containerization, automated testing, and monitoring.',
      results: [
        '80% reduction in deployment time',
        '90% decrease in production incidents',
        'Continuous integration and deployment',
        'Improved team collaboration'
      ],
      duration: '4 months',
      team: '9 specialists'
    }
  ];

  const stats = [
    { icon: <Building2 className="w-8 h-8 text-purple-400" />, value: '50+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: '100+', label: 'Happy Clients' },
    { icon: <TrendingUp className="w-8 h-8 text-green-400" />, value: '95%', label: 'Success Rate' },
    { icon: <Shield className="w-8 h-8 text-yellow-400" />, value: '99.9%', label: 'Uptime Achieved' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful projects and case studies showcasing how we've helped businesses transform with technology." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, cybersecurity, IoT solutions" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations, 
              improve efficiency, and achieve their goals through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Case Studies</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real projects, real results. See how we've helped businesses achieve their technology goals.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-purple-400/50 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-400/20 to-cyan-400/20 flex items-center justify-center">
                <div className="text-6xl opacity-50">📊</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 text-sm font-medium">{study.industry}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                <p className="text-gray-400 text-sm mb-4">Client: {study.client}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <Zap className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{study.team}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{study.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="border border-slate-600 text-gray-300 px-4 py-2 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300 flex items-center">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;