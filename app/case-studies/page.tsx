'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Zap } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
      results: [
        '45% increase in conversion rates',
        '60% reduction in customer service queries',
        '35% increase in average order value',
        '90% customer satisfaction score'
      ],
      image: '/images/case-studies/ecommerce.jpg',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient reporting',
      solution: 'Built comprehensive AI analytics platform with predictive insights',
      results: [
        '70% faster diagnosis times',
        '85% reduction in manual reporting',
        '40% improvement in patient outcomes',
        '50% cost savings in operations'
      ],
      image: '/images/case-studies/healthcare.jpg',
      duration: '8 months',
      team: '12 specialists'
    },
    {
      id: 3,
      title: 'Manufacturing Process Optimization',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'High defect rates and production inefficiencies',
      solution: 'Deployed AI-powered quality control and predictive maintenance',
      results: [
        '55% reduction in defect rates',
        '30% increase in production efficiency',
        '25% decrease in maintenance costs',
        '95% equipment uptime achieved'
      ],
      image: '/images/case-studies/manufacturing.jpg',
      duration: '10 months',
      team: '10 specialists'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Average ROI', value: '340%', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Users }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies" />
        <meta name="keywords" content="AI case studies, IT solutions, success stories, client results" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Explore our successful AI and IT solutions case studies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Case Studies</h2>
              <p className="text-gray-300">Real results from real clients</p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                          <p className="text-cyan-400 font-medium">{study.client} • {study.industry}</p>
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
                          <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                          <ul className="space-y-2">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-center text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          <span>Duration: {study.duration}</span>
                          <span>Team: {study.team}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="w-full h-64 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-cyan-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <TrendingUp className="w-8 h-8 text-cyan-400" />
                          </div>
                          <p className="text-gray-300">Case Study Visualization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
              <p className="text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
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