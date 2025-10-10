'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

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
      results: [
        '85% reduction in response time',
        '60% cost savings on customer service',
        '95% customer satisfaction rate'
      ],
      duration: '3 months',
      investment: '$150,000',
      roi: '340%'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy system limitations and security concerns',
      solution: 'Complete cloud migration with enhanced security',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        'Enhanced security compliance'
      ],
      duration: '6 months',
      investment: '$500,000',
      roi: '280%'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'HIPAA compliance and data protection',
      solution: 'Comprehensive security audit and implementation',
      results: [
        '100% HIPAA compliance',
        'Zero security breaches',
        'Automated threat detection'
      ],
      duration: '4 months',
      investment: '$200,000',
      roi: '400%'
    },
    {
      id: 4,
      title: 'Machine Learning for E-commerce Optimization',
      client: 'ShopSmart',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'Low conversion rates and poor personalization',
      solution: 'ML-powered recommendation engine and pricing optimization',
      results: [
        '45% increase in conversion rates',
        '30% boost in average order value',
        '60% improvement in customer retention'
      ],
      duration: '5 months',
      investment: '$300,000',
      roi: '520%'
    },
    {
      id: 5,
      title: 'IoT Integration for Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Inefficient production monitoring and maintenance',
      solution: 'IoT sensors and predictive maintenance system',
      results: [
        '25% reduction in downtime',
        '40% improvement in efficiency',
        'Predictive maintenance accuracy of 92%'
      ],
      duration: '8 months',
      investment: '$750,000',
      roi: '380%'
    },
    {
      id: 6,
      title: 'Data Analytics for Retail Chain',
      client: 'RetailMax',
      industry: 'Retail',
      image: '/api/placeholder/600/400',
      challenge: 'Poor inventory management and sales forecasting',
      solution: 'Advanced analytics platform with real-time insights',
      results: [
        '35% reduction in inventory costs',
        '20% increase in sales',
        'Real-time inventory tracking'
      ],
      duration: '4 months',
      investment: '$180,000',
      roi: '450%'
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
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-gray-300">Cost Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Case Study Image</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-500">{study.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    <strong>Client:</strong> {study.client}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm mb-3">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm mb-3">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-gray-900">{study.investment}</div>
                      <div className="text-sm text-gray-600">Investment</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{study.roi}</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors flex items-center justify-center">
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-cyan-100 mb-6">
              Let us help you achieve similar results with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                to="/consultation"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;
