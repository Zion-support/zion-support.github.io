import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Search, Filter, ArrowRight, TrendingUp, Users, DollarSign, Clock, Globe, Building, Shield, Brain, Cloud, Zap, Award, CheckCircle, ExternalLink, ShoppingCart, BarChart3, Atom, Wifi } from 'lucide-react';

export default function CaseStudies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance & Banking' },
    { id: 'retail', name: 'Retail & E-commerce' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'technology', name: 'Technology' },
    { id: 'education', name: 'Education' },
    { id: 'government', name: 'Government' }
  ];

  const services = [
    { id: 'all', name: 'All Services' },
    { id: 'ai-ml', name: 'AI & Machine Learning' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'data', name: 'Data Analytics' },
    { id: 'digital-transformation', name: 'Digital Transformation' },
    { id: 'quantum', name: 'Quantum Computing' },
    { id: 'iot', name: 'IoT & Edge Computing' }
  ];

  const featuredCaseStudies = [
    {
      id: 'healthcare-ai-diagnostics',
      title: 'AI-Powered Healthcare Diagnostics Platform',
      client: 'MetroHealth Systems',
      industry: 'healthcare',
      service: 'ai-ml',
      challenge: 'MetroHealth needed to improve diagnostic accuracy and reduce patient wait times while maintaining high standards of care.',
      solution: 'Developed an AI-powered diagnostic platform that analyzes medical images and patient data to provide rapid, accurate diagnoses.',
      results: [
        '95% improvement in diagnostic accuracy',
        '60% reduction in patient wait times',
        '40% increase in patient satisfaction scores',
        'ROI of 300% within 18 months'
      ],
      image: '/images/case-studies/healthcare-ai-diagnostics.jpg',
      featured: true
    },
    {
      id: 'financial-fraud-detection',
      title: 'Real-Time Financial Fraud Detection System',
      client: 'GlobalBank International',
      industry: 'finance',
      service: 'ai-ml',
      challenge: 'GlobalBank needed to detect and prevent sophisticated financial fraud in real-time across multiple channels.',
      solution: 'Implemented an AI-powered fraud detection system using machine learning algorithms and real-time data processing.',
      results: [
        '99.7% fraud detection accuracy',
        '90% reduction in false positives',
        'Real-time detection within 50ms',
        'Annual savings of $15M'
      ],
      image: '/images/case-studies/financial-fraud-detection.jpg',
      featured: true
    }
  ];

  const allCaseStudies = [
    ...featuredCaseStudies,
    {
      id: 'retail-inventory-optimization',
      title: 'AI-Driven Inventory Optimization',
      client: 'RetailCorp',
      industry: 'retail',
      service: 'ai-ml',
      challenge: 'RetailCorp struggled with overstocking and stockouts, leading to lost sales and increased costs.',
      solution: 'Developed an AI-powered inventory management system that predicts demand and optimizes stock levels.',
      results: [
        '25% reduction in inventory costs',
        '15% increase in sales due to better stock availability',
        '30% improvement in forecast accuracy',
        'ROI of 200% within 12 months'
      ],
      image: '/images/case-studies/retail-inventory-optimization.jpg',
      featured: false
    },
    {
      id: 'manufacturing-predictive-maintenance',
      title: 'Predictive Maintenance for Manufacturing',
      client: 'IndustrialTech Manufacturing',
      industry: 'manufacturing',
      service: 'iot',
      challenge: 'IndustrialTech faced frequent equipment failures causing production delays and increased maintenance costs.',
      solution: 'Implemented IoT sensors and AI algorithms to predict equipment failures before they occur.',
      results: [
        '80% reduction in unplanned downtime',
        '45% decrease in maintenance costs',
        '25% improvement in equipment lifespan',
        'ROI of 400% within 24 months'
      ],
      image: '/images/case-studies/manufacturing-predictive-maintenance.jpg',
      featured: false
    },
    {
      id: 'government-cybersecurity',
      title: 'Zero-Trust Cybersecurity Framework',
      client: 'Federal Data Agency',
      industry: 'government',
      service: 'cybersecurity',
      challenge: 'The agency needed to protect sensitive government data from increasingly sophisticated cyber threats.',
      solution: 'Implemented a comprehensive zero-trust cybersecurity framework with AI-powered threat detection.',
      results: [
        '100% threat detection rate',
        'Zero successful breaches since implementation',
        '50% reduction in security incidents',
        'Compliance with all federal security standards'
      ],
      image: '/images/case-studies/government-cybersecurity.jpg',
      featured: false
    },
    {
      id: 'education-adaptive-learning',
      title: 'Adaptive Learning Platform',
      client: 'EduTech University',
      industry: 'education',
      service: 'ai-ml',
      challenge: 'EduTech needed to personalize learning experiences for diverse student populations.',
      solution: 'Developed an AI-powered adaptive learning platform that tailors content to individual student needs.',
      results: [
        '35% improvement in student performance',
        '40% increase in student engagement',
        '25% reduction in dropout rates',
        'ROI of 250% within 16 months'
      ],
      image: '/images/case-studies/education-adaptive-learning.jpg',
      featured: false
    }
  ];

  const filteredCaseStudies = allCaseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    
    return matchesSearch && matchesIndustry && matchesService;
  });

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'healthcare':
        return Shield;
      case 'finance':
        return DollarSign;
      case 'retail':
        return ShoppingCart;
      case 'manufacturing':
        return Building;
      case 'technology':
        return Brain;
      case 'education':
        return Users;
      case 'government':
        return Globe;
      default:
        return Building;
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'ai-ml':
        return Brain;
      case 'cloud':
        return Cloud;
      case 'cybersecurity':
        return Shield;
      case 'data':
        return BarChart3;
      case 'digital-transformation':
        return Zap;
      case 'quantum':
        return Atom;
      case 'iot':
        return Wifi;
      default:
        return Zap;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Discover how we've helped organizations across industries achieve remarkable results through innovative technology solutions. Real success stories with measurable outcomes."
        keywords={['case studies', 'success stories', 'client results', 'AI solutions', 'technology transformation', 'Zion Tech Group']}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {' '}Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped organizations across industries achieve 
              remarkable results through innovative technology solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Filter by:</span>
              </div>
              
              {/* Industry Filter */}
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              >
                {industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name}
                  </option>
                ))}
              </select>

              {/* Service Filter */}
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful and transformative client engagements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <getIndustryIcon industry={study.industry} className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                      <p className="text-cyan-400 text-sm">{study.client}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete portfolio of successful client engagements.
            </p>
          </motion.div>

          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <getIndustryIcon industry={study.industry} className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{study.title}</h3>
                      <p className="text-cyan-400 text-sm">{study.client}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {study.challenge}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Results</h4>
                    <div className="space-y-1">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span className="text-gray-300 text-xs">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
              <p className="text-gray-300 mb-4">
                Try adjusting your search or filters to find relevant case studies.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedIndustry('all');
                  setSelectedService('all');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can help your organization 
              achieve similar results and drive transformative growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Explore Our Services
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
