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
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing operational costs.',
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
      challenge: 'Increasing cyber threats and need for HIPAA compliance in patient data management.',
      solution: 'Implemented comprehensive security framework with zero-trust architecture and advanced threat detection.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security breaches in 18 months',
        '40% faster incident response',
        'Enhanced patient data protection'
      ],
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      duration: '4 months',
      team: '10 specialists'
    },
    {
      id: '4',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'ManufacturingPro Inc',
      industry: 'Manufacturing',
      challenge: 'Need for real-time monitoring and predictive maintenance across multiple production facilities.',
      solution: 'Developed comprehensive IoT platform with edge computing and machine learning for predictive analytics.',
      results: [
        '30% reduction in downtime',
        '25% increase in production efficiency',
        'Predictive maintenance accuracy of 95%',
        'Real-time monitoring across all facilities'
      ],
      image: '/images/case-studies/iot-manufacturing.jpg',
      duration: '8 months',
      team: '15 specialists'
    },
    {
      id: '5',
      title: 'Data Analytics Platform for E-commerce',
      client: 'ShopSmart Retail',
      industry: 'E-commerce',
      challenge: 'Lack of actionable insights from customer data and need for personalized shopping experiences.',
      solution: 'Built advanced analytics platform with real-time data processing and machine learning algorithms.',
      results: [
        '35% increase in conversion rates',
        '50% improvement in customer retention',
        'Real-time personalization capabilities',
        'Advanced inventory optimization'
      ],
      image: '/images/case-studies/data-analytics-ecommerce.jpg',
      duration: '5 months',
      team: '9 specialists'
    },
    {
      id: '6',
      title: 'Mobile App Development for Logistics',
      client: 'LogiFlow Transport',
      industry: 'Logistics',
      challenge: 'Inefficient route planning and lack of real-time tracking capabilities for fleet management.',
      solution: 'Developed comprehensive mobile application with GPS tracking, route optimization, and driver management.',
      results: [
        '20% reduction in fuel costs',
        '15% improvement in delivery times',
        'Real-time fleet tracking',
        'Enhanced driver productivity'
      ],
      image: '/images/case-studies/mobile-logistics.jpg',
      duration: '4 months',
      team: '7 specialists'
    }
  ];

  const industries = [
    { name: 'Technology', icon: <Zap className="h-6 w-6" />, count: 2 },
    { name: 'Financial Services', icon: <Building2 className="h-6 w-6" />, count: 1 },
    { name: 'Healthcare', icon: <Shield className="h-6 w-6" />, count: 1 },
    { name: 'Manufacturing', icon: <TrendingUp className="h-6 w-6" />, count: 1 },
    { name: 'E-commerce', icon: <Users className="h-6 w-6" />, count: 1 },
    { name: 'Logistics', icon: <Award className="h-6 w-6" />, count: 1 }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform their operations with cutting-edge technology solutions." />
        <meta name="keywords" content="case studies, AI solutions, cloud migration, cybersecurity, IoT, data analytics, mobile development" />
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
                Discover how we've helped businesses across industries transform their operations with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="#case-studies"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  View Case Studies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expertise spans across multiple industries, delivering tailored solutions for diverse business needs.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {industry.count} {industry.count === 1 ? 'project' : 'projects'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div id="case-studies" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how we've helped businesses achieve their goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-sm text-gray-500">{study.duration}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      <strong>Client:</strong> {study.client}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-700 text-sm mb-4">{study.challenge}</p>

                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-700 text-sm mb-4">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {study.team}
                        </div>
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read Full Case Study
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Impact
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                Numbers that speak to our commitment to delivering exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
                <div className="text-blue-200">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-blue-200">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">$2M+</div>
                <div className="text-blue-200">Cost Savings Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;