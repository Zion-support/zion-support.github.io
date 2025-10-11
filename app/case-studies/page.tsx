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
        <meta name="description" content="Discover how Zion Tech Group has helped businesses transform with AI and IT solutions. Read our success stories and case studies." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT solutions, business transformation" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real success stories from our AI and IT solutions implementations." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 relative overflow-hidden">
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

          {/* Case Studies Grid */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                    <div className="mb-4">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
                        <Building className="w-4 h-4" />
                        <span>{study.client}</span>
                        <span>•</span>
                        <span>{study.industry}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {study.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-white/5">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-8">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us help you achieve similar results with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/services"
                  className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  View Our Services
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;
