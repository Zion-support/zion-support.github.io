import type { NextPage } from 'next.ts';
import Head from 'next/head.ts';
import { useState  } from 'react.ts';
import { Brain, 
  Cloud, 
  Shield, 
  Globe, 
  Zap, 
  Database, 
  Smartphone, 
  Code, 
  Lock, 
  TrendingUp,
  Rocket,
  Cpu,
  Network,
  Palette,
  BarChart3,
  Sparkles,
  Target,
  Users,
  CheckCircle
 } from 'lucide-react.ts';


const products = [
  {
    title: "ZionAI Analytics",
    description: "Advanced AI-powered analytics platform that transforms raw data into actionable insights for business growth.",
    icon: Brain,
    category: "AI Solutions",
    features: [
      "Machine Learning Models",
      "Predictive Analytics",
      "Real-time Dashboards",
      "Custom AI Training",
      "API Integration",
      "Multi-cloud Support"
    ],
    pricing: "Starting at $299/month",
    rating: 4.9,
    reviews: 127,
    href: "/products/zion-ai-analytics"
  },
  {
    title: "CloudSecure Pro",
    description: "Enterprise-grade cloud security solution with zero-trust architecture and advanced threat protection.",
    icon: Shield,
    category: "Security",
    features: [
      "Zero-Trust Architecture",
      "Threat Detection",
      "Compliance Management",
      "Real-time Monitoring",
      "Automated Response",
      "Multi-cloud Security"
    ],
    pricing: "Starting at $499/month",
    rating: 4.8,
    reviews: 89,
    href: "/products/cloudsecure-pro"
  },
  {
    title: "DataFlow Engine",
    description: "High-performance data processing and ETL platform for modern data pipelines and analytics.",
    icon: Database,
    category: "Data Solutions",
    features: [
      "Real-time Processing",
      "ETL Pipelines",
      "Data Transformation",
      "Scalable Architecture",
      "API Management",
      "Monitoring & Alerts"
    ],
    pricing: "Starting at $199/month",
    rating: 4.7,
    reviews: 156,
    href: "/products/dataflow-engine"
  },
  {
    title: "MobileFirst CMS",
    description: "Headless CMS designed for mobile-first experiences with advanced content management capabilities.",
    icon: Smartphone,
    category: "Content Management",
    features: [
      "Headless Architecture",
      "Mobile Optimization",
      "Content Versioning",
      "Multi-language Support",
      "SEO Optimization",
      "Developer APIs"
    ],
    pricing: "Starting at $149/month",
    rating: 4.6,
    reviews: 98,
    href: "/products/mobilefirst-cms"
  },
  {
    title: "ZionCloud Platform",
    description: "Comprehensive cloud infrastructure platform with automated scaling and management capabilities.",
    icon: Cloud,
    category: "Cloud Infrastructure",
    features: [
      "Auto-scaling",
      "Multi-cloud Support",
      "Cost Optimization",
      "Monitoring & Alerts",
      "DevOps Integration",
      "Security Compliance"
    ],
    pricing: "Starting at $399/month",
    rating: 4.8,
    reviews: 203,
    href: "/products/zioncloud-platform"
  },
  {
    title: "WorkflowMax",
    description: "Business process automation platform that streamlines operations and increases productivity.",
    icon: Zap,
    category: "Automation",
    features: [
      "Process Automation",
      "Workflow Designer",
      "Integration Hub",
      "Task Management",
      "Analytics & Reporting",
      "Custom Triggers"
    ],
    pricing: "Starting at $99/month",
    rating: 4.5,
    reviews: 167,
    href: "/products/workflowmax"
  }
];

const categories = [
  { name: "All Products", count: 6, active: true },
  { name: "AI Solutions", count: 1, active: false },
  { name: "Security", count: 1, active: false },
  { name: "Data Solutions", count: 1, active: false },
  { name: "Content Management", count: 1, active: false },
  { name: "Cloud Infrastructure", count: 1, active: false },
  { name: "Automation", count: 1, active: false }
];

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

  const filteredProducts = activeCategory === 'all' 
    ? products: anyproducts.filter(product  => product.category === activeCategory);

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

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {productCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid lg: anygrid-cols-2 gap-8">
          {filteredProducts.map((product)  => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-blue-400">{product.price}</span>
                    <p className="text-gray-400 text-sm">per month</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-blue-300 font-medium mb-4">{product.tagline}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
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