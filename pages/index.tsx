import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Phone, Mail, MapPin, Star, TrendingUp, Clock, DollarSign } from 'lucide-react';
import Layout from './components/Layout';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '2,500+', label: 'Projects Completed' },
  { number: '70+', label: 'Services & Solutions' },
  { number: '150+', label: 'Expert Team Members' },
  { number: '18+', label: 'Years Experience' }
];

const services = [
  {
    title: "AI Services",
    description: "25+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, predictive analytics, chatbots, fraud detection, and industry-specific AI applications",
    icon: Brain,
    href: "/ai-services",
    count: "25+ Solutions",
    pricing: "Starting at $1,600/month",
    marketPrice: "$2,200-15,000/month",
    benefits: ["40-60% accuracy improvement", "80% automation", "25-35% ROI increase", "Real-time processing"]
  },
  {
    title: "IT Services", 
    description: "20+ comprehensive IT services from cloud infrastructure to cybersecurity, DevOps, managed services, disaster recovery, and digital transformation consulting",
    icon: Network,
    href: "/it-services",
    count: "20+ Services",
    pricing: "Starting at $800/month",
    marketPrice: "$1,200-15,000/month",
    benefits: ["99.9% uptime", "50% cost reduction", "24/7 support", "Proactive monitoring"]
  },
  {
    title: "Micro SaaS",
    description: "25+ innovative micro SaaS solutions for modern businesses across all industries including CRM, project management, e-commerce, HR, marketing automation, and specialized industry solutions",
    icon: Cloud,
    href: "/micro-saas",
    count: "25+ Solutions",
    pricing: "Starting at $1,200/month",
    marketPrice: "$1,500-12,000/month",
    benefits: ["Rapid deployment", "Scalable architecture", "Custom features", "24/7 support"]
  }
];

const featuredServices = [
  {
    title: "AI Development",
    description: "Custom AI solutions, machine learning models, and intelligent automation systems.",
    icon: "🧠",
    features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Chatbots & Virtual Assistants"],
    price: "Starting at $2,500/month"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, migration services, and DevOps automation.",
    icon: "☁️",
    features: ["AWS, Azure, GCP Migration", "Container Orchestration", "Serverless Architecture", "Cloud Security & Compliance"],
    price: "Starting at $1,800/month"
  },
  {
    title: "Blockchain Solutions",
    description: "Secure blockchain development, smart contracts, and DeFi applications.",
    icon: "🔗",
    features: ["Smart Contract Development", "DeFi Applications", "NFT Marketplaces", "Cryptocurrency Integration"],
    price: "Starting at $3,500/month"
  },
  {
    title: "IoT Platforms",
    description: "Connected device solutions, sensor networks, and real-time data processing.",
    icon: "🌐",
    features: ["Device Management", "Real-time Analytics", "Edge Computing", "Industrial IoT Solutions"],
    price: "Starting at $2,200/month"
  },
  {
    title: "Micro SAAS Solutions",
    description: "Custom micro SaaS applications tailored to specific business needs.",
    icon: "💼",
    features: ["Custom Development", "API Integration", "User Management", "Analytics Dashboard"],
    price: "Starting at $1,500/month"
  },
  {
    title: "Quantum Computing",
    description: "Next-generation quantum computing solutions and optimization algorithms.",
    icon: "⚛️",
    features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Research & Development"],
    price: "Starting at $5,000/month"
  }
];

const whyChooseUs = [
  {
    title: "Fast Delivery",
    description: "Rapid development and deployment with agile methodologies",
    icon: "⚡"
  },
  {
    title: "Proven Results",
    description: "Track record of successful projects and satisfied clients",
    icon: "🎯"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance",
    icon: "🔧"
  },
  {
    title: "Competitive Pricing",
    description: "Transparent pricing with no hidden costs",
    icon: "💰"
  }
];

export default function HomePage() {
  return (
    <Layout
      title="Zion Tech Group - Leading Technology Solutions Provider"
      description="Comprehensive technology solutions including AI services, IT services, micro SaaS, blockchain, quantum computing, and IoT. Transform your business with cutting-edge technology."
      keywords="technology solutions, AI services, IT services, micro SaaS, blockchain, quantum computing, IoT, digital transformation"
      canonical="https://ziontechgroup.com"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Transform Your Business with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {" "}Cutting-Edge Technology
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We deliver comprehensive technology solutions including AI services, IT infrastructure, 
                micro SaaS applications, blockchain solutions, and quantum computing to accelerate your digital transformation.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
              </motion.div>
              
              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We provide comprehensive technology solutions to help your business thrive in the digital age. From innovative micro SaaS applications to cutting-edge AI services, quantum computing, blockchain solutions, and enterprise IT infrastructure. Our 70+ services cover every aspect of modern technology needs with competitive pricing and proven results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                      <IconComponent className="w-10 h-10 md:w-12 md:h-12" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {service.count}
                      </span>
                      {service.benefits && service.benefits.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-green-600">
                          {service.pricing}
                        </span>
                        {service.marketPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {service.marketPrice}
                          </span>
                        )}
                      </div>
                      {service.marketPrice && (
                        <div className="text-xs text-green-600 font-medium">
                          Save up to 40% vs market rate
                        </div>
                      )}
                    </div>
                    <Link
                      href={service.href}
                      className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our most popular and innovative technology solutions designed to transform your business.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Position & Pricing Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We deliver cutting-edge technology solutions with competitive pricing and unmatched expertise.
                Our comprehensive service portfolio covers everything from micro SaaS development to enterprise AI solutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their technology needs. 
              Let's discuss how we can help accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-2" />
                <span>+1 302 464 0950</span>
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