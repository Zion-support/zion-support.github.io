import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Heart, DollarSign, Settings, ShoppingCart, BookOpen, Building, ArrowRight, CheckCircle, Users, Shield, Cloud, Brain } from 'lucide-react';

const industries = [
  {
    name: 'Healthcare',
    icon: Heart,
    description: 'Transform healthcare delivery with AI-powered diagnostics, telemedicine platforms, and patient management systems.',
    solutions: ['AI Diagnostics', 'Telemedicine', 'Patient Management', 'HIPAA Compliance'],
    href: '/industries/healthcare',
    color: 'from-red-500 to-pink-500'
  },
  {
    name: 'Finance',
    icon: DollarSign,
    description: 'Secure financial solutions with fraud detection, automated trading, and regulatory compliance systems.',
    solutions: ['Fraud Detection', 'Automated Trading', 'Regulatory Compliance', 'Risk Management'],
    href: '/industries/finance',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Manufacturing',
    icon: Settings,
    description: 'Optimize production with IoT sensors, predictive maintenance, and quality control automation.',
    solutions: ['IoT Integration', 'Predictive Maintenance', 'Quality Control', 'Supply Chain'],
    href: '/industries/manufacturing',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Retail',
    icon: ShoppingCart,
    description: 'Enhance customer experience with personalized recommendations, inventory management, and omnichannel solutions.',
    solutions: ['Personalization', 'Inventory Management', 'Omnichannel', 'Analytics'],
    href: '/industries/retail',
    color: 'from-purple-500 to-violet-500'
  },
  {
    name: 'Education',
    icon: BookOpen,
    description: 'Revolutionize learning with AI-powered platforms, virtual classrooms, and personalized education tools.',
    solutions: ['Learning Platforms', 'Virtual Classrooms', 'Personalized Learning', 'Assessment Tools'],
    href: '/industries/education',
    color: 'from-orange-500 to-amber-500'
  },
  {
    name: 'Government',
    icon: Building,
    description: 'Modernize public services with digital transformation, citizen portals, and data-driven governance.',
    solutions: ['Digital Services', 'Citizen Portals', 'Data Analytics', 'Security'],
    href: '/industries/government',
    color: 'from-gray-500 to-slate-500'
  }
];

const stats = [
  { number: '50+', label: 'Industries Served' },
  { number: '200+', label: 'Successful Projects' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '5+', label: 'Years Experience' }
];

export default function Industries() {
  return (
    <Layout 
      title="Industries - Zion Tech Group"
      description="Discover how Zion Tech Group serves various industries with tailored technology solutions for healthcare, finance, manufacturing, retail, education, and government."
      keywords="industries, healthcare technology, fintech, manufacturing solutions, e-commerce, education technology, real estate tech"
    >
      <Head>
        <title>Industries - Zion Tech Group</title>
        <meta name="description" content="Discover how Zion Tech Group serves various industries with tailored technology solutions for healthcare, finance, manufacturing, retail, education, and government." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We deliver tailored technology solutions across diverse industries, 
                helping organizations transform and thrive in the digital age.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industry Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Specialized technology solutions for every industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mr-4`}>
                        <industry.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{industry.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.solutions.map((solution, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {solution}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link 
                      href={industry.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-transform"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our industry-specific solutions can help your organization succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Industry Consultation
              </Link>
              <Link href="/case-studies" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}