import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      duration: '6 months',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '25% reduction in cart abandonment',
        '60% improvement in customer engagement',
        '35% increase in average order value'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      duration: '8 months',
      challenge: 'Fragmented patient data and inefficient diagnosis processes',
      solution: 'Developed comprehensive data analytics platform with AI-powered diagnostic tools',
      results: [
        '50% faster diagnosis times',
        '30% reduction in diagnostic errors',
        '80% improvement in data accessibility',
        '25% cost savings in operations'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Manufacturing IoT Integration',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      duration: '4 months',
      challenge: 'Manual quality control processes and equipment downtime',
      solution: 'Implemented IoT sensors and AI-powered predictive maintenance system',
      results: [
        '45% reduction in equipment downtime',
        '30% improvement in product quality',
        '20% increase in production efficiency',
        '50% reduction in maintenance costs'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Financial Services Security Enhancement',
      client: 'SecureBank Ltd.',
      industry: 'Finance',
      duration: '5 months',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Deployed advanced cybersecurity solutions and AI-powered fraud detection',
      results: [
        '90% reduction in security incidents',
        '99.9% system uptime achieved',
        '100% compliance with regulations',
        '60% faster threat detection'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Cloud Infrastructure Migration',
      client: 'GlobalTech Solutions',
      industry: 'Technology',
      duration: '3 months',
      challenge: 'Legacy systems and scalability limitations',
      solution: 'Complete cloud migration with modern architecture and microservices',
      results: [
        '70% reduction in infrastructure costs',
        '300% improvement in scalability',
        '50% faster deployment times',
        '99.9% availability achieved'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Educational Platform AI Integration',
      client: 'EduTech Academy',
      industry: 'Education',
      duration: '7 months',
      challenge: 'Low student engagement and personalized learning needs',
      solution: 'AI-powered personalized learning platform with adaptive content delivery',
      results: [
        '65% increase in student engagement',
        '40% improvement in learning outcomes',
        '50% reduction in dropout rates',
        '80% student satisfaction rating'
      ],
      image: '/api/placeholder/600/400'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI projects, IT solutions, business transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Real success stories from our clients across various industries
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
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
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

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses achieve their goals with innovative technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200"></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {study.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {study.client}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let us help you achieve similar results with our proven technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;