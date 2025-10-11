'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Award } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  featured: boolean;
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global Retail Chain',
      industry: 'Retail',
      challenge: 'The client was struggling with high customer service costs and inconsistent response times across their 500+ stores worldwide.',
      solution: 'We implemented an AI-powered chatbot system integrated with their existing CRM, providing 24/7 customer support with intelligent routing and automated responses.',
      results: [
        '60% reduction in customer service costs',
        '85% improvement in response time',
        '40% increase in customer satisfaction',
        '90% of queries resolved automatically'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      featured: true,
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'Regional Bank',
      industry: 'Financial Services',
      challenge: 'Legacy on-premises infrastructure was limiting scalability and increasing operational costs while failing to meet compliance requirements.',
      solution: 'We designed and executed a comprehensive cloud migration strategy using AWS, implementing microservices architecture and automated compliance monitoring.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster application deployment',
        'Full compliance with financial regulations'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      featured: true,
      duration: '8 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Overhaul for Healthcare Provider',
      client: 'Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Multiple security breaches and non-compliance with HIPAA regulations were putting patient data at risk.',
      solution: 'We implemented a comprehensive cybersecurity framework including zero-trust architecture, advanced threat detection, and staff training programs.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security incidents in 18 months',
        '95% reduction in security vulnerabilities',
        'Complete data encryption implementation'
      ],
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      featured: false,
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Manual production monitoring was leading to inefficiencies and quality issues in their manufacturing processes.',
      solution: 'We developed a comprehensive IoT platform with real-time monitoring, predictive maintenance, and automated quality control systems.',
      results: [
        '25% increase in production efficiency',
        '30% reduction in equipment downtime',
        '20% improvement in product quality',
        'Real-time production insights'
      ],
      image: '/images/case-studies/iot-manufacturing.jpg',
      featured: false,
      duration: '10 months',
      team: '15 specialists'
    }
  ];

  const industries = ['All', 'Retail', 'Financial Services', 'Healthcare', 'Manufacturing', 'Technology', 'Education'];

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industries Served' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Success Stories | Zion Tech Group</title>
        <meta name="description" content="Explore our successful technology implementations across various industries. See how we've helped clients achieve their digital transformation goals." />
        <meta name="keywords" content="case studies, success stories, technology implementations, digital transformation, AI solutions, cloud migration" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Discover how we've helped businesses transform their operations with cutting-edge technology solutions.
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
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                Featured Case Studies
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.filter(study => study.featured).map((study) => (
                  <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        <span className="ml-2 text-sm text-gray-500">
                          {study.duration} • {study.team}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        <strong>Client:</strong> {study.client}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{result}</span>
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

        {/* All Case Studies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                All Case Studies
              </h2>
              <div className="space-y-8">
                {caseStudies.map((study) => (
                  <div key={study.id} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {study.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {study.industry}
                          </span>
                          <span className="text-sm">
                            <strong>Client:</strong> {study.client}
                          </span>
                          <span className="text-sm">
                            <strong>Duration:</strong> {study.duration}
                          </span>
                          <span className="text-sm">
                            <strong>Team:</strong> {study.team}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {study.results.map((result, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's discuss how we can help transform your business with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Our Services
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