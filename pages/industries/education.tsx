<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BookOpen,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Clock,
  Award,
  Brain,
  Shield,
  Target,
  TrendingUp,
  Globe,
  Building,
  Rocket,
  Lock,
  Activity,
  GraduationCap,
  FileText,
  Database,
  Video
} from 'lucide-react';
=======
<<<<<<< HEAD
import Link from 'next/link';
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
import Layout from '../../components/Layout';

const solutions = [
  {
<<<<<<< HEAD
    title: 'Learning Management System',
    description: 'Comprehensive LMS with AI-powered personalized learning paths and analytics.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Progress Tracking', 'Interactive Content', 'Assessment Tools'],
    benefits: ['40% better outcomes', '60% engagement increase', 'Real-time analytics', 'Mobile access']
  },
  {
    title: 'Virtual Classroom Platform',
    description: 'Advanced virtual classroom with video conferencing and collaboration tools.',
    icon: Video,
    features: ['HD Video Conferencing', 'Screen Sharing', 'Breakout Rooms', 'Recording & Playback'],
    benefits: ['99% uptime', 'Global accessibility', 'Interactive features', 'Seamless integration']
  },
  {
    title: 'Student Analytics',
    description: 'AI-powered student performance analytics and early intervention systems.',
    icon: BarChart3,
    features: ['Performance Tracking', 'Predictive Analytics', 'Early Warning System', 'Intervention Recommendations'],
    benefits: ['30% dropout reduction', '25% grade improvement', 'Proactive support', 'Data-driven insights']
  },
  {
    title: 'Administrative Automation',
    description: 'Streamline administrative processes with automated workflows and systems.',
    icon: Building,
    features: ['Enrollment Management', 'Grade Management', 'Scheduling', 'Communication Tools'],
    benefits: ['50% time savings', 'Reduced errors', 'Better organization', 'Improved efficiency']
=======
    title: 'AI-Powered Learning Management System',
    description: 'Intelligent LMS that adapts to each student\'s learning style and pace',
    icon: Brain,
    features: ['Personalized Learning Paths', 'Adaptive Assessments', 'Progress Tracking', 'Real-time Analytics']
  },
  {
    title: 'Virtual Classroom Platform',
    description: 'Advanced virtual classroom with AI-powered features for enhanced learning',
    icon: Video,
    features: ['Live Video Streaming', 'Interactive Whiteboard', 'Breakout Rooms', 'AI Moderation']
  },
  {
    title: 'Student Analytics Dashboard',
    description: 'Comprehensive analytics to track student performance and engagement',
    icon: BarChart3,
    features: ['Performance Metrics', 'Engagement Tracking', 'Predictive Analytics', 'Custom Reports']
  },
  {
    title: 'Content Management System',
    description: 'AI-powered content creation and management for educational materials',
    icon: FileText,
    features: ['Auto-generated Content', 'Multimedia Support', 'Version Control', 'Collaboration Tools']
=======
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, BookOpen, Users, GraduationCap, Clock, Star, Shield } from 'lucide-react';

const solutions = [
  {
    title: 'Learning Management Systems (LMS)',
    description: 'Comprehensive LMS platforms with course management, student tracking, and assessment tools.',
    features: ['Course Management', 'Student Tracking', 'Assessment Tools', 'Mobile Access'],
    icon: BookOpen
  },
  {
    title: 'Virtual Classrooms',
    description: 'Interactive virtual learning environments with video conferencing and collaboration tools.',
    features: ['Video Conferencing', 'Screen Sharing', 'Interactive Whiteboards', 'Breakout Rooms'],
    icon: Users
  },
  {
    title: 'Student Information Systems',
    description: 'Integrated SIS for managing student data, enrollment, and academic records.',
    features: ['Student Records', 'Enrollment Management', 'Grade Tracking', 'Parent Portals'],
    icon: GraduationCap
  },
  {
    title: 'Educational Analytics',
    description: 'Data-driven insights for student performance, engagement, and institutional effectiveness.',
    features: ['Performance Analytics', 'Engagement Tracking', 'Predictive Modeling', 'Reporting Dashboards'],
    icon: BookOpen
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  }
];

