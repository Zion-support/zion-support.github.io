'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  duration: string;
  team: string;
  technologies: string[];
  image: string;
  featured: boolean;
  published: string;
}

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'MedTech Solutions needed to analyze large volumes of patient data to identify patterns and improve treatment outcomes, but their existing systems were unable to process the data efficiently.',
      solution: 'We developed a comprehensive AI-powered analytics platform that processes patient data in real-time, uses machine learning algorithms to identify patterns, and provides actionable insights to healthcare providers.',
      results: [
        '40% improvement in treatment accuracy',
        '60% reduction in data processing time',
        '25% increase in patient satisfaction',
        '30% cost savings in operational expenses'
      ],
      duration: '6 months',
      team: '8 specialists',
      technologies: ['Python', 'TensorFlow', 'AWS', 'React', 'PostgreSQL'],
      image: '/images/case-studies/healthcare-ai.jpg',
      featured: true,
      published: '2024-01-15'
    },
    {
      id: '2',
      title: 'Quantum Computing Optimization for Financial Services',
      client: 'Global Finance Corp',
      industry: 'Finance',
      challenge: 'Complex portfolio optimization problems were taking days to solve, limiting the ability to make real-time investment decisions.',
      solution: 'Implemented quantum computing algorithms to solve complex optimization problems in minutes instead of days, enabling real-time portfolio adjustments.',
      results: [
        '95% reduction in optimization time',
        '20% improvement in portfolio returns',
        '50% increase in trading efficiency',
        'Real-time risk assessment capabilities'
      ],
      duration: '8 months',
      team: '12 specialists',
      technologies: ['Qiskit', 'Python', 'IBM Quantum', 'Docker', 'Kubernetes'],
      image: '/images/case-studies/quantum-finance.jpg',
      featured: true,
      published: '2024-01-10'
    },
    {
      id: '3',
      title: 'Autonomous Manufacturing System',
      client: 'AutoManufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes were causing delays and inconsistencies in production, leading to increased costs and customer complaints.',
      solution: 'Deployed autonomous robots with computer vision and AI to perform quality control inspections, reducing human error and increasing efficiency.',
      results: [
        '80% reduction in quality control time',
        '99.5% accuracy in defect detection',
        '35% decrease in production costs',
        'Zero human error in quality inspections'
      ],
      duration: '10 months',
      team: '15 specialists',
      technologies: ['OpenCV', 'ROS', 'TensorFlow', 'Python', 'C++'],
      image: '/images/case-studies/autonomous-manufacturing.jpg',
      featured: false,
      published: '2024-01-05'
    },
    {
      id: '4',
      title: 'ML-Powered Predictive Analytics for Retail',
      client: 'RetailChain Corp',
      industry: 'Retail',
      challenge: 'Inventory management was inefficient, leading to stockouts and excess inventory, impacting both sales and profitability.',
      solution: 'Developed a machine learning system that predicts demand patterns and optimizes inventory levels in real-time across all store locations.',
      results: [
        '40% reduction in stockouts',
        '25% decrease in excess inventory',
        '15% increase in revenue',
        'Real-time demand prediction accuracy of 92%'
      ],
      duration: '5 months',
      team: '6 specialists',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'AWS', 'Docker'],
      image: '/images/case-studies/ml-predictive-analytics.jpg',
      featured: false,
      published: '2024-01-01'
    }
  ];

  const industries = ['all', ...Array.from(new Set(caseStudies.map(study => study.industry)))];

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedIndustry === 'all' || study.industry === selectedIndustry
  );

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and technology implementations across various industries. See how we've helped businesses transform with cutting-edge solutions." />
        <meta name="keywords" content="case studies, success stories, AI implementation, technology solutions, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform with AI and cutting-edge technology solutions.
            </p>
          </section>

          {/* Industry Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map(industry => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedIndustry === industry
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  {industry === 'all' ? 'All Industries' : industry}
                </button>
              ))}
            </div>
          </section>

          {/* Featured Case Studies */}
          {featuredCaseStudies.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Success Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredCaseStudies.map(study => (
                  <div key={study.id} className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-6xl">📊</div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span>{study.client}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>{study.industry}</span>
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-gray-300 mb-6">{study.challenge}</p>
                      <div className="space-y-3 mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400">Key Results:</h4>
                        <ul className="space-y-2">
                          {study.results.slice(0, 3).map((result, index) => (
                            <li key={index} className="flex items-center space-x-2 text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{study.team}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{study.duration}</span>
                          </span>
                        </div>
                        <button className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1">
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* All Case Studies */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map(study => (
                <div key={study.id} className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-4xl">📊</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span>{study.client}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{study.industry}</span>
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{study.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{study.challenge}</p>
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center space-x-2 text-gray-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <span className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{study.team}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>{study.duration}</span>
                        </span>
                      </div>
                      <button className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 text-sm">
                        <span>Read More</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI and technology solutions can transform your business and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Our Services</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;