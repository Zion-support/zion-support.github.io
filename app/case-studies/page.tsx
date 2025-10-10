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
      solution: 'Migrated entire infrastructure to AWS with enhanced security and compliance features.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '100% compliance with financial regulations',
        '3x faster application deployment'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MedTech Systems',
      industry: 'Healthcare',
      challenge: 'Critical security vulnerabilities and HIPAA compliance issues.',
      solution: 'Comprehensive security audit and implementation of advanced threat protection systems.',
      results: [
        'Zero security breaches in 12 months',
        '100% HIPAA compliance achieved',
        '95% reduction in security incidents',
        '24/7 threat monitoring implemented'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '10 specialists'
    },
    {
      id: '4',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'Industrial Dynamics',
      industry: 'Manufacturing',
      challenge: 'Manual processes and lack of real-time visibility into production operations.',
      solution: 'Developed comprehensive IoT platform with real-time monitoring and predictive analytics.',
      results: [
        '30% increase in production efficiency',
        '25% reduction in equipment downtime',
        'Real-time production monitoring',
        'Predictive maintenance capabilities'
      ],
      image: '/images/case-studies/iot-manufacturing.jpg',
      duration: '8 months',
      team: '15 specialists'
    },
    {
      id: '5',
      title: 'Data Analytics Platform for Retail',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'Fragmented data sources and inability to gain actionable business insights.',
      solution: 'Built unified data analytics platform with machine learning capabilities for customer insights.',
      results: [
        '40% increase in sales conversion',
        '35% improvement in inventory management',
        'Real-time customer behavior analytics',
        'Personalized marketing campaigns'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '5 months',
      team: '9 specialists'
    },
    {
      id: '6',
      title: 'Blockchain Integration for Supply Chain',
      client: 'Global Logistics Ltd.',
      industry: 'Logistics',
      challenge: 'Lack of transparency and traceability in complex supply chain operations.',
      solution: 'Implemented blockchain-based tracking system for complete supply chain visibility.',
      results: [
        '100% supply chain traceability',
        '50% reduction in disputes',
        'Real-time shipment tracking',
        'Enhanced trust with partners'
      ],
      image: '/images/case-studies/blockchain-supply.jpg',
      duration: '7 months',
      team: '11 specialists'
    }
  ];

  const industries = [
    { name: 'Technology', icon: <Zap className="w-5 h-5" />, count: 15 },
    { name: 'Financial Services', icon: <Building2 className="w-5 h-5" />, count: 12 },
    { name: 'Healthcare', icon: <Shield className="w-5 h-5" />, count: 8 },
    { name: 'Manufacturing', icon: <TrendingUp className="w-5 h-5" />, count: 10 },
    { name: 'Retail', icon: <Users className="w-5 h-5" />, count: 6 }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI, cloud computing, and cybersecurity solutions." />
        <meta name="keywords" content="case studies, success stories, AI implementation, cloud migration, cybersecurity solutions, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform their operations 
                with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  View All Case Studies
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Overview */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We have successfully delivered solutions across various industries, 
                helping businesses achieve their digital transformation goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex justify-center mb-4 text-blue-600">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600">
                    {industry.count} projects completed
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-xl text-gray-600">
                Real results from real clients
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {study.industry}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                        {study.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4 text-gray-600">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{study.client}</span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {study.team}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          {study.duration}
                        </div>
                      </div>
                      
                      <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </button>
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
              <h2 className="text-4xl font-bold mb-4">
                Our Track Record
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Numbers that speak for themselves
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-lg opacity-90">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;