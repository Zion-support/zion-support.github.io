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
      };
    ];
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Explore our successful case studies and see how we've helped businesses transform" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies - Zion Tech Group" />
        <meta name="twitter:description" content="Explore our successful case studies and see how we've helped businesses transform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced holographic-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-enhanced text-center">
              Case Studies
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="cyber-card-enhanced group hover:shadow-neon-cyan transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Building className="w-4 h-4" />
                      <span>{study.client}</span>
                      <span className="text-gray-500">•</span>
                      <span>{study.industry}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h2>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {study.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-cyan-400">Key Results:</h3>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-green-400" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors py-2 px-4 border border-cyan-400/50 rounded-lg hover:bg-cyan-400/10">
                      <span className="text-sm font-medium">View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;
