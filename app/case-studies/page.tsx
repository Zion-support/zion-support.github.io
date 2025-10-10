'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building2, Users, TrendingUp, Shield, Zap } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: ['60% reduction in response time', '40% cost savings', '95% customer satisfaction'],
      duration: '3 months',
      team: '8 specialists'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems limiting scalability and security concerns',
      solution: 'Complete cloud migration with enhanced security protocols',
      results: ['50% faster processing', '99.9% uptime', 'Enhanced security compliance'],
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'HIPAA compliance and increasing cyber threats',
      solution: 'Comprehensive security audit and implementation of advanced protection',
      results: ['100% HIPAA compliance', 'Zero security breaches', '24/7 monitoring'],
      duration: '4 months',
      team: '10 specialists'
    },
    {
      id: 4,
      title: 'Machine Learning for Predictive Analytics',
      client: 'RetailMax',
      industry: 'Retail',
      image: '/api/placeholder/600/400',
      challenge: 'Inventory management and demand forecasting inefficiencies',
      solution: 'ML-powered predictive analytics and automated inventory system',
      results: ['30% reduction in stockouts', '25% inventory cost savings', 'Improved forecasting accuracy'],
      duration: '5 months',
      team: '6 specialists'
    },
    {
      id: 5,
      title: 'Digital Transformation for Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Outdated processes and lack of real-time visibility',
      solution: 'IoT integration and real-time monitoring dashboard',
      results: ['20% increase in efficiency', 'Real-time production monitoring', 'Predictive maintenance'],
      duration: '8 months',
      team: '15 specialists'
    },
    {
      id: 6,
      title: 'Quantum Computing Research Platform',
      client: 'QuantumLabs',
      industry: 'Research',
      image: '/api/placeholder/600/400',
      challenge: 'Complex quantum algorithm development and testing',
      solution: 'Custom quantum computing platform with advanced simulation tools',
      results: ['10x faster algorithm testing', 'Advanced quantum simulations', 'Research breakthrough'],
      duration: '12 months',
      team: '20 specialists'
    }
  ];

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'Technology': return <Zap className="w-6 h-6" />;
      case 'Financial Services': return <TrendingUp className="w-6 h-6" />;
      case 'Healthcare': return <Shield className="w-6 h-6" />;
      case 'Retail': return <Building2 className="w-6 h-6" />;
      case 'Manufacturing': return <Building2 className="w-6 h-6" />;
      case 'Research': return <Users className="w-6 h-6" />;
      default: return <Building2 className="w-6 h-6" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Success <span className="text-cyan-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="h-64 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl text-white/20">📊</div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-cyan-400">
                        {getIndustryIcon(study.industry)}
                      </div>
                      <span className="text-cyan-400 font-semibold">{study.industry}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                    <p className="text-gray-300 mb-4">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2">Solution:</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2">Results:</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, index) => (
                            <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <span>Duration: {study.duration}</span>
                      <span>Team: {study.team}</span>
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
