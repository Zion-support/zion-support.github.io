import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Heart,
  Brain,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  FileText,
  BarChart3,
  Database,
  Globe
} from 'lucide-react'

const features = [
  {
    title: 'Electronic Health Records',
    description: 'Comprehensive EHR systems for healthcare providers',
    icon: FileText,
    benefits: ['Patient records', 'Medical history', 'Treatment tracking']
  },
  {
    title: 'AI Diagnostics',
    description: 'AI-powered diagnostic tools and medical imaging analysis',
    icon: Brain,
    benefits: ['Image analysis', 'Pattern recognition', 'Diagnostic support']
  },
  {
    title: 'Patient Management',
    description: 'Complete patient care management and scheduling systems',
    icon: Users,
    benefits: ['Appointment scheduling', 'Patient communication', 'Care coordination']
  },
  {
    title: 'Health Analytics',
    description: 'Advanced analytics for healthcare outcomes and operations',
    icon: BarChart3,
    benefits: ['Outcome tracking', 'Performance metrics', 'Trend analysis']
  }
]

const solutions = [
  {
    title: 'Hospitals & Clinics',
    description: 'Comprehensive solutions for healthcare facilities',
    features: ['Patient management', 'Clinical workflows', 'Resource planning']
  },
  {
    title: 'Telemedicine',
    description: 'Remote healthcare delivery and virtual consultation platforms',
    features: ['Video consultations', 'Remote monitoring', 'Digital prescriptions']
  },
  {
    title: 'Medical Research',
    description: 'Research management and clinical trial platforms',
    features: ['Data collection', 'Trial management', 'Analytics']
  }
]

export default function Healthcare() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Healthcare Technology Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform healthcare delivery with innovative technology solutions
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
              <div className="bg-red-100 rounded-lg p-3 w-fit mb-4">
                <feature.icon size={32} className="text-red-600" />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Healthcare?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help your healthcare organization</p>
          <Link href="/contact">
            <a className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Get Started
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}