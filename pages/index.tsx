import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Phone, Mail, MapPin, Star, TrendingUp, Clock, DollarSign } from 'lucide-react';
import Layout from '../components/Layout';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'AI-Powered Support' },
  { number: '3,500+', label: 'Projects Completed' },
  { number: '470+', label: 'Services & Solutions' },
  { number: '200+', label: 'Expert Team Members' },
  { number: '20+', label: 'Years Experience' }
];

const services = [
  {
    title: "AI Services",
    description: "150+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, autonomous systems, generative AI, healthcare AI, and advanced analytics with real-world applications",
    icon: Brain,
    href: "/ai-services",
    count: "150+ Solutions",
    pricing: "Starting at $2,200/month",
    marketPrice: "$4,000-25,000/month",
    benefits: ["40-60% accuracy improvement", "80% automation", "25-35% ROI increase", "99.9% uptime guarantee"]
  },
  {
    title: "IT Services", 
    description: "120+ comprehensive IT services from next-gen cloud infrastructure to AI-powered cybersecurity, quantum computing, edge computing, blockchain, and enterprise digital transformation",
    icon: Network,
    href: "/it-services",
    count: "120+ Services",
    pricing: "Starting at $1,800/month",
    marketPrice: "$3,500-20,000/month",
    benefits: ["50% cost reduction", "99.9% uptime", "24/7 monitoring", "Scalable solutions"]
  },
  {
    title: "Micro SaaS",
    description: "80+ innovative micro SaaS products including AI-powered tools, automation platforms, productivity suites, and specialized business applications for modern enterprises",
    icon: Cloud,
    href: "/micro-saas",
    count: "80+ Products",
    pricing: "Starting at $99/month",
    marketPrice: "$200-2,000/month",
    benefits: ["Quick deployment", "Low maintenance", "High ROI", "Custom integrations"]
  }
];

const featuredServices = [
  {
    title: "AI-Powered Business Intelligence",
    description: "Transform your data into actionable insights with our advanced AI analytics platform.",
    icon: TrendingUp,
    href: "/ai-services",
    features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "API integration"]
  },
  {
    title: "Quantum Computing Solutions",
    description: "Leverage quantum computing power for complex problem-solving and optimization.",
    icon: Zap,
    href: "/quantum-computing",
    features: ["Quantum algorithms", "Optimization problems", "Cryptography", "Research support"]
  },
  {
    title: "Cybersecurity Suite",
    description: "Comprehensive security solutions powered by AI and machine learning.",
    icon: Shield,
    href: "/cybersecurity",
    features: ["Threat detection", "Automated response", "Compliance", "24/7 monitoring"]
  }
];

export default function HomePage() {
  return (
    <Layout
      title="Zion Tech Group - Leading AI & Technology Solutions"
      description="Revolutionary AI solutions, enterprise IT services, and innovative micro SaaS products. Transform your business with cutting-edge technology from quantum computing to metaverse intelligence."
      keywords="AI solutions, IT services, micro SaaS, quantum computing, blockchain, machine learning, digital transformation, enterprise technology"
    >
      <div id="main-content" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  AI & Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Revolutionary AI solutions, enterprise IT services, and innovative micro SaaS products. 
                From quantum computing to metaverse intelligence, we deliver cutting-edge technology that drives real results.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="/contact">
                  <span className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get Started Today
                  </span>
                </Link>
                <Link href="/services">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Explore Services
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation and drive measurable business growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-sm text-gray-500 mb-2">{service.count}</div>
                      <div className="text-lg font-semibold text-green-600">{service.pricing}</div>
                      <div className="text-sm text-gray-500 line-through">{service.marketPrice}</div>
                    </div>
                    
                    <ul className="space-y-2 mb-8">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Solutions Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Solutions</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our most popular and innovative solutions that are transforming businesses worldwide.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
                Join thousands of businesses that trust Zion Tech Group for their technology needs. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get Free Consultation
                  </span>
                </Link>
                <Link href="/quote">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Request Quote
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-2" />
                <span>+1 (302) 261-0000</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}