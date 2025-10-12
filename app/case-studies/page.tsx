'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Clock } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'TechCorp AI Transformation',
      description: 'How we helped TechCorp implement AI solutions that increased efficiency by 300%',
      industry: 'Technology',
      duration: '6 months',
      results: [
        '300% increase in operational efficiency',
        '50% reduction in manual processes',
        '90% improvement in data accuracy'
      ],
      image: '/images/case-study-1.jpg'
    },
    {
      title: 'FinanceFlow Data Analytics',
      description: 'Revolutionizing financial data analysis with advanced analytics and machine learning',
      industry: 'Finance',
      duration: '4 months',
      results: [
        '200% faster data processing',
        '85% improvement in prediction accuracy',
        '60% reduction in analysis time'
      ],
      image: '/images/case-study-2.jpg'
    },
    {
      title: 'HealthTech Cloud Migration',
      description: 'Seamless cloud migration for a healthcare technology company',
      industry: 'Healthcare',
      duration: '8 months',
      results: [
        '99.9% uptime achieved',
        '40% reduction in infrastructure costs',
        '50% improvement in scalability'
      ],
      image: '/images/case-study-3.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform with our AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                    <p className="text-gray-300 mb-6">{study.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    <span className="mr-2">Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default CaseStudiesPage;