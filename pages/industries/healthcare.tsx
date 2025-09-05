<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart,
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
  Stethoscope,
  FileText,
  Database,
  Video,
  DollarSign
} from 'lucide-react';
import Layout from '../../components/Layout';

const solutions = [
  {
    title: 'AI Medical Imaging Analysis',
    description: 'Advanced AI algorithms for radiology, pathology, and diagnostic imaging analysis.',
    icon: Brain,
    features: ['Radiology AI', 'Pathology Analysis', 'Diagnostic Accuracy', 'Real-time Processing'],
    benefits: ['60% faster diagnosis', '95% accuracy rate', 'Reduced human error', '24/7 availability']
  },
  {
    title: 'Patient Data Analytics',
    description: 'Comprehensive patient data analysis for personalized treatment and care optimization.',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Risk Assessment', 'Treatment Optimization', 'Outcome Prediction'],
    benefits: ['30% better outcomes', 'Reduced readmissions', 'Cost savings', 'Improved care quality']
  },
  {
    title: 'Telemedicine Platform',
    description: 'Complete telemedicine solution for remote patient care and consultation.',
    icon: Video,
    features: ['Video Consultations', 'Remote Monitoring', 'Digital Prescriptions', 'Appointment Scheduling'],
    benefits: ['Increased accessibility', 'Reduced travel time', 'Lower costs', 'Better patient engagement']
  },
  {
    title: 'Clinical Decision Support',
    description: 'AI-powered clinical decision support system for healthcare professionals.',
    icon: Stethoscope,
    features: ['Evidence-based Recommendations', 'Drug Interaction Alerts', 'Treatment Guidelines', 'Risk Stratification'],
    benefits: ['Improved accuracy', 'Reduced errors', 'Better outcomes', 'Enhanced safety']
  }
];

