import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, ArrowRight, CheckCircle, Star, Zap, Shield } from 'lucide-react';


const services = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions including machine learning, natural language processing, computer vision, and autonomous systems.",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Fraud Detection", "Voice AI", "Content Generation", "Autonomous Systems", "Quantum Computing", "Neural Interfaces"],
    pricing: "Starting at $1,000/month",
    count: "40+ Services",

    popular: true
  },
  {
    title: "IT Services", 

    description: "Comprehensive information technology services including cloud infrastructure, cybersecurity, edge computing, and digital transformation.",
    icon: Network,
    href: "/it-services",
    features: ["Cloud Infrastructure", "Cybersecurity", "System Administration", "Network Management", "DevOps & CI/CD", "Data Center Migration", "Edge Computing", "5G Networks", "AI Infrastructure", "Blockchain"],
    pricing: "Starting at $120/hour",
    count: "35+ Services",

    popular: true
  },
  {
    title: "Micro SaaS",

    description: "Scalable software as a service solutions designed for specific business needs, rapid deployment, and innovative functionality.",
    icon: Cloud,
    href: "/micro-saas",
    features: ["Custom Applications", "API Development", "Database Solutions", "Integration Services", "Workflow Automation", "Lead Management", "AI-Powered Tools", "Smart Contracts", "Content Moderation", "Energy Management"],
    pricing: "Starting at $29/month",
    count: "45+ Products",

    popular: true
  }
];


const benefits = [
  {

    icon: CheckCircle,
    title: "Expert Team",
    description: "50+ certified professionals with years of experience"
  },
  {
    icon: Star,
    title: "Proven Results",
    description: "500+ successful projects delivered"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development with rapid deployment"
  },
  {
    icon: Shield,
    title: "24/7 Support",
    description: "Round-the-clock technical support"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <Head>
                  <title>Our Services - Zion Tech Group</title>
                  <meta name="description" content="Comprehensive technology solutions including AI services, IT services, and Micro SaaS solutions. Expert team delivering innovative results." />
                  <meta name="keywords" content="AI services, IT services, Micro SaaS, cloud solutions, technology consulting" />
                  </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
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

              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>

            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive innovation.
            </p>
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
              What We Offer
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">

              We provide end-to-end technology solutions tailored to your business needs. From AI-powered automation to robust IT infrastructure and scalable SaaS applications.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}

                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative"

                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}

                  whileHover={{ y: -5 }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">

                        Most Popular
                      </span>
                  </div>
                  )}
                  <div className="text-blue-600 mb-6 group-hover:text-purple-600 transition-colors">

                    <IconComponent className="w-12 h-12" />

                  </div>
                  <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {service.count}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">

                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">

                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                  <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                  </div>
                  <Link
                    href={service.href}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center group"
                  >
                    <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through our expertise, proven track record, and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {

              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">

        <div className="container mx-auto px-4 text-center">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>

            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can help transform your business and drive growth.
            </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Free Consultation
              </Link>
                  <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Learn About Us
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
                  </div>
  );
}