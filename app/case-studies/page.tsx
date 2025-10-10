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
      client: 'TechCorp Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor user experience',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '300% increase in conversion rates',
        '70% reduction in cart abandonment',
        '90% improvement in user satisfaction'
      ],
      image: '🛒',
      duration: '6 months',
      team: '8 developers'
    },
    {
      id: 2,
      title: 'Quantum Computing Research Platform',
      client: 'Quantum Labs',
      industry: 'Research & Development',
      challenge: 'Complex quantum algorithm simulation and optimization',
      solution: 'Built advanced quantum computing simulation platform with AI optimization',
      results: [
        '50x faster algorithm processing',
        '95% accuracy in quantum simulations',
        '200% increase in research efficiency'
      ],
      image: '⚛️',
      duration: '12 months',
      team: '12 developers'
    },
    {
      id: 3,
      title: 'Autonomous Fleet Management',
      client: 'LogiTech Solutions',
      industry: 'Logistics',
      challenge: 'Inefficient fleet routing and high operational costs',
      solution: 'Developed AI-powered autonomous fleet management system',
      results: [
        '40% reduction in fuel costs',
        '60% improvement in delivery times',
        '85% reduction in human errors'
      ],
      image: '🚛',
      duration: '8 months',
      team: '10 developers'
    }
  ];

  const stats = [
    { icon: BarChart, value: '300%', label: 'Average ROI' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Clock, value: '24/7', label: 'Support' },
    { icon: Shield, value: '99.9%', label: 'Uptime' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies. See how we've helped businesses achieve 300% ROI with cutting-edge technology." />
        <meta name="keywords" content="case studies, AI solutions, IT success stories, business transformation, ROI" />
      </Helmet>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Real success stories from our AI and IT solutions implementations
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how we've transformed businesses with our AI and IT solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-6xl mb-6 text-center">{study.image}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-gray-300"><span className="font-semibold">Client:</span> {study.client}</p>
                    <p className="text-gray-300"><span className="font-semibold">Industry:</span> {study.industry}</p>
                    <p className="text-gray-300"><span className="font-semibold">Duration:</span> {study.duration}</p>
                    <p className="text-gray-300"><span className="font-semibold">Team:</span> {study.team}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    View Details
                  </button>
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
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your project and see how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  View More Cases
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