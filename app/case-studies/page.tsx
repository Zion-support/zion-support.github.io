'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building, Users, TrendingUp, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'ShopTech Solutions',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      description: 'Implemented AI chatbots and automated customer service solutions resulting in 40% reduction in response time.',
      results: ['40% faster response time', '60% cost reduction', '95% customer satisfaction'],
      challenge: 'High customer service costs and slow response times',
      solution: 'AI-powered chatbot system with intelligent routing',
      impact: 'Transformed customer experience while reducing operational costs'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      description: 'Migrated legacy systems to cloud infrastructure with zero downtime and enhanced security.',
      results: ['Zero downtime migration', '50% cost savings', 'Enhanced security compliance'],
      challenge: 'Outdated legacy systems and high maintenance costs',
      solution: 'Comprehensive cloud migration strategy with AWS',
      impact: 'Modernized infrastructure while maintaining business continuity'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      description: 'Implemented comprehensive cybersecurity solutions to protect sensitive patient data.',
      results: ['100% compliance achieved', 'Zero security breaches', 'Reduced risk by 80%'],
      challenge: 'HIPAA compliance and data security concerns',
      solution: 'Multi-layered security architecture with AI monitoring',
      impact: 'Achieved full compliance while enhancing patient data protection'
    },
    {
      id: 4,
      title: 'AI Analytics Dashboard for Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      description: 'Developed AI-powered analytics dashboard for real-time production monitoring and optimization.',
      results: ['25% increase in efficiency', '30% reduction in waste', 'Real-time insights'],
      challenge: 'Lack of visibility into production processes',
      solution: 'AI-powered analytics platform with predictive insights',
      impact: 'Optimized production processes and reduced operational waste'
    },
    {
      id: 5,
      title: 'Micro SaaS Platform for Small Business',
      client: 'SmallBiz Solutions',
      industry: 'Professional Services',
      image: '/api/placeholder/600/400',
      description: 'Created comprehensive micro SaaS platform with 15+ integrated business tools.',
      results: ['15 integrated tools', '80% time savings', '300% productivity increase'],
      challenge: 'Fragmented business tools and processes',
      solution: 'Unified micro SaaS platform with AI automation',
      impact: 'Streamlined operations and dramatically improved efficiency'
    },
    {
      id: 6,
      title: 'AI Content Generation for Marketing Agency',
      client: 'Creative Marketing Co.',
      industry: 'Marketing',
      image: '/api/placeholder/600/400',
      description: 'Implemented AI content generation system for scalable marketing content creation.',
      results: ['500% content output increase', '70% cost reduction', 'Improved content quality'],
      challenge: 'High content creation costs and time constraints',
      solution: 'AI-powered content generation with human oversight',
      impact: 'Scaled content production while maintaining quality standards'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group - Success Stories</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform with AI and IT solutions. 
              Real results, real impact.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {caseStudies.map((study) => (
                <div key={study.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Building className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-400 font-medium">{study.industry}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                      <p className="text-gray-300 mb-4">{study.description}</p>
                    </div>
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-24 h-24 object-cover rounded-lg ml-4"
                    />
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <div className="text-sm text-gray-400 mb-2">
                      <strong>Client:</strong> {study.client}
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Our Impact</h2>
              <p className="text-xl text-gray-300">Numbers that speak for themselves</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-gray-300">Cost Savings Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of businesses that have transformed with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Our Services
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