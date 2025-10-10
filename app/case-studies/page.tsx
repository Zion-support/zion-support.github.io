'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      image: '/images/case-studies/ai-customer-service.jpg',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      duration: '3 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      image: '/images/case-studies/cloud-migration.jpg',
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated CI/CD pipelines.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment cycles',
        'Enhanced security compliance'
      ],
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      challenge: 'Increasing cyber threats and need for HIPAA compliance in healthcare data management.',
      solution: 'Implemented comprehensive security framework with zero-trust architecture and advanced threat detection.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security incidents',
        'Real-time threat monitoring',
        'Automated compliance reporting'
      ],
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'ManufacturingPro Inc',
      industry: 'Manufacturing',
      image: '/images/case-studies/iot-manufacturing.jpg',
      challenge: 'Need for real-time monitoring and predictive maintenance in manufacturing operations.',
      solution: 'Developed comprehensive IoT platform with sensors, edge computing, and predictive analytics.',
      results: [
        '30% reduction in downtime',
        '25% increase in production efficiency',
        'Predictive maintenance accuracy of 95%',
        'Real-time operational insights'
      ],
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: '5',
      title: 'Data Analytics Dashboard for Retail',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      image: '/images/case-studies/data-analytics-retail.jpg',
      challenge: 'Lack of real-time insights into customer behavior and sales performance across multiple channels.',
      solution: 'Built comprehensive analytics platform with real-time dashboards and machine learning insights.',
      results: [
        '40% increase in sales conversion',
        'Real-time inventory optimization',
        'Customer behavior insights',
        'Automated reporting system'
      ],
      duration: '3 months',
      team: '7 specialists'
    },
    {
      id: '6',
      title: 'DevOps Transformation for E-commerce',
      client: 'ShopOnline Ltd',
      industry: 'E-commerce',
      image: '/images/case-studies/devops-ecommerce.jpg',
      challenge: 'Slow deployment cycles and frequent production issues affecting customer experience.',
      solution: 'Implemented modern DevOps practices with containerization, CI/CD, and automated testing.',
      results: [
        '80% faster deployment cycles',
        '90% reduction in production issues',
        'Automated testing coverage of 95%',
        'Improved team collaboration'
      ],
      duration: '4 months',
      team: '9 specialists'
    }
  ];

  const stats = [
    { icon: <Building2 className="w-8 h-8 text-blue-500" />, number: '150+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8 text-green-500" />, number: '200+', label: 'Happy Clients' },
    { icon: <TrendingUp className="w-8 h-8 text-purple-500" />, number: '95%', label: 'Success Rate' },
    { icon: <Shield className="w-8 h-8 text-red-500" />, number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, success stories, technology implementation, digital transformation, AI solutions, cloud migration" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover how we've helped businesses transform their operations and achieve remarkable results
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results - see how we've helped businesses across industries achieve their goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{study.industry.charAt(0)}</div>
                    <div className="text-sm opacity-90">{study.industry}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {study.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    <strong>Client:</strong> {study.client}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{study.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          {result}
                        </li>
                      ))}
                      {study.results.length > 2 && (
                        <li className="text-gray-500 text-xs">
                          +{study.results.length - 2} more results
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Team: {study.team}
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 text-sm">
                      Read Full Case Study
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can help transform your business with innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;