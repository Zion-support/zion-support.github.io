import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  CreditCard, 
  Shield, 
  BarChart3, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Award,
  TrendingUp,
  DollarSign,
  Clock,
  Star,
  Globe,
  Lock,
  Settings
} from 'lucide-react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const financeSolutions = [
  {
    title: "Payment Processing Systems",
    description: "Secure payment gateways and processing systems for financial transactions",
    icon: CreditCard,
    features: ["Multiple payment methods", "Fraud detection", "PCI compliance", "Real-time processing"],
    pricing: "Starting at $10,000"
  },
  {
    title: "Banking Software",
    description: "Core banking systems and digital banking platforms",
    icon: Shield,
    features: ["Account management", "Transaction processing", "Loan management", "Regulatory compliance"],
    pricing: "Starting at $50,000"
  },
  {
    title: "Financial Analytics",
    description: "Advanced analytics and reporting for financial institutions",
    icon: BarChart3,
    features: ["Risk assessment", "Performance analytics", "Regulatory reporting", "Predictive modeling"],
    pricing: "Starting at $25,000"
  },
  {
    title: "Fintech Applications",
    description: "Innovative financial technology applications and platforms",
    icon: Globe,
    features: ["Mobile banking", "Investment platforms", "Cryptocurrency integration", "API development"],
    pricing: "Starting at $30,000"
  }
];

const benefits = [
  {
    title: "Regulatory Compliance",
    description: "Full compliance with financial regulations and standards",
    icon: Shield
  },
  {
    title: "Security First",
    description: "Bank-grade security for all financial transactions and data",
    icon: Lock
  },
  {
    title: "Scalable Architecture",
    description: "Systems that handle high transaction volumes and growth",
    icon: TrendingUp
  },
  {
    title: "Real-time Processing",
    description: "Instant transaction processing and real-time updates",
    icon: Clock
  }
];

const stats = [
  { number: '75+', label: 'Financial Institutions' },
  { number: '99.99%', label: 'Uptime Guarantee' },
  { number: 'PCI', label: 'Compliant' },
  { number: '24/7', label: 'Monitoring' }
];

export default function FinanceSolutions() {
  return (
    <Layout 
      title="Financial Technology Solutions | Zion Tech Group"
      description="Comprehensive fintech solutions including payment processing, banking software, financial analytics, and regulatory compliance systems."
      keywords="fintech solutions, payment processing, banking software, financial analytics, regulatory compliance, financial technology"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Financial Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Secure, compliant financial technology solutions for modern institutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Started
                </Link>
                <Link 
                  href="/quote" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Financial Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive financial technology solutions for institutions of all sizes
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {financeSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                      <p className="text-blue-600 font-semibold">{solution.pricing}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Financial Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven expertise in financial technology and regulatory compliance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Finance?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Let's build financial technology solutions that drive innovation and growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/case-studies" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}