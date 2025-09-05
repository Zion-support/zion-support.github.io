import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Building,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  FileText,
  Globe,
  Database,
  BarChart3,
  Settings
} from 'lucide-react'

const features = [
  {
    title: 'Digital Government',
    description: 'Complete digital transformation for government agencies',
    icon: Building,
    benefits: ['Citizen portals', 'Digital services', 'E-governance']
  },
  {
    title: 'Security & Compliance',
    description: 'Enterprise-grade security and regulatory compliance',
    icon: Shield,
    benefits: ['Data protection', 'Access control', 'Audit trails']
  },
  {
    title: 'Citizen Services',
    description: 'Comprehensive citizen service management platforms',
    icon: Users,
    benefits: ['Service requests', 'Document management', 'Status tracking']
  },
  {
    title: 'Data Analytics',
    description: 'Advanced analytics for government decision making',
    icon: BarChart3,
    benefits: ['Performance metrics', 'Trend analysis', 'Reporting']
  }
]

const solutions = [
  {
    title: 'Federal Agencies',
    description: 'Large-scale solutions for federal government operations',
    features: ['Policy management', 'Inter-agency coordination', 'Public services']
  },
  {
    title: 'State & Local',
    description: 'Tailored solutions for state and local government needs',
    features: ['Local services', 'Community management', 'Resource planning']
  },
  {
    title: 'Public Safety',
    description: 'Emergency response and public safety management systems',
    features: ['Incident management', 'Resource allocation', 'Communication systems']
  }
]

export default function Government() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Government Technology Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modernize government operations with secure, scalable technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <feature.icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2 text-left">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Modernize Government?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help your agency</p>
          <Link href="/contact">
            <a className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}