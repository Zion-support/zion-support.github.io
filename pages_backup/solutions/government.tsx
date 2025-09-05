import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  FileText, 
  Users, 
  Lock, 
  ArrowRight, 
  CheckCircle, 
  Building,
  Database,
  BarChart3,
  Smartphone,
  Cloud,
  Globe
} from 'lucide-react';
import Layout from '../../components/Layout';

const features = [
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Advanced security measures and compliance with government regulations and standards.'
  },
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Comprehensive document management systems for government records and workflows.'
  },
  {
    icon: Users,
    title: 'Citizen Services',
    description: 'Digital platforms for citizen engagement and government service delivery.'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Secure data management and analytics solutions for government operations.'
  },
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Multi-level access control and authentication systems for government systems.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Comprehensive analytics and reporting tools for government decision making.'
  }
];

const solutions = [
  {
    title: 'Digital Government Platform',
    description: 'Comprehensive digital platform for government services and citizen engagement.',
    features: [
      'Citizen portal and services',
      'Online application processing',
      'Digital document management',
      'Multi-channel communication'
    ],
    benefits: [
      'Improved citizen satisfaction',
      'Reduced processing times',
      'Enhanced transparency',
      'Cost-effective service delivery'
    ]
  },
  {
    title: 'E-Government Services',
    description: 'Digital transformation of government services for better citizen experience.',
    features: [
      'Online service applications',
      'Digital payment processing',
      'Automated workflows',
      'Real-time status tracking'
    ],
    benefits: [
      '24/7 service availability',
      'Reduced paperwork',
      'Faster service delivery',
      'Better citizen engagement'
    ]
  },
  {
    title: 'Government Data Analytics',
    description: 'Advanced analytics solutions for government data and performance monitoring.',
    features: [
      'Performance dashboards',
      'Predictive analytics',
      'Citizen satisfaction tracking',
      'Resource optimization'
    ],
    benefits: [
      'Data-driven decision making',
      'Improved service quality',
      'Better resource allocation',
      'Enhanced accountability'
    ]
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive cybersecurity solutions to protect government systems and data.',
    features: [
      'Threat detection and prevention',
      'Security monitoring',
      'Incident response',
      'Compliance management'
    ],
    benefits: [
      'Enhanced security posture',
      'Reduced cyber risks',
      'Regulatory compliance',
      'Protected citizen data'
    ]
  }
];

const complianceStandards = [
  { name: 'FISMA', description: 'Federal Information Security Management Act' },
  { name: 'FedRAMP', description: 'Federal Risk and Authorization Management Program' },
  { name: 'NIST', description: 'National Institute of Standards and Technology' },
  { name: 'SOC 2', description: 'Service Organization Control 2' },
  { name: 'ISO 27001', description: 'Information Security Management' },
  { name: 'GDPR', description: 'General Data Protection Regulation' }
];

const stats = [
  { number: '99.99%', label: 'Uptime Guarantee' },
  { number: '100%', label: 'Compliance Ready' },
  { number: '24/7', label: 'Security Monitoring' },
  { number: '50+', label: 'Government Agencies' }
];

export default function GovernmentSolutionsPage() {
  return (
    <Layout
      title="Government Solutions - Zion Tech Group"
      description="Comprehensive government technology solutions including digital platforms, citizen services, and cybersecurity. Secure and compliant."
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Building className="w-16 h-16 text-indigo-400 mr-4" />
                <Shield className="w-16 h-16 text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Government
                <span className="block bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform government operations with our secure and compliant technology solutions. 
                From digital citizen services to cybersecurity, we help government agencies 
                deliver better services while maintaining the highest security standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
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
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
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
                Comprehensive Government Technology Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our government technology solutions are designed to enhance citizen services, 
                improve operational efficiency, and ensure compliance with government regulations.
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
                    <div className="text-indigo-600 mb-4 group-hover:text-blue-600 transition-colors">
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
                Our Government Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We provide end-to-end government technology solutions that address the unique 
                challenges and requirements of modern government agencies.
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
                            <ArrowRight className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
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
                We ensure all our government solutions meet the highest compliance and security standards 
                to protect sensitive data and maintain regulatory compliance.
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
                  <Shield className="w-12 h-12 text-indigo-600 mx-auto mb-4 group-hover:text-blue-600 transition-colors" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {standard.name}
                  </h3>
                  <p className="text-sm text-gray-600">{standard.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                Ready to Transform Government Services?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our government technology experts help you implement solutions that enhance 
                citizen services, improve efficiency, and ensure compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">
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