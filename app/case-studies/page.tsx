'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  Search,
  Filter,
  ExternalLink
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticket routing',
      results: [
        '60% reduction in response time',
        '40% cost savings on support',
        '95% customer satisfaction rate',
        '24/7 automated support'
      ],
      image: '/images/case-studies/techcorp.jpg',
      duration: '3 months',
      team: '5 specialists',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration for E-commerce Platform',
      company: 'RetailMax',
      industry: 'E-commerce',
      challenge: 'Scalability issues during peak shopping seasons',
      solution: 'Migrated to AWS with auto-scaling infrastructure',
      results: [
        '300% increase in peak capacity',
        '99.9% uptime during Black Friday',
        '50% reduction in infrastructure costs',
        'Global CDN implementation'
      ],
      image: '/images/case-studies/retailmax.jpg',
      duration: '4 months',
      team: '8 specialists',
      featured: true
    },
    {
      id: 3,
      title: 'Cybersecurity Overhaul for Financial Services',
      company: 'SecureBank',
      industry: 'Financial Services',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive security audit and implementation',
      results: [
        'Zero security incidents in 12 months',
        '100% compliance with regulations',
        'Advanced threat detection system',
        'Employee security training program'
      ],
      image: '/images/case-studies/securebank.jpg',
      duration: '6 months',
      team: '12 specialists',
      featured: false
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard for Healthcare',
      company: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Lack of real-time patient data insights',
      solution: 'Custom analytics dashboard with predictive modeling',
      results: [
        'Real-time patient monitoring',
        '30% improvement in diagnosis accuracy',
        'Automated alert system',
        'HIPAA compliant data handling'
      ],
      image: '/images/case-studies/healthcare.jpg',
      duration: '5 months',
      team: '6 specialists',
      featured: false
    },
    {
      id: 5,
      title: 'Mobile App Development for Logistics',
      company: 'LogiFlow',
      industry: 'Logistics',
      challenge: 'Inefficient delivery tracking and route optimization',
      solution: 'Custom mobile app with AI-powered route optimization',
      results: [
        '25% reduction in delivery time',
        'Real-time tracking for customers',
        'Optimized fuel consumption',
        'Driver performance analytics'
      ],
      image: '/images/case-studies/logiflow.jpg',
      duration: '4 months',
      team: '7 specialists',
      featured: false
    },
    {
      id: 6,
      title: 'AI-Powered Inventory Management',
      company: 'SupplyChain Pro',
      industry: 'Manufacturing',
      challenge: 'Inventory overstocking and stockouts',
      solution: 'AI-driven demand forecasting and inventory optimization',
      results: [
        '35% reduction in inventory costs',
        '99% stock availability',
        'Automated reorder system',
        'Predictive maintenance alerts'
      ],
      image: '/images/case-studies/supplychain.jpg',
      duration: '3 months',
      team: '4 specialists',
      featured: false
    }
  ];

  const industries = ['all', 'Technology', 'E-commerce', 'Financial Services', 'Healthcare', 'Logistics', 'Manufacturing'];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const featuredStudies = filteredCaseStudies.filter(study => study.featured);
  const regularStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <React.Fragment>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, client results, business transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Success
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform with our AI and IT solutions. Real results from real clients.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry} className="bg-slate-800">
                      {industry === 'all' ? 'All Industries' : industry}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        {featuredStudies.length > 0 && (
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Case Studies</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredStudies.map((study) => (
                  <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                    <div className="h-64 bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Star className="w-8 h-8" />
                        </div>
                        <p className="text-sm opacity-80">Featured Case Study</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.company}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {study.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.team}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        <strong>Challenge:</strong> {study.challenge}
                      </p>
                      <p className="text-gray-300 mb-6">
                        <strong>Solution:</strong> {study.solution}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Results:</h4>
                        <ul className="space-y-2">
                          {study.results.slice(0, 3).map((result, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Case Studies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">
              {featuredStudies.length > 0 ? 'All Case Studies' : 'Case Studies'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <p className="text-xs opacity-80">Case Study</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {study.company}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {study.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-cyan-400 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default CaseStudiesPage;