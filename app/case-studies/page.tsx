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
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy infrastructure unable to scale and meet compliance requirements.',
      solution: 'Migrated entire infrastructure to AWS with enhanced security and compliance measures.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        'Full compliance with financial regulations',
        '3x faster application deployment'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement Program',
      client: 'Healthcare Plus',
      industry: 'Healthcare',
      challenge: 'Vulnerable systems and potential HIPAA compliance violations.',
      solution: 'Comprehensive security audit and implementation of multi-layered security framework.',
      results: [
        'Zero security incidents in 12 months',
        '100% HIPAA compliance achieved',
        'Advanced threat detection implemented',
        'Staff security training completed'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'E-commerce Platform Optimization',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Slow website performance and poor user experience affecting sales.',
      solution: 'Complete platform optimization with performance monitoring and user experience improvements.',
      results: [
        '40% improvement in page load speed',
        '25% increase in conversion rate',
        '60% reduction in bounce rate',
        'Mobile-first responsive design'
      ],
      image: '/images/case-studies/ecommerce-optimization.jpg',
      duration: '2 months',
      team: '5 specialists'
    },
    {
      id: '5',
      title: 'Data Analytics Implementation',
      client: 'Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Lack of data insights for operational efficiency and decision making.',
      solution: 'Implemented comprehensive data analytics platform with real-time dashboards and predictive analytics.',
      results: [
        '30% improvement in operational efficiency',
        'Real-time production monitoring',
        'Predictive maintenance implementation',
        'Data-driven decision making culture'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: '6',
      title: 'Mobile App Development',
      client: 'StartupXYZ',
      industry: 'Technology',
      challenge: 'Need for a scalable mobile application to reach new customers.',
      solution: 'Developed cross-platform mobile app with backend infrastructure and real-time features.',
      results: [
        '50,000+ downloads in first month',
        '4.8/5 app store rating',
        'Real-time synchronization',
        'Scalable cloud backend'
      ],
      image: '/images/case-studies/mobile-app.jpg',
      duration: '4 months',
      team: '7 specialists'
    }
  ];

  const industries = ['All', 'Technology', 'Financial Services', 'Healthcare', 'Retail', 'Manufacturing'];

  const stats = [
    { icon: <Users className="h-8 w-8 text-blue-600" />, value: '150+', label: 'Projects Completed' },
    { icon: <Award className="h-8 w-8 text-green-600" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <TrendingUp className="h-8 w-8 text-purple-600" />, value: '40%', label: 'Average Cost Savings' },
    { icon: <Shield className="h-8 w-8 text-red-600" />, value: '100%', label: 'Security Compliance' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform their operations with innovative technology solutions." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve their goals through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600">
              Real projects, real results, real impact.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">{study.industry}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{study.duration}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{study.team}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4 font-medium">{study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-700 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-700 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Discuss Similar Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;