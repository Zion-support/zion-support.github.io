'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Globe } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'High customer service volume and response time issues',
      solution: 'Implemented AI chatbot and automated ticket routing system',
      results: ['40% reduction in response time', '60% increase in customer satisfaction', '50% cost savings'],
      image: '/images/case-studies/ecommerce-ai.jpg'
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'Regional Bank',
      industry: 'Financial Services',
      challenge: 'Legacy system modernization and compliance requirements',
      solution: 'Complete cloud migration with enhanced security and compliance',
      results: ['99.9% uptime achieved', '30% infrastructure cost reduction', 'Full compliance certification'],
      image: '/images/case-studies/bank-cloud.jpg'
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'Hospital Network',
      industry: 'Healthcare',
      challenge: 'Patient data security and HIPAA compliance',
      solution: 'Comprehensive security audit and implementation of advanced protection measures',
      results: ['Zero security breaches', '100% HIPAA compliance', 'Enhanced patient trust'],
      image: '/images/case-studies/healthcare-security.jpg'
    },
    {
      title: 'IoT Platform for Smart Manufacturing',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Production monitoring and predictive maintenance',
      solution: 'Custom IoT platform with real-time analytics and AI predictions',
      results: ['25% increase in efficiency', '35% reduction in downtime', 'Predictive maintenance success'],
      image: '/images/case-studies/manufacturing-iot.jpg'
    },
    {
      title: 'Data Analytics for Retail Optimization',
      client: 'Retail Chain',
      industry: 'Retail',
      challenge: 'Inventory management and customer behavior analysis',
      solution: 'Advanced analytics platform with machine learning insights',
      results: ['20% inventory optimization', '15% increase in sales', 'Better customer targeting'],
      image: '/images/case-studies/retail-analytics.jpg'
    },
    {
      title: 'Blockchain Implementation for Supply Chain',
      client: 'Logistics Company',
      industry: 'Logistics',
      challenge: 'Supply chain transparency and traceability',
      solution: 'Blockchain-based tracking system for end-to-end visibility',
      results: ['Complete traceability', 'Reduced fraud incidents', 'Improved partner trust'],
      image: '/images/case-studies/logistics-blockchain.jpg'
    }
  ];

  const stats = [
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Globe, label: 'Countries Served', value: '30+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT transformation, business results" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                View All Cases
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Start Your Project
              </button>
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
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white/60 text-sm">Case Study Image</span>
                </div>
                <div className="mb-4">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-400 mb-2">{study.client}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {study.challenge}
                </p>
                <div className="space-y-2 mb-4">
                  {study.results.slice(0, 2).map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
                <button className="flex items-center text-purple-400 hover:text-purple-300 font-semibold group">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;