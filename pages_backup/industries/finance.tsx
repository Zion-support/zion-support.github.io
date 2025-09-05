import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  DollarSign,
  Brain,
  Shield,
  BarChart3,
  ArrowRight,
  TrendingUp,
  FileText,
  Users,
  CheckCircle,
  Globe,
  Database
} from 'lucide-react'

const features = [
  {
    title: 'Financial Analytics',
    description: 'Advanced analytics and reporting for financial institutions',
    icon: BarChart3,
    benefits: ['Real-time reporting', 'Risk assessment', 'Compliance monitoring']
  },
  {
    title: 'AI-Powered Trading',
    description: 'Machine learning algorithms for automated trading strategies',
    icon: Brain,
    benefits: ['Pattern recognition', 'Risk management', 'Market analysis']
  },
  {
    title: 'Security & Compliance',
    description: 'Enterprise-grade security and regulatory compliance solutions',
    icon: Shield,
    benefits: ['Data encryption', 'Audit trails', 'Regulatory reporting']
  },
  {
    title: 'Customer Management',
    description: 'Comprehensive customer relationship management systems',
    icon: Users,
    benefits: ['Customer profiles', 'Transaction history', 'Service tracking']
  }
]

const solutions = [
  {
    title: 'Banking',
    description: 'Complete digital banking solutions for modern financial institutions',
    features: ['Core banking systems', 'Mobile banking', 'Payment processing']
  },
  {
    title: 'Investment Management',
    description: 'Portfolio management and investment tracking platforms',
    features: ['Portfolio analytics', 'Risk assessment', 'Performance tracking']
  },
  {
    title: 'Insurance',
    description: 'Comprehensive insurance management and claims processing',
    features: ['Policy management', 'Claims processing', 'Underwriting tools']
  }
]

export default function Finance() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Financial Technology Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your financial operations with cutting-edge technology solutions
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
              <div className="bg-green-100 rounded-lg p-3 w-fit mb-4">
                <feature.icon size={32} className="text-green-600" />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Finance?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help your financial institution</p>
          <Link href="/contact">
            <a className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Get Started
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}