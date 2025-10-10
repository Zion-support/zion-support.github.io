'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, CheckCircle, Star, TrendingUp } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service volume and response time issues',
      solution: 'Implemented AI chatbot and automated response system',
      results: ['40% reduction in response time', '60% increase in customer satisfaction', '30% cost savings'],
      description: 'Transformed customer service operations with AI-powered solutions, resulting in significant efficiency gains and improved customer experience.'
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy system migration and compliance requirements',
      solution: 'Secure cloud migration with enhanced security protocols',
      results: ['99.9% uptime achieved', '50% faster processing', 'Full compliance maintained'],
      description: 'Successfully migrated critical financial systems to the cloud while maintaining security and compliance standards.'
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'HIPAA compliance and data security concerns',
      solution: 'Comprehensive security audit and implementation',
      results: ['100% HIPAA compliance', 'Zero security incidents', 'Enhanced patient data protection'],
      description: 'Strengthened cybersecurity posture for healthcare organization, ensuring patient data protection and regulatory compliance.'
    },
    {
      title: 'Blockchain Integration for Supply Chain',
      client: 'Global Logistics Co.',
      industry: 'Logistics',
      image: '/api/placeholder/600/400',
      challenge: 'Supply chain transparency and traceability',
      solution: 'Blockchain-based tracking and verification system',
      results: ['Real-time tracking', 'Reduced fraud by 80%', 'Improved supplier trust'],
      description: 'Implemented blockchain technology to create transparent and traceable supply chain operations.'
    },
    {
      title: 'Data Analytics Platform for Manufacturing',
      client: 'Industrial Solutions Ltd.',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Inefficient production monitoring and optimization',
      solution: 'Real-time analytics and predictive maintenance',
      results: ['25% increase in efficiency', '15% reduction in downtime', 'Predictive maintenance success'],
      description: 'Developed comprehensive data analytics platform for manufacturing optimization and predictive maintenance.'
    },
    {
      title: 'Mobile App Development for FinTech',
      client: 'PayTech Solutions',
      industry: 'FinTech',
      image: '/api/placeholder/600/400',
      challenge: 'Secure mobile payment platform development',
      solution: 'End-to-end mobile app with advanced security',
      results: ['1M+ downloads', '4.8/5 app rating', 'Zero security breaches'],
      description: 'Created secure and user-friendly mobile payment application with advanced security features.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries transform their operations 
            with cutting-edge AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-4xl">📊</div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-500/20 text-purple-300 text-sm px-3 py-1 rounded-full mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    <strong>Client:</strong> {study.client}
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                  
                  <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm mb-3">{study.solution}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{study.description}</p>
                
                <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss how we can help transform your business with our proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <ExternalLink className="mr-2 h-5 w-5" />
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="mr-2 h-5 w-5" />
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;