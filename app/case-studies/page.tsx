'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Optimization with AI',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '300% increase in conversion rates',
        '45% reduction in cart abandonment',
        '250% increase in average order value',
        '60% improvement in customer satisfaction'
      ],
      image: '/images/case-study-1.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Transformation',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data management and slow diagnosis processes',
      solution: 'Deployed AI-powered analytics platform for real-time patient insights',
      results: [
        '50% faster diagnosis times',
        '35% reduction in operational costs',
        '90% improvement in data accuracy',
        '40% increase in patient satisfaction'
      ],
      image: '/images/case-study-2.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Manufacturing Process Automation',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing delays and errors',
      solution: 'Implemented computer vision and AI for automated quality inspection',
      results: [
        '80% reduction in quality control time',
        '95% accuracy in defect detection',
        '30% increase in production efficiency',
        '25% reduction in waste'
      ],
      image: '/images/case-study-3.jpg',
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI implementation, business transformation, technology solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Case Study</h2>
            {caseStudies.filter(study => study.featured).map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="mb-4">
                      <span className="inline-block bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6">{study.title}</h3>
                    <p className="text-lg text-gray-300 mb-6">
                      <strong>Client:</strong> {study.client}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-white mb-3">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-white mb-3">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-white mb-4">Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {study.results.map((result, index) => (
                          <div key={index} className="flex items-center text-gray-300">
                            <TrendingUp className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Read Full Case Study <ArrowRight className="w-5 h-5 ml-2 inline" />
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <h4 className="text-2xl font-bold text-white mb-4">Key Metrics</h4>
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                        <div className="text-gray-300">Conversion Rate Increase</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">45%</div>
                        <div className="text-gray-300">Cart Abandonment Reduction</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">250%</div>
                        <div className="text-gray-300">Average Order Value Increase</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-300 mb-4">
                    <strong>Client:</strong> {study.client}
                  </p>
                  <p className="text-gray-300 mb-6 text-sm">{study.challenge}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;