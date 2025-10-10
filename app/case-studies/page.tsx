'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, CheckCircle, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'RetailMax',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service volume and response time issues',
      solution: 'Implemented AI chatbot and automated response system',
      results: ['50% reduction in response time', '80% customer satisfaction increase', '30% cost savings'],
      description: 'How we helped RetailMax transform their customer service with AI-powered solutions.'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy system migration and security compliance',
      solution: 'Secure cloud migration with enhanced security protocols',
      results: ['99.9% uptime achieved', '40% performance improvement', 'Full compliance maintained'],
      description: 'Successful migration of critical financial systems to the cloud while maintaining security.'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'Patient data security and HIPAA compliance',
      solution: 'Comprehensive cybersecurity framework implementation',
      results: ['Zero security breaches', '100% HIPAA compliance', '24/7 monitoring'],
      description: 'Enhanced cybersecurity posture for healthcare provider with patient data protection.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our successful case studies and see how we've helped businesses transform with AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="h-64 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Case Study Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {study.industry}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-3">{study.title}</h2>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="text-white font-semibold mb-2">Challenge:</h3>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-white font-semibold mb-2">Solution:</h3>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-white font-semibold mb-2">Results:</h3>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let us help you transform your business with our proven AI and IT solutions.
          </p>
          <button className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors">
            Start Your Project
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;