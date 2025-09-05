import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Settings,
  Brain,
  Shield,
  BarChart3,
  ArrowRight,
  CheckCircle,
  FileText,
  Users,
  Database,
  Globe
} from 'lucide-react'

const features = [
  {
    title: 'Process Automation',
    description: 'Automate manufacturing processes with intelligent systems',
    icon: Settings,
    benefits: ['Production optimization', 'Quality control', 'Efficiency monitoring']
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Machine learning solutions for predictive maintenance and optimization',
    icon: Brain,
    benefits: ['Predictive maintenance', 'Quality prediction', 'Demand forecasting']
  },
  {
    title: 'Supply Chain Management',
    description: 'Comprehensive supply chain visibility and optimization',
    icon: Database,
    benefits: ['Inventory tracking', 'Supplier management', 'Logistics optimization']
  },
  {
    title: 'Quality Control',
    description: 'Advanced quality assurance and compliance management',
    icon: Shield,
    benefits: ['Quality monitoring', 'Compliance tracking', 'Defect detection']
  }
]

const solutions = [
  {
    title: 'Smart Manufacturing',
    description: 'IoT-enabled smart manufacturing solutions',
    features: ['Sensor integration', 'Real-time monitoring', 'Automated controls']
  },
  {
    title: 'Production Planning',
    description: 'Advanced production planning and scheduling systems',
    features: ['Resource planning', 'Schedule optimization', 'Capacity management']
  },
  {
    title: 'Quality Management',
    description: 'Comprehensive quality management and assurance systems',
    features: ['Quality tracking', 'Compliance reporting', 'Audit management']
  }
]

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Technology Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Optimize manufacturing operations with intelligent technology solutions
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
              <div className="bg-orange-100 rounded-lg p-3 w-fit mb-4">
                <feature.icon size={32} className="text-orange-600" />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Optimize Manufacturing?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help your manufacturing operations</p>
          <Link href="/contact">
            <a className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              Get Started
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}