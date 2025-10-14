'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react'

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Optimization',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Slow loading times and poor user experience leading to high bounce rates',
      solution: 'Implemented AI-powered caching, CDN optimization, and performance monitoring',
      results: {
        loadTime: '75% faster',
        conversion: '40% increase',
        revenue: '$2.5M additional',
        timeframe: '3 months'
      },
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics',
      company: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Manual data processing and lack of predictive insights',
      solution: 'AI-powered analytics platform with machine learning models for patient outcomes',
      results: {
        loadTime: '90% reduction',
        conversion: '60% improvement',
        revenue: '$1.8M savings',
        timeframe: '6 months'
      },
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Manufacturing Automation',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and quality control issues',
      solution: 'IoT sensors, AI-powered quality control, and automated workflow optimization',
      results: {
        loadTime: '50% efficiency gain',
        conversion: '35% quality improvement',
        revenue: '$3.2M cost savings',
        timeframe: '4 months'
      },
      image: '/api/placeholder/600/400',
      featured: false
    }
  ]

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client case studies." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations and achieve remarkable results through innovative AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Case Study</h2>
            {caseStudies.filter(study => study.featured).map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-2 text-cyan-400 text-sm font-semibold mb-4">
                      <span>{study.industry}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-lg text-gray-300 mb-6">
                      <strong>Company:</strong> {study.company}
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{study.results.loadTime}</div>
                        <div className="text-sm text-gray-300">Load Time</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{study.results.conversion}</div>
                        <div className="text-sm text-gray-300">Conversion</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <DollarSign className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{study.results.revenue}</div>
                        <div className="text-sm text-gray-300">Revenue</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{study.results.timeframe}</div>
                        <div className="text-sm text-gray-300">Timeframe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-2 text-cyan-400 text-sm font-semibold mb-4">
                    <span>{study.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    <strong>{study.company}</strong>
                  </p>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {study.results.timeframe}
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 transition-colors text-sm">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve similar results with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};
export default PagePage;
