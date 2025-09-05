import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Zap, Shield, Users, BarChart3, CheckCircle, ArrowRight, Clock, Star, DollarSign, Award, Globe, Lock, Cpu, Bot, FileText, Image, Video, Mic, Code, Settings, Monitor, Smartphone, Server, Network, Database } from 'lucide-react';

const microSaaSProducts = [
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    description: 'Automated content creation using advanced AI for blogs, social media, and marketing materials',
    icon: FileText,
    features: ['Natural Language Processing', 'Multi-language Support', 'SEO Optimization', 'Content Templates'],
    pricing: 'Starting at $29/month',
    category: 'Content & Marketing'
  },
  {
    id: 'smart-analytics',
    title: 'Smart Analytics Dashboard',
    description: 'Real-time business intelligence with AI-powered insights and predictive analytics',
    icon: BarChart3,
    features: ['Real-time Data', 'Predictive Analytics', 'Custom Reports', 'API Integration'],
    pricing: 'Starting at $49/month',
    category: 'Analytics & BI'
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Streamline business processes with intelligent automation and workflow management',
    icon: Zap,
    features: ['Process Automation', 'Integration Hub', 'Custom Triggers', 'Performance Monitoring'],
    pricing: 'Starting at $39/month',
    category: 'Automation'
  },
  {
    id: 'security-monitor',
    title: 'Security Monitor',
    description: 'Advanced cybersecurity monitoring with real-time threat detection and response',
    icon: Shield,
    features: ['Threat Detection', 'Real-time Alerts', 'Compliance Monitoring', 'Incident Response'],
    pricing: 'Starting at $79/month',
    category: 'Security'
  },
  {
    id: 'team-collaboration',
    title: 'Team Collaboration Hub',
    description: 'Enhanced team productivity with AI-powered collaboration tools and project management',
    icon: Users,
    features: ['Project Management', 'Team Chat', 'File Sharing', 'Task Automation'],
    pricing: 'Starting at $19/month',
    category: 'Productivity'
  },
  {
    id: 'cloud-optimizer',
    title: 'Cloud Cost Optimizer',
    description: 'Intelligent cloud resource management to reduce costs and improve performance',
    icon: Cloud,
    features: ['Cost Analysis', 'Resource Optimization', 'Usage Monitoring', 'Auto-scaling'],
    pricing: 'Starting at $59/month',
    category: 'Cloud Management'
  }
];

export default function MicroSAASPage() {
  return (
    <>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SaaS solutions designed to solve specific business challenges with AI-powered tools and automation." />
        <meta name="keywords" content="micro SaaS, software solutions, business automation, AI tools, productivity software" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Micro SaaS Solutions for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Modern Businesses
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-gray-300"
              >
                Specialized software solutions designed to solve specific business challenges with AI-powered automation
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Solutions
                  <ArrowRight className="inline-block ml-2" size={20} />
                </Link>
                <Link 
                  href="#products" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  View Products
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our range of specialized solutions designed for different business needs
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <product.icon className="text-white" size={32} />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="text-green-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.pricing}
                    </span>
                    <Link 
                      href={`/contact?product=${product.id}`}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="inline-block ml-2" size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            >
              Contact us today to discuss your specific needs and discover how our micro SaaS solutions can help your business grow
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact" 
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
                <ArrowRight className="inline-block ml-2" size={20} />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}