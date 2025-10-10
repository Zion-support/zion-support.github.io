'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '75% reduction in response time',
        '60% cost savings',
        '95% customer satisfaction rate',
        '24/7 availability'
      ],
      image: '/images/case-study-1.jpg'
    },
    {
      id: 2,
      title: 'Cloud Migration & Infrastructure Optimization',
      client: 'DataFlow Inc.',
      industry: 'Data Analytics',
      challenge: 'Outdated on-premise infrastructure limiting scalability',
      solution: 'Complete cloud migration to AWS with auto-scaling',
      results: [
        '300% increase in processing capacity',
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        'Faster deployment cycles'
      ],
      image: '/images/case-study-2.jpg'
    },
    {
      id: 3,
      title: 'Machine Learning for Predictive Analytics',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Inventory management inefficiencies and stockouts',
      solution: 'ML-powered demand forecasting and inventory optimization',
      results: [
        '40% reduction in stockouts',
        '25% improvement in inventory turnover',
        '15% increase in revenue',
        'Real-time demand prediction'
      ],
      image: '/images/case-study-3.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with our AI and IT solutions
          </p>
          
          {/* Case Studies Grid */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="cyber-card">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg p-6 mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-300 mb-4">
                        <span className="font-semibold">{study.client}</span>
                        <span>•</span>
                        <span>{study.industry}</span>
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
                        <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <TrendingUp className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Success Story</h4>
                        <p className="text-gray-300">
                          {study.client} achieved remarkable results with our solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="cyber-card p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our proven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
                >
                  <span>(302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;