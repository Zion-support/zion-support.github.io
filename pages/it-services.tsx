import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Server,
  Shield,
  Cloud,
  Database,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const services = [
  {
    title: 'Infrastructure Management',
    description: 'Complete IT infrastructure setup, management, and maintenance',
    icon: Server,
    benefits: ['Server management', 'Network setup', 'Hardware maintenance']
  },
  {
    title: 'Cloud Solutions',
    description: 'Cloud migration, management, and optimization services',
    icon: Cloud,
    benefits: ['Cloud migration', 'Cost optimization', 'Security management']
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your business',
    icon: Shield,
    benefits: ['Security audits', 'Threat monitoring', 'Incident response']
  },
  {
    title: 'Database Management',
    description: 'Database design, optimization, and maintenance services',
    icon: Database,
    benefits: ['Database design', 'Performance tuning', 'Backup solutions']
  }
]

export default function ITServices() {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, and cybersecurity." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">IT Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly and securely
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
                <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                  <service.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Optimize Your IT?</h2>
            <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help your business</p>
            <Link href="/contact">
              <a className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
                <ArrowRight size={20} className="ml-2" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}