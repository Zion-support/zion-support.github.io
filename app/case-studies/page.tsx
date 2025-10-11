'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Star, Award, Clock, Target, Brain, BarChart, Zap, Shield } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
      results: [
        '40% increase in conversion rates',
        '60% reduction in customer service tickets',
        '25% increase in average order value'
      ],
      duration: '6 months',
      team: '8 developers',
      image: '/case-studies/techretail.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient reporting',
      solution: 'Built comprehensive data analytics platform with AI insights',
      results: [
        '50% faster diagnosis times',
        '30% reduction in operational costs',
        '95% accuracy in predictive analytics'
      ],
      duration: '8 months',
      team: '12 developers',
      image: '/case-studies/healthcare.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Financial Services Automation',
      client: 'FinTech Global',
      industry: 'Financial Services',
      challenge: 'Manual processes and compliance requirements',
      solution: 'Automated workflows with AI-powered risk assessment',
      results: [
        '70% reduction in processing time',
        '99.9% compliance accuracy',
        '45% cost savings'
      ],
      duration: '4 months',
      team: '6 developers',
      image: '/case-studies/fintech.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Manufacturing IoT Integration',
      client: 'Industrial Corp',
      industry: 'Manufacturing',
      challenge: 'Outdated systems and lack of real-time monitoring',
      solution: 'IoT platform with predictive maintenance and analytics',
      results: [
        '35% reduction in downtime',
        '20% increase in production efficiency',
        '60% improvement in quality control'
      ],
      duration: '10 months',
      team: '15 developers',
      image: '/case-studies/manufacturing.jpg',
      featured: false
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '40%', label: 'Average Cost Savings', icon: DollarSign },
    { number: '6 months', label: 'Average Project Duration', icon: Clock }
  ];

  const industries = [
    { name: 'E-commerce', count: 15, icon: ShoppingCart },
    { name: 'Healthcare', count: 12, icon: Heart },
    { name: 'Financial Services', count: 10, icon: DollarSign },
    { name: 'Manufacturing', count: 8, icon: Settings },
    { name: 'Education', count: 6, icon: GraduationCap },
    { name: 'Real Estate', count: 4, icon: Home }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform with AI and technology solutions." />
        <meta name="keywords" content="case studies, projects, success stories, AI solutions, technology implementation" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform with our AI and technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Case Study
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most impactful project that showcases the power of AI and technology.
              </p>
            </div>

            {(() => {
              const featured = caseStudies.find(study => study.featured);
              if (!featured) return null;
              
              return (
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-400/50 shadow-lg shadow-cyan-400/20">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Brain className="w-10 h-10 text-white" />
                          </div>
                          <p className="text-gray-300">Case Study Image</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                        <span className="text-cyan-400 text-sm font-medium">{featured.industry}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{featured.title}</h3>
                      <p className="text-gray-300 mb-6"><strong>Client:</strong> {featured.client}</p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-300">{featured.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-300">{featured.solution}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                        <ul className="space-y-2">
                          {featured.results.map((result, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {featured.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {featured.team}
                        </div>
                      </div>

                      <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                        Read Full Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete portfolio of successful projects across different industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.filter(study => !study.featured).map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-gray-300">Case Study Image</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4"><strong>Client:</strong> {study.client}</p>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <div className="space-y-2 mb-6">
                      {study.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {study.team}
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                      Read Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We have experience across multiple industries, delivering tailored solutions for each sector.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{industry.name}</h3>
                  <p className="text-xs text-gray-400">{industry.count} projects</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default CaseStudiesPage;