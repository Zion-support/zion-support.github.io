'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, DollarSign, CheckCircle } from 'lucide-react';

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
        customers: '+40%'
      },
      image: '/images/case-studies/ecommerce-ai.jpg'
    },
    {
      id: 2,
      title: 'Manufacturing Company Reduces Costs by 70% with IoT and AI',
      company: 'Global Manufacturing Ltd',
      industry: 'Manufacturing',
      challenge: 'High operational costs and equipment downtime',
      solution: 'Deployed IoT sensors and AI-powered predictive maintenance',
      results: {
        roi: '250%',
        conversion: '-70%',
        revenue: '+$1.8M',
        customers: '+25%'
      },
      image: '/images/case-studies/manufacturing-iot.jpg'
    },
    {
      id: 3,
      title: 'Healthcare Provider Improves Patient Outcomes with AI Diagnostics',
      company: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Slow diagnosis times and limited specialist availability',
      solution: 'AI-powered diagnostic system with machine learning algorithms',
      results: {
        roi: '180%',
        conversion: '+60%',
        revenue: '+$3.2M',
        customers: '+35%'
      },
      image: '/images/case-studies/healthcare-ai.jpg'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '$50M+', label: 'Client Savings', icon: DollarSign },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies. See how Zion Tech Group has helped businesses achieve remarkable results with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT consulting, business transformation, ROI" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Success
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve remarkable results 
            with our AI and IT solutions.
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

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Featured Case Studies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm">{study.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-green-400 mb-1">{study.results.roi}</div>
                      <div className="text-gray-300 text-sm">ROI</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400 mb-1">{study.results.conversion}</div>
                      <div className="text-gray-300 text-sm">Conversion</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400 mb-1">{study.results.revenue}</div>
                      <div className="text-gray-300 text-sm">Revenue</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{study.results.customers}</div>
                      <div className="text-gray-300 text-sm">Customers</div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                  Read Full Case Study
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
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
            Let's discuss how we can help your business achieve similar results with our 
            proven AI and IT solutions.
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