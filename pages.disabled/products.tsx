import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, Shield, Globe, Rocket, 
  Cpu, Database, Lock, Cloud, BarChart3
} from 'lucide-react';

export default function ProductsPage() {
  const productCategories = [
    {
      name: 'AI & Machine Learning',
      description: 'Revolutionary AI solutions that transform business operations',
      icon: Brain,
      color: 'from-purple-400 to-pink-500',
      products: [
        'Autonomous Business Platform',
        'AI-Powered Analytics Suite',
        'Intelligent Process Automation',
        'Predictive Maintenance System'
      ]
    },
    {
      name: 'Quantum Computing',
      description: 'Next-generation quantum solutions for complex problems',
      icon: Zap,
      color: 'from-cyan-400 to-blue-500',
      products: [
        'Quantum Optimization Engine',
        'Quantum Machine Learning',
        'Quantum Cryptography Suite',
        'Quantum Simulation Platform'
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions',
      icon: Cloud,
      color: 'from-green-400 to-emerald-500',
      products: [
        'Multi-Cloud Management',
        'Edge Computing Platform',
        'Serverless Architecture',
        'Container Orchestration'
      ]
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced security solutions for modern threats',
      icon: Shield,
      color: 'from-red-400 to-pink-500',
      products: [
        'Zero-Trust Security',
        'Threat Intelligence Platform',
        'Identity Management',
        'Security Operations Center'
      ]
    },
    {
      name: 'Data & Analytics',
      description: 'Comprehensive data solutions for business intelligence',
      icon: BarChart3,
      color: 'from-orange-400 to-yellow-500',
      products: [
        'Real-Time Analytics',
        'Data Lake Platform',
        'Business Intelligence Suite',
        'Predictive Analytics'
      ]
    },
    {
      name: 'IoT & Edge',
      description: 'Connected solutions for the Internet of Things',
      icon: Globe,
      color: 'from-indigo-400 to-purple-500',
      products: [
        'IoT Platform',
        'Edge Computing',
        'Smart City Solutions',
        'Industrial IoT'
      ]
    }
  ];

  const featuredProducts = [
    {
      name: 'Zion AI Autonomous Platform',
      description: 'Complete AI-powered business automation platform that learns and adapts to your business needs.',
      features: [
        'Natural Language Processing',
        'Predictive Analytics',
        'Automated Decision Making',
        'Real-time Learning'
      ],
      icon: Brain,
      color: 'from-purple-400 to-pink-500',
      status: 'Available Now'
    },
    {
      name: 'Quantum Computing Suite',
      description: 'Enterprise-grade quantum computing solutions for complex optimization and simulation problems.',
      features: [
        'Quantum Algorithms',
        'Hybrid Classical-Quantum',
        'Optimization Engine',
        'Simulation Tools'
      ],
      icon: Zap,
      color: 'from-cyan-400 to-blue-500',
      status: 'Early Access'
    },
    {
      name: 'SecureNet Enterprise',
      description: 'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.',
      features: [
        'AI-Powered Detection',
        'Zero-Day Protection',
        'Compliance Management',
        'Incident Response'
      ],
      icon: Shield,
      color: 'from-red-400 to-pink-500',
      status: 'Available Now'
    }
  ];

  const productBenefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline operations',
      icon: Rocket,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Cost Reduction',
      description: 'Lower operational costs through intelligent automation',
      icon: BarChart3,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Enhanced Security',
      description: 'Protect your business with advanced security measures',
      icon: Lock,
      color: 'from-red-400 to-pink-500'
    },
    {
      title: 'Scalability',
      description: 'Grow your business without infrastructure limitations',
      icon: Globe,
      color: 'from-purple-400 to-indigo-500'
    },
    {
      title: 'Real-time Insights',
      description: 'Make data-driven decisions with instant analytics',
      icon: Cpu,
      color: 'from-orange-400 to-yellow-500'
    },
    {
      title: 'Future-Proof',
      description: 'Built with cutting-edge technology for tomorrow\'s challenges',
      icon: Zap,
      color: 'from-cyan-400 to-blue-500'
    }
  ];

  return (
    <>
      <Head>
        <title>Products - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's cutting-edge technology products including AI platforms, quantum computing solutions, cybersecurity tools, and more." />
        <meta property="og:title" content="Products - Zion Tech Group" />
        <meta property="og:description" content="Explore Zion Tech Group's cutting-edge technology products including AI platforms, quantum computing solutions, cybersecurity tools, and more." />
        <link rel="canonical" href="https://ziontechgroup.com/products" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent"
            >
              Our Products
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-4xl mx-auto mb-8"
            >
              Revolutionary technology products designed to transform your business operations 
              and drive unprecedented growth through AI, quantum computing, and intelligent automation.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                Request Demo
              </a>
              <a href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                View Services
              </a>
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Featured Products
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Our flagship products that are revolutionizing industries worldwide.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mr-4`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
                      <div className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-400">
                        {product.status}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-white/70">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <a href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Product Categories
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive solutions across all major technology domains.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white text-center">{category.name}</h3>
                  <p className="text-white/70 mb-4 text-center">{category.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Products:</h4>
                    <ul className="space-y-1">
                      {category.products.map((product, idx) => (
                        <li key={idx} className="text-sm text-white/70 flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <a href="/contact" className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                      Explore Category
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose Our Products?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Discover the advantages that make our technology products stand out from the competition.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Experience the power of cutting-edge technology products designed for the future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  Request Product Demo
                </a>
                <a href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 hover:border-cyan-400/50">
                  View Success Stories
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}