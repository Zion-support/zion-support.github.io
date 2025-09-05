import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  BookOpen,
  Brain,
  Users,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  BarChart3,
  FileText,
  Video,
  Globe,
  Database
} from 'lucide-react'

const features = [
  {
    title: 'Learning Management Systems',
    description: 'Custom LMS solutions tailored for educational institutions',
    icon: BookOpen,
    benefits: ['Student tracking', 'Course management', 'Progress analytics']
  },
  {
    title: 'AI-Powered Tutoring',
    description: 'Intelligent tutoring systems that adapt to individual learning styles',
    icon: Brain,
    benefits: ['Personalized learning', 'Adaptive assessments', 'Real-time feedback']
  },
  {
    title: 'Virtual Classrooms',
    description: 'Interactive online learning environments with real-time collaboration',
    icon: Video,
    benefits: ['Live streaming', 'Screen sharing', 'Interactive whiteboards']
  },
  {
    title: 'Student Analytics',
    description: 'Comprehensive analytics to track student performance and engagement',
    icon: BarChart3,
    benefits: ['Performance metrics', 'Engagement tracking', 'Predictive analytics']
  }
]

const solutions = [
  {
    title: 'K-12 Education',
    description: 'Complete digital transformation for primary and secondary schools',
    features: ['Student information systems', 'Parent portals', 'Grade management']
  },
  {
    title: 'Higher Education',
    description: 'Advanced solutions for universities and colleges',
    features: ['Research management', 'Academic planning', 'Alumni tracking']
  },
  {
    title: 'Corporate Training',
    description: 'Professional development and skills training platforms',
    features: ['Course authoring', 'Certification tracking', 'Skills assessment']
  }
]

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Education Technology Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform education with cutting-edge technology solutions designed for modern learning environments
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Education?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help your institution</p>
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