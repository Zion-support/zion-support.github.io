'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap } from 'lucide-react';

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
  featured: boolean;
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
      team: '8 specialists',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration & Infrastructure Optimization',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy on-premises infrastructure causing scalability issues and high maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated scaling.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achievement',
        '300% improvement in scalability',
        '40% faster deployment cycles'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '12 specialists',
      featured: true
    },
    {
      id: '3',
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'Lack of real-time insights and data-driven decision making capabilities.',
      solution: 'Built comprehensive BI platform with real-time analytics and predictive modeling.',
      results: [
        '35% increase in sales revenue',
        '25% improvement in inventory management',
        'Real-time dashboard implementation',
        'Predictive analytics for demand forecasting'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '4 months',
      team: '10 specialists',
      featured: false
    },
    {
      id: '4',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Security vulnerabilities and HIPAA compliance requirements.',
      solution: 'Implemented comprehensive security framework with threat detection and compliance monitoring.',
      results: [
        '100% HIPAA compliance achievement',
        'Zero security breaches',
        'Automated threat detection',
        '24/7 security monitoring'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '5 months',
      team: '6 specialists',
      featured: false
    },
    {
      id: '5',
      title: 'Blockchain Supply Chain Transparency',
      client: 'Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Lack of supply chain visibility and traceability issues.',
      solution: 'Developed blockchain-based supply chain tracking system with smart contracts.',
      results: [
        'Complete supply chain visibility',
        '30% reduction in counterfeit products',
        'Automated compliance verification',
        'Real-time tracking capabilities'
      ],
      image: '/images/case-studies/blockchain-supply.jpg',
      duration: '7 months',
      team: '9 specialists',
      featured: false
    },
    {
      id: '6',
      title: 'Mobile App Development & Digital Transformation',
      client: 'EduTech Solutions',
      industry: 'Education',
      challenge: 'Outdated learning management system and poor user experience.',
      solution: 'Developed modern mobile-first learning platform with AI-powered personalization.',
      results: [
        '200% increase in user engagement',
        '45% improvement in learning outcomes',
        'Cross-platform compatibility',
        'AI-powered content recommendations'
      ],
      image: '/images/case-studies/mobile-app.jpg',
      duration: '8 months',
      team: '15 specialists',
      featured: false
    }
  ];

  const industries = ['All', 'Technology', 'Financial Services', 'Retail', 'Healthcare', 'Manufacturing', 'Education'];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, number: '150+', label: 'Projects Completed' },
    { icon: <Award className="w-8 h-8 text-green-500" />, number: '98%', label: 'Client Satisfaction' },
    { icon: <TrendingUp className="w-8 h-8 text-purple-500" />, number: '300%', label: 'Average ROI' },
    { icon: <Shield className="w-8 h-8 text-red-500" />, number: '100%', label: 'Security Compliance' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful projects and case studies showcasing how Zion Tech Group delivers innovative solutions across various industries." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, digital transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover how we've helped businesses transform their operations and achieve remarkable results 
              through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Case Studies</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.filter(study => study.featured).map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 className="w-5 h-5 text-blue-500" />
                      <span className="text-blue-600 font-medium">{study.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{study.title}</h3>
                    <p className="text-gray-600 mb-6">{study.solution}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Client:</span>
                        <p className="text-gray-600">{study.client}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Duration:</span>
                        <p className="text-gray-600">{study.duration}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Team Size:</span>
                        <p className="text-gray-600">{study.team}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Industry:</span>
                        <p className="text-gray-600">{study.industry}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">All Case Studies</h2>
            
            {/* Industry Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {industries.map((industry) => (
                <button
                  key={industry}
                  className="px-6 py-2 rounded-full font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  {industry}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-4 h-4 text-blue-500" />
                      <span className="text-blue-600 text-sm font-medium">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{study.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{study.solution}</p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Client:</span>
                        <span className="font-medium">{study.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{study.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Team:</span>
                        <span className="font-medium">{study.team}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                        {study.results.length > 2 && (
                          <li className="text-sm text-gray-500">
                            +{study.results.length - 2} more results
                          </li>
                        )}
                      </ul>
                    </div>

                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;