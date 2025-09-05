import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Network, 
  Cloud, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Award,
  Zap,
  Database,
  Code,
  Smartphone,
  Building,
  GraduationCap,
  Heart,
  ShoppingCart,
  Landmark
} from 'lucide-react';
import Layout from '../components/Layout';

const solutions = [
  {
    icon: Building,
    title: 'Enterprise Solutions',
    description: 'Comprehensive technology solutions for large organizations.',
    href: '/solutions/enterprise',
    features: [
      'Scalable Architecture',
      'Enterprise Security',
      '24/7 Support',
      'Custom Integration'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Heart,
    title: 'Healthcare Solutions',
    description: 'AI-powered healthcare technology solutions.',
    href: '/solutions/healthcare',
    features: [
      'AI Diagnostics',
      'Patient Management',
      'HIPAA Compliance',
      'Telemedicine Platform'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: GraduationCap,
    title: 'Education Solutions',
    description: 'Technology solutions for educational institutions.',
    href: '/solutions/education',
    features: [
      'Learning Management',
      'Student Analytics',
      'Virtual Classrooms',
      'Assessment Tools'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: ShoppingCart,
    title: 'Retail Solutions',
    description: 'E-commerce and retail technology solutions.',
    href: '/solutions/retail',
    features: [
      'E-commerce Platform',
      'Inventory Management',
      'Customer Analytics',
      'Payment Processing'
    ],
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Landmark,
    title: 'Government Solutions',
    description: 'Secure technology solutions for government agencies.',
    href: '/solutions/government',
    features: [
      'Security Compliance',
      'Citizen Services',
      'Data Management',
      'Process Automation'
    ],
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Globe,
    title: 'Finance Solutions',
    description: 'Financial technology and banking solutions.',
    href: '/solutions/finance',
    features: [
      'Risk Management',
      'Fraud Detection',
      'Payment Systems',
      'Regulatory Compliance'
    ],
    color: 'from-teal-500 to-teal-600'
  }
];

const technologies = [
  {
    name: 'Artificial Intelligence',
    description: 'Machine learning, natural language processing, and computer vision.',
    icon: Brain
  },
  {
    name: 'Cloud Computing',
    description: 'Scalable cloud infrastructure and services.',
    icon: Cloud
  },
  {
    name: 'Cybersecurity',
    description: 'Advanced security solutions and compliance.',
    icon: Shield
  },
  {
    name: 'Data Analytics',
    description: 'Business intelligence and data visualization.',
    icon: Database
  },
  {
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    icon: Smartphone
  },
  {
    name: 'Web Development',
    description: 'Modern web applications and platforms.',
    icon: Code
  }
];

const stats = [
  { number: '200+', label: 'Solutions Delivered' },
  { number: '50+', label: 'Industry Sectors' },
  { number: '99.9%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

export default function SolutionsPage() {
  return (
    <Layout
      title="Solutions - Zion Tech Group"
      description="Industry-specific technology solutions for enterprise, healthcare, education, retail, government, and finance sectors."
      keywords="technology solutions, enterprise solutions, healthcare technology, education technology, retail solutions, government solutions"
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
              Industry-Specific{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Tailored technology solutions designed for specific industries and use cases to maximize your business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Custom Solution
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                View Services
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

      {/* Solutions Section */}
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
              Industry Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in creating technology solutions that address the unique challenges and opportunities in different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={solution.href}
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

      {/* Technologies Section */}
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
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and secure solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 text-center"
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us create a tailored technology solution that perfectly fits your industry needs and business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Get Custom Quote
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}