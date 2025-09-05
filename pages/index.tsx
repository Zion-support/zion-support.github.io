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
  { number: '305+', label: 'Services & Solutions' },
  { number: '150+', label: 'Expert Team Members' },
  { number: '18+', label: 'Years Experience' }
];

const services = [
  {
    title: "AI Services",
    description: "100+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, autonomous systems, and advanced analytics with real-world applications",
    icon: Brain,
    href: "/ai-services",
    count: "100+ Solutions",
    pricing: "Starting at $2,500/month",
    marketPrice: "$4,000-15,000/month",
    benefits: ["40-60% accuracy improvement", "80% automation", "25-35% ROI increase"]
  },
  {
    title: "IT Services", 
    description: "85+ comprehensive IT services from cloud infrastructure to cybersecurity, quantum computing, zero-trust architecture, and enterprise digital transformation",
    icon: Network,
    href: "/it-services",
    count: "85+ Services",
    pricing: "Starting at $150/hour",
    marketPrice: "$200-500/hour",
    benefits: ["99.9% uptime", "50% cost reduction", "24/7 support"]
  },
  {
    title: "Micro SaaS",
    description: "120+ innovative micro SaaS solutions for modern businesses across all industries with real-time pricing, market analysis, and instant deployment",
    icon: Cloud,
    href: "/micro-saas",
    count: "120+ Solutions",
    pricing: "Starting at $1,500/month",
    marketPrice: "$2,500-8,000/month",
    benefits: ["Quick deployment", "Scalable architecture", "30% faster time-to-market"]
  }
];

const featuredServices = [
  {
    title: "AI Development",
    description: "Custom AI solutions, machine learning models, and intelligent automation systems.",
    icon: "🧠",
    features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Chatbots & Virtual Assistants"],
    price: "From $2,500/month"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    icon: "☁️",
    features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps & CI/CD", "Container Orchestration"],
    price: "From $1,200/month"
  },
  {
    title: "Blockchain Development",
    description: "Smart contracts, DeFi platforms, and enterprise blockchain solutions.",
    icon: "⛓️",
    features: ["Smart Contracts", "DeFi Platforms", "NFT Marketplaces", "Enterprise Blockchain"],
    price: "From $5,000/project"
  }
];

const whyChooseUs = [
  {
    title: "💰 Competitive Pricing",
    features: [
      "Micro SaaS: $19 - $4,999/month",
      "IT Services: $120 - $500/hour", 
      "AI Solutions: $1,000 - $1M/project",
      "Blockchain: $50K - $500K/project",
      "Quantum Computing: $100K - $1M/project",
      "Transparent, no hidden fees"
    ]
  },
  {
    title: "🚀 Fast Delivery",
    features: [
      "Micro SaaS: 2-4 weeks",
      "Web Apps: 4-8 weeks",
      "Mobile Apps: 6-12 weeks",
      "Enterprise Solutions: 3-6 months",
      "AI/ML Projects: 2-8 months",
      "Agile development methodology"
    ]
  },
  {
    title: "🛡️ Enterprise Security",
    features: [
      "SOC 2 Type II compliant",
      "ISO 27001 certified",
      "GDPR & CCPA compliant",
      "End-to-end encryption",
      "Regular security audits",
      "24/7 security monitoring"
    ]
  },
  {
    title: "🌍 Global Support",
    features: [
      "24/7 technical support",
      "Multi-timezone coverage",
      "Dedicated account managers",
      "SLA guarantees",
      "Remote & on-site support",
      "Training & documentation"
    ]
  }
];

export default function Home() {
  return (
    <Layout 
      title="Zion Tech Group - AI, IT Services & Micro SaaS Solutions"
      description="Leading technology company offering AI services, IT solutions, micro SaaS development, blockchain, quantum computing, and enterprise digital transformation with competitive pricing and proven results."
      keywords="AI services, IT solutions, micro SaaS, blockchain development, quantum computing, digital transformation, technology consulting, software development"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {" "}Cutting-Edge Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
              We deliver AI services, IT solutions, micro SaaS platforms, blockchain development, and quantum computing solutions 
              that drive real business value with competitive pricing and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
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
              We provide comprehensive technology solutions to help your business thrive in the digital age. From innovative micro SaaS applications to cutting-edge AI services, quantum computing, blockchain solutions, and enterprise IT infrastructure. Our 305+ services cover every aspect of modern technology needs with competitive pricing and proven results.
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {featuredServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
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
          <motion.div
            className="text-center mb-16"
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <ul className="text-gray-600 space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
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
    </Layout>
  );
}