'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, TrendingUp, Shield, CheckCircle, ExternalLink } from 'lucide-react';

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
      client: 'Global Retail Chain',
      industry: 'Retail',
      challenge: 'High customer service costs and inconsistent response quality across 500+ stores',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing',
      results: [
        '60% reduction in customer service costs',
        '85% improvement in response time',
        '90% customer satisfaction rate',
        '24/7 multilingual support'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration & Infrastructure Modernization',
      client: 'Financial Services Company',
      industry: 'Finance',
      challenge: 'Legacy on-premises infrastructure causing scalability issues and high maintenance costs',
      solution: 'Complete cloud migration to AWS with microservices architecture and automated CI/CD pipelines',
      results: [
        '70% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '50% faster deployment cycles',
        'Enhanced security compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '8 months',
      team: '15 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'HIPAA compliance requirements and increasing cyber threats targeting patient data',
      solution: 'Comprehensive security audit and implementation of zero-trust architecture with advanced threat detection',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security incidents in 12 months',
        'Real-time threat monitoring',
        'Automated compliance reporting'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '8 specialists'
    },
    {
      id: '4',
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Fragmented data across multiple systems preventing data-driven decision making',
      solution: 'Unified data platform with real-time analytics, predictive modeling, and interactive dashboards',
      results: [
        '40% improvement in operational efficiency',
        'Real-time production monitoring',
        'Predictive maintenance capabilities',
        'Data-driven strategic decisions'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '5 months',
      team: '10 specialists'
    }
  ];

  const stats = [
    { icon: <Building2 className="w-8 h-8 text-blue-500" />, number: '150+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8 text-green-500" />, number: '200+', label: 'Happy Clients' },
    { icon: <TrendingUp className="w-8 h-8 text-purple-500" />, number: '95%', label: 'Success Rate' },
    { icon: <Shield className="w-8 h-8 text-red-500" />, number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, success stories, technology implementation, digital transformation, AI solutions, cloud migration" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and technology implementations" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries transform their operations with cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-6xl">📊</div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="font-semibold text-blue-400">{study.client}</span>
                    <span>•</span>
                    <span>{study.industry}</span>
                    <span>•</span>
                    <span>{study.duration}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Team: {study.team}
                  </div>
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                    Read Full Case Study
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our proven technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;