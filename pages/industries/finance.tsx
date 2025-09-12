import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { DollarSign, Brain, Shield, BarChart3, CheckCircle, ArrowRight, TrendingUp, Lock, CreditCard, Database, FileText, Users } from 'lucide-react';

const solutions = [
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced machine learning algorithms to detect and prevent fraudulent transactions',
    icon: Shield,
    features: ['Real-time Monitoring', 'Pattern Recognition', 'Risk Scoring', 'Automated Alerts']
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Comprehensive analytics platform for financial forecasting and risk assessment',
    icon: BarChart3,
    features: ['Market Analysis', 'Risk Modeling', 'Portfolio Optimization', 'Regulatory Compliance']
  },
  {
    title: 'Digital Banking Solutions',
    description: 'Modern digital banking platform with AI-powered features',
    icon: CreditCard,
    features: ['Mobile Banking', 'AI Chatbots', 'Personalized Services', 'Secure Transactions']
  },
  {
    title: 'Regulatory Compliance System',
    description: 'Automated compliance monitoring and reporting system',
    icon: FileText,
    features: ['Regulatory Reporting', 'Compliance Monitoring', 'Audit Trails', 'Risk Assessment']
  }
];

const challenges = [
  {
    challenge: 'Regulatory Compliance',
    description: 'Meeting complex financial regulations and compliance requirements.',
    solution: 'Automated compliance monitoring, regulatory reporting, and audit trail systems.',
    icon: FileText
  },
  {
    challenge: 'Data Security',
    description: 'Protecting sensitive financial data from cyber threats and breaches.',
    solution: 'Multi-layer security, encryption, and advanced threat detection systems.',
    icon: Lock
  },
  {
    challenge: 'Real-time Processing',
    description: 'Processing high-volume transactions in real-time with low latency.',
    solution: 'High-performance computing, microservices architecture, and optimized databases.',
    icon: Clock
  },
  {
    challenge: 'Scalability',
    description: 'Handling increasing transaction volumes and user growth.',
    solution: 'Cloud-native architecture, auto-scaling, and distributed systems.',
    icon: TrendingUp  }
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Automate processes and reduce operational costs through technology.',
    metric: '35%'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Advanced security measures protect against cyber threats and fraud',
    icon: Lock
  },
  {
    title: 'Improved Efficiency',
    description: 'Automated processes reduce manual work and increase productivity',
    icon: TrendingUp
  },
  {
    title: 'Better Risk Management',
    description: 'AI-powered analytics help identify and mitigate risks',
    icon: Shield
  },
  {
    title: 'Regulatory Compliance',
    description: 'Automated compliance monitoring ensures adherence to regulations',
    icon: CheckCircle
  }
];

export default function Finance() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Finance <span className="text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your financial services with AI-powered fraud detection, predictive analytics, 
                and automated compliance solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Finance Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed specifically for financial institutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Finance Solutions?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our solutions are designed to address the unique challenges faced by financial institutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Finance?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our finance solutions can help your institution achieve its goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}