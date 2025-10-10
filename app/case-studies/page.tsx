'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Giant Achieves 300% ROI with AI-Powered Personalization',
      company: 'TechRetail Corp',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer engagement',
      solution: 'Implemented AI-powered recommendation engine and dynamic pricing',
      results: {
        roi: '300%',
        conversion: '+85%',
        revenue: '+$2.5M',
        customers: '+150K'
      },
      image: '/images/case-studies/ecommerce-ai.jpg',
      testimonial: 'Zion Tech Group transformed our business with AI. The results speak for themselves.',
      author: 'Sarah Johnson',
      role: 'CTO, TechRetail Corp'
    },
    {
      id: 2,
      title: 'Healthcare Provider Reduces Costs by 40% with Cloud Migration',
      company: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'High infrastructure costs and scalability issues',
      solution: 'Complete cloud migration with automated scaling and monitoring',
      results: {
        roi: '250%',
        costs: '-40%',
        uptime: '99.9%',
        performance: '+60%'
      },
      image: '/images/case-studies/healthcare-cloud.jpg',
      testimonial: 'The cloud migration exceeded our expectations. We saved millions while improving performance.',
      author: 'Dr. Michael Chen',
      role: 'IT Director, MediCare Plus'
    },
    {
      id: 3,
      title: 'Financial Services Firm Enhances Security with AI-Powered Fraud Detection',
      company: 'SecureBank',
      industry: 'Financial Services',
      challenge: 'Increasing fraud attempts and false positives',
      solution: 'Advanced AI fraud detection system with real-time monitoring',
      results: {
        roi: '400%',
        fraud: '-95%',
        falsePositives: '-80%',
        savings: '+$5M'
      },
      image: '/images/case-studies/finance-security.jpg',
      testimonial: 'Our fraud detection is now 10x more accurate. This system is a game-changer.',
      author: 'Emily Rodriguez',
      role: 'Security Director, SecureBank'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Users },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '$50M+', label: 'Client Savings', icon: DollarSign },
    { number: '99.9%', label: 'Success Rate', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Case Studies - Zion Tech Group"
        description="Explore our successful AI and technology implementations. Real results from real clients across various industries."
        keywords="case studies, AI success stories, technology implementations, client results, ROI examples"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Case
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Studies
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. Discover how we've helped businesses 
            achieve extraordinary outcomes with AI and technology solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                        <p className="text-purple-400 font-medium">{study.company} • {study.industry}</p>
                      </div>
                    </div>

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
                        <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(study.results).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-2xl font-bold text-purple-400">{value}</div>
                              <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <p className="text-gray-300 italic mb-2">"{study.testimonial}"</p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                            <span className="text-purple-400 text-sm font-semibold">
                              {study.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="text-white font-semibold text-sm">{study.author}</div>
                            <div className="text-gray-400 text-xs">{study.role}</div>
                          </div>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                        View Full Case Study
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ExternalLink className="w-8 h-8 text-purple-400" />
                      </div>
                      <span className="text-gray-300">Case Study Image</span>
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
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help your business achieve similar results 
            with our AI and technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;