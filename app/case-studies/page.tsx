'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Award } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  featured: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      description: 'Revolutionized customer support with intelligent AI chatbots and automated workflows.',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots, automated ticket routing, and intelligent response systems.',
      results: [
        '75% reduction in response time',
        '60% cost savings on support operations',
        '95% customer satisfaction rate',
        '40% increase in first-call resolution'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      description: 'Seamless migration to cloud infrastructure with enhanced security and compliance.',
      challenge: 'Legacy systems limiting scalability and increasing operational costs.',
      solution: 'Designed and executed comprehensive cloud migration strategy with zero downtime.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment cycles',
        'Full compliance with financial regulations'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      description: 'Comprehensive security overhaul protecting sensitive patient data and systems.',
      challenge: 'Increasing cyber threats targeting healthcare data and systems.',
      solution: 'Implemented multi-layered security architecture with advanced threat detection.',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security breaches in 18 months',
        '90% faster threat detection',
        '50% reduction in security incidents'
      ],
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      featured: false
    },
    {
      id: '4',
      title: 'Digital Transformation for Manufacturing',
      client: 'ManufacturingCorp',
      industry: 'Manufacturing',
      description: 'Complete digital overhaul of manufacturing processes with IoT and AI integration.',
      challenge: 'Outdated manufacturing processes limiting efficiency and quality control.',
      solution: 'Deployed IoT sensors, AI-powered quality control, and predictive maintenance systems.',
      results: [
        '30% increase in production efficiency',
        '25% reduction in defects',
        '40% improvement in predictive maintenance',
        '20% cost savings on maintenance'
      ],
      image: '/images/case-studies/digital-manufacturing.jpg',
      featured: false
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Projects Completed' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
    { icon: Award, value: '50+', label: 'Industry Awards' },
    { icon: CheckCircle, value: '100%', label: 'On-Time Delivery' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and client results from our AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-cyan-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform with cutting-edge AI and IT solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Case Studies</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.filter(study => study.featured).map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-500/20 relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 text-sm">{study.client}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{study.title}</h3>
                    <p className="text-gray-300 mb-4">{study.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-white font-medium">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Case Studies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-500/20 relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {study.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 text-sm">{study.client}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{study.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-white font-medium text-sm">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300 text-xs">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 text-sm">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can help transform your business with our proven AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-colors"
                >
                  Explore Services
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