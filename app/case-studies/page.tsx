'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building2, Users, TrendingUp, Shield, Cloud, Brain } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: '60% reduction in response time, 40% cost savings',
      image: '/api/placeholder/600/400',
      icon: Brain,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing security and scalability issues',
      solution: 'Complete cloud migration with enhanced security protocols',
      results: '99.9% uptime, 50% faster processing, improved compliance',
      image: '/api/placeholder/600/400',
      icon: Cloud,
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Vulnerable patient data and compliance requirements',
      solution: 'Comprehensive security audit and implementation',
      results: 'Zero security breaches, HIPAA compliance achieved',
      image: '/api/placeholder/600/400',
      icon: Shield,
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard for E-commerce',
      client: 'ShopSmart Inc',
      industry: 'E-commerce',
      challenge: 'Lack of real-time business insights',
      solution: 'Custom analytics dashboard with AI-powered predictions',
      results: '25% increase in sales, 30% better inventory management',
      image: '/api/placeholder/600/400',
      icon: TrendingUp,
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 5,
      title: 'Micro SaaS Development for Real Estate',
      client: 'PropertyPro',
      industry: 'Real Estate',
      challenge: 'Manual property management processes',
      solution: 'Custom property management SaaS platform',
      results: '80% time savings, 200% increase in property listings',
      image: '/api/placeholder/600/400',
      icon: Building2,
      color: 'from-indigo-400 to-purple-500'
    },
    {
      id: 6,
      title: 'AI-Powered HR Automation',
      client: 'GlobalTech Corp',
      industry: 'Technology',
      challenge: 'Inefficient recruitment and employee management',
      solution: 'AI recruitment system and employee analytics platform',
      results: '50% faster hiring, 35% reduction in turnover',
      image: '/api/placeholder/600/400',
      icon: Users,
      color: 'from-teal-400 to-cyan-500'
    }
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-cyan-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <div className={`aspect-video bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                    <study.icon className="w-16 h-16 text-white/80" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-cyan-400 font-medium">{study.industry}</span>
                      <span className="text-sm text-gray-400">{study.client}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                        <p className="text-sm text-gray-400">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                        <p className="text-sm text-gray-400">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-1">Results:</h4>
                        <p className="text-sm text-white font-medium">{study.results}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <button className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 py-3 px-8 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
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
