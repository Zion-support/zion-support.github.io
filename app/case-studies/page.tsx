'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Zap } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Transformation',
      company: 'RetailTech Solutions',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
      results: [
        '300% increase in conversion rates',
        '50% reduction in customer service costs',
        '25% increase in average order value'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics',
      company: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data analysis and treatment planning',
      solution: 'Developed AI-powered analytics platform for patient insights',
      results: [
        '40% faster diagnosis times',
        '60% improvement in treatment accuracy',
        '30% reduction in operational costs'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Manufacturing Automation',
      company: 'AutoParts Inc',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing delays',
      solution: 'Deployed computer vision AI for automated quality inspection',
      results: [
        '90% reduction in quality control time',
        '95% accuracy in defect detection',
        '20% increase in production efficiency'
      ],
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT implementations. Real case studies showing how we've helped businesses transform with technology." />
        <meta name="keywords" content="case studies, success stories, AI implementations, IT solutions, business transformation" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
            <div className="relative max-w-7xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Success
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Real results from real businesses. See how we've helped companies transform with AI and IT solutions.
              </p>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="space-y-16">
                {caseStudies.map((study, index) => (
                  <div
                    key={study.id}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}
                  >
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                            <p className="text-gray-400">{study.company} • {study.industry}</p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                            <p className="text-gray-300">{study.challenge}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                            <p className="text-gray-300">{study.solution}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                            <ul className="space-y-2">
                              {study.results.map((result, resultIndex) => (
                                <li key={resultIndex} className="flex items-center text-gray-300">
                                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <button className="mt-8 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                            <Zap className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-white font-medium">Case Study Visualization</p>
                          <p className="text-gray-300 text-sm">Interactive dashboard showing results</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our Impact
                </h2>
                <p className="text-xl text-gray-300">
                  Numbers that speak for themselves
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">300%</div>
                  <div className="text-gray-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how we can help transform your business with AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+13024640950" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center">
                    Call +1 302 464 0950
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center">
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default CaseStudiesPage;