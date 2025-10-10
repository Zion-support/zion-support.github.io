'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Manufacturing Company',
      description: 'Implemented AI-powered predictive maintenance reducing downtime by 40% and saving $2.5M annually.',
      industry: 'Manufacturing',
      duration: '6 months',
      team: '12 specialists',
      results: [
        '40% reduction in equipment downtime',
        '$2.5M annual cost savings',
        '95% accuracy in failure prediction',
        '50% improvement in maintenance efficiency'
      ],
      image: '/case-studies/manufacturing.jpg'
    },
    {
      id: 2,
      title: 'Healthcare Provider Network',
      description: 'Deployed AI-driven patient care optimization improving outcomes and reducing costs by 30%.',
      industry: 'Healthcare',
      duration: '8 months',
      team: '15 specialists',
      results: [
        '30% reduction in patient care costs',
        '25% improvement in patient outcomes',
        '60% faster diagnosis times',
        '90% patient satisfaction rate'
      ],
      image: '/case-studies/healthcare.jpg'
    },
    {
      id: 3,
      title: 'Financial Services Corporation',
      description: 'Built comprehensive AI fraud detection system preventing $50M in fraudulent transactions.',
      industry: 'Financial Services',
      duration: '4 months',
      team: '8 specialists',
      results: [
        '$50M in fraud prevention',
        '99.8% detection accuracy',
        '80% reduction in false positives',
        'Real-time threat response'
      ],
      image: '/case-studies/finance.jpg'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Implemented AI recommendation engine increasing sales by 35% and customer engagement by 50%.',
      industry: 'E-commerce',
      duration: '5 months',
      team: '10 specialists',
      results: [
        '35% increase in sales',
        '50% improvement in customer engagement',
        '25% higher average order value',
        '40% increase in repeat purchases'
      ],
      image: '/case-studies/ecommerce.jpg'
    },
    {
      id: 5,
      title: 'Government Agency',
      description: 'Developed AI-powered citizen services platform improving response times by 70% and satisfaction by 45%.',
      industry: 'Government',
      duration: '10 months',
      team: '20 specialists',
      results: [
        '70% faster response times',
        '45% increase in citizen satisfaction',
        '60% reduction in processing time',
        '24/7 automated support'
      ],
      image: '/case-studies/government.jpg'
    },
    {
      id: 6,
      title: 'Retail Chain',
      description: 'Created AI inventory management system reducing waste by 60% and improving stock accuracy to 98%.',
      industry: 'Retail',
      duration: '7 months',
      team: '14 specialists',
      results: [
        '60% reduction in waste',
        '98% inventory accuracy',
        '35% improvement in stock turnover',
        '25% reduction in carrying costs'
      ],
      image: '/case-studies/retail.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementations across various industries. See how we've helped businesses achieve remarkable results." />
        <meta name="keywords" content="case studies, AI implementations, IT solutions, success stories, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable results 
            with our AI and IT solutions.
          </p>
        </section>

        {/* Case Studies Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">📊</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{study.team}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>Key Results</span>
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our Impact in Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-cyan-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">$2.5B+</div>
                <div className="text-cyan-100">Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
                <div className="text-cyan-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                <div className="text-cyan-100">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Download Case Studies
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudiesPage;