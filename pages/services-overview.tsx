import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Server, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const serviceCategories = [
  {
    title: 'AI Services',
    icon: Brain,
    description: 'Cutting-edge artificial intelligence solutions that transform your business.',
    href: '/ai-services',
    color: 'from-blue-500 to-cyan-500',
    services: [
      'Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
      'AI Automation',
      'Predictive Analytics',
      'Custom AI Development'
    ]
  },
  {
    title: 'IT Services',
    icon: Server,
    description: 'Comprehensive IT solutions including cloud, security, and infrastructure management.',
    href: '/it-services',
    color: 'from-green-500 to-emerald-500',
    services: [
      'Cloud Infrastructure',
      'Cybersecurity',
      'Network Management',
      'Data Backup & Recovery',
      'IT Consulting',
      'System Integration'
    ]
  },
  {
    title: 'Micro SaaS',
    icon: Zap,
    description: 'Innovative micro SaaS solutions designed for specific business needs.',
    href: '/micro-saas',
    color: 'from-purple-500 to-pink-500',
    services: [
      'AI Content Marketing',
      'Lead Management',
      'Analytics Dashboard',
      'Process Automation',
      'Financial Analysis',
      'Custom Solutions'
    ]
  }
];

export default function ServicesOverview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Services Overview - Zion Tech Group</title>
        <meta name="description" content="Comprehensive overview of our AI, IT, and Micro SaaS services" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{category.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Services Include:</h4>
                <ul className="space-y-1">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link href={category.href}>
                <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}