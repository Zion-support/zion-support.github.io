'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Search, Filter, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'ShopTech',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service volume and response time issues',
      solution: 'Implemented AI chatbot and automated response system',
      results: ['50% reduction in response time', '30% increase in customer satisfaction', '40% cost savings'],
      duration: '3 months',
      team: '5 developers'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy system migration and compliance requirements',
      solution: 'Secure cloud migration with zero downtime',
      results: ['99.9% uptime achieved', '60% cost reduction', 'Full compliance maintained'],
      duration: '6 months',
      team: '8 developers'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'HIPAA compliance and data security concerns',
      solution: 'Comprehensive security audit and implementation',
      results: ['100% HIPAA compliance', 'Zero security incidents', 'Enhanced data protection'],
      duration: '4 months',
      team: '6 security experts'
    },
    {
      id: 4,
      title: 'Data Analytics Platform for Manufacturing',
      client: 'ManufacturingCo',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Inefficient production monitoring and quality control',
      solution: 'Real-time analytics dashboard and predictive maintenance',
      results: ['25% increase in efficiency', '20% reduction in defects', '15% cost savings'],
      duration: '5 months',
      team: '7 data scientists'
    },
    {
      id: 5,
      title: 'Mobile App Development for Education',
      client: 'EduTech Solutions',
      industry: 'Education',
      image: '/api/placeholder/600/400',
      challenge: 'Need for accessible learning platform',
      solution: 'Cross-platform mobile app with offline capabilities',
      results: ['80% user engagement increase', '90% offline functionality', '4.8/5 app rating'],
      duration: '4 months',
      team: '6 mobile developers'
    },
    {
      id: 6,
      title: 'IoT Integration for Smart City',
      client: 'CityTech',
      industry: 'Government',
      image: '/api/placeholder/600/400',
      challenge: 'City-wide IoT device management and data collection',
      solution: 'Centralized IoT platform with real-time monitoring',
      results: ['Real-time city monitoring', '30% energy savings', 'Improved citizen services'],
      duration: '8 months',
      team: '10 IoT specialists'
    }
  ];

  const industries = ['all', 'E-commerce', 'Financial Services', 'Healthcare', 'Manufacturing', 'Education', 'Government'];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies across various industries. See how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, projects, success stories, AI solutions, cloud migration, cybersecurity, data analytics" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries 
              transform their operations with our AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry} className="bg-slate-800">
                      {industry === 'all' ? 'All Industries' : industry}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300">
                  <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-6"></div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                      {study.industry}
                    </span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4">Client: <span className="font-semibold">{study.client}</span></p>
                  
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
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="w-4 h-4 mr-1" />
                      {study.team}
                    </div>
                    <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our proven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;