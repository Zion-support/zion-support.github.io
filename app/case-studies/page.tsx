'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, Star, Users, TrendingUp, Clock, Tag } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticket routing system',
      results: [
        '60% reduction in response time',
        '40% cost savings',
        '95% customer satisfaction rate'
      ],
      duration: '3 months',
      category: 'AI Solutions',
      image: '/case-studies/ai-customer-service.jpg'
    },
    {
      id: 2,
      title: 'Cloud Migration for E-commerce Platform',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Scalability issues during peak shopping seasons',
      solution: 'Migrated to AWS with auto-scaling infrastructure',
      results: [
        '99.9% uptime during peak traffic',
        '50% faster page load times',
        '30% reduction in infrastructure costs'
      ],
      duration: '4 months',
      category: 'Cloud Infrastructure',
      image: '/case-studies/cloud-migration.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Overhaul for Financial Services',
      client: 'FinanceFirst',
      industry: 'Financial Services',
      challenge: 'Compliance requirements and security threats',
      solution: 'Comprehensive security framework with real-time monitoring',
      results: [
        '100% compliance with regulations',
        'Zero security incidents',
        '24/7 threat monitoring'
      ],
      duration: '6 months',
      category: 'Cybersecurity',
      image: '/case-studies/cybersecurity.jpg'
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard for Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time visibility into production metrics',
      solution: 'Custom analytics dashboard with predictive insights',
      results: [
        '25% improvement in efficiency',
        '15% reduction in waste',
        'Real-time production monitoring'
      ],
      duration: '2 months',
      category: 'Data Analytics',
      image: '/case-studies/data-analytics.jpg'
    },
    {
      id: 5,
      title: 'Mobile App Development for Healthcare',
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Need for patient management mobile solution',
      solution: 'Cross-platform mobile app with secure data handling',
      results: [
        '50% faster patient check-ins',
        'HIPAA compliant',
        '4.8/5 app store rating'
      ],
      duration: '5 months',
      category: 'Mobile Development',
      image: '/case-studies/mobile-app.jpg'
    },
    {
      id: 6,
      title: 'IT Infrastructure Modernization',
      client: 'Global Enterprises',
      industry: 'Consulting',
      challenge: 'Outdated IT infrastructure affecting productivity',
      solution: 'Complete infrastructure overhaul with modern technologies',
      results: [
        '40% improvement in productivity',
        '60% reduction in downtime',
        'Future-proof architecture'
      ],
      duration: '8 months',
      category: 'IT Services',
      image: '/case-studies/it-infrastructure.jpg'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industries Served' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, cloud infrastructure, cybersecurity, Zion Tech Group" />
      </Helmet>

      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries 
              transform their operations with cutting-edge technology solutions.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl text-cyan-400/50">📊</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <div className="mb-4">
                    <p className="text-gray-300 text-sm mb-1">
                      <strong>Client:</strong> {study.client}
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong>Industry:</strong> {study.industry}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-300 text-sm mb-2">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center py-2">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and see how we can help you achieve 
              similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;