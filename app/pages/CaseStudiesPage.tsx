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
        '$2M increase in annual revenue'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      duration: '8 months',
      challenge: 'Fragmented patient data and inefficient reporting',
      solution: 'Built comprehensive data analytics platform with real-time insights',
      results: [
        '50% reduction in reporting time',
        '30% improvement in patient outcomes',
        '80% increase in data accuracy',
        'Compliance with HIPAA regulations'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Manufacturing IoT Integration',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      duration: '12 months',
      challenge: 'Manual quality control and production inefficiencies',
      solution: 'Implemented IoT sensors and AI-powered quality control system',
      results: [
        '35% reduction in defects',
        '20% increase in production efficiency',
        '50% reduction in quality control costs',
        'Real-time production monitoring'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Financial Services Cloud Migration',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      duration: '10 months',
      challenge: 'Legacy systems and security concerns',
      solution: 'Migrated to secure cloud infrastructure with enhanced security measures',
      results: [
        '99.9% uptime achieved',
        '40% reduction in operational costs',
        'Enhanced security compliance',
        'Improved scalability and performance'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Education Learning Management System',
      client: 'EduTech University',
      industry: 'Education',
      duration: '7 months',
      challenge: 'Outdated learning platform and poor user experience',
      solution: 'Developed modern, mobile-first learning management system',
      results: [
        '70% increase in student engagement',
        '45% improvement in course completion rates',
        'Mobile app with 95% user satisfaction',
        'Integration with existing university systems'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Logistics Route Optimization',
      client: 'FastDelivery Corp.',
      industry: 'Logistics',
      duration: '5 months',
      challenge: 'Inefficient delivery routes and high fuel costs',
      solution: 'AI-powered route optimization and fleet management system',
      results: [
        '25% reduction in fuel costs',
        '30% improvement in delivery times',
        '40% increase in driver efficiency',
        'Real-time tracking and monitoring'
      ],
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies across various industries including e-commerce, healthcare, manufacturing, and more." />
        <meta name="keywords" content="case studies, success stories, project portfolio, AI solutions, IT services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Case <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Studies</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how we've helped businesses across various industries transform their operations 
              and achieve remarkable results with our technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {study.client.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-purple-400 font-semibold">{study.industry}</span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{study.client}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-green-400 flex items-center">
                          <TrendingUp className="w-3 h-3 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our proven technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;