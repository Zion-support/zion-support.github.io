'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building, Users, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
        <title>Case Studies - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Explore our successful case studies and see how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT solutions, business transformation" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Explore our successful case studies and see how we've helped businesses transform." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies - Zion Tech Group" />
        <meta name="twitter:description" content="Explore our successful case studies and see how we've helped businesses transform." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-32">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center neon-text">
              Case Studies
            </h1>
            
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <article key={index} className="cyber-card-enhanced hover-lift group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-4xl">📊</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-cyan-400">
                      <Building className="w-4 h-4" />
                      <span>{study.industry}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {study.title}
                    </h2>
                    
                    <p className="text-gray-300 text-sm">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {study.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                            <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let us help you achieve similar results with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 group"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 group"
                >
                  View Our Services
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;