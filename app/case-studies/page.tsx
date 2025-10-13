'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Globe, Zap, Clock, Target, Star, BarChart3, Shield } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      client: 'RetailCorp',
      industry: 'E-commerce',
      challenge: 'Legacy system causing 40% cart abandonment rate',
      solution: 'Implemented AI-powered recommendation engine and modern cloud infrastructure',
      results: [
        '60% increase in conversion rate',
        '45% reduction in page load time',
        '80% improvement in user engagement',
        '50% increase in average order value'
      ],
      image: '/images/case-studies/ecommerce.jpg',
      duration: '6 months',
      team: '12 developers'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data across multiple systems',
      solution: 'Built unified data platform with AI-powered analytics and predictive modeling',
      results: [
        '90% reduction in data processing time',
        '75% improvement in diagnostic accuracy',
        '60% cost savings in data management',
        '100% compliance with HIPAA regulations'
      ],
      image: '/images/case-studies/healthcare.jpg',
      duration: '8 months',
      team: '15 developers'
    },
    {
      id: 3,
      title: 'Financial Services Automation',
      client: 'FinTech Global',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors',
      solution: 'Implemented RPA and AI-driven automation for loan processing and risk assessment',
      results: [
        '85% reduction in processing time',
        '95% accuracy in risk assessment',
        '70% cost reduction in operations',
        '50% increase in customer satisfaction'
      ],
      image: '/images/case-studies/fintech.jpg',
      duration: '10 months',
      team: '20 developers'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Industry Awards', value: '25+', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful case studies and client success stories. See how Zion Tech Group has helped businesses across industries achieve digital transformation and growth." />
        <meta name="keywords" content="case studies, success stories, client results, digital transformation, AI solutions, IT services, business growth" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Success
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Stories
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve remarkable results through innovative technology solutions and digital transformation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real projects, real results. See how we've transformed businesses across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-400">{study.client} • {study.industry}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Challenge
                    </h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Solution
                    </h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.team}
                    </div>
                  </div>
                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the hundreds of businesses that have transformed their operations with our innovative solutions. 
            Let's discuss how we can help you achieve similar results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Explore Services
              <Globe className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
