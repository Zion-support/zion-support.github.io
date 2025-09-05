import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Zap, 
  BarChart3,
  Server,
  Database,
  Users,
  Globe
} from 'lucide-react'

const steps = [
  {
    title: 'Assessment',
    description: 'Analyze your current infrastructure and identify migration opportunities',
    icon: BarChart3
  },
  {
    title: 'Planning',
    description: 'Create a detailed migration plan with minimal downtime',
    icon: CheckCircle
  },
  {
    title: 'Migration',
    description: 'Execute the migration with continuous monitoring',
    icon: ArrowRight
  },
  {
    title: 'Optimization',
    description: 'Optimize performance and costs in the new cloud environment',
    icon: Zap
  }
]

const benefits = [
  {
    title: 'Cost Reduction',
    description: 'Reduce infrastructure costs by up to 40%',
    icon: BarChart3
  },
  {
    title: 'Scalability',
    description: 'Scale resources up or down based on demand',
    icon: Zap
  },
  {
    title: 'Security',
    description: 'Enhanced security with cloud-native features',
    icon: Shield
  },
  {
    title: 'Reliability',
    description: '99.9% uptime with built-in redundancy',
    icon: CheckCircle
  }
]

export default function CloudMigration() {
  return (
    <>
      <Head>
        <title>Cloud Migration - Zion Tech Group</title>
        <meta name="description" content="Expert cloud migration services to help you move to the cloud seamlessly." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cloud Migration Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly migrate your infrastructure to the cloud with our expert guidance and proven methodologies
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Migration Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 text-center"
                >
                  <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <step.icon size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Migration Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-green-100 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Migrate to the Cloud?</h2>
            <p className="text-lg mb-6">Let us help you plan and execute your cloud migration</p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              Start Migration
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}