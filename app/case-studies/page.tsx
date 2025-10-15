import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ChartBarIcon, ClockIcon, UsersIcon } from '@heroicons/react/24/outline';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'AI-Powered E-commerce Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '35% reduction in cart abandonment',
        '25% increase in average order value'
      ],
      duration: '3 months',
      team: '8 specialists',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Cloud Infrastructure Migration',
      client: 'FinanceFlow Corp.',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with enhanced security and scalability',
      results: [
        '60% improvement in system performance',
        '99.9% uptime achieved',
        '50% reduction in operational costs'
      ],
      duration: '6 months',
      team: '12 specialists',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Cybersecurity Enhancement',
      client: 'HealthTech Solutions',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive security audit and implementation of advanced protection',
      results: [
        'Zero security breaches in 12 months',
        '100% compliance with healthcare regulations',
        '75% faster threat detection and response'
      ],
      duration: '4 months',
      team: '6 specialists',
      image: '/api/placeholder/600/400'
    },
    {
      title: '5G Network Implementation',
      client: 'SmartCity Innovations',
      industry: 'Smart City',
      challenge: 'Need for ultra-fast connectivity for IoT devices',
      solution: 'Deployed 5G infrastructure with edge computing capabilities',
      results: [
        '10x faster data transmission',
        '90% reduction in latency',
        'Support for 10,000+ concurrent IoT devices'
      ],
      duration: '8 months',
      team: '15 specialists',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'AI-Driven Supply Chain Optimization',
      client: 'GlobalManufacturing Ltd.',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain causing delays and increased costs',
      solution: 'AI-powered demand forecasting and automated inventory management',
      results: [
        '30% reduction in inventory costs',
        '45% improvement in delivery times',
        '20% increase in overall efficiency'
      ],
      duration: '5 months',
      team: '10 specialists',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Digital Transformation for Legacy Bank',
      client: 'HeritageBank',
      industry: 'Banking',
      challenge: 'Outdated systems preventing digital innovation',
      solution: 'Complete digital transformation with modern AI and cloud solutions',
      results: [
        '80% improvement in customer satisfaction',
        '70% reduction in processing time',
        '50% increase in digital transactions'
      ],
      duration: '12 months',
      team: '20 specialists',
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI solutions, cloud infrastructure, cybersecurity, and digital transformation projects." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform their operations 
                with cutting-edge AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <ChartBarIcon className="h-16 w-16 text-blue-400" />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                        {study.industry}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {study.duration}
                        </div>
                        <div className="flex items-center">
                          <UsersIcon className="h-4 w-4 mr-1" />
                          {study.team}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 mb-4 font-semibold">Client: {study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Track Record
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Numbers that speak to our commitment to excellence and client success.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '99%', label: 'Client Satisfaction' },
                { value: '50+', label: 'Industries Served' },
                { value: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;