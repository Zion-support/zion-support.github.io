'use client';
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building, Users, TrendingUp } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'ShopTech Solutions',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      description: 'Implemented AI chatbots and automated customer service solutions resulting in 40% reduction in response time.',
      results: ['40% faster response time', '60% cost reduction', '95% customer satisfaction']
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      description: 'Migrated legacy systems to cloud infrastructure with zero downtime and enhanced security.',
      results: ['Zero downtime migration', '50% cost savings', 'Enhanced security compliance']
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      description: 'Implemented comprehensive cybersecurity solutions to protect sensitive patient data.',
      results: ['100% compliance achieved', 'Zero security breaches', 'Reduced risk by 80%']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, Users, CheckCircle, Star, ExternalLink } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  duration: string;
  team: string;
  featured: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/images/case-studies/ai-customer-service.jpg',
      description: 'Implemented AI-powered chatbots and automated customer service solutions.',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Deployed AI chatbots with natural language processing and integrated with existing CRM systems.',
      results: [
        '60% reduction in response time',
        '40% cost savings on customer service',
        '95% customer satisfaction rate',
        '24/7 automated support'
      ],
      duration: '3 months',
      team: '8 specialists',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration for Healthcare Provider',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/images/case-studies/cloud-migration-healthcare.jpg',
      description: 'Migrated legacy healthcare systems to secure cloud infrastructure.',
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated CI/CD pipelines.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment cycles',
        'Enhanced security compliance'
      ],
      duration: '6 months',
      team: '12 specialists',
      featured: true
    },
    {
      id: '3',
      title: 'Blockchain Supply Chain Optimization',
      client: 'Global Logistics Inc.',
      industry: 'Logistics',
      image: '/images/case-studies/blockchain-supply-chain.jpg',
      description: 'Implemented blockchain technology for transparent and secure supply chain management.',
      challenge: 'Lack of transparency in supply chain operations and difficulty tracking product authenticity.',
      solution: 'Developed blockchain-based tracking system with smart contracts and real-time monitoring.',
      results: [
        '100% supply chain transparency',
        '40% reduction in disputes',
        '25% faster transaction processing',
        'Real-time tracking capabilities'
      ],
      duration: '4 months',
      team: '6 specialists',
      featured: false
    },
    {
      id: '4',
      title: 'Cybersecurity Enhancement for Financial Services',
      client: 'SecureBank Ltd.',
      industry: 'Finance',
      image: '/images/case-studies/cybersecurity-finance.jpg',
      description: 'Comprehensive cybersecurity overhaul for financial institution.',
      challenge: 'Increasing cyber threats and need for regulatory compliance in financial services.',
      solution: 'Implemented zero-trust security architecture with advanced threat detection and response systems.',
      results: [
        '100% regulatory compliance achieved',
        'Zero security breaches',
        'Real-time threat monitoring',
        'Automated incident response'
      ],
      duration: '5 months',
      team: '10 specialists',
      featured: false
    },
    {
      id: '5',
      title: 'AI Analytics Dashboard for E-commerce',
      client: 'ShopSmart Online',
      industry: 'E-commerce',
      image: '/images/case-studies/ai-analytics-ecommerce.jpg',
      description: 'Built intelligent analytics platform for e-commerce optimization.',
      challenge: 'Difficulty analyzing customer behavior and optimizing sales strategies.',
      solution: 'Developed AI-powered analytics dashboard with predictive modeling and real-time insights.',
      results: [
        '35% increase in conversion rates',
        '50% improvement in customer targeting',
        'Real-time business insights',
        'Automated marketing optimization'
      ],
      duration: '3 months',
      team: '7 specialists',
      featured: false
    }
  ];

  const industries = ['all', ...Array.from(new Set(caseStudies.map(study => study.industry)))];

  const filteredStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  const featuredStudies = caseStudies.filter(study => study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT solutions case studies. See how we've helped businesses across industries achieve their goals." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT projects, client results, technology implementations" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Success <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries transform their operations 
            with cutting-edge AI and IT solutions.
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
          </p>
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Building className="w-16 h-16 mx-auto mb-4" />
                    <div className="text-sm opacity-80">{study.industry}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    <Users className="w-4 h-4" />
                    <span>{study.client}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-green-400" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={`/case-studies/${index}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve similar results with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              View Our Services
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
=======
      {/* Featured Case Studies */}
      {featuredStudies.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Featured Case Studies</h2>
              <p className="text-xl text-gray-300">Our most impactful projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">{study.industry.charAt(0)}</div>
                      <div className="text-sm opacity-90">{study.industry}</div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-sm text-gray-400">{study.duration}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 mb-4">{study.client}</p>
                    <p className="text-gray-300 mb-6">{study.description}</p>

                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">Challenge:</h4>
                        <p className="text-sm text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">Solution:</h4>
                        <p className="text-sm text-gray-300">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{study.team}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                      View Full Case Study
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {industries.map(industry => (
                <option key={industry} value={industry}>
                  {industry === 'all' ? 'All Industries' : industry}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold mb-1">{study.industry.charAt(0)}</div>
                    <div className="text-sm opacity-90">{study.industry}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-gray-300 mb-2">{study.client}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{study.description}</p>

                <div className="space-y-2 mb-4">
                  {study.results.slice(0, 2).map((result, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{study.team}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{study.duration}</span>
                  </div>
                </div>

                <button className="w-full text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center justify-center gap-2">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No case studies found matching your criteria.</p>
            </div>
          )}
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
              Let's work together to transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Our Services
              </button>
            </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;