'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, Star } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Analytics for E-commerce',
      client: 'RetailMax',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'RetailMax needed to understand customer behavior and optimize their online shopping experience.',
      solution: 'Implemented AI-powered analytics platform with real-time customer insights and personalized recommendations.',
      results: ['40% increase in conversion rates', '25% improvement in customer satisfaction', '60% reduction in cart abandonment'],
      technologies: ['Machine Learning', 'Real-time Analytics', 'Personalization Engine']
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'FinanceCorp needed to migrate their legacy systems to the cloud while maintaining security and compliance.',
      solution: 'Designed and implemented a secure, scalable cloud infrastructure with zero-downtime migration.',
      results: ['99.9% uptime achieved', '50% reduction in infrastructure costs', 'Enhanced security compliance'],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Security Hardening']
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'MediCare Plus needed to strengthen their cybersecurity posture to protect patient data.',
      solution: 'Implemented comprehensive security framework with advanced threat detection and response capabilities.',
      results: ['Zero security breaches', '100% compliance with HIPAA', '24/7 threat monitoring'],
      technologies: ['SIEM', 'Endpoint Protection', 'Network Security', 'Compliance Management']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from real clients across various industries
              </p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                          {study.industry}
                        </span>
                        <span className="text-gray-400 text-sm">{study.client}</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-center text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, idx) => (
                              <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="order-1 lg:order-2">
                      <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                        <div className="text-6xl opacity-50">📊</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  View All Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;