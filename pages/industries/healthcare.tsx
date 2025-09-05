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
  }
];

const benefits = [
  {
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
  }
];

const caseStudies = [
  {
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
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
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Healthcare Consultation
                </Link>
                <Link href="/industries" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold">
                  View All Industries
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
import MainLayout from '../../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
