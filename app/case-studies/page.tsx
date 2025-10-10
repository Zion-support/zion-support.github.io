'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'RetailMax',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      description: 'Implemented AI chatbot and automated customer service solutions, resulting in 40% reduction in support tickets and 60% improvement in customer satisfaction.',
      results: ['40% reduction in support tickets', '60% improvement in customer satisfaction', '24/7 automated support'],
      technologies: ['AI Chatbot', 'Natural Language Processing', 'Machine Learning']
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      description: 'Successfully migrated legacy systems to cloud infrastructure, improving scalability and reducing operational costs by 35%.',
      results: ['35% reduction in operational costs', '99.9% uptime achieved', '50% faster deployment times'],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Microservices']
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      description: 'Comprehensive cybersecurity overhaul including threat detection, data encryption, and compliance implementation for HIPAA requirements.',
      results: ['100% HIPAA compliance', 'Zero security breaches', '24/7 threat monitoring'],
      technologies: ['SIEM', 'Encryption', 'Firewall', 'Compliance']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Case Studies
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Explore our successful case studies and see how we've helped businesses transform with AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-6"></div>
                  
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    <strong>Client:</strong> {study.client}
                  </p>
                  
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-gray-300 text-sm flex items-center">
                          <ArrowRight className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
                    Read Full Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;