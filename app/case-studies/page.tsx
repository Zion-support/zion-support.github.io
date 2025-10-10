'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Target, BarChart, Star, Globe, Zap } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Clients Served' },
    { icon: TrendingUp, number: '300%', label: 'Average ROI' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: Globe, number: '25+', label: 'Countries' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '60% reduction in cart abandonment',
        '25% increase in average order value',
        '50% improvement in customer satisfaction'
      ],
      image: '/images/case-studies/ecommerce.jpg',
      duration: '6 months',
      team: '8 developers'
    },
    {
      id: 2,
      title: 'Manufacturing Process Optimization',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and high waste',
      solution: 'AI-driven predictive maintenance and process optimization',
      results: [
        '35% reduction in production waste',
        '20% increase in production efficiency',
        '50% decrease in unplanned downtime',
        '30% cost savings'
      ],
      image: '/images/case-studies/manufacturing.jpg',
      duration: '8 months',
      team: '12 developers'
    },
    {
      id: 3,
      title: 'Healthcare Data Analytics',
      company: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Patient data scattered across multiple systems',
      solution: 'Unified data platform with AI-powered analytics',
      results: [
        '70% faster patient diagnosis',
        '45% reduction in readmission rates',
        '60% improvement in treatment outcomes',
        '80% time savings for medical staff'
      ],
      image: '/images/case-studies/healthcare.jpg',
      duration: '10 months',
      team: '15 developers'
    },
    {
      id: 4,
      title: 'Financial Services Automation',
      company: 'FinTech Solutions',
      industry: 'Financial Services',
      challenge: 'Manual processes and high operational costs',
      solution: 'AI-powered automation and fraud detection system',
      results: [
        '90% reduction in manual processes',
        '85% improvement in fraud detection',
        '60% decrease in operational costs',
        '95% customer satisfaction rate'
      ],
      image: '/images/case-studies/fintech.jpg',
      duration: '7 months',
      team: '10 developers'
    },
    {
      id: 5,
      title: 'Supply Chain Optimization',
      company: 'Global Logistics Co.',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain and high transportation costs',
      solution: 'AI-powered route optimization and demand forecasting',
      results: [
        '30% reduction in transportation costs',
        '50% improvement in delivery times',
        '40% increase in supply chain visibility',
        '25% reduction in inventory costs'
      ],
      image: '/images/case-studies/logistics.jpg',
      duration: '9 months',
      team: '14 developers'
    },
    {
      id: 6,
      title: 'Real Estate Market Analysis',
      company: 'PropertyMax Realty',
      industry: 'Real Estate',
      challenge: 'Difficulty in property valuation and market trends',
      solution: 'AI-powered market analysis and property valuation system',
      results: [
        '80% accuracy in property valuations',
        '65% faster market analysis',
        '45% increase in successful transactions',
        '70% improvement in client satisfaction'
      ],
      image: '/images/case-studies/real-estate.jpg',
      duration: '5 months',
      team: '6 developers'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, business transformation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results with our AI and technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl text-cyan-400/50">
                    {study.industry === 'E-commerce' && '🛒'}
                    {study.industry === 'Manufacturing' && '🏭'}
                    {study.industry === 'Healthcare' && '🏥'}
                    {study.industry === 'Financial Services' && '💳'}
                    {study.industry === 'Logistics' && '🚚'}
                    {study.industry === 'Real Estate' && '🏠'}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm">{study.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-4">{study.company}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Team: {study.team}</span>
                    <span>Duration: {study.duration}</span>
                  </div>

                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and technology solutions can transform your business and deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <BarChart className="w-5 h-5 mr-2" />
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;