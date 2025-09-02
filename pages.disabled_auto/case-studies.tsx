import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CaseStudiesPage: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Legacy system causing 40% cart abandonment and poor mobile experience',
      solution: 'Complete platform modernization with AI-powered recommendations and mobile-first design',
      results: [
        { metric: 'Cart Abandonment', before: '40%', after: '12%', improvement: '70% reduction' },
        { metric: 'Mobile Conversion', before: '1.2%', after: '4.8%', improvement: '300% increase' },
        { metric: 'Page Load Speed', before: '4.2s', after: '0.8s', improvement: '81% faster' },
        { metric: 'Revenue Growth', before: '$2M', after: '$5.2M', improvement: '160% increase' }
      ],
      technologies: ['React', 'Node.js', 'AI/ML', 'AWS', 'MongoDB'],
      duration: '6 months',
      team: '12 developers'
    },
    {
      id: 2,
      title: 'Healthcare AI Implementation',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Manual patient data processing taking 8+ hours daily, prone to errors',
      solution: 'AI-powered document processing and predictive analytics for patient care',
      results: [
        { metric: 'Processing Time', before: '8 hours', after: '45 minutes', improvement: '91% reduction' },
        { metric: 'Accuracy Rate', before: '78%', after: '98%', improvement: '26% increase' },
        { metric: 'Cost Savings', before: '$50K/month', after: '$12K/month', improvement: '76% reduction' },
        { metric: 'Patient Satisfaction', before: '3.2/5', after: '4.7/5', improvement: '47% increase' }
      ],
      technologies: ['Python', 'TensorFlow', 'NLP', 'Computer Vision', 'HIPAA Compliance'],
      duration: '4 months',
      team: '8 developers'
    },
    {
      id: 3,
      title: 'Manufacturing IoT Integration',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Equipment downtime costing $2M annually with no predictive maintenance',
      solution: 'IoT sensors with AI-powered predictive maintenance and real-time monitoring',
      results: [
        { metric: 'Equipment Downtime', before: '15%', after: '3%', improvement: '80% reduction' },
        { metric: 'Maintenance Costs', before: '$2M/year', after: '$400K/year', improvement: '80% reduction' },
        { metric: 'Production Efficiency', before: '78%', after: '94%', improvement: '21% increase' },
        { metric: 'ROI', before: 'N/A', after: '340%', improvement: 'First year ROI' }
      ],
      technologies: ['IoT', 'Edge Computing', 'Machine Learning', 'Real-time Analytics', 'Cloud'],
      duration: '8 months',
      team: '15 developers'
    },
    {
      id: 4,
      title: 'Financial Services Automation',
      company: 'FinTech Global',
      industry: 'Financial Services',
      challenge: 'Manual loan processing taking 5-7 days with high error rates',
      solution: 'AI-powered loan processing with automated risk assessment and fraud detection',
      results: [
        { metric: 'Processing Time', before: '5-7 days', after: '2 hours', improvement: '95% reduction' },
        { metric: 'Error Rate', before: '12%', after: '0.8%', improvement: '93% reduction' },
        { metric: 'Customer Satisfaction', before: '3.5/5', after: '4.8/5', improvement: '37% increase' },
        { metric: 'Operational Costs', before: '$200K/month', after: '$45K/month', improvement: '78% reduction' }
      ],
      technologies: ['AI/ML', 'Blockchain', 'API Integration', 'Security', 'Compliance'],
      duration: '5 months',
      team: '10 developers'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: TrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: Users },
    { number: '$50M+', label: 'Cost Savings Delivered', icon: DollarSign },
    { number: '24/7', label: 'Support Available', icon: Clock },
  ];

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Real-world success stories showcasing how we've helped businesses transform with cutting-edge technology solutions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Success Stories That Inspire
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how we've helped businesses across industries achieve remarkable results with our innovative technology solutions.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-center mb-3">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses. See how our solutions drive measurable impact.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Overview */}
                    <div>
                      <div className="mb-6">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {study.industry}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-2">
                          {study.title}
                        </h3>
                        <p className="text-lg text-gray-600 font-semibold">{study.company}</p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Project Details</h4>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span><strong>Duration:</strong> {study.duration}</span>
                            <span><strong>Team Size:</strong> {study.team}</span>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Results */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-6">Key Results</h4>
                      <div className="space-y-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold text-gray-900">{result.metric}</span>
                              <span className="text-sm text-green-600 font-semibold">
                                {result.improvement}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <span>Before: {result.before}</span>
                              <ArrowRight className="w-4 h-4 text-gray-400" />
                              <span>After: {result.after}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
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
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="group">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Start Your Project
                </button>
              </Link>
              <Link href="/services" className="group">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  View Our Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudiesPage;