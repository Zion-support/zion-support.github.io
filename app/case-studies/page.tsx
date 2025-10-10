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
      image: '/images/case-studies/ai-customer-service.jpg',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '60% reduction in response time',
        '40% cost savings',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      duration: '3 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Migration',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      image: '/images/case-studies/cloud-migration.jpg',
      challenge: 'Legacy systems causing performance issues and high maintenance costs',
      solution: 'Complete migration to AWS with microservices architecture',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster application performance',
        'Enhanced security compliance'
      ],
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement Program',
      client: 'Healthcare Plus',
      industry: 'Healthcare',
      image: '/images/case-studies/cybersecurity.jpg',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive security audit and implementation of advanced protection measures',
      results: [
        'Zero security breaches in 12 months',
        '100% compliance with HIPAA regulations',
        '75% reduction in security incidents',
        'Enhanced data protection protocols'
      ],
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'IoT Platform Development',
      client: 'Smart Manufacturing Co.',
      industry: 'Manufacturing',
      image: '/images/case-studies/iot-platform.jpg',
      challenge: 'Need for real-time monitoring and predictive maintenance',
      solution: 'Custom IoT platform with machine learning capabilities',
      results: [
        '30% reduction in downtime',
        '25% increase in production efficiency',
        'Predictive maintenance accuracy of 95%',
        'Real-time monitoring dashboard'
      ],
      duration: '8 months',
      team: '15 specialists'
    },
    {
      id: '5',
      title: 'Data Analytics & Business Intelligence',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      image: '/images/case-studies/data-analytics.jpg',
      challenge: 'Lack of data-driven insights for business decisions',
      solution: 'Advanced analytics platform with real-time reporting',
      results: [
        '40% improvement in inventory management',
        '25% increase in sales through targeted marketing',
        'Real-time business intelligence dashboard',
        'Data-driven decision making culture'
      ],
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: '6',
      title: 'Mobile App Development',
      client: 'FitnessFirst',
      industry: 'Health & Fitness',
      image: '/images/case-studies/mobile-app.jpg',
      challenge: 'Need for a comprehensive fitness tracking and coaching app',
      solution: 'Cross-platform mobile app with AI-powered personalization',
      results: [
        '500K+ downloads in first 6 months',
        '4.8/5 app store rating',
        '60% user retention rate',
        'AI-powered workout recommendations'
      ],
      duration: '6 months',
      team: '8 specialists'
    }
  ];

  const industries = ['All', 'Technology', 'Financial Services', 'Healthcare', 'Manufacturing', 'Retail', 'Health & Fitness'];

  const stats = [
    { icon: <Building2 className="w-8 h-8" />, value: '100+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8" />, value: '50+', label: 'Happy Clients' },
    { icon: <TrendingUp className="w-8 h-8" />, value: '95%', label: 'Success Rate' },
    { icon: <Shield className="w-8 h-8" />, value: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful projects and case studies across various industries. See how we've helped businesses transform through technology." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, cybersecurity, IoT development" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success <span className="text-blue-400">Stories</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Discover how we've helped businesses across industries transform through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-blue-600">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Case Studies</h2>
              <p className="text-xl text-gray-600">
                Real projects, real results, real impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Building2 className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm text-blue-600 font-medium">{study.industry}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                      {study.title}
                    </h3>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Client:</strong> {study.client}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Duration:</strong> {study.duration}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Team:</strong> {study.team}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-sm text-gray-600 mb-3">{study.challenge}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-sm text-gray-600 mb-3">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <Zap className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
              <p className="text-xl text-gray-600">
                We have extensive experience across various sectors
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {industries.slice(1).map((industry) => (
                <div key={industry} className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;