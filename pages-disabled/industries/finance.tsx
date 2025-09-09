import * as React from 'react'
import Link from 'next/link'
import {
  DollarSign, 
  Brain, 
  Shield, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Lock,
  CreditCard,
  Database,
  FileText,
  Users
} from 'lucide-react'
import Layout from '../../components/Layout'

const services = [
  {
    title: 'Blockchain Solutions',
    description: 'Secure, transparent, and efficient blockchain implementations for financial services.',
    icon: Shield,
    features: [
      'Smart contracts',
      'Cryptocurrency integration',
      'Decentralized finance (DeFi)',
      'Supply chain tracking'
    ]
  },
  {
    title: 'AI-Powered Trading',
    description: 'Advanced AI algorithms for automated trading and investment strategies.',
    icon: Brain,
    features: [
      'Algorithmic trading',
      'Risk assessment',
      'Market prediction',
      'Portfolio optimization'
    ]
  },
  {
    title: 'Financial Analytics',
    description: 'Comprehensive data analytics and reporting solutions for financial institutions.',
    icon: BarChart3,
    features: [
      'Real-time reporting',
      'Predictive analytics',
      'Risk modeling',
      'Compliance monitoring'
    ]
  },
  {
    title: 'Payment Processing',
    description: 'Secure and efficient payment processing systems for various financial transactions.',
    icon: CreditCard,
    features: [
      'Multi-currency support',
      'Fraud detection',
      'PCI compliance',
      'API integration'
    ]
  }
];

const benefits = [
  {
    title: 'Enhanced Security',
    description: 'Bank-level security measures to protect sensitive financial data and transactions.',
    icon: Lock
  },
  {
    title: 'Regulatory Compliance',
    description: 'Ensure compliance with financial regulations and industry standards.',
    icon: FileText
  },
  {
    title: 'Cost Reduction',
    description: 'Streamline operations and reduce costs through automation and optimization.',
    icon: TrendingUp
  },
  {
    title: 'Scalability',
    description: 'Solutions that grow with your business and handle increasing transaction volumes.',
    icon: Database
  }
];

export default function FinancePage() {
  return (
    <Layout
      title="Financial Technology Solutions - Zion Tech Group"
      description="Transform your financial services with cutting-edge technology solutions including blockchain, AI trading, analytics, and payment processing."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Financial Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform your financial services with cutting-edge technology solutions designed for the modern financial industry
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Financial Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We provide comprehensive technology solutions for financial institutions, 
                  from banks and credit unions to fintech startups and investment firms.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-green-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Why Choose Our Financial Solutions?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ready to Transform Your Financial Services?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our technology solutions can enhance your financial institution's capabilities and drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/ai-services"
                    className="bg-white text-green-600 px-8 py-4 rounded-lg border border-green-600 hover:bg-green-50 transition-colors duration-200 flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
  );
};