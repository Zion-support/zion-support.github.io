=======import { motion } from 'framer-motion';
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

export default function FinancePage() {
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
                Comprehensive technology solutions designed specifically for financial institutions.              </p>
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
            </div>          </div>
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
            </div>          </div>
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
=======
import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Shield, 
  TrendingUp, 
  Lock, 
  CheckCircle, 
  ArrowRight,
  CreditCard,
  BarChart3,
  Zap,
  Globe
} from 'lucide-react';

const services = [
  {
    name: 'Blockchain Solutions',
    description: 'Secure and transparent financial transactions using cutting-edge blockchain technology.',
    icon: Lock,
    features: ['Smart Contracts', 'Cryptocurrency Integration', 'Decentralized Finance', 'Security Audits']
  },
  {
    name: 'Fraud Detection',
    description: 'AI-powered fraud detection systems to protect your business and customers.',
    icon: Shield,
    features: ['Real-time Monitoring', 'Machine Learning', 'Risk Assessment', 'Automated Alerts']
  },
  {
    name: 'Trading Systems',
    description: 'Advanced automated trading platforms with real-time market analysis.',
    icon: TrendingUp,
    features: ['Algorithmic Trading', 'Market Analysis', 'Risk Management', 'Portfolio Optimization']
  },
  {
    name: 'Regulatory Compliance',
    description: 'Ensure compliance with financial regulations and reporting requirements.',
    icon: CheckCircle,
    features: ['KYC/AML', 'Regulatory Reporting', 'Audit Trails', 'Compliance Monitoring']
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container mx-auto px-4 py-16"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-6">
            <DollarSign className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Financial
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Secure, scalable, and innovative financial technology solutions. From blockchain 
            integration to fraud detection, we help financial institutions stay ahead of the curve.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">Bank-Grade Security</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Real-time Processing</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Global Compliance</span>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={fadeInUp}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                {service.name}
              </h3>

              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Security Features */}
        <motion.div variants={fadeInUp} className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Security & Compliance
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">End-to-End Encryption</h3>
                <p className="text-gray-300">Military-grade encryption for all financial transactions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Regulatory Compliance</h3>
                <p className="text-gray-300">Full compliance with financial regulations worldwide</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Audit Trails</h3>
                <p className="text-gray-300">Complete transaction history and audit capabilities</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUp}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Secure Your Financial Future
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with us to build secure, scalable, and innovative financial solutions 
              that meet the highest standards of security and compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              
              <motion.button
                className="border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
  );
}