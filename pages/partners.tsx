import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Building2,
  Handshake,
  Award,
  Users,
  Globe,
  Shield,
  Zap,
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const partners = [
  {
    name: 'Microsoft',
    category: 'Technology Partner',
    description: 'Leading cloud and productivity solutions',
    logo: 'Microsoft'
  },
  {
    name: 'AWS',
    category: 'Cloud Partner',
    description: 'Comprehensive cloud computing services',
    logo: 'AWS'
  },
  {
    name: 'Google Cloud',
    category: 'Cloud Partner',
    description: 'Advanced cloud infrastructure and AI services',
    logo: 'Google Cloud'
  },
  {
    name: 'Salesforce',
    category: 'CRM Partner',
    description: 'Customer relationship management solutions',
    logo: 'Salesforce'
  },
  {
    name: 'Oracle',
    category: 'Database Partner',
    description: 'Enterprise database and cloud solutions',
    logo: 'Oracle'
  },
  {
    name: 'IBM',
    category: 'AI Partner',
    description: 'Artificial intelligence and analytics solutions',
    logo: 'IBM'
  }
]

const benefits = [
  {
    title: 'Strategic Partnerships',
    description: 'We work with industry leaders to deliver comprehensive solutions.',
    icon: Handshake
  },
  {
    title: 'Certified Expertise',
    description: 'Our team holds certifications from major technology partners.',
    icon: Award
  },
  {
    title: 'Global Reach',
    description: 'Access to worldwide partner networks and resources.',
    icon: Globe
  }
]

export default function Partners() {
  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Our strategic technology partners and alliance programs." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading technology companies to deliver the best solutions for our clients
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Technology Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                      <Building2 size={48} className="text-blue-600 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-sm text-blue-600 mb-2">{partner.category}</p>
                    <p className="text-gray-600 text-sm">{partner.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Partnership Benefits</h2>
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
            <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
            <p className="text-lg mb-6">Join our partner ecosystem and grow your business with us</p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              Contact Us
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}