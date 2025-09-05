import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Heart, DollarSign, Settings, ShoppingCart, BookOpen, Building, ArrowRight, CheckCircle, Users, Shield, Cloud, Brain } from 'lucide-react';

const industries = [
  {
    title: 'Healthcare',
    description: 'AI-powered solutions for medical diagnosis, patient care, and healthcare management.',
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    features: ['Medical AI', 'Patient Management', 'Health Analytics', 'Compliance'],
    challenges: ['HIPAA Compliance', 'Data Security', 'Integration Complexity'],
    solutions: ['AI Diagnostics', 'Cloud Infrastructure', 'Security Solutions']
  },
  {
    title: 'Financial Services',
    description: 'Advanced fintech solutions for banking, insurance, and investment management.',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-500',
    features: ['Fraud Detection', 'Risk Assessment', 'Automated Trading', 'Compliance'],
    challenges: ['Regulatory Compliance', 'Security Requirements', 'Real-time Processing'],
    solutions: ['AI Analytics', 'Blockchain Integration', 'Cloud Security']
  },
  {
    title: 'Manufacturing',
    description: 'Smart manufacturing solutions with IoT, AI, and automation technologies.',
    icon: Settings,
    color: 'from-blue-500 to-cyan-500',
    features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain', 'Automation'],
    challenges: ['Legacy Systems', 'Integration', 'Scalability'],
    solutions: ['IoT Implementation', 'AI Optimization', 'Cloud Migration']
  },
  {
    title: 'E-commerce',
    description: 'Digital commerce solutions with AI-powered personalization and automation.',
    icon: ShoppingCart,
    color: 'from-purple-500 to-violet-500',
    features: ['Personalization', 'Inventory Management', 'Customer Service', 'Analytics'],
    challenges: ['Scalability', 'User Experience', 'Data Management'],
    solutions: ['AI Recommendations', 'Cloud Scaling', 'Mobile Optimization']
  },
  {
    title: 'Education',
    description: 'EdTech solutions for online learning, student management, and educational analytics.',
    icon: BookOpen,
    color: 'from-orange-500 to-yellow-500',
    features: ['Learning Management', 'Student Analytics', 'Content Delivery', 'Assessment'],
    challenges: ['Accessibility', 'Engagement', 'Data Privacy'],
    solutions: ['AI Tutoring', 'Cloud Platforms', 'Security Solutions']
  },
  {
    title: 'Real Estate',
    description: 'Property management and real estate technology solutions.',
    icon: Building,
    color: 'from-indigo-500 to-blue-500',
    features: ['Property Management', 'Market Analysis', 'Virtual Tours', 'CRM'],
    challenges: ['Data Integration', 'Market Volatility', 'Customer Experience'],
    solutions: ['AI Analytics', 'Cloud Infrastructure', 'Mobile Solutions']
  }
];

export default function Industries() {
  return (
    <Layout
      title="Industries We Serve - Zion Tech Group"
      description="We provide specialized technology solutions for various industries including healthcare, finance, manufacturing, e-commerce, education, and real estate."
      keywords="industries, healthcare technology, fintech, manufacturing solutions, e-commerce, education technology, real estate tech"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Industries We
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Serve
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We provide specialized technology solutions tailored to the unique needs 
                and challenges of various industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 bg-gradient-to-r ${industry.color} rounded-lg`}>
                        <industry.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 ml-4">
                        {industry.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {industry.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {industry.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Common Challenges:</h4>
                      <ul className="space-y-1">
                        {industry.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="text-sm text-gray-600">
                            • {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Our Solutions:</h4>
                      <ul className="space-y-1">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="text-sm text-gray-600">
                            • {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See Your Industry?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We work with businesses across all industries. Contact us to discuss 
                how we can help your specific industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}