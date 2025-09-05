import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Network, 
  Shield, 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Award,
  Zap,
  Database,
  Code,
  Smartphone,
  Server,
  Wifi,
  HardDrive
} from 'lucide-react';
import Layout from '../components/Layout';

const services = [
  {
    icon: Server,
    title: 'Infrastructure Management',
    description: 'Complete management of your IT infrastructure including servers, networks, and storage.',
    features: [
      'Server Administration',
      'Network Monitoring',
      'Storage Management',
      'Backup Solutions',
      'Disaster Recovery',
      'Performance Optimization'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Cloud migration, management, and optimization services for modern businesses.',
    features: [
      'Cloud Migration',
      'Multi-Cloud Strategy',
      'Cost Optimization',
      'Security Compliance',
      'Auto-Scaling',
      '24/7 Monitoring'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    features: [
      'Security Audits',
      'Threat Detection',
      'Vulnerability Assessment',
      'Incident Response',
      'Compliance Management',
      'Security Training'
    ],
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Network,
    title: 'Network Services',
    description: 'Design, implementation, and management of secure and scalable networks.',
    features: [
      'Network Design',
      'Wireless Solutions',
      'VPN Implementation',
      'Load Balancing',
      'Traffic Management',
      'Network Security'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Database design, optimization, and maintenance services.',
    features: [
      'Database Design',
      'Performance Tuning',
      'Data Migration',
      'Backup & Recovery',
      'Security Hardening',
      'Monitoring & Alerts'
    ],
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Code,
    title: 'System Integration',
    description: 'Seamless integration of disparate systems and applications.',
    features: [
      'API Development',
      'Legacy System Integration',
      'Data Synchronization',
      'Workflow Automation',
      'Custom Connectors',
      'Testing & Validation'
    ],
    color: 'from-teal-500 to-teal-600'
  }
];

const industries = [
  {
    name: 'Healthcare',
    description: 'HIPAA-compliant IT solutions for healthcare organizations.',
    icon: Shield
  },
  {
    name: 'Finance',
    description: 'Secure IT infrastructure for financial services.',
    icon: Globe
  },
  {
    name: 'Manufacturing',
    description: 'Industrial IT solutions and automation.',
    icon: Zap
  },
  {
    name: 'Education',
    description: 'IT solutions for educational institutions.',
    icon: Users
  }
];

const technologies = [
  {
    name: 'Microsoft Azure',
    description: 'Cloud platform and services.',
    icon: Cloud
  },
  {
    name: 'Amazon AWS',
    description: 'Comprehensive cloud computing platform.',
    icon: Globe
  },
  {
    name: 'Google Cloud',
    description: 'AI and data analytics platform.',
    icon: Database
  },
  {
    name: 'VMware',
    description: 'Virtualization and cloud infrastructure.',
    icon: Server
  },
  {
    name: 'Cisco',
    description: 'Networking and security solutions.',
    icon: Network
  },
  {
    name: 'Microsoft 365',
    description: 'Productivity and collaboration suite.',
    icon: Code
  }
];

const stats = [
  { number: '500+', label: 'IT Projects Completed' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '50+', label: 'Expert Engineers' }
];

const process = [
  {
    step: '01',
    title: 'Assessment',
    description: 'Comprehensive analysis of your current IT infrastructure and requirements.'
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Strategic planning and roadmap development for IT transformation.'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Careful implementation of IT solutions with minimal disruption.'
  },
  {
    step: '04',
    title: 'Support',
    description: 'Ongoing support and maintenance to ensure optimal performance.'
  }
];

export default function ITServicesPage() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and system integration for modern businesses."
      keywords="IT services, infrastructure management, cloud solutions, cybersecurity, system integration, IT consulting"
    >
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
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Complete IT solutions including infrastructure management, cloud services, cybersecurity, and system integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get IT Consultation
              </Link>
              <Link 
                href="/solutions" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
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
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive IT services to help your business operate efficiently and securely.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our IT services are tailored to meet the specific needs and compliance requirements of different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with leading technology platforms and tools to deliver robust IT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {tech.name}
                </h3>
                <p className="text-gray-600">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful IT project delivery and maximum value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our IT experts help you build a robust, secure, and scalable technology foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Get IT Assessment
              </Link>
              <Link 
                href="/solutions" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}