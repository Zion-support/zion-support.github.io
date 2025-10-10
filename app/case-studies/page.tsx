'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system.',
      results: [
        '85% reduction in response time',
        '60% decrease in customer service costs',
        '95% customer satisfaction rate',
        '300% increase in ticket resolution efficiency'
      ],
      duration: '6 months',
      teamSize: '8 specialists'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy on-premise infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Complete cloud migration to AWS with enhanced security and compliance features.',
      results: [
        '99.9% uptime achieved',
        '40% reduction in infrastructure costs',
        '50% faster application deployment',
        '100% compliance with financial regulations'
      ],
      duration: '8 months',
      teamSize: '12 specialists'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'Increasing cyber threats and need for HIPAA compliance in healthcare data management.',
      solution: 'Comprehensive cybersecurity suite with AI-powered threat detection and automated response.',
      results: [
        'Zero security breaches since implementation',
        '99.8% threat detection accuracy',
        '50% faster incident response time',
        'Full HIPAA compliance certification'
      ],
      duration: '4 months',
      teamSize: '6 specialists'
    },
    {
      id: 4,
      title: 'AI Analytics Dashboard for E-commerce',
      client: 'ShopSmart Retail',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'Lack of real-time insights into customer behavior and sales performance.',
      solution: 'Custom AI-powered analytics dashboard with predictive insights and automated reporting.',
      results: [
        '35% increase in conversion rates',
        '25% improvement in customer retention',
        '40% reduction in inventory costs',
        'Real-time business intelligence'
      ],
      duration: '5 months',
      teamSize: '10 specialists'
    },
    {
      id: 5,
      title: 'Process Automation for Manufacturing',
      client: 'AutoParts Inc',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Manual processes causing delays and errors in production and supply chain management.',
      solution: 'End-to-end process automation with AI-powered quality control and predictive maintenance.',
      results: [
        '70% reduction in manual errors',
        '45% increase in production efficiency',
        '30% decrease in maintenance costs',
        'Real-time production monitoring'
      ],
      duration: '7 months',
      teamSize: '15 specialists'
    },
    {
      id: 6,
      title: 'AI Content Generation for Marketing',
      client: 'BrandBoost Agency',
      industry: 'Marketing',
      image: '/api/placeholder/600/400',
      challenge: 'High content creation costs and time-consuming manual processes.',
      solution: 'AI-powered content generation platform with automated social media management.',
      results: [
        '80% reduction in content creation time',
        '60% increase in engagement rates',
        '50% decrease in content costs',
        'Automated multi-platform publishing'
      ],
      duration: '3 months',
      teamSize: '5 specialists'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform with cutting-edge AI and IT solutions.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {caseStudies.map((study) => (
                <div key={study.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="bg-gray-800 rounded-lg h-64 mb-6 flex items-center justify-center">
                    <span className="text-gray-400">Case Study Image</span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{study.teamSize}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-4">
                      Client: {study.client}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="cyber-button flex-1 text-center py-3"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Link>
                    <button className="border-2 border-cyan-500 text-cyan-400 px-4 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
                Our Impact in Numbers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">$50M+</div>
                  <div className="text-gray-300">Cost Savings Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">300%</div>
                  <div className="text-gray-300">Average ROI</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button text-center py-4 px-8"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/consultation"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;