const challenges = [
  {
    challenge: 'Data Security & Privacy',
    description: 'Protecting sensitive patient data while enabling data-driven insights.',
    solution: 'HIPAA-compliant encryption, secure cloud infrastructure, and advanced access controls.',
    icon: Shield
  },
  {
    challenge: 'Interoperability',
    description: 'Integrating disparate healthcare systems and data sources.',
    solution: 'Standardized APIs, FHIR compliance, and seamless data integration platforms.',
    icon: Database
  },
  {
    challenge: 'Regulatory Compliance',
    description: 'Meeting strict healthcare regulations and standards.',
    solution: 'Compliance automation, audit trails, and regulatory reporting tools.',
    icon: FileText
  },
  {
    challenge: 'Scalability',
    description: 'Supporting growing patient populations and increasing data volumes.',
    solution: 'Cloud-native architecture, auto-scaling, and performance optimization.',
    icon: TrendingUp
=======
<<<<<<< HEAD
import Link from 'next/link';
import Layout from '../../components/Layout';
=======
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Heart, Activity, Users, Clock, Star } from 'lucide-react';
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229

const solutions = [
  {
    title: 'AI-Powered Medical Imaging',
<<<<<<< HEAD
    description: 'Advanced AI algorithms for medical image analysis and diagnosis support',
    icon: Camera,
    features: ['Image Analysis', 'Diagnosis Support', 'Pattern Recognition', 'Report Generation']
  },
  {
    title: 'Electronic Health Records',
    description: 'Comprehensive EHR system with AI-powered features for better patient care',
    icon: FileText,
    features: ['Patient Records', 'Medical History', 'Treatment Plans', 'Data Analytics']
  },
  {
    title: 'Telemedicine Platform',
    description: 'Secure telemedicine platform for remote patient consultations',
    icon: Phone,
    features: ['Video Consultations', 'Remote Monitoring', 'Prescription Management', 'Appointment Scheduling']
  },
  {
    title: 'Health Analytics Dashboard',
    description: 'AI-powered analytics platform for healthcare insights and decision making',
    icon: BarChart3,
    features: ['Patient Analytics', 'Treatment Outcomes', 'Resource Optimization', 'Predictive Modeling']
=======
    description: 'Advanced AI algorithms for radiology, pathology, and diagnostic imaging with 95%+ accuracy rates.',
    features: ['Computer Vision', 'Deep Learning', 'Real-time Analysis', 'Integration with PACS'],
    icon: Activity
  },
  {
    title: 'Electronic Health Records (EHR)',
    description: 'Comprehensive EHR systems with interoperability, data analytics, and patient management capabilities.',
    features: ['Interoperability', 'Data Analytics', 'Patient Portals', 'Mobile Access'],
    icon: Users
  },
  {
    title: 'Telemedicine Platforms',
    description: 'Secure, scalable telemedicine solutions for remote patient care and consultation.',
    features: ['Video Conferencing', 'Secure Messaging', 'Appointment Scheduling', 'Prescription Management'],
    icon: Heart
  },
  {
    title: 'Healthcare Data Analytics',
    description: 'Advanced analytics for population health, clinical outcomes, and operational efficiency.',
    features: ['Population Health', 'Clinical Analytics', 'Predictive Modeling', 'Real-time Dashboards'],
    icon: Activity
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  }
];

const benefits = [
  {
<<<<<<< HEAD
    icon: Activity,
    title: 'Improved Patient Outcomes',
    description: 'AI-powered diagnostics and treatment recommendations lead to better patient care.',
    metric: '40%'
  },
  {
    icon: Clock,
    title: 'Faster Diagnosis',
    description: 'Reduce diagnostic time with automated analysis and AI assistance.',
    metric: '60%'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Optimize operations and reduce unnecessary procedures through data insights.',
    metric: '25%'
  },
  {
    icon: Users,
    title: 'Enhanced Care',
    description: 'Personalized treatment plans based on comprehensive patient data analysis.',
    metric: '95%'
=======
<<<<<<< HEAD
    title: 'Improved Patient Care',
    description: 'AI-powered tools help provide better and more accurate patient care',
    icon: Heart
  },
  {
    title: 'Enhanced Security',
    description: 'Advanced security measures protect sensitive patient data',
    icon: Shield
  },
  {
    title: 'Better Outcomes',
    description: 'Data-driven insights help improve treatment outcomes',
    icon: Activity
  },
  {
    title: 'Operational Efficiency',
    description: 'Automated processes reduce administrative burden and costs',
    icon: CheckCircle
=======
    icon: Shield,
    title: 'HIPAA Compliance',
    description: 'Full compliance with healthcare regulations and data protection standards'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support for critical healthcare operations'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Healthcare technology specialists with deep industry knowledge'
  },
  {
    icon: Star,
    title: 'Proven Results',
    description: 'Track record of successful healthcare implementations and transformations'
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  }
];

const caseStudies = [
  {
<<<<<<< HEAD
    title: 'Major Hospital Network',
    description: 'Implemented AI-powered radiology analysis across 15 hospitals.',
    results: ['60% faster diagnosis', '95% accuracy rate', '$2M annual savings'],
    icon: Building
  },
  {
    title: 'Regional Health System',
    description: 'Deployed telemedicine platform for rural patient care.',
    results: ['40% increase in patient access', '30% reduction in readmissions', '50% cost savings'],
    icon: Globe
  },
  {
    title: 'Specialty Clinic',
    description: 'AI-driven treatment optimization for chronic disease management.',
    results: ['35% better outcomes', '20% fewer complications', '45% patient satisfaction'],
    icon: Heart
  }
];

export default function Healthcare() {
  return (
    <Layout
      title="Healthcare Technology Solutions - Zion Tech Group"
      description="Transform healthcare with AI-powered solutions, telemedicine platforms, and advanced analytics for better patient outcomes."
      keywords="healthcare technology, medical AI, telemedicine, patient data analytics, healthcare software, medical imaging"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-900 via-pink-900 to-rose-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
=======
    title: 'AI Diagnostic Platform for Radiology',
    client: 'Regional Medical Center',
    challenge: 'Reduce diagnostic time and improve accuracy in radiology department',
    solution: 'Implemented AI-powered image analysis system with deep learning algorithms',
    results: ['40% faster diagnosis', '95% accuracy rate', '60% reduction in false positives'],
    image: '/api/placeholder/400/300'
  },
  {
    title: 'Integrated EHR System',
    client: 'Multi-Specialty Clinic',
    challenge: 'Consolidate patient data across multiple departments and locations',
    solution: 'Developed unified EHR platform with seamless data integration',
    results: ['50% reduction in data entry time', '100% data accuracy', '30% improvement in patient satisfaction'],
    image: '/api/placeholder/400/300'
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  }
];

export default function HealthcarePage() {
  return (
    <MainLayout
      title="Healthcare Technology Solutions - Zion Tech Group"
      description="Transform healthcare delivery with our cutting-edge technology solutions including AI diagnostics, EHR systems, and telemedicine platforms."
      keywords="healthcare technology, medical software, EHR, telemedicine, AI diagnostics, HIPAA compliance"
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
                Healthcare{' '}
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform healthcare delivery with AI-powered solutions, telemedicine platforms, and advanced analytics for better patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Healthcare Solution
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
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
                Healthcare Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed specifically for healthcare organizations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-red-600">
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
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Healthcare Challenges & Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the unique challenges in healthcare and provide tailored solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => {
                const IconComponent = challenge.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-red-600">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.challenge}</h3>
                        <p className="text-gray-600 mb-4">{challenge.description}</p>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-800 mb-2">Our Solution:</h4>
                          <p className="text-sm text-red-700">{challenge.solution}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Healthcare Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Measurable improvements in patient care, operational efficiency, and cost savings.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-red-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">{benefit.metric}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real results from healthcare organizations that have transformed their operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => {
                const IconComponent = study.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-red-600 mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Healthcare with Technology
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join leading healthcare organizations in improving patient care through innovative technology solutions.
=======
<<<<<<< HEAD
                Healthcare <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform healthcare delivery with AI-powered medical imaging, electronic health records, 
                and telemedicine solutions that improve patient outcomes.
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Healthcare Consultation
                </Link>
<<<<<<< HEAD
                <Link href="/industries" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold">
                  View All Industries
=======
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
=======
                Healthcare Technology
                <span className="block text-yellow-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Transform healthcare delivery with AI-powered diagnostics, integrated EHR systems, and secure telemedicine platforms.
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
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Healthcare Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for healthcare providers.
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
=======
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for healthcare organizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
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
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Healthcare
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We understand the unique challenges and requirements of healthcare organizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how we've helped healthcare organizations transform their operations
              </p>
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
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
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
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our healthcare solutions can help your organization achieve its goals.
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
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our healthcare technology solutions can improve patient care and operational efficiency.
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