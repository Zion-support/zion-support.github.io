'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Settings, BarChart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform Optimization',
      description: 'Increased conversion rates by 40% through AI-powered personalization.',
      results: ['40% Increase in Conversions', '60% Faster Load Times', '25% Higher Customer Satisfaction'],
      icon: <Zap className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Healthcare Data Analytics',
      description: 'Transformed patient care with predictive analytics and AI insights.',
      results: ['30% Reduction in Readmissions', '50% Faster Diagnosis', '90% Accuracy in Predictions'],
      icon: <Brain className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Financial Services Automation',
      description: 'Streamlined operations and improved compliance with AI automation.',
      results: ['70% Process Automation', '99.9% Compliance Rate', '50% Cost Reduction'],
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Manufacturing Quality Control',
      description: 'Enhanced product quality with computer vision and AI monitoring.',
      results: ['95% Defect Detection', '80% Reduction in Waste', '60% Faster Inspections'],
      icon: <Settings className="w-8 h-8 text-orange-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Success stories and case studies from Zion Tech Group. See how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Case
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with our AI and IT solutions. 
              Real results from real companies.
            </p>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our solutions have transformed businesses across industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="mb-6">
                    {study.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {study.description}
                  </p>
                  <ul className="space-y-3">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the companies that have already transformed with our solutions
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;