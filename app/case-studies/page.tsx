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
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT implementations through detailed case studies showcasing real business transformations." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, business transformation" />
      </Helmet>
      
      <div className="min-h-screen pt-16">
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <Building className="w-16 h-16 text-cyan-400/50" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-gray-400">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{study.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="text-sm text-gray-400 flex items-center">
                            <TrendingUp className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve similar results with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/services"
                className="inline-flex items-center border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                View Our Services
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