const benefits = [
  {
<<<<<<< HEAD
    icon: GraduationCap,
    title: 'Student Success',
    description: 'Improve student outcomes with personalized learning and analytics.',
    metric: '40%'
  },
  {
    icon: Users,
    title: 'Engagement',
    description: 'Increase student engagement with interactive and personalized content.',
    metric: '60%'
  },
  {
    icon: Clock,
    title: 'Efficiency',
    description: 'Streamline administrative processes and reduce manual work.',
    metric: '50%'
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Provide education access to students anywhere, anytime.',
    metric: '99%'
  }
];

export default function Education() {
  return (
    <Layout
      title="Education Technology Solutions - Zion Tech Group"
      description="Transform education with LMS platforms, virtual classrooms, student analytics, and administrative automation."
      keywords="education technology, LMS, virtual classroom, student analytics, e-learning, educational software"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
=======
<<<<<<< HEAD
    title: 'Improved Learning Outcomes',
    description: 'AI-powered personalization leads to better student performance',
    icon: CheckCircle
=======
    icon: Shield,
    title: 'FERPA Compliance',
    description: 'Full compliance with educational privacy regulations and data protection standards'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support for educational institutions'
  },
  {
    icon: Users,
    title: 'Education Experts',
    description: 'Team of specialists with deep understanding of educational technology needs'
  },
  {
    icon: Star,
    title: 'Proven Results',
    description: 'Track record of successful implementations in schools and universities'
  }
];

const caseStudies = [
  {
    title: 'University Learning Platform',
    client: 'State University',
    challenge: 'Modernize learning management system and improve student engagement',
    solution: 'Developed comprehensive LMS with virtual classrooms and mobile access',
    results: ['40% increase in student engagement', '60% reduction in administrative workload', '95% student satisfaction'],
    image: '/api/placeholder/400/300'
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  },
  {
    title: 'K-12 Student Information System',
    client: 'School District',
    challenge: 'Consolidate student data across multiple schools and improve parent communication',
    solution: 'Implemented integrated SIS with parent portals and mobile access',
    results: ['50% reduction in data entry time', '80% increase in parent engagement', '100% data accuracy'],
    image: '/api/placeholder/400/300'
  }
];

export default function EducationPage() {
  return (
    <MainLayout
      title="Education Technology Solutions - Zion Tech Group"
      description="Transform education with our comprehensive EdTech solutions including LMS platforms, virtual classrooms, and student information systems."
      keywords="edtech, education technology, LMS, virtual classrooms, student information systems, educational software"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
=======
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                Education{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform education with LMS platforms, virtual classrooms, and AI-powered student analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Education Solution
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies
=======
<<<<<<< HEAD
                Education <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform education with AI-powered learning management systems, virtual classrooms, 
                and intelligent analytics that enhance student outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
=======
                Education Technology
                <span className="block text-yellow-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Transform education with comprehensive EdTech solutions including LMS platforms, virtual classrooms, and student management systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Case Studies
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
<<<<<<< HEAD
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Education Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for modern educational institutions.
              </p>
            </motion.div>
=======
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Education Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for educational institutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
=======
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Education Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for educational institutions
              </p>
            </div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
<<<<<<< HEAD
                    className="bg-gray-50 rounded-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-indigo-600">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                        <p className="text-gray-600 mb-4">{solution.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {solution.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {solution.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
=======
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
<<<<<<< HEAD
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Education Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Measurable improvements in student outcomes, engagement, and administrative efficiency.
              </p>
            </motion.div>
=======
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Education
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We understand the unique challenges and requirements of educational institutions
              </p>
            </div>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
<<<<<<< HEAD
                    className="bg-white rounded-lg p-6 shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-indigo-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">{benefit.metric}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
=======
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Education
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join leading educational institutions in revolutionizing learning with technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Education Consultation
                </Link>
                <Link href="/industries" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
                  View All Industries
=======
        {/* Case Studies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how we've helped educational institutions transform their learning environments
              </p>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-2"><strong>Client:</strong> {study.client}</p>
                    <p className="text-gray-600 mb-4"><strong>Challenge:</strong> {study.challenge}</p>
                    <p className="text-gray-600 mb-4"><strong>Solution:</strong> {study.solution}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
<<<<<<< HEAD
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Education?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our education solutions can help your institution achieve its goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                </Link>
              </div>
            </motion.div>
=======
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Education?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our education technology solutions can improve learning outcomes and institutional efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/quote"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Request Quote
              </Link>
            </div>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
          </div>
        </section>
      </div>
    </MainLayout>
  );
}