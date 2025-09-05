import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Database, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Stethoscope,
  FileText,
  Lock,
  BarChart3,
  Smartphone,
  Cloud
} from 'lucide-react';
import Layout from '../../components/Layout';

const features = [
  {
    icon: Shield,
    title: 'HIPAA Compliance',
    description: 'Ensure full compliance with HIPAA regulations and healthcare data protection standards.'
  },
  {
    icon: Database,
    title: 'Patient Data Management',
    description: 'Secure, scalable systems for managing patient records and medical data.'
  },
  {
    icon: Stethoscope,
    title: 'Telemedicine Solutions',
    description: 'Build robust telemedicine platforms for remote patient care and consultations.'
  },
  {
    icon: FileText,
    title: 'Electronic Health Records',
    description: 'Custom EHR systems that integrate seamlessly with existing healthcare workflows.'
  },
  {
    icon: Lock,
    title: 'Advanced Security',
    description: 'Multi-layered security measures to protect sensitive healthcare information.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Comprehensive analytics for patient outcomes, operational efficiency, and compliance.'
  }
];

const solutions = [
  {
    title: 'Electronic Health Records (EHR)',
    description: 'Comprehensive EHR systems that streamline patient care and improve clinical workflows.',
    features: [
      'Patient record management',
      'Clinical decision support',
      'Interoperability standards',
      'Real-time data synchronization'
    ],
    benefits: [
      'Improved patient care quality',
      'Reduced administrative burden',
      'Enhanced data accuracy',
      'Better care coordination'
    ]
  },
  {
    title: 'Telemedicine Platform',
    description: 'Secure, scalable telemedicine solutions for remote patient consultations and monitoring.',
    features: [
      'Video consultation capabilities',
      'Remote patient monitoring',
      'Prescription management',
      'Integration with EHR systems'
    ],
    benefits: [
      'Expanded patient access',
      'Reduced healthcare costs',
      'Improved patient satisfaction',
      'Enhanced care continuity'
    ]
  },
  {
    title: 'Healthcare Analytics',
    description: 'Advanced analytics solutions to drive data-driven decisions and improve patient outcomes.',
    features: [
      'Predictive analytics',
      'Population health management',
      'Quality metrics tracking',
      'Cost analysis and optimization'
    ],
    benefits: [
      'Better patient outcomes',
      'Reduced readmission rates',
      'Improved operational efficiency',
      'Evidence-based decision making'
    ]
  },
  {
    title: 'Mobile Health Applications',
    description: 'Patient and provider mobile apps that enhance engagement and care delivery.',
    features: [
      'Patient portal functionality',
      'Medication reminders',
      'Appointment scheduling',
      'Health tracking and monitoring'
    ],
    benefits: [
      'Increased patient engagement',
      'Better medication adherence',
      'Improved communication',
      'Enhanced care accessibility'
    ]
  }
];

const complianceStandards = [
  { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
  { name: 'HITECH', description: 'Health Information Technology for Economic and Clinical Health' },
  { name: 'FDA 21 CFR Part 11', description: 'Electronic Records and Electronic Signatures' },
  { name: 'SOC 2 Type II', description: 'Security, Availability, and Confidentiality' },
  { name: 'ISO 27001', description: 'Information Security Management' },
  { name: 'NIST Cybersecurity Framework', description: 'Cybersecurity Risk Management' }
];

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '100%', label: 'HIPAA Compliant' },
  { number: '24/7', label: 'Security Monitoring' },
  { number: '50+', label: 'Healthcare Clients' }
];

export default function HealthcareSolutionsPage() {
  return (
    <Layout
      title="Healthcare Solutions - Zion Tech Group"
      description="Comprehensive healthcare technology solutions including EHR, telemedicine, and compliance management. HIPAA-compliant and secure."
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-900 via-pink-900 to-rose-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-16 h-16 text-red-400 mr-4" />
                <Stethoscope className="w-16 h-16 text-pink-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Healthcare
                <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform healthcare delivery with our comprehensive technology solutions. 
                From EHR systems to telemedicine platforms, we help healthcare organizations 
                deliver better patient care while maintaining the highest security standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started Today
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies
                </Link>
              </div>
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
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Healthcare Technology Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our healthcare technology solutions are designed to improve patient care, 
                streamline operations, and ensure compliance with industry regulations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-red-600 mb-4 group-hover:text-pink-600 transition-colors">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Healthcare Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We provide end-to-end healthcare technology solutions that address the unique 
                challenges and requirements of modern healthcare organizations.
              </p>
            </motion.div>

            <div className="space-y-12">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <ArrowRight className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
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

        {/* Compliance Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Compliance & Security Standards
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We ensure all our healthcare solutions meet the highest compliance and security standards 
                to protect patient data and maintain regulatory compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Shield className="w-12 h-12 text-red-600 mx-auto mb-4 group-hover:text-pink-600 transition-colors" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {standard.name}
                  </h3>
                  <p className="text-sm text-gray-600">{standard.description}</p>
                </motion.div>
              ))}
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
                Ready to Transform Healthcare Delivery?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our healthcare technology experts help you implement solutions that improve 
                patient care, streamline operations, and ensure compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold">
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