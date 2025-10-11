'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Award } from 'lucide-react'

const CaseStudiesPage: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: DollarSign, value: '$2M+', label: 'Cost Savings Generated' },
    { icon: Award, value: '50+', label: 'Industry Awards' }
  ]

  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '60% reduction in cart abandonment',
        '35% increase in average order value',
        '25% improvement in customer satisfaction'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data management and analysis',
      solution: 'Advanced data analytics platform with AI-powered insights',
      results: [
        '50% reduction in data processing time',
        '30% improvement in patient outcomes',
        '45% increase in operational efficiency',
        '20% reduction in costs'
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Manufacturing Automation',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual processes and quality control issues',
      solution: 'AI-powered automation and quality control systems',
      results: [
        '70% reduction in manual labor',
        '90% improvement in quality control accuracy',
        '55% increase in production efficiency',
        '40% reduction in defects'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop',
      featured: false
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations with AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {caseStudies.find(cs => cs.featured) && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Success Story</h2>
              {caseStudies.filter(cs => cs.featured).map(caseStudy => (
                <div key={caseStudy.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-cyan-500/20">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{caseStudy.title}</h3>
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">
                        {caseStudy.industry}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6">{caseStudy.company}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Challenge</h4>
                        <p className="text-gray-300 mb-6">{caseStudy.challenge}</p>
                        
                        <h4 className="text-lg font-semibold text-white mb-3">Solution</h4>
                        <p className="text-gray-300">{caseStudy.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                        <ul className="space-y-2">
                          {caseStudy.results.map((result, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">More Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.filter(cs => !cs.featured).map(caseStudy => (
                <div key={caseStudy.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{caseStudy.title}</h3>
                      <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm">
                        {caseStudy.industry}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{caseStudy.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{caseStudy.challenge}</p>
                    <ul className="space-y-1 mb-4">
                      {caseStudy.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                    <button className="text-cyan-400 hover:text-cyan-300 flex items-center text-sm">
                      Read Full Case Study
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors">
                View All Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default CaseStudiesPage;