'use client';

import React from 'react';
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
  image: string;
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        'Reduced response time by 80%',
        'Cut customer service costs by 60%',
        'Improved customer satisfaction to 95%',
        'Handled 10x more inquiries with same staff'
      ],
      image: '/images/case-studies/customer-service.jpg',
      duration: '3 months',
      team: '5 AI specialists, 2 developers'
    },
    {
      id: '2',
      title: 'Cloud Migration & Infrastructure Optimization',
      client: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Outdated on-premises infrastructure causing downtime and scalability issues.',
      solution: 'Complete cloud migration to AWS with microservices architecture and automated scaling.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster application deployment',
        'Seamless global expansion'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '8 cloud architects, 4 DevOps engineers'
    },
    {
      id: '3',
      title: 'AI-Driven Supply Chain Optimization',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'Inefficient supply chain leading to stockouts and excess inventory.',
      solution: 'AI-powered demand forecasting and inventory optimization system with real-time analytics.',
      results: [
        '30% reduction in inventory costs',
        '95% reduction in stockouts',
        '25% improvement in delivery times',
        '$2M annual savings achieved'
      ],
      image: '/images/case-studies/supply-chain.jpg',
      duration: '4 months',
      team: '6 data scientists, 3 supply chain experts'
    },
    {
      id: '4',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'Financial Services Ltd.',
      industry: 'Finance',
      challenge: 'Security vulnerabilities and compliance requirements for financial regulations.',
      solution: 'Comprehensive security audit, implementation of zero-trust architecture, and compliance automation.',
      results: [
        '100% compliance with financial regulations',
        'Zero security breaches in 12 months',
        '50% reduction in security incidents',
        'Automated compliance reporting'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '5 months',
      team: '7 security specialists, 2 compliance experts'
    },
    {
      id: '5',
      title: 'AI-Powered Marketing Automation',
      client: 'E-commerce Solutions',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and inefficient marketing spend across multiple channels.',
      solution: 'AI-driven marketing automation platform with personalized campaigns and predictive analytics.',
      results: [
        '200% increase in conversion rates',
        '40% reduction in marketing costs',
        '300% improvement in ROI',
        'Automated campaign optimization'
      ],
      image: '/images/case-studies/marketing-automation.jpg',
      duration: '3 months',
      team: '4 marketing specialists, 3 AI engineers'
    },
    {
      id: '6',
      title: 'Data Analytics & Business Intelligence',
      client: 'Healthcare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented data across systems preventing data-driven decision making.',
      solution: 'Unified data platform with real-time analytics and predictive healthcare insights.',
      results: [
        '60% faster decision making',
        '25% improvement in patient outcomes',
        'Real-time operational insights',
        'Predictive analytics for patient care'
      ],
      image: '/images/case-studies/healthcare-analytics.jpg',
      duration: '6 months',
      team: '5 data engineers, 3 healthcare specialists'
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '300%', label: 'Average ROI Increase' },
    { icon: Users, value: '500+', label: 'Projects Completed' },
    { icon: Award, value: '99%', label: 'Client Satisfaction' },
    { icon: CheckCircle, value: '50+', label: 'Industries Served' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, business transformation" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and case studies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-4xl">📊</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm mb-3">{study.client}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {study.team}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      Success Story
                    </span>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our proven AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors"
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