'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building2, Users, TrendingUp, Shield, Zap } from 'lucide-react';

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
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated CI/CD pipelines.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment cycles',
        'Enhanced security compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and compliance requirements for patient data protection.',
      solution: 'Implemented comprehensive security framework with zero-trust architecture and advanced threat detection.',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security incidents in 12 months',
        '40% improvement in threat detection time',
        'Enhanced patient data protection'
      ],
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      duration: '4 months',
      team: '10 specialists'
    },
    {
      id: '4',
      title: 'Digital Transformation for Manufacturing',
      client: 'Industrial Dynamics',
      industry: 'Manufacturing',
      challenge: 'Outdated processes and lack of real-time visibility into production operations.',
      solution: 'Deployed IoT sensors, data analytics platform, and predictive maintenance system.',
      results: [
        '25% increase in production efficiency',
        '30% reduction in downtime',
        'Real-time production monitoring',
        'Predictive maintenance implementation'
      ],
      image: '/images/case-studies/manufacturing-iot.jpg',
      duration: '5 months',
      team: '15 specialists'
    },
    {
      id: '5',
      title: 'E-commerce Platform Optimization',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Slow website performance and poor user experience affecting sales conversion.',
      solution: 'Optimized frontend performance, implemented CDN, and enhanced user experience design.',
      results: [
        '60% improvement in page load speed',
        '35% increase in conversion rate',
        '40% reduction in bounce rate',
        'Enhanced mobile experience'
      ],
      image: '/images/case-studies/ecommerce-optimization.jpg',
      duration: '2 months',
      team: '6 specialists'
    },
    {
      id: '6',
      title: 'Data Analytics Implementation',
      client: 'LogisticsPro',
      industry: 'Logistics',
      challenge: 'Lack of data-driven insights for route optimization and fleet management.',
      solution: 'Built comprehensive data analytics platform with machine learning algorithms for route optimization.',
      results: [
        '20% reduction in fuel costs',
        '15% improvement in delivery times',
        'Real-time fleet tracking',
        'Data-driven decision making'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '4 months',
      team: '9 specialists'
    }
  ];

  const stats = [
    { icon: <Building2 className="w-8 h-8 text-cyan-400" />, value: '50+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8 text-purple-400" />, value: '100+', label: 'Happy Clients' },
    { icon: <TrendingUp className="w-8 h-8 text-green-400" />, value: '95%', label: 'Success Rate' },
    { icon: <Shield className="w-8 h-8 text-yellow-400" />, value: '24/7', label: 'Support' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful projects and case studies across AI, cloud computing, cybersecurity, and digital transformation." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, cybersecurity, digital transformation" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Discover how we've helped businesses transform with technology" />
        <meta property="og:type" content="website" />
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
              Discover how we've helped businesses across industries transform their operations 
              and achieve remarkable results through innovative technology solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Case Studies</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-400/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">📊</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-medium">{study.industry}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">
                      <span className="font-semibold text-white">Client:</span> {study.client}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                            <TrendingUp className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{study.team}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-2 px-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
                      View Full Case Study
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
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;