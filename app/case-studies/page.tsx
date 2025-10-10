'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, Filter, Search } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'technology', name: 'Technology' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'retail', name: 'Retail' },
    { id: 'manufacturing', name: 'Manufacturing' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      company: 'TechCorp Solutions',
      industry: 'technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticket routing system',
      results: [
        '85% reduction in response time',
        '60% cost savings',
        '95% customer satisfaction rate'
      ],
      image: '/api/placeholder/600/400',
      duration: '6 months',
      teamSize: '8 members'
    },
    {
      id: 2,
      title: 'Cloud Migration for Healthcare Provider',
      company: 'MediCare Plus',
      industry: 'healthcare',
      challenge: 'Legacy systems causing security vulnerabilities and compliance issues',
      solution: 'Complete cloud migration with enhanced security and compliance features',
      results: [
        '99.9% uptime achieved',
        '50% reduction in security incidents',
        'Full HIPAA compliance',
        '40% cost reduction'
      ],
      image: '/api/placeholder/600/400',
      duration: '8 months',
      teamSize: '12 members'
    },
    {
      id: 3,
      title: 'Financial Data Analytics Platform',
      company: 'FinanceFlow Inc',
      industry: 'finance',
      challenge: 'Manual data processing leading to errors and delays',
      solution: 'Automated data analytics platform with real-time reporting',
      results: [
        '90% reduction in processing time',
        '99.5% accuracy rate',
        'Real-time insights',
        '30% increase in productivity'
      ],
      image: '/api/placeholder/600/400',
      duration: '4 months',
      teamSize: '6 members'
    },
    {
      id: 4,
      title: 'E-commerce Optimization with AI',
      company: 'ShopSmart Retail',
      industry: 'retail',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'AI-powered recommendation engine and personalized shopping experience',
      results: [
        '45% increase in conversion rates',
        '35% boost in average order value',
        '60% improvement in customer retention',
        '25% increase in revenue'
      ],
      image: '/api/placeholder/600/400',
      duration: '5 months',
      teamSize: '10 members'
    },
    {
      id: 5,
      title: 'Manufacturing Process Automation',
      company: 'AutoParts Manufacturing',
      industry: 'manufacturing',
      challenge: 'Inefficient production processes and quality control issues',
      solution: 'IoT sensors and AI-powered quality control system',
      results: [
        '40% improvement in production efficiency',
        '80% reduction in defects',
        '25% cost savings',
        'Real-time monitoring'
      ],
      image: '/api/placeholder/600/400',
      duration: '7 months',
      teamSize: '15 members'
    },
    {
      id: 6,
      title: 'Cybersecurity Enhancement Program',
      company: 'SecureBank Ltd',
      industry: 'finance',
      challenge: 'Increasing cyber threats and regulatory compliance requirements',
      solution: 'Comprehensive cybersecurity framework with threat detection',
      results: [
        '99.9% threat detection rate',
        'Zero security breaches',
        'Full regulatory compliance',
        '50% reduction in security costs'
      ],
      image: '/api/placeholder/600/400',
      duration: '3 months',
      teamSize: '8 members'
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT projects. See how we've helped businesses transform their operations and achieve remarkable results." />
        <meta name="keywords" content="case studies, success stories, AI projects, IT solutions, business transformation, Zion Tech Group" />
      </Helmet>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              and achieve remarkable results with our AI and IT solutions.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Filter by industry:</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 group">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry.toUpperCase()}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.teamSize}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-4">{study.company}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-white mb-4">No case studies found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or industry filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedIndustry('all');
                }}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss how we can help transform your business with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 hover:bg-cyan-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;