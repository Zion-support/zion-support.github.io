'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building, Users, TrendingUp } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
    const caseStudies = [
    {
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'ShopTech Solutions',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      description: 'Implemented AI chatbots and automated customer service solutions resulting in 40% reduction in response time.',
        results: ['40% faster response time', '60% cost reduction', '95% customer satisfaction']
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      description: 'Migrated legacy systems to cloud infrastructure with zero downtime and enhanced security.',
      results: ['Zero downtime migration', '50% cost savings', 'Enhanced security compliance']
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
        description: 'Implemented comprehensive cybersecurity solutions to protect sensitive patient data.',
        results: ['100% compliance achieved', 'Zero security breaches', 'Reduced risk by 80%']
      }
    ];
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementations across various industries. See how we've helped businesses transform with technology." />
        <meta name="keywords" content="case studies, AI implementations, IT solutions, success stories, business transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform with cutting-edge AI and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center">
                    <div className="text-6xl opacity-50">📊</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-cyan-400 mb-2">
                    <Building className="w-4 h-4" />
                    {study.industry}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-gray-300 flex items-center">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;
