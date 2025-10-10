'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered E-commerce Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '60% reduction in cart abandonment',
        '$2.5M additional revenue in 6 months'
      ],
      image: '/images/case-studies/ecommerce-ai.jpg'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient diagnosis processes',
      solution: 'Built comprehensive AI-powered analytics platform with predictive diagnostics',
      results: [
        '50% faster diagnosis times',
        '35% improvement in treatment accuracy',
        '30% reduction in operational costs'
      ],
      image: '/images/case-studies/healthcare-analytics.jpg'
    },
    {
      title: 'Manufacturing Process Optimization',
      client: 'GlobalManufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Inefficient production lines and high defect rates',
      solution: 'Deployed AI-driven predictive maintenance and quality control systems',
      results: [
        '25% increase in production efficiency',
        '45% reduction in defect rates',
        '$1.8M annual cost savings'
      ],
      image: '/images/case-studies/manufacturing-ai.jpg'
    },
    {
      title: 'Financial Services Automation',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Manual processes and high operational costs',
      solution: 'Implemented AI-powered document processing and fraud detection systems',
      results: [
        '70% reduction in processing time',
        '90% accuracy in fraud detection',
        '60% decrease in operational costs'
      ],
      image: '/images/case-studies/finance-automation.jpg'
    },
    {
      title: 'Supply Chain Intelligence',
      client: 'LogiChain Solutions',
      industry: 'Logistics',
      challenge: 'Supply chain disruptions and inventory management issues',
      solution: 'Created AI-powered demand forecasting and inventory optimization platform',
      results: [
        '30% improvement in demand forecasting accuracy',
        '25% reduction in inventory costs',
        '40% decrease in stockouts'
      ],
      image: '/images/case-studies/supply-chain-ai.jpg'
    },
    {
      title: 'Customer Service Revolution',
      client: 'ServicePro Inc.',
      industry: 'Customer Service',
      challenge: 'High support ticket volume and long response times',
      solution: 'Deployed AI chatbot and intelligent ticket routing system',
      results: [
        '80% reduction in response time',
        '65% increase in customer satisfaction',
        '50% decrease in support costs'
      ],
      image: '/images/case-studies/customer-service-ai.jpg'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: TrendingUp },
    { label: 'Happy Clients', value: '200+', icon: Users },
    { label: 'Revenue Generated', value: '$50M+', icon: DollarSign },
    { label: 'Years of Experience', value: '5+', icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Discover how we've helped businesses transform with AI and IT solutions. Real success stories with measurable results." />
        <meta name="keywords" content="AI case studies, IT success stories, business transformation, AI implementation, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Case Studies</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Real projects, real results. See how our AI and IT solutions have transformed businesses across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-6xl">📊</div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">{study.client}</p>
                    <p className="text-gray-400 text-sm">{study.industry}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                    
                    <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm mb-3">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-green-400 text-sm flex items-center gap-2">
                          <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/case-studies/${index}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can transform your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/consultation"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Free Consultation
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