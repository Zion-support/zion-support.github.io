'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '95% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      duration: '3 months',
      investment: '$150,000',
      roi: '340%',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems causing performance issues and high maintenance costs.',
      solution: 'Complete cloud migration to AWS with enhanced security and compliance.',
      results: [
        '99.9% uptime achieved',
        '40% reduction in infrastructure costs',
        'Enhanced security compliance',
        '50% faster application performance'
      ],
      duration: '6 months',
      investment: '$500,000',
      roi: '280%',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'Increasing cyber threats and need for HIPAA compliance.',
      solution: 'Comprehensive security audit and implementation of advanced threat detection.',
      results: [
        'Zero security breaches',
        '100% HIPAA compliance',
        'Real-time threat monitoring',
        'Automated incident response'
      ],
      duration: '4 months',
      investment: '$200,000',
      roi: '450%',
      featured: false
    },
    {
      id: 4,
      title: 'Data Analytics Platform for E-commerce',
      client: 'ShopSmart',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'Lack of data insights affecting business decisions and growth.',
      solution: 'Built comprehensive analytics platform with AI-powered insights.',
      results: [
        '35% increase in sales',
        'Real-time business insights',
        'Predictive analytics implementation',
        'Automated reporting system'
      ],
      duration: '5 months',
      investment: '$300,000',
      roi: '520%',
      featured: false
    },
    {
      id: 5,
      title: 'Process Automation for Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Manual processes causing inefficiencies and errors.',
      solution: 'Implemented RPA and AI-powered process automation.',
      results: [
        '80% process automation',
        '60% reduction in errors',
        '45% time savings',
        'Improved quality control'
      ],
      duration: '4 months',
      investment: '$250,000',
      roi: '380%',
      featured: false
    },
    {
      id: 6,
      title: 'Mobile App Development for Retail',
      client: 'RetailMax',
      industry: 'Retail',
      image: '/api/placeholder/600/400',
      challenge: 'Need for modern mobile presence and customer engagement.',
      solution: 'Developed cross-platform mobile app with AI features.',
      results: [
        '200% increase in mobile engagement',
        'Seamless user experience',
        'AI-powered recommendations',
        'Real-time inventory updates'
      ],
      duration: '6 months',
      investment: '$400,000',
      roi: '290%',
      featured: false
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Years Experience', value: '5+', icon: Clock }
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
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Success
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI and IT solutions. Real results, real impact.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {caseStudies.find(cs => cs.featured) && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Case Study</h2>
              {(() => {
                const featured = caseStudies.find(cs => cs.featured);
                return (
                  <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/50 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="p-8">
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                          <span className="text-cyan-400 text-sm">{featured?.industry}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{featured?.title}</h3>
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                          <strong>Client:</strong> {featured?.client}
                        </p>
                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                            <p className="text-gray-300">{featured?.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                            <p className="text-gray-300">{featured?.solution}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">{featured?.duration}</div>
                            <div className="text-sm text-gray-400">Duration</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400">{featured?.investment}</div>
                            <div className="text-sm text-gray-400">Investment</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400">{featured?.roi}</div>
                            <div className="text-sm text-gray-400">ROI</div>
                          </div>
                        </div>
                        <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center">
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center p-8">
                        <div className="text-center text-white">
                          <div className="text-6xl mb-4">📊</div>
                          <div className="text-xl font-semibold mb-2">Key Results</div>
                          <ul className="text-left space-y-2">
                            {featured?.results.map((result, index) => (
                              <li key={index} className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                <span className="text-sm">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </section>
        )}

        {/* All Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-white/10 text-cyan-400 px-2 py-1 rounded text-xs">
                        {caseStudy.industry}
                      </span>
                      {caseStudy.featured && (
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded text-xs">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {caseStudy.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">
                      <strong>Client:</strong> {caseStudy.client}
                    </p>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-cyan-400">{caseStudy.duration}</div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-400">{caseStudy.investment}</div>
                        <div className="text-xs text-gray-400">Investment</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-400">{caseStudy.roi}</div>
                        <div className="text-xs text-gray-400">ROI</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.slice(0, 3).map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group-hover:translate-x-1 transition-all duration-300">
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven AI and IT solutions. 
              Join the ranks of our successful clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                View Our Services
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;