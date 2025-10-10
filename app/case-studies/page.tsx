'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

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
  teamSize: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        'Reduced response time by 75%',
        'Cut operational costs by 40%',
        'Improved customer satisfaction by 60%'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      teamSize: '5 developers'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with enhanced security measures',
      results: [
        'Improved system performance by 300%',
        'Enhanced security compliance',
        'Reduced infrastructure costs by 50%'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      teamSize: '8 developers'
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Vulnerable systems and compliance requirements',
      solution: 'Comprehensive security audit and implementation',
      results: [
        'Achieved 100% compliance',
        'Zero security incidents',
        'Improved patient data protection'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      teamSize: '6 developers'
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '95%', label: 'Client Satisfaction' },
    { icon: Users, value: '150+', label: 'Projects Completed' },
    { icon: Award, value: '50+', label: 'Industry Awards' },
    { icon: CheckCircle, value: '100%', label: 'On-Time Delivery' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies | Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and client results from our AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Real results from real clients. See how we've transformed businesses with AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Case Studies
          </h2>
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
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">{study.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Client:</strong> {study.client}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Team: {study.teamSize}</span>
                    <span>Duration: {study.duration}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/consultation"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;