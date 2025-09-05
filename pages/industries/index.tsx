import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Heart,
  DollarSign,
  Settings,
  ShoppingCart,
  ArrowRight,
  Building,
  Users,
  CheckCircle,
  Globe,
  Database
} from 'lucide-react'

const industries = [
  {
    title: 'Healthcare',
    description: 'Transform healthcare delivery with innovative technology solutions',
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    href: '/industries/healthcare',
    features: ['Electronic Health Records', 'AI Diagnostics', 'Telemedicine']
  },
  {
    title: 'Finance',
    description: 'Modernize financial operations with cutting-edge technology',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-500',
    href: '/industries/finance',
    features: ['Banking Solutions', 'Investment Management', 'Risk Analytics']
  },
  {
    title: 'Government',
    description: 'Digital transformation for government agencies and public services',
    icon: Building,
    color: 'from-blue-500 to-cyan-500',
    href: '/industries/government',
    features: ['Digital Services', 'Citizen Portals', 'E-Governance']
  },
  {
    title: 'Education',
    description: 'Revolutionize learning with advanced educational technology',
    icon: Users,
    color: 'from-purple-500 to-indigo-500',
    href: '/industries/education',
    features: ['Learning Management', 'AI Tutoring', 'Virtual Classrooms']
  },
  {
    title: 'Manufacturing',
    description: 'Optimize manufacturing processes with smart technology solutions',
    icon: Settings,
    color: 'from-orange-500 to-yellow-500',
    href: '/industries/manufacturing',
    features: ['Process Automation', 'Quality Control', 'Supply Chain']
  },
  {
    title: 'Retail',
    description: 'Enhance customer experience with innovative retail technology',
    icon: ShoppingCart,
    color: 'from-pink-500 to-rose-500',
    href: '/industries/retail',
    features: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics']
  }
]

export default function Industries() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide specialized technology solutions across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${industry.color} text-white mr-4`}>
                    <industry.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{industry.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{industry.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href={industry.href}>
                  <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See Your Industry?</h2>
            <p className="text-xl text-gray-600 mb-8">We work with organizations across all sectors</p>
            <Link href="/contact">
              <a className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
                <ArrowRight size={20} className="ml-2" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}