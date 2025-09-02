import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Modernization',
      client: 'RetailTech Solutions',
      industry: 'E-commerce',
      challenge: 'Legacy system causing performance issues and poor user experience',
      solution: 'Complete platform rebuild with modern architecture and AI-powered recommendations',
      results: [
        '300% increase in page load speed',
        '150% improvement in conversion rates',
        '50% reduction in server costs',
        '99.9% uptime achieved'
      ],
      duration: '6 months',
      team: '8 developers',
      image: '/case-studies/ecommerce.jpg'
    },
    {
      id: 2,
      title: 'AI-Powered Customer Service Automation',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated workflow system',
      results: [
        '80% reduction in support tickets',
        '90% customer satisfaction rate',
        '60% cost savings on support',
        '24/7 automated customer service'
      ],
      duration: '4 months',
      team: '6 developers',
      image: '/case-studies/ai-customer-service.jpg'
    },
    {
      id: 3,
      title: 'Cloud Migration & DevOps Transformation',
      client: 'HealthTech Innovations',
      industry: 'Healthcare',
      challenge: 'On-premise infrastructure limiting scalability and reliability',
      solution: 'Complete cloud migration with CI/CD pipeline and monitoring',
      results: [
        '99.99% system availability',
        '70% faster deployment times',
        '40% reduction in infrastructure costs',
        'Zero downtime during migration'
      ],
      duration: '8 months',
      team: '10 developers',
      image: '/case-studies/cloud-migration.jpg'
    },
    {
      id: 4,
      title: 'Mobile App Development for Food Delivery',
      client: 'QuickBite Delivery',
      industry: 'Food & Beverage',
      challenge: 'Need for a scalable mobile platform to compete in the market',
      solution: 'Cross-platform mobile app with real-time tracking and payment integration',
      results: [
        '500% increase in orders',
        '4.8/5 app store rating',
        '200% growth in user base',
        '30% improvement in delivery times'
      ],
      duration: '5 months',
      team: '7 developers',
      image: '/case-studies/mobile-app.jpg'
    },
    {
      id: 5,
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'ManufacturingCorp',
      industry: 'Manufacturing',
      challenge: 'Lack of data visibility affecting operational efficiency',
      solution: 'Comprehensive BI platform with real-time analytics and predictive insights',
      results: [
        '25% improvement in operational efficiency',
        '30% reduction in waste',
        'Real-time production monitoring',
        'Predictive maintenance capabilities'
      ],
      duration: '7 months',
      team: '9 developers',
      image: '/case-studies/data-analytics.jpg'
    },
    {
      id: 6,
      title: 'Blockchain Supply Chain Solution',
      client: 'GlobalLogistics Inc',
      industry: 'Logistics',
      challenge: 'Supply chain transparency and traceability issues',
      solution: 'Blockchain-based supply chain tracking and verification system',
      results: [
        '100% supply chain transparency',
        '50% reduction in fraud cases',
        'Real-time shipment tracking',
        'Automated compliance reporting'
      ],
      duration: '9 months',
      team: '12 developers',
      image: '/case-studies/blockchain.jpg'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: TrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: Users },
    { number: '6 Months', label: 'Average Project Time', icon: Clock },
    { number: '500%', label: 'Average ROI Improvement', icon: TrendingUp }
  ];

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and see how we've helped businesses transform their operations with cutting-edge technology solutions."
      keywords="case studies, success stories, project portfolio, technology solutions, business transformation"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Success
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Stories</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how we've helped businesses across industries transform their operations, 
            increase efficiency, and achieve remarkable growth through innovative technology solutions.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. See how our technology solutions have transformed businesses across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Project Image</span>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">{study.duration}</span>
                    <span className="text-gray-500 text-sm">{study.team}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 mb-4">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="group">
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
                Start Your Project
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/services" className="group">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
                View Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudies;