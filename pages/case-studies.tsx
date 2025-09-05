import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, ArrowRight, ExternalLink, Users, Clock, Target, CheckCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const caseStudies = [
  {
    title: 'Healthcare Platform Transformation',
    client: 'MedTech Solutions',
    industry: 'Healthcare',
    challenge: 'Legacy system modernization and HIPAA compliance',
    solution: 'Complete platform rebuild with modern architecture',
    results: {
      performance: '300%',
      compliance: '100%',
      userSatisfaction: '95%',
      costReduction: '40%'
    },
    image: '/images/case-studies/healthcare.jpg',
    tags: ['Healthcare', 'HIPAA', 'Modernization', 'Cloud Migration']
  },
  {
    title: 'E-commerce Scaling Solution',
    client: 'RetailMax',
    industry: 'E-commerce',
    challenge: 'Handling 10x traffic growth during peak seasons',
    solution: 'Auto-scaling infrastructure and performance optimization',
    results: {
      performance: '500%',
      uptime: '99.9%',
      userSatisfaction: '98%',
      costReduction: '25%'
    },
    image: '/images/case-studies/ecommerce.jpg',
    tags: ['E-commerce', 'Scaling', 'Performance', 'Cloud']
  },
  {
    title: 'Financial Services Security Enhancement',
    client: 'SecureBank',
    industry: 'Finance',
    challenge: 'PCI DSS compliance and fraud detection',
    solution: 'Advanced security framework and AI-powered fraud detection',
    results: {
      security: '100%',
      fraudDetection: '99.5%',
      compliance: '100%',
      userSatisfaction: '92%'
    },
    image: '/images/case-studies/finance.jpg',
    tags: ['Finance', 'Security', 'PCI DSS', 'AI']
  },
  {
    title: 'Manufacturing IoT Integration',
    client: 'IndustrialCorp',
    industry: 'Manufacturing',
    challenge: 'IoT device integration and real-time monitoring',
    solution: 'Comprehensive IoT platform with real-time analytics',
    results: {
      efficiency: '250%',
      downtime: '60%',
      costReduction: '35%',
      userSatisfaction: '90%'
    },
    image: '/images/case-studies/manufacturing.jpg',
    tags: ['Manufacturing', 'IoT', 'Analytics', 'Automation']
  },
  {
    title: 'Educational Platform Development',
    client: 'EduTech Academy',
    industry: 'Education',
    challenge: 'Scalable learning management system',
    solution: 'Custom LMS with AI-powered personalization',
    results: {
      engagement: '400%',
      completion: '85%',
      userSatisfaction: '96%',
      costReduction: '50%'
    },
    image: '/images/case-studies/education.jpg',
    tags: ['Education', 'LMS', 'AI', 'Personalization']
  },
  {
    title: 'Real Estate Platform Modernization',
    client: 'PropertyPro',
    industry: 'Real Estate',
    challenge: 'Legacy system integration and mobile optimization',
    solution: 'Complete platform rebuild with mobile-first design',
    results: {
      mobileUsage: '300%',
      userSatisfaction: '94%',
      conversion: '150%',
      costReduction: '30%'
    },
    image: '/images/case-studies/real-estate.jpg',
    tags: ['Real Estate', 'Mobile', 'Modernization', 'Integration']
  }
];

const industries = [
  { name: 'Healthcare', count: 15, color: 'bg-red-500' },
  { name: 'Finance', count: 12, color: 'bg-green-500' },
  { name: 'E-commerce', count: 18, color: 'bg-blue-500' },
  { name: 'Education', count: 10, color: 'bg-purple-500' },
  { name: 'Manufacturing', count: 8, color: 'bg-orange-500' },
  { name: 'Real Estate', count: 6, color: 'bg-yellow-500' }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and client transformations across various industries. See how we've helped businesses achieve their goals."
      keywords="case studies, client success, project portfolio, industry solutions, business transformation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <BarChart3 className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Studies</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Real success stories from our clients across various industries and business challenges
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#case-studies"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  View Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-colors"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600">
                Over 69 successful projects across 6 major industries
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 ${industry.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white font-bold text-xl">{industry.count}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section id="case-studies" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Stories</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations and achieve remarkable results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-2">{study.results.performance}</div>
                      <div className="text-sm opacity-90">Performance Improvement</div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <Link
                        href="#"
                        className="text-blue-600 hover:text-blue-700 inline-flex items-center text-sm font-medium"
                      >
                        Read More
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </Link>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.client}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join our growing list of successful clients and transform your business with our proven solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/solutions"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-colors"
                >
                  View Our Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}