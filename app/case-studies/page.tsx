'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap } from 'lucide-react';

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
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues and security concerns.',
      solution: 'Complete cloud migration with enhanced security protocols and automated monitoring.',
      results: [
        '99.9% uptime achieved',
        '50% faster processing',
        'Zero security incidents',
        '300% improvement in deployment speed',
        'Enhanced security compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Critical security vulnerabilities and compliance requirements.',
      solution: 'Comprehensive security audit and implementation of advanced threat protection.',
      results: [
        '100% compliance with HIPAA',
        'Zero data breaches',
        'Real-time threat detection',
        'Automated incident response'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '10 specialists'
    },
    {
      id: '4',
      title: 'AI-Driven Supply Chain Optimization',
      client: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain leading to delays and increased costs.',
      solution: 'AI-powered demand forecasting and automated inventory management system.',
      results: [
        '40% reduction in inventory costs',
        '25% improvement in delivery times',
        '95% forecast accuracy',
        'Automated reorder optimization'
      ],
      image: '/images/case-studies/supply-chain.jpg',
      duration: '5 months',
      team: '15 specialists'
    },
    {
      id: '5',
      title: 'Digital Transformation for Retail',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Outdated systems limiting growth and customer experience.',
      solution: 'Complete digital transformation with modern e-commerce platform and AI analytics.',
      results: [
        '200% increase in online sales',
        '50% improvement in customer satisfaction',
        'Real-time inventory management',
        'Personalized shopping experience'
      ],
      image: '/images/case-studies/digital-transformation.jpg',
      duration: '8 months',
      team: '20 specialists'
    },
    {
      id: '6',
      title: 'IoT Integration for Smart Manufacturing',
      client: 'SmartFactory Inc.',
      industry: 'Manufacturing',
      challenge: 'Manual processes and lack of real-time monitoring.',
      solution: 'IoT sensor network with AI-powered predictive maintenance and automation.',
      results: [
        '30% reduction in downtime',
        '20% increase in production efficiency',
        'Predictive maintenance alerts',
        'Real-time production monitoring'
      ],
      image: '/images/case-studies/iot-manufacturing.jpg',
      duration: '6 months',
      team: '12 specialists'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT transformation projects across various industries" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Explore our successful AI and IT transformation projects across various industries" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                50+ Successful Projects
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                95% Client Satisfaction
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-400" />
                Industry Recognition
              </span>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {caseStudies.map((study) => (
              <div key={study.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.title}</h3>
                      <p className="text-gray-400">{study.client} • {study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how we can help transform your business with our proven AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center py-3 px-8"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;