'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, Star } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered E-commerce Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI recommendation engine and personalized shopping experience',
      results: ['300% increase in conversion rates', '50% reduction in cart abandonment', '$2M additional revenue'],
      duration: '6 months',
      technologies: ['Machine Learning', 'Computer Vision', 'NLP', 'Cloud Infrastructure']
    },
    {
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with AI-powered security and monitoring',
      results: ['99.9% uptime achieved', '60% cost reduction', 'Zero security incidents'],
      duration: '8 months',
      technologies: ['AWS Cloud', 'AI Security', 'Data Analytics', 'DevOps']
    },
    {
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'HIPAA compliance and advanced threat protection needed',
      solution: 'AI-powered cybersecurity suite with real-time threat detection',
      results: ['100% HIPAA compliance', '95% reduction in security incidents', '24/7 monitoring'],
      duration: '4 months',
      technologies: ['AI Security', 'Threat Detection', 'Compliance Management', 'Real-time Monitoring']
    },
    {
      title: 'AI Customer Support Automation',
      client: 'ServicePro',
      industry: 'Customer Service',
      image: '/api/placeholder/600/400',
      challenge: 'High support costs and long response times',
      solution: 'Intelligent chatbot system with human-AI collaboration',
      results: ['80% reduction in support costs', '90% faster response times', '95% customer satisfaction'],
      duration: '3 months',
      technologies: ['NLP', 'Machine Learning', 'Chatbot Development', 'Integration APIs']
    },
    {
      title: 'Data Analytics Transformation',
      client: 'DataCorp',
      industry: 'Data Analytics',
      image: '/api/placeholder/600/400',
      challenge: 'Disconnected data sources and manual reporting processes',
      solution: 'Unified AI-powered analytics platform with automated insights',
      results: ['70% faster reporting', 'Real-time insights', '50% reduction in manual work'],
      duration: '5 months',
      technologies: ['Big Data', 'AI Analytics', 'Data Visualization', 'Cloud Computing']
    },
    {
      title: 'Mobile App Development with AI',
      client: 'MobileFirst',
      industry: 'Mobile Technology',
      image: '/api/placeholder/600/400',
      challenge: 'Need for intelligent mobile app with advanced features',
      solution: 'Cross-platform mobile app with AI integration and real-time features',
      results: ['4.8/5 app store rating', '1M+ downloads', '40% increase in user engagement'],
      duration: '7 months',
      technologies: ['React Native', 'AI Integration', 'Real-time Features', 'Cloud Backend']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Case Studies">
              Case Studies
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Success Stories & Transformations
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results with our AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative cyber-card hologram-card energy-pulse">
                  <div className="mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-6xl">📊</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 neon-text cyber-scan-line">{study.title}</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyan-400 font-semibold">{study.client}</span>
                      <span className="text-gray-400 text-sm">{study.industry}</span>
                    </div>
                    <div className="text-sm text-gray-300 mb-4">Duration: {study.duration}</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                    
                    <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm mb-3">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105 neon-glow">
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 cyber-card">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our proven AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 neon-glow flex items-center justify-center"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Start Your Project
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
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
