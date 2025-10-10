'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar, User, Building, Target, TrendingUp, CheckCircle, Star, Filter, Search } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Inc.',
      industry: 'Technology',
      service: 'AI Solutions',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI-powered chatbot and automated ticket routing system',
      results: [
        '60% reduction in response time',
        '40% cost savings in customer service',
        '95% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      duration: '3 months',
      teamSize: '5 specialists',
      image: '/images/case-studies/ai-customer-service.jpg',
      testimonial: {
        quote: 'The AI solution transformed our customer service operations. We now provide faster, more accurate responses while significantly reducing costs.',
        author: 'Sarah Johnson',
        role: 'VP of Customer Experience',
        company: 'TechCorp Inc.'
      },
      tags: ['AI', 'Customer Service', 'Automation', 'Cost Reduction']
    },
    {
      id: 2,
      title: 'Cloud Migration and Infrastructure Optimization',
      client: 'DataFlow Systems',
      industry: 'Data Analytics',
      service: 'Cloud Infrastructure',
      challenge: 'Legacy on-premise infrastructure causing scalability issues',
      solution: 'Complete cloud migration to AWS with auto-scaling and monitoring',
      results: [
        '300% improvement in scalability',
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '50% faster deployment times'
      ],
      duration: '6 months',
      teamSize: '8 specialists',
      image: '/images/case-studies/cloud-migration.jpg',
      testimonial: {
        quote: 'The cloud migration exceeded our expectations. Our systems are now more reliable, scalable, and cost-effective.',
        author: 'Michael Chen',
        role: 'CTO',
        company: 'DataFlow Systems'
      },
      tags: ['Cloud', 'Migration', 'AWS', 'Scalability']
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement and Compliance',
      client: 'SecureNet Ltd.',
      industry: 'Financial Services',
      service: 'Cybersecurity',
      challenge: 'Security vulnerabilities and compliance requirements',
      solution: 'Comprehensive security audit and implementation of multi-layered security measures',
      results: [
        '100% compliance with industry regulations',
        'Zero security incidents post-implementation',
        '50% reduction in security monitoring time',
        'Enhanced threat detection capabilities'
      ],
      duration: '4 months',
      teamSize: '6 specialists',
      image: '/images/case-studies/cybersecurity.jpg',
      testimonial: {
        quote: 'Their cybersecurity expertise helped us achieve full compliance and significantly improve our security posture.',
        author: 'Emily Rodriguez',
        role: 'Security Director',
        company: 'SecureNet Ltd.'
      },
      tags: ['Cybersecurity', 'Compliance', 'Audit', 'Financial Services']
    },
    {
      id: 4,
      title: 'Data Analytics and Business Intelligence Platform',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      service: 'Data Analytics',
      challenge: 'Lack of actionable insights from customer data',
      solution: 'Built comprehensive BI platform with real-time analytics and predictive modeling',
      results: [
        '35% increase in sales conversion',
        '25% improvement in customer retention',
        'Real-time business insights',
        'Predictive analytics for inventory management'
      ],
      duration: '5 months',
      teamSize: '7 specialists',
      image: '/images/case-studies/data-analytics.jpg',
      testimonial: {
        quote: 'The analytics platform gave us insights we never had before. Our sales and customer retention have improved significantly.',
        author: 'David Kim',
        role: 'VP of Marketing',
        company: 'RetailMax Corporation'
      },
      tags: ['Analytics', 'BI', 'Retail', 'Predictive Modeling']
    },
    {
      id: 5,
      title: 'Custom E-commerce Platform Development',
      client: 'FashionForward',
      industry: 'E-commerce',
      service: 'Custom Development',
      challenge: 'Outdated e-commerce platform limiting growth',
      solution: 'Built modern, scalable e-commerce platform with AI-powered recommendations',
      results: [
        '200% increase in online sales',
        '40% improvement in user experience',
        'Mobile-first responsive design',
        'AI-powered product recommendations'
      ],
      duration: '8 months',
      teamSize: '10 specialists',
      image: '/images/case-studies/ecommerce.jpg',
      testimonial: {
        quote: 'The new platform transformed our online business. Sales have doubled and customer satisfaction is at an all-time high.',
        author: 'Lisa Wang',
        role: 'CEO',
        company: 'FashionForward'
      },
      tags: ['E-commerce', 'Custom Development', 'AI', 'Mobile']
    },
    {
      id: 6,
      title: 'IoT Integration for Smart Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      service: 'IoT Solutions',
      challenge: 'Manual processes and lack of real-time monitoring',
      solution: 'Implemented IoT sensors and real-time monitoring system for production lines',
      results: [
        '30% increase in production efficiency',
        '25% reduction in downtime',
        'Real-time production monitoring',
        'Predictive maintenance capabilities'
      ],
      duration: '6 months',
      teamSize: '9 specialists',
      image: '/images/case-studies/iot-manufacturing.jpg',
      testimonial: {
        quote: 'The IoT solution revolutionized our manufacturing process. We now have complete visibility and control over our production.',
        author: 'Robert Martinez',
        role: 'Operations Director',
        company: 'ManufacturingPro'
      },
      tags: ['IoT', 'Manufacturing', 'Automation', 'Monitoring']
    }
  ];

  const industries = ['all', 'Technology', 'Data Analytics', 'Financial Services', 'Retail', 'E-commerce', 'Manufacturing'];
  const services = ['all', 'AI Solutions', 'Cloud Infrastructure', 'Cybersecurity', 'Data Analytics', 'Custom Development', 'IoT Solutions'];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesIndustry && matchesService && matchesSearch;
  });

  const stats = [
    { number: '50+', label: 'Successful Projects' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '40%', label: 'Average Cost Savings' },
    { number: '300%', label: 'Average Performance Improvement' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful case studies and client success stories. See how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, client results, AI solutions, IT projects, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve 
              remarkable results with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#case-studies"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="all">All Industries</option>
                {industries.slice(1).map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="all">All Services</option>
                {services.slice(1).map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              {filteredCaseStudies.length} Case Stud{filteredCaseStudies.length !== 1 ? 'ies' : 'y'}
            </h2>
            <span className="text-gray-400">
              {selectedIndustry !== 'all' && `Industry: ${selectedIndustry}`}
              {selectedService !== 'all' && ` | Service: ${selectedService}`}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Building className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Case Study Image</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="bg-purple-500/20 text-purple-300 text-xs font-semibold px-2 py-1 rounded">
                        {study.industry}
                      </span>
                      <span className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-2 py-1 rounded">
                        {study.service}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4">
                    <strong>Client:</strong> {study.client}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 3).map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      {study.teamSize}
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
              <p className="text-gray-300">
                Try adjusting your search terms or filters.
              </p>
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
              Let's discuss your project and see how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Target className="mr-2 h-5 w-5" />
                Start Your Project
              </a>
              <a
                href="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;