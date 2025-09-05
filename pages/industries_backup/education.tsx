import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Users, CheckCircle, ArrowRight, GraduationCap, BarChart3, FileText, Video, Globe, Database } from 'lucide-react';
import Layout from '../../components/Layout';

const educationServices = [
  {
    title: 'AI-Powered Learning Management System',
    description: 'Intelligent LMS with personalized learning paths and automated assessment',
    icon: BookOpen,
    features: ['Personalized Learning', 'Automated Assessment', 'Progress Tracking', 'Content Management'],
    pricing: '$5,000 - $15,000/month',
    category: 'Learning Management',
    popular: true,
    benefits: ['Improved Learning Outcomes', 'Reduced Administrative Work', 'Better Engagement', 'Data-Driven Insights'],
    marketPrice: '$8,000 - $25,000/month',
    link: 'https://ziontechgroup.com/ai-lms',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Student Information System',
    description: 'Comprehensive SIS for managing student data, enrollment, and academic records',
    icon: Database,
    features: ['Student Records', 'Enrollment Management', 'Grade Management', 'Reporting'],
    pricing: '$3,000 - $10,000/month',
    category: 'Student Management',
    popular: true,
    benefits: ['Streamlined Operations', 'Better Data Management', 'Improved Efficiency', 'Enhanced Security'],
    marketPrice: '$5,000 - $15,000/month',
    link: 'https://ziontechgroup.com/student-information-system',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Tutoring System',
    description: 'Intelligent tutoring system that adapts to individual student learning styles',
    icon: Brain,
    features: ['Adaptive Learning', 'Real-time Feedback', 'Progress Analytics', 'Multi-subject Support'],
    pricing: '$4,000 - $12,000/month',
    category: 'AI Tutoring',
    popular: true,
    benefits: ['Personalized Learning', '24/7 Availability', 'Improved Performance', 'Cost Effective'],
    marketPrice: '$6,000 - $18,000/month',
    link: 'https://ziontechgroup.com/ai-tutoring',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Virtual Classroom Platform',
    description: 'Advanced virtual classroom with interactive features and collaboration tools',
    icon: Video,
    features: ['Video Conferencing', 'Interactive Whiteboard', 'Screen Sharing', 'Breakout Rooms'],
    pricing: '$2,000 - $8,000/month',
    category: 'Virtual Learning',
    popular: false,
    benefits: ['Remote Learning', 'Cost Savings', 'Flexible Scheduling', 'Global Access'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/virtual-classroom',
    contact: '+1 302 464 0950'
  }
];

const stats = [
  { number: '500+', label: 'Educational Institutions' },
  { number: '1M+', label: 'Students Served' },
  { number: '95%', label: 'Satisfaction Rate' },
  { number: '24/7', label: 'Support Available' }
];

export default function EducationPage() {
  return (
    <Layout
      title="Education Solutions - Zion Tech Group | EdTech Innovation"
      description="Transform education with our AI-powered learning management systems, student information systems, and virtual classroom platforms."
      keywords="education technology, edtech, learning management system, student information system, virtual classroom, AI tutoring"
    >
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Education <span className="text-blue-400">Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            >
              Transform education with cutting-edge technology and AI-powered solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                Get Started
              </Link>
              <Link href="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                View Pricing
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education Solutions</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for educational institutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {educationServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Our Price:</span>
                      <span className="font-semibold text-blue-600">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Market Price:</span>
                      <span className="text-sm text-gray-600 line-through">{service.marketPrice}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={service.link}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Education?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Partner with us to create innovative educational solutions that enhance learning outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <Link href="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}