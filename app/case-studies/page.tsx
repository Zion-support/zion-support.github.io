'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      company: 'TechCorp Solutions',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
      results: [
        '40% increase in conversion rates',
        '60% reduction in customer service queries',
        '25% increase in average order value'
      ],
      image: '/images/case-studies/ecommerce.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration Success',
      company: 'FinanceFirst Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy system limitations and scalability issues',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster deployment times'
      ],
      image: '/images/case-studies/cloud.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Transformation',
      company: 'HealthTech Partners',
      industry: 'Healthcare',
      challenge: 'Security vulnerabilities and compliance requirements',
      solution: 'Comprehensive security audit and implementation',
      results: [
        'Zero security incidents',
        '100% compliance with HIPAA',
        '80% reduction in security response time'
      ],
      image: '/images/case-studies/security.jpg',
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT transformation, business results" />
      </Helmet>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Real success stories from businesses we've transformed with AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Success Story</h2>
            {caseStudies.filter(study => study.featured).map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-purple-400 text-sm font-medium">{study.industry}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <span className="font-semibold">{study.company}</span>
                      </div>
                      <button className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors font-medium">
                        <span>Read Full Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-6xl">📊</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Success Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg h-48 flex items-center justify-center mb-6">
                    <div className="text-4xl">📈</div>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-purple-400 text-sm font-medium">{study.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {study.company}
                    </span>
                    <button className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors font-medium">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
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
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
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
      <Footer />
    </>
  );
};

export default CaseStudiesPage;
