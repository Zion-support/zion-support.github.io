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
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues and high maintenance costs.',
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
        '40% reduction in security response time',
        'Enhanced patient data protection'
      ],
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      duration: '4 months',
      team: '10 specialists'
    },
    {
      id: '4',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Manual processes and lack of real-time visibility into production operations.',
      solution: 'Developed comprehensive IoT platform with real-time monitoring, predictive analytics, and automated alerts.',
      results: [
        '30% increase in production efficiency',
        '25% reduction in equipment downtime',
        'Real-time production visibility',
        'Predictive maintenance capabilities'
      ],
      image: '/images/case-studies/iot-manufacturing.jpg',
      duration: '5 months',
      team: '15 specialists'
    },
    {
      id: '5',
      title: 'Data Analytics Dashboard for E-commerce',
      client: 'RetailMax',
      industry: 'E-commerce',
      challenge: 'Lack of actionable insights from customer data and sales analytics.',
      solution: 'Built advanced analytics platform with machine learning models for customer behavior analysis and sales forecasting.',
      results: [
        '35% increase in conversion rates',
        '20% improvement in customer retention',
        'Real-time business intelligence',
        'Automated sales forecasting'
      ],
      image: '/images/case-studies/data-analytics-ecommerce.jpg',
      duration: '4 months',
      team: '9 specialists'
    },
    {
      id: '6',
      title: 'Mobile App Development for Logistics',
      client: 'LogiFlow',
      industry: 'Logistics',
      challenge: 'Inefficient delivery tracking and communication between drivers and customers.',
      solution: 'Developed comprehensive mobile application with real-time tracking, automated notifications, and route optimization.',
      results: [
        '45% improvement in delivery efficiency',
        '60% reduction in customer inquiries',
        'Real-time delivery tracking',
        'Optimized route planning'
      ],
      image: '/images/case-studies/mobile-logistics.jpg',
      duration: '3 months',
      team: '7 specialists'
    }
  ];

  const industries = [
    { name: 'All Industries', count: caseStudies.length, icon: <Building2 className="h-5 w-5" /> },
    { name: 'Technology', count: caseStudies.filter(cs => cs.industry === 'Technology').length, icon: <Zap className="h-5 w-5" /> },
    { name: 'Financial Services', count: caseStudies.filter(cs => cs.industry === 'Financial Services').length, icon: <TrendingUp className="h-5 w-5" /> },
    { name: 'Healthcare', count: caseStudies.filter(cs => cs.industry === 'Healthcare').length, icon: <Shield className="h-5 w-5" /> },
    { name: 'Manufacturing', count: caseStudies.filter(cs => cs.industry === 'Manufacturing').length, icon: <Building2 className="h-5 w-5" /> },
    { name: 'E-commerce', count: caseStudies.filter(cs => cs.industry === 'E-commerce').length, icon: <Users className="h-5 w-5" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform their operations with cutting-edge technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, cloud migration, cybersecurity, technology projects" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform their operations 
                with innovative technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Industry Filter */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {industry.icon}
                  <span className="ml-2">{industry.name}</span>
                  <span className="ml-2 bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm">
                    {industry.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {study.team}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  
                  <div className="text-gray-600 mb-4">
                    <strong>Client:</strong> {study.client}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      Duration: {study.duration}
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Get Started Today
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
    </>
  );
};

export default CaseStudiesPage;