import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Phone, Mail, MapPin, Star, TrendingUp, Clock, DollarSign } from 'lucide-react';
import Layout from '../components/Layout';

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
    price: "Starting at $1,500/month"
  }
];

const featuredServices = [
  {
    title: "AI Development",
    description: "Custom AI solutions, machine learning models, and intelligent automation systems.",
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    features: ["Machine Learning", "Computer Vision", "NLP", "Predictive Analytics"],
    price: "Starting at $5,000"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    icon: <Cloud className="w-8 h-8 text-green-600" />,
    features: ["AWS/Azure/GCP", "Migration", "DevOps", "Monitoring"],
    price: "Starting at $3,000"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    icon: <Shield className="w-8 h-8 text-red-600" />,
    features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
    price: "Starting at $2,500"
  }
];

export default function Home() {
  return (
    <Layout 
      title="Zion Tech Group - Leading Technology Solutions Provider"
      description="Zion Tech Group provides cutting-edge AI services, IT solutions, and innovative micro SaaS platforms. We help businesses scale, automate, and innovate with technology."
      keywords="AI services, IT solutions, micro SaaS, technology consulting, digital transformation, cloud computing, cybersecurity"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Innovating the Future with Smart Technology
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Secure, scalable, and intelligent digital solutions tailored to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
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
                We provide comprehensive technology solutions to help your business thrive in the digital age. 
                From innovative micro SaaS applications to cutting-edge AI services, quantum computing, blockchain solutions, 
                and enterprise IT infrastructure. Our 305+ services cover every aspect of modern technology needs with 
                competitive pricing and proven results.
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
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our most popular technology solutions designed to drive innovation and growth.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
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
        <section className="py-20 bg-gray-50">
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

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We deliver cutting-edge technology solutions with competitive pricing and unmatched expertise.
                Our comprehensive service portfolio covers everything from micro SaaS development to enterprise AI solutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Competitive Pricing", description: "Up to 40% savings vs market rates", icon: "💰" },
                { title: "Expert Team", description: "150+ certified professionals", icon: "👥" },
                { title: "Proven Results", description: "2,500+ successful projects", icon: "✅" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-gray-50 p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Join hundreds of companies that trust Zion Tech Group for their technology needs. 
                Let's discuss how we can help accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Started
                </Link>
                <Link 
                  href="/quote" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}