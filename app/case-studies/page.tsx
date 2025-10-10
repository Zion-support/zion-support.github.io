'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, Users, TrendingUp, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and inconsistent response times',
      solution: 'Implemented AI chatbots and automated ticket routing',
      results: [
        '60% reduction in response time',
        '40% cost savings on support staff',
        '95% customer satisfaction rate'
      ],
      technologies: ['AI Chatbots', 'Machine Learning', 'Natural Language Processing']
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with enhanced security measures',
      results: [
        '99.9% uptime achieved',
        '50% improvement in system performance',
        'Enhanced security compliance'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Security Hardening']
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'Vulnerable patient data and compliance requirements',
      solution: 'Comprehensive security audit and implementation',
      results: [
        'Zero security breaches',
        'HIPAA compliance achieved',
        '24/7 threat monitoring'
      ],
      technologies: ['SIEM', 'Endpoint Protection', 'Network Security', 'Compliance']
    },
    {
      id: 4,
      title: 'IoT Platform for Manufacturing',
      client: 'Manufacturing Inc',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Manual monitoring and maintenance processes',
      solution: 'IoT sensors and predictive analytics platform',
      results: [
        '30% reduction in downtime',
        'Predictive maintenance success',
        'Real-time monitoring dashboard'
      ],
      technologies: ['IoT Sensors', 'Edge Computing', 'Machine Learning', 'Real-time Analytics']
    }
  ];

  const stats = [
    { icon: Users, label: 'Projects Completed', value: '150+' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
    { icon: Shield, label: 'Client Satisfaction', value: '99%' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <Navigation />
      
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
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions. 
              Real results, real impact.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-300">Real projects, real results</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                    <div className="text-white text-lg font-semibold">Case Study {study.id}</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-cyan-400 font-medium">{study.industry}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-400">{study.client}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                        <p className="text-gray-400 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                        <p className="text-gray-400 text-sm">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="border border-white/20 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default CaseStudiesPage;