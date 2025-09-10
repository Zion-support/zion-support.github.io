import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building, 
  BarChart3, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Clock,
  DollarSign
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const industries = [
  {
    name: 'Healthcare',
    description: 'Digital health solutions and medical technology innovations.',
    icon: Shield,
    solutions: [
      'Electronic Health Records',
      'Telemedicine Platforms',
      'Medical AI Solutions',
      'Compliance Management'
    ]
  },
  {
    name: 'Financial Services',
    description: 'Fintech solutions and digital banking platforms.',
    icon: DollarSign,
    solutions: [
      'Digital Banking',
      'Payment Processing',
      'Risk Management',
      'Regulatory Compliance'
    ]
  },
  {
    name: 'Manufacturing',
    description: 'Industrial IoT and smart manufacturing solutions.',
    icon: Building,
    solutions: [
      'Industrial IoT',
      'Predictive Maintenance',
      'Supply Chain Optimization',
      'Quality Control Systems'
    ]
  },
  {
    name: 'Retail',
    description: 'E-commerce and retail technology solutions.',
    icon: Globe,
    solutions: [
      'E-commerce Platforms',
      'Inventory Management',
      'Customer Analytics',
      'Omnichannel Solutions'
    ]
  },
  {
    name: 'Education',
    description: 'EdTech solutions and learning management systems.',
    icon: Users,
    solutions: [
      'Learning Management Systems',
      'Virtual Classrooms',
      'Student Analytics',
      'Assessment Tools'
    ]
  },
  {
    name: 'Government',
    description: 'Digital government and public sector solutions.',
    icon: Shield,
    solutions: [
      'Citizen Portals',
      'Digital Services',
      'Data Management',
      'Security Compliance'
    ]
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Industry Expertise',
    description: 'Deep understanding of industry-specific challenges and requirements'
  },
  {
    icon: Shield,
    title: 'Compliance Ready',
    description: 'Built-in compliance with industry regulations and standards'
  },
  {
    icon: BarChart3,
    title: 'Proven Results',
    description: 'Track record of successful implementations across industries'
  },
  {
    icon: Clock,
    title: 'Faster Deployment',
    description: 'Industry-specific templates and accelerators for rapid deployment'
  }
];

export default function IndustrySolutionsPage() {
  return (
    <MainLayout
      title="Industry Solutions - Zion Tech Group"
      description="Specialized technology solutions for healthcare, finance, manufacturing, retail, education, and government sectors."
      keywords="industry solutions, healthcare technology, fintech, manufacturing, retail, education, government, sector-specific solutions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Industry <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Specialized technology solutions designed for specific industries and their unique requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
                <p className="text-xl text-gray-600">
                  Specialized solutions for diverse industry sectors
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <industry.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">{industry.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{industry.description}</p>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Industry-Specific Solutions?</h2>
                <p className="text-xl text-gray-600">
                  Specialized expertise and solutions tailored to your industry
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Ready for Industry-Specific Solutions?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let's discuss your industry requirements and create a solution that fits your sector.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}