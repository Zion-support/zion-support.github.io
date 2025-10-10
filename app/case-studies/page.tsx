'use client';
import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle, Filter } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '75% reduction in response time',
        '60% cost savings on customer service',
        '95% customer satisfaction rate',
        '24/7 automated support'
      ],
      duration: '3 months',
      teamSize: '8 people',
      image: '/images/case-studies/techcorp.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceFlow Bank',
      industry: 'Finance',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with enhanced security measures',
      results: [
        '99.9% uptime achieved',
        '50% faster transaction processing',
        'Enhanced security compliance',
        '40% reduction in infrastructure costs'
      ],
      duration: '6 months',
      teamSize: '12 people',
      image: '/images/case-studies/financeflow.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Machine Learning for Supply Chain Optimization',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'Inefficient inventory management and supply chain delays',
      solution: 'ML-powered demand forecasting and inventory optimization',
      results: [
        '30% reduction in inventory costs',
        '25% improvement in delivery times',
        '90% accuracy in demand forecasting',
        '15% increase in profit margins'
      ],
      duration: '4 months',
      teamSize: '6 people',
      image: '/images/case-studies/retailmax.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive security audit and implementation of advanced protection',
      results: [
        'Zero security breaches',
        '100% compliance with HIPAA',
        'Real-time threat detection',
        '50% reduction in security incidents'
      ],
      duration: '5 months',
      teamSize: '10 people',
      image: '/images/case-studies/medicare.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics Platform for Manufacturing',
      client: 'ManufacturePro Ltd.',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time insights into production processes',
      solution: 'Custom analytics dashboard with IoT integration',
      results: [
        '20% increase in production efficiency',
        'Real-time monitoring capabilities',
        'Predictive maintenance implementation',
        '25% reduction in downtime'
      ],
      duration: '7 months',
      teamSize: '9 people',
      image: '/images/case-studies/manufacturepro.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'AI Automation for E-commerce',
      client: 'ShopSmart Online',
      industry: 'E-commerce',
      challenge: 'Manual processes slowing down operations and increasing errors',
      solution: 'AI-powered automation for order processing and customer service',
      results: [
        '80% automation of manual processes',
        '45% reduction in processing errors',
        '3x faster order fulfillment',
        '60% improvement in customer satisfaction'
      ],
      duration: '4 months',
      teamSize: '7 people',
      image: '/images/case-studies/shopsmart.jpg',
      featured: false
    }
  ];

  const industries = ['all', 'Technology', 'Finance', 'Retail', 'Healthcare', 'Manufacturing', 'E-commerce'];

  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their operations with our AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedIndustry === industry
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>{industry === 'all' ? 'All Industries' : industry}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {filteredCaseStudies.some(study => study.featured) && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Case Study</h2>
            {filteredCaseStudies.filter(study => study.featured).map(study => (
              <div key={study.id} className="bg-slate-800 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-lg font-semibold">Case Study Image</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {study.industry}
                      </span>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.teamSize}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-gray-400 mb-4"><strong>Client:</strong> {study.client}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                    <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.filter(study => !study.featured).map(study => (
              <article key={study.id} className="bg-slate-800 rounded-2xl overflow-hidden hover:bg-slate-700 transition-colors group">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">📈</div>
                    <p className="text-sm font-semibold">Case Study</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="bg-cyan-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {study.industry}
                    </span>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 mb-4"><strong>Client:</strong> {study.client}</p>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;