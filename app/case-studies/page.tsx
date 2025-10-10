'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, TrendingUp, Users, Globe, Zap, Shield, Target } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered E-commerce Platform',
      client: 'RetailTech Solutions',
      industry: 'E-commerce',
      challenge: 'Improve product recommendations and customer engagement',
      solution: 'Implemented machine learning algorithms for personalized recommendations',
      results: ['40% increase in conversion rates', '25% boost in average order value', '60% improvement in customer satisfaction'],
      icon: TrendingUp
    },
    {
      title: 'Blockchain Supply Chain Management',
      client: 'Global Logistics Corp',
      industry: 'Logistics',
      challenge: 'Ensure transparency and traceability in supply chain operations',
      solution: 'Developed blockchain-based tracking system for end-to-end visibility',
      results: ['99.9% data accuracy', '50% reduction in disputes', '30% faster processing times'],
      icon: Shield
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinTech Innovations',
      industry: 'Financial Services',
      challenge: 'Migrate legacy systems to cloud while maintaining security compliance',
      solution: 'Seamless cloud migration with enhanced security and compliance features',
      results: ['80% cost reduction', '99.99% uptime', 'Full compliance with financial regulations'],
      icon: Globe
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and client success stories. See how we've helped businesses transform with AI, blockchain, and cloud solutions." />
        <meta name="keywords" content="case studies, success stories, client results, AI projects, blockchain solutions, cloud migration, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with our AI, blockchain, and cloud solutions.
              Real results from real clients.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Success Stories
            </h2>
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <study.icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                          <p className="text-purple-400">{study.client} • {study.industry}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Challenge</h4>
                      <p className="text-gray-300 mb-6">{study.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-white mb-3">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-purple-800/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let us help you achieve similar results with our proven solutions and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Target className="mr-2 h-5 w-5" />
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;