'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Users, Award, TrendingUp, Globe, Zap } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      client: 'RetailCorp',
      industry: 'E-commerce',
      challenge: 'Legacy system causing 40% cart abandonment rate',
      solution: 'Complete platform rebuild with modern architecture',
      results: ['60% increase in conversion rate', '50% reduction in load times', '99.9% uptime achieved'],
      image: '/images/case-studies/ecommerce.jpg'
    },
    {
      id: 2,
      title: 'AI-Powered Customer Service',
      client: 'TechStart Inc.',
      industry: 'Technology',
      challenge: 'High customer service costs and response times',
      solution: 'Implemented AI chatbot and automation system',
      results: ['80% reduction in response time', '70% cost savings', '95% customer satisfaction'],
      image: '/images/case-studies/ai-customer-service.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'FinanceGlobal',
      industry: 'Financial Services',
      challenge: 'Vulnerable legacy systems and compliance issues',
      solution: 'Comprehensive security audit and implementation',
      results: ['Zero security breaches', '100% compliance achieved', '50% faster threat detection'],
      image: '/images/case-studies/cybersecurity.jpg'
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '500+', label: 'Projects Completed' },
    { icon: <Award className="w-8 h-8" />, number: '98%', label: 'Client Satisfaction' },
    { icon: <TrendingUp className="w-8 h-8" />, number: '150%', label: 'Average ROI' },
    { icon: <Globe className="w-8 h-8" />, number: '50+', label: 'Countries Served' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform their operations with cutting-edge technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, cloud migration, cybersecurity, digital transformation" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover how we've helped businesses transform their operations and achieve remarkable results with our technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Featured Case Studies</h2>
              <p className="text-xl text-gray-300">
                Real projects, real results. See how we've made a difference for our clients.
              </p>
            </div>
            
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={study.id} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="text-gray-400">{study.client}</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                      
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
                              <li key={resultIndex} className="flex items-start text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Zap className="w-16 h-16 mx-auto mb-4 opacity-80" />
                          <p className="text-lg font-semibold">Project Preview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
              <p className="text-xl text-gray-300">
                We follow a proven methodology to ensure every project delivers exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Discovery</h3>
                <p className="text-gray-300">We analyze your current situation and identify opportunities for improvement.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Strategy</h3>
                <p className="text-gray-300">We develop a comprehensive plan tailored to your specific needs and goals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Implementation</h3>
                <p className="text-gray-300">Our expert team executes the solution with precision and attention to detail.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Optimization</h3>
                <p className="text-gray-300">We continuously monitor and optimize to ensure maximum performance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let us help you achieve similar results. Contact us today to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Start Your Project
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Download Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CaseStudiesPage;