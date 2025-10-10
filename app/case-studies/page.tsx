'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle } from 'lucide-react';
const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain operations leading to 30% waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and inventory optimization system',
      results: [
        '40% reduction in inventory costs',
        '25% improvement in delivery times',
        '$2.5M annual savings',
        '99.5% forecast accuracy'
      ],
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: 2,
      title: 'Cloud Migration & Security Enhancement',
      client: 'Financial Services Inc',
      industry: 'Finance',
      challenge: 'Legacy systems causing security vulnerabilities and scalability issues',
      solution: 'Migrated to secure cloud infrastructure with advanced threat detection',
      results: [
        '99.9% uptime achieved',
        '60% reduction in security incidents',
        '50% faster application deployment',
        '100% compliance with regulations'
      ],
      duration: '4 months',
      team: '12 specialists'
    },
    {
      id: 3,
      title: 'AI Customer Service Automation',
      client: 'E-commerce Platform',
      industry: 'Retail',
      challenge: 'High customer service costs and inconsistent response times',
      solution: 'Deployed AI-powered chatbots and automated ticket routing system',
      results: [
        '70% reduction in support costs',
        '80% faster response times',
        '95% customer satisfaction rate',
        '24/7 multilingual support'
      ],
      duration: '3 months',
      team: '6 specialists'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI and IT solutions that transformed businesses across various industries." />
        <meta name="keywords" content="case studies, success stories, AI solutions, cloud migration, customer service automation, business transformation" />
      </Helmet>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with 
              cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>
        {/* Case Studies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={study.id} className={`grid grid-cols-1 lg: grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg: col-start-2' : ''}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                      <div className="flex items-center justify-between mb-6">
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="w-4 h-4 mr-2" />
                          {study.duration}
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-4">{study.title}</h2>
                      <p className="text-gray-300 mb-6">
                        <strong>Client: </strong> {study.client}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Challenge</h3>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Solution</h3>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg: col-start-1' : ''}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                      <h3 className="text-2xl font-bold text-white mb-6">Results</h3>
                      <div className="space-y-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {study.team}
                          </div>
                          <button className="flex items-center text-blue-400 hover: text-blue-300 transition-colors">
                            Read Full Case Study
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover: from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that speak to our success in transforming businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">$50M+</div>
                <div className="text-gray-300">Client Savings</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our proven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Get Free Consultation
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )};
export default CaseStudiesPage