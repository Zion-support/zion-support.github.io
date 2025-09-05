import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Shield, 
  Target, 
  Award
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const aiServices = [
  {
    title: 'AI-Powered Analytics',
    description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
    icon: Brain,
    features: ['Predictive Analytics', 'Real-time Processing', 'Custom Models']
  },
  {
    title: 'Machine Learning Solutions',
    description: 'Build and deploy custom ML models tailored to your business needs.',
    icon: Zap,
    features: ['Custom Model Training', 'Automated Deployment', 'Continuous Learning']
  },
  {
    title: 'AI Security & Compliance',
    description: 'Ensure your AI systems are secure and compliant with industry standards.',
    icon: Shield,
    features: ['Security Audits', 'Compliance Monitoring', 'Risk Assessment']
  },
  {
    title: 'AI Strategy Consulting',
    description: 'Get expert guidance on implementing AI across your organization.',
    icon: Target,
    features: ['Strategic Planning', 'Technology Assessment', 'Implementation Roadmap']
  }
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "ai@ziontechgroup.com",
  address: "123 Innovation Drive, Tech City, TC 12345"
};

export default function AIServicesPage() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our cutting-edge AI services including machine learning, analytics, and automation solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-blue-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Harness the power of artificial intelligence to transform your business operations and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to accelerate your digital transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="p-4 bg-blue-500 rounded-lg w-16 h-16 mb-4 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="p-4 bg-green-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
                <p className="text-gray-300">
                  Our team has successfully implemented AI solutions for 500+ companies across various industries.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="p-4 bg-purple-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge Technology</h3>
                <p className="text-gray-300">
                  We use the latest AI frameworks and tools to deliver state-of-the-art solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="p-4 bg-orange-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Secure & Compliant</h3>
                <p className="text-gray-300">
                  All our AI solutions are built with security and compliance as top priorities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI services can accelerate your digital transformation and drive measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}