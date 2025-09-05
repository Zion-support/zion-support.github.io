import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ShoppingCart,
  Brain,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Users,
  FileText,
  Database,
  Globe
} from 'lucide-react'

const features = [
  {
    title: 'E-commerce Platforms',
    description: 'Complete e-commerce solutions for online retail businesses',
    icon: ShoppingCart,
    benefits: ['Online storefront', 'Payment processing', 'Inventory management']
  },
  {
    title: 'Customer Analytics',
    description: 'Advanced analytics to understand customer behavior and preferences',
    icon: BarChart3,
    benefits: ['Customer insights', 'Purchase patterns', 'Personalization']
  },
  {
    title: 'AI-Powered Recommendations',
    description: 'Machine learning algorithms for personalized product recommendations',
    icon: Brain,
    benefits: ['Product suggestions', 'Cross-selling', 'Upselling']
  },
  {
    title: 'Inventory Management',
    description: 'Smart inventory tracking and management systems',
    icon: Database,
    benefits: ['Stock tracking', 'Demand forecasting', 'Automated reordering']
  }
]

const solutions = [
  {
    title: 'Online Retail',
    description: 'Complete e-commerce solutions for online businesses',
    features: ['Storefront design', 'Payment integration', 'Order management']
  },
  {
    title: 'Omnichannel Retail',
    description: 'Seamless integration between online and offline channels',
    features: ['Unified inventory', 'Cross-channel analytics', 'Customer experience']
  },
  {
    title: 'Marketplace Solutions',
    description: 'Platforms for multi-vendor marketplaces and B2B commerce',
    features: ['Vendor management', 'Commission tracking', 'Quality control']
  }
]

export default function Retail() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Retail Technology Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform retail operations with innovative technology solutions
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
              <div className="bg-pink-100 rounded-lg p-3 w-fit mb-4">
                <feature.icon size={32} className="text-pink-600" />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Retail?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help your retail business</p>
          <Link href="/contact">
            <a className="inline-flex items-center px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
              Get Started
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}