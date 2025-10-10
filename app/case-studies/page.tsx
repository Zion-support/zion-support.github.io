'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Target, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: '1',
      title: 'AI-Powered E-commerce Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
      results: [
        'Increased conversion rates by 45%',
        'Reduced customer service costs by 60%',
        'Improved customer satisfaction by 35%'
      ],
      image: '/api/placeholder/600/400',
      duration: '6 months'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Legacy systems and compliance requirements',
      solution: 'Complete cloud migration with enhanced security',
      results: [
        'Reduced infrastructure costs by 40%',
        'Improved system performance by 70%',
        'Achieved 99.9% uptime'
      ],
      image: '/api/placeholder/600/400',
      duration: '8 months'
    },
    {
      id: '3',
      title: 'Healthcare AI Implementation',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Manual diagnosis processes and data management',
      solution: 'AI-powered diagnostic tools and data analytics',
      results: [
        'Reduced diagnosis time by 50%',
        'Improved accuracy by 30%',
        'Enhanced patient outcomes'
      ],
      image: '/api/placeholder/600/400',
      duration: '12 months'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, business transformation" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Success <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries transform their operations with our AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {caseStudies.map((study) => (
                <div key={study.id} className="glass-card quantum-field group">
                  <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-2">Challenge:</h3>
                      <p className="text-gray-300 mb-4">{study.challenge}</p>
                      
                      <h3 className="text-lg font-semibold text-white mb-2">Solution:</h3>
                      <p className="text-gray-300 mb-4">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Results:</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="holographic-card p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can transform your business.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;