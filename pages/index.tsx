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
  { number: '96+', label: 'Services & Solutions' },
  { number: '150+', label: 'Expert Team Members' },
  { number: '18+', label: 'Years Experience' }
];

const services = [
  {
    title: "AI Services",
    description: "23+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, healthcare AI, fintech AI, and specialized industry applications with real-world impact",
    icon: Brain,
    href: "/ai-services",
    count: "23+ Solutions",
    pricing: "Starting at $1,500/month",
    marketPrice: "$2,000-25,000/month",
    benefits: ["40-60% accuracy improvement", "80% automation", "25-35% ROI increase"]
  },
  {
    title: "IT Services", 
    description: "31+ comprehensive IT services from cloud infrastructure to cybersecurity, managed services, digital transformation, and enterprise solutions",
    icon: Network,
    href: "/it-services",
    count: "31+ Services",
    pricing: "Starting at $150/hour",
    marketPrice: "$200-500/hour",
    benefits: ["99.9% uptime", "50% cost reduction", "24/7 support"]
  },
  {
    title: "Micro SaaS",
    description: "42+ innovative micro SaaS solutions for modern businesses across all industries with competitive pricing, market analysis, and instant deployment",
    icon: Cloud,
    href: "/micro-saas",
    count: "42+ Solutions",
    pricing: "Starting at $99/month",
    marketPrice: "$150-1,500/month",
    benefits: ["Rapid deployment", "Cost-effective", "Scalable solutions"]
  }
];

export default function HomePage() {
  return (
    <Layout 
      title="Zion Tech Group - AI, IT & Micro SaaS Solutions"
      description="Leading provider of AI services, IT solutions, and micro SaaS platforms. Transform your business with cutting-edge technology and expert consulting."
      keywords="AI services, IT solutions, micro SaaS, technology consulting, digital transformation, machine learning, cloud computing"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your Business with
                <span className="text-purple-400"> Cutting-Edge Technology</span>
              </h1>
              <p className="text-xl mb-8 max-w-4xl mx-auto text-blue-100">
                Zion Tech Group delivers 96+ innovative AI services, IT solutions, and micro SaaS platforms 
                that drive growth, efficiency, and digital transformation for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-6">
                    <service.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
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