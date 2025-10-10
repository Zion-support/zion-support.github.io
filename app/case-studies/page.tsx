'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      description: 'Successfully migrated legacy systems to cloud infrastructure, reducing costs by 40% and improving performance.',
      results: ['40% cost reduction', '99.9% uptime', '50% faster processing']
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      description: 'Implemented comprehensive security measures to protect patient data and ensure HIPAA compliance.',
      results: ['100% HIPAA compliance', 'Zero security breaches', '24/7 monitoring']
    },
    {
      title: 'AI-Powered Analytics Platform',
      client: 'RetailMax',
      industry: 'Retail',
      image: '/api/placeholder/600/400',
      description: 'Developed custom AI analytics platform that increased sales by 35% through predictive insights.',
      results: ['35% sales increase', 'Real-time insights', 'Automated reporting']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400">Case Study Image</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  <div className="space-y-2 mb-4">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{study.client}</span>
                    <span className="text-sm text-purple-400">{study.industry}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve similar results with our proven AI and IT solutions.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              Start Your Project
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CaseStudiesPage;