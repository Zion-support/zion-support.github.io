import React from 'react'
import { motion } from 'framer-motion'
const solutions = [
  {
    category: 'AI & Machine Learning',
    title: 'Intelligent Automation',
    description: 'Transform your business processes with AI-powered automation solutions.',
    icon: '🤖',
    features: ['Process Automation', 'Predictive Analytics', 'Natural Language Processing']
  },
  {
    category: 'Cloud Computing',
    title: 'Scalable Infrastructure',
    description: 'Build and deploy applications on our robust cloud platform.',
    icon: '☁️',
    features: ['Auto-scaling', 'Global CDN', '99.9% Uptime']
  },
  {
    category: 'Cybersecurity',
    title: 'Advanced Security',
    description: 'Protect your digital assets with enterprise-grade security solutions.',
    icon: '🔒',
    features: ['Threat Detection', 'Data Encryption', 'Compliance Management']
  },
  {
    category: 'Data Analytics',
    title: 'Business Intelligence',
    description: 'Turn your data into actionable insights with our analytics platform.',
    icon: '📊',
    features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization']

]
export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6">Revolutionary Solutions</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Transform your business with our cutting-edge technology solutions. From AI-powered tools to quantum computing platforms, we deliver innovation that drives results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-300 mb-4">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-400">
                    • {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
