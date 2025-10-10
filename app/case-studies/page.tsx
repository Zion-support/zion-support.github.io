'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Building2, Users, TrendingUp, Shield, Zap, CheckCircle, Award } from 'lucide-react';

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
      title: 'Cybersecurity Enhancement Program',
      client: 'Healthcare Plus',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and need for HIPAA compliance in healthcare data management.',
      solution: 'Comprehensive security audit and implementation of multi-layered security framework with real-time monitoring.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security incidents in 12 months',
        'Real-time threat detection implemented',
        'Staff security training completed'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Manual monitoring processes and lack of real-time insights into production efficiency.',
      solution: 'Developed comprehensive IoT platform with sensors, data analytics, and predictive maintenance capabilities.',
      results: [
        '30% increase in production efficiency',
        '25% reduction in maintenance costs',
        'Real-time production monitoring',
        'Predictive maintenance alerts'
      ],
      image: '/images/case-studies/iot-manufacturing.jpg',
      duration: '8 months',
      team: '10 specialists'
    },
    {
      id: '5',
      title: 'Data Analytics Dashboard for Retail',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Fragmented data sources and lack of unified analytics for business decision making.',
      solution: 'Created centralized data warehouse with interactive dashboards and machine learning insights.',
      results: [
        '40% improvement in inventory management',
        '20% increase in sales through insights',
        'Real-time business intelligence',
        'Automated reporting system'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '5 months',
      team: '7 specialists'
    },
    {
      id: '6',
      title: 'DevOps Transformation Initiative',
      client: 'Software Solutions Ltd.',
      industry: 'Software Development',
      challenge: 'Slow deployment cycles and frequent production issues affecting customer experience.',
      solution: 'Implemented complete DevOps culture with automated testing, CI/CD pipelines, and monitoring systems.',
      results: [
        '80% faster deployment cycles',
        '90% reduction in production incidents',
        'Automated testing coverage',
        'Improved team collaboration'
      ],
      image: '/images/case-studies/devops-transformation.jpg',
      duration: '6 months',
      team: '9 specialists'
    }
  ];

  const stats = [
    { icon: <Building2 className="w-8 h-8 text-blue-500" />, value: '50+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8 text-green-500" />, value: '100+', label: 'Happy Clients' },
    { icon: <TrendingUp className="w-8 h-8 text-purple-500" />, value: '95%', label: 'Success Rate' },
    { icon: <Award className="w-8 h-8 text-yellow-500" />, value: '15+', label: 'Industry Awards' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful projects and case studies showcasing how Zion Tech Group delivers innovative solutions across various industries." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, cybersecurity, IoT solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results - see how we've helped businesses achieve their goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Building2 className="w-4 h-4 mr-1" />
                    <span>{study.industry}</span>
                    <span className="mx-2">•</span>
                    <span>{study.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    <strong>Client:</strong> {study.client}
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{study.team}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.slice(0, 3).map((study) => (
              <div key={study.id} className="bg-gray-50 rounded-lg p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Building2 className="w-4 h-4 mr-1" />
                      <span>{study.industry}</span>
                      <span className="mx-2">•</span>
                      <span>{study.duration}</span>
                      <span className="mx-2">•</span>
                      <Users className="w-4 h-4 mr-1" />
                      <span>{study.team}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      <strong>Client:</strong> {study.client}
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Results:</h4>
                      <div className="space-y-2">
                        {study.results.map((result, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;