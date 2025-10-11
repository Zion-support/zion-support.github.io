'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'High customer service volume and response time issues',
      solution: 'Implemented AI chatbot with natural language processing',
      results: [
        '85% reduction in response time',
        '60% decrease in support tickets',
        '95% customer satisfaction rate'
      ],
      duration: '3 months',
      team: '5 developers',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Legacy system migration and compliance requirements',
      solution: 'Complete cloud infrastructure migration with security enhancements',
      results: [
        '40% cost reduction',
        '99.9% uptime achieved',
        'Full compliance with financial regulations'
      ],
      duration: '6 months',
      team: '8 specialists',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Cybersecurity Implementation for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'HIPAA compliance and threat protection',
      solution: 'Comprehensive security framework with monitoring',
      results: [
        'Zero security breaches',
        '100% HIPAA compliance',
        '50% faster threat detection'
      ],
      duration: '4 months',
      team: '6 security experts',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Data Analytics Platform for Manufacturing',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Inefficient production monitoring and quality control',
      solution: 'Real-time analytics dashboard with predictive maintenance',
      results: [
        '25% increase in production efficiency',
        '30% reduction in downtime',
        '20% improvement in quality metrics'
      ],
      duration: '5 months',
      team: '7 data scientists',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'Mobile App Development for Logistics',
      client: 'FastLogistics Co.',
      industry: 'Logistics',
      challenge: 'Outdated tracking system and poor user experience',
      solution: 'Modern mobile application with real-time tracking',
      results: [
        '90% user adoption rate',
        '45% improvement in delivery efficiency',
        '4.8/5 app store rating'
      ],
      duration: '4 months',
      team: '6 mobile developers',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'AI Content Generation for Marketing Agency',
      client: 'Creative Marketing Pro',
      industry: 'Marketing',
      challenge: 'High content creation costs and time constraints',
      solution: 'AI-powered content generation and optimization platform',
      results: [
        '70% reduction in content creation time',
        '80% cost savings',
        '200% increase in content output'
      ],
      duration: '2 months',
      team: '4 AI specialists',
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore our successful projects and case studies across AI, cloud computing, cybersecurity, and digital transformation." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, cybersecurity implementation, digital transformation" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations with cutting-edge technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <div className="h-48 bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-20">
                      {study.id}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-cyan-100 text-cyan-800 text-sm px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                      {study.title}
                    </h2>
                    
                    <div className="mb-4">
                      <h3 className="font-medium text-gray-900 mb-2">Client: {study.client}</h3>
                      <p className="text-gray-600 mb-2"><strong>Challenge:</strong> {study.challenge}</p>
                      <p className="text-gray-600 mb-4"><strong>Solution:</strong> {study.solution}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                        Key Results:
                      </h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.team}
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CaseStudiesPage;