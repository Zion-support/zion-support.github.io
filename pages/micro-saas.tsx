import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Layers, 
  Shield, 
  Target, 
  Award,
  CheckCircle,
  Star,
  Users
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const microSaasProducts = [
  {
    title: 'AI Content Generator',
    description: 'Automate content creation with our intelligent AI-powered writing assistant.',
    icon: Zap,
    features: ['SEO Optimization', 'Multi-language Support', 'Brand Voice Matching', 'Content Analytics']
  },
  {
    title: 'Project Management Suite',
    description: 'Streamline your workflow with our comprehensive project management tools.',
    icon: Layers,
    features: ['Task Tracking', 'Team Collaboration', 'Time Management', 'Progress Reports']
  },
  {
    title: 'Customer Analytics Dashboard',
    description: 'Gain insights into customer behavior with our advanced analytics platform.',
    icon: Target,
    features: ['Real-time Data', 'Custom Reports', 'User Segmentation', 'Predictive Analytics']
  },
  {
    title: 'Security Monitoring Tool',
    description: 'Protect your digital assets with our comprehensive security monitoring solution.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Monitoring', 'Incident Response']
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: 'Rapid Deployment',
    description: 'Get up and running in minutes, not months.'
  },
  {
    icon: Star,
    title: 'Scalable Solutions',
    description: 'Grow with your business needs seamlessly.'
  },
  {
    icon: Users,
    title: 'User-Friendly',
    description: 'Intuitive interfaces designed for maximum productivity.'
  }
];

export default function MicroSaasPage() {
  return (
    <>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SaaS products designed to solve specific business challenges with scalable, user-friendly solutions." />
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
                Micro <span className="text-blue-400">SaaS</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Powerful, focused software solutions designed to solve specific business challenges with maximum efficiency and minimal complexity.
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

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized tools designed to address specific business needs with precision and efficiency
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="p-4 bg-blue-500 rounded-lg w-16 h-16 mb-4 flex items-center justify-center">
                    <product.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
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

        {/* Why Choose Our Micro SaaS */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Micro SaaS?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We focus on creating solutions that are powerful yet simple, scalable yet focused
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
                >
                  <div className="p-4 bg-green-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
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
                Ready to Streamline Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Discover how our micro SaaS solutions can solve your specific business challenges and drive efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Schedule Demo
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