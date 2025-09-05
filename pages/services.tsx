import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Server, 
  Cloud, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Users,
  Globe
} from 'lucide-react'

const services = [
  {
    title: 'AI Solutions',
    description: 'Custom AI implementations for your business needs',
    icon: Brain,
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and migration services',
    icon: Cloud,
    features: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Hybrid Cloud']
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT support and management',
    icon: Server,
    features: ['Network Management', 'Security Audits', 'System Administration', '24/7 Support']
  },
  {
    title: 'Micro SaaS',
    description: 'Custom software solutions for specific business needs',
    icon: Zap,
    features: ['Custom Development', 'API Integration', 'Database Design', 'User Interface']
  }
]

const benefits = [
  {
    title: 'Expert Team',
    description: 'Experienced professionals with deep technical expertise',
    icon: Users
  },
  {
    title: 'Global Reach',
    description: 'Serving clients worldwide with local support',
    icon: Globe
  },
  {
    title: 'Proven Results',
    description: 'Track record of successful project deliveries',
    icon: CheckCircle
  }
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, cloud, and IT solutions." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions to help your business grow and succeed in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <service.icon size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">Contact us today to discuss your technology needs</p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              Get Started
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}