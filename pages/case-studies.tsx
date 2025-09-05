import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    title: 'AI-Powered Customer Service Automation',
    client: 'Fortune 500 Retail Company',
    industry: 'Retail',
    challenge: 'High customer service costs and inconsistent response times',
    solution: 'Implemented AI chatbot and automated ticket routing system',
    results: [
      '60% reduction in customer service costs',
      '80% faster response times',
      '95% customer satisfaction rate'
    ],
    image: '/api/placeholder/600/400',
    icon: TrendingUp
  },
  {
    title: 'Cloud Migration & DevOps Transformation',
    client: 'Mid-Size Manufacturing Company',
    industry: 'Manufacturing',
    challenge: 'Outdated on-premise infrastructure limiting scalability',
    solution: 'Complete cloud migration with CI/CD pipeline implementation',
    results: [
      '50% reduction in infrastructure costs',
      '99.9% uptime achieved',
      '3x faster deployment cycles'
    ],
    image: '/api/placeholder/600/400',
    icon: CheckCircle
  },
  {
    title: 'Micro SaaS Platform Development',
    client: 'Growing Tech Startup',
    industry: 'Technology',
    challenge: 'Need for scalable, multi-tenant SaaS solution',
    solution: 'Built custom micro SaaS platform with advanced analytics',
    results: [
      '200% increase in user engagement',
      '40% reduction in development time',
      '50% increase in revenue'
    ],
    image: '/api/placeholder/600/400',
    icon: DollarSign
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Industries Served' },
  { number: '5+', label: 'Years Experience' }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout 
      title="Case Studies - Zion Tech Group"
      description="Explore our successful projects and see how we've helped businesses transform through technology."
    >
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold mb-6"
              >
                Success Stories
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 mb-8"
              >
                Discover how we've helped businesses across industries transform 
                their operations and achieve remarkable results through technology.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
                <p className="text-xl text-gray-600">
                  Real projects, real results, real impact.
                </p>
              </div>

              <div className="space-y-16">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <study.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-900">{study.title}</h3>
                            <p className="text-blue-600 font-medium">{study.client}</p>
                            <p className="text-gray-600 text-sm">{study.industry}</p>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                          <p className="text-gray-600 mb-4">{study.challenge}</p>
                          
                          <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                          <p className="text-gray-600 mb-4">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Results:</h4>
                        <ul className="space-y-3">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Success Story?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how we can help transform your business with our proven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}