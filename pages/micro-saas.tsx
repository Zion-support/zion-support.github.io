import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Cloud,
  Zap,
  Shield,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  DollarSign
} from 'lucide-react'

const microSaaSProducts = [
  {
    title: 'Cloud Cost Guard (FinOps, Assistant)',
    description: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    icon: DollarSign,
    features: ['Cost Anomaly Detection', 'Auto Rightsizing', 'Budget Forecasting', 'Multi-cloud Support'],
    pricing: '$299 - $1,499/month',
    category: 'FinOps',
    popular: true
  },
  {
    title: 'LLM Evaluation & Safety Suite',
    description: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
    icon: Shield,
    features: ['Prompt Evaluation', 'Bias Detection', 'Safety Checks', 'Guardrail Policies'],
    pricing: '$199 - $999/month',
    category: 'AI Safety',
    popular: false
  },
  {
    title: 'API Rate Limiter & Analytics',
    description: 'Intelligent rate limiting, usage analytics, and API performance monitoring.',
    icon: BarChart3,
    features: ['Rate Limiting', 'Usage Analytics', 'Performance Monitoring', 'Alert System'],
    pricing: '$99 - $499/month',
    category: 'API Management',
    popular: false
  }
]

export default function MicroSaaS() {
  return (
    <>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Innovative micro SaaS solutions for modern businesses." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, focused software solutions designed to solve specific business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">
                      <product.icon size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-blue-600">{product.category}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-gray-900">{product.pricing}</div>
                    {product.popular && (
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <Link href="/contact">
                    <a className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Get Started
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}