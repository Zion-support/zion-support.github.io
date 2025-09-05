import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Shield, 
  BarChart3, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  CreditCard,
  FileText,
  Lock,
  TrendingUp,
  Smartphone,
  Cloud
} from 'lucide-react';
import Layout from '../../components/Layout';

const features = [
  {
    icon: Shield,
    title: 'Financial Security',
    description: 'Advanced security measures and fraud detection to protect financial data and transactions.'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Comprehensive financial analytics and reporting for data-driven decision making.'
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Secure payment processing solutions with support for multiple payment methods.'
  },
  {
    icon: FileText,
    title: 'Compliance Management',
    description: 'Automated compliance monitoring and reporting for financial regulations.'
  },
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'End-to-end encryption and secure data storage for sensitive financial information.'
  },
  {
    icon: TrendingUp,
    title: 'Risk Management',
    description: 'Advanced risk assessment and management tools for financial institutions.'
  }
];

const solutions = [
  {
    title: 'Digital Banking Platform',
    description: 'Comprehensive digital banking solutions that provide seamless customer experiences.',
    features: [
      'Online and mobile banking',
      'Account management',
      'Transaction processing',
      'Customer support integration'
    ],
    benefits: [
      'Enhanced customer experience',
      'Reduced operational costs',
      'Increased transaction volume',
      'Improved customer retention'
    ]
  },
  {
    title: 'Payment Processing System',
    description: 'Secure, scalable payment processing solutions for businesses of all sizes.',
    features: [
      'Multiple payment methods',
      'Fraud detection and prevention',
      'Real-time transaction monitoring',
      'Compliance with PCI DSS'
    ],
    benefits: [
      'Higher transaction success rates',
      'Reduced fraud losses',
      'Faster payment processing',
      'Better customer satisfaction'
    ]
  },
  {
    title: 'Financial Analytics Platform',
    description: 'Advanced analytics solutions for financial institutions to gain insights and make informed decisions.',
    features: [
      'Real-time dashboards',
      'Predictive analytics',
      'Risk assessment tools',
      'Regulatory reporting'
    ],
    benefits: [
      'Data-driven decision making',
      'Improved risk management',
      'Regulatory compliance',
      'Operational efficiency'
    ]
  },
  {
    title: 'Trading Platform',
    description: 'High-performance trading platforms for financial institutions and individual traders.',
    features: [
      'Real-time market data',
      'Order management system',
      'Risk management tools',
      'Multi-asset support'
    ],
    benefits: [
      'Faster trade execution',
      'Better risk control',
      'Increased trading volume',
      'Enhanced user experience'
    ]
  }
];

const complianceStandards = [
  { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
  { name: 'SOX', description: 'Sarbanes-Oxley Act Compliance' },
  { name: 'Basel III', description: 'International Banking Regulations' },
  { name: 'GDPR', description: 'General Data Protection Regulation' },
  { name: 'MiFID II', description: 'Markets in Financial Instruments Directive' },
  { name: 'FATCA', description: 'Foreign Account Tax Compliance Act' }
];

const stats = [
  { number: '99.99%', label: 'Uptime Guarantee' },
  { number: '100%', label: 'PCI DSS Compliant' },
  { number: '24/7', label: 'Security Monitoring' },
  { number: '100+', label: 'Financial Clients' }
];

export default function FinanceSolutionsPage() {
  return (
    <Layout
      title="Finance Solutions - Zion Tech Group"
      description="Comprehensive financial technology solutions including digital banking, payment processing, and compliance management. Secure and scalable."
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <DollarSign className="w-16 h-16 text-green-400 mr-4" />
                <CreditCard className="w-16 h-16 text-emerald-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Finance
                <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform financial services with our cutting-edge technology solutions. 
                From digital banking platforms to payment processing systems, we help financial 
                institutions deliver secure, scalable, and innovative services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started Today
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Case Studies
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
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Financial Technology Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our financial technology solutions are designed to enhance security, 
                improve efficiency, and ensure compliance with financial regulations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-green-600 mb-4 group-hover:text-emerald-600 transition-colors">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Finance Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We provide end-to-end financial technology solutions that address the unique 
                challenges and requirements of modern financial institutions.
              </p>
            </motion.div>

            <div className="space-y-12">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <ArrowRight className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Compliance & Security Standards
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We ensure all our financial solutions meet the highest compliance and security standards 
                to protect financial data and maintain regulatory compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Shield className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:text-emerald-600 transition-colors" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {standard.name}
                  </h3>
                  <p className="text-sm text-gray-600">{standard.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Financial Services?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our financial technology experts help you implement solutions that enhance 
                security, improve efficiency, and ensure compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}