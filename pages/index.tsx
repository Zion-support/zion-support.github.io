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
    description: "100+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, autonomous systems, healthcare AI, financial AI, and advanced analytics with real-world applications",
    icon: Brain,
    href: "/ai-services",
    count: "100+ Solutions",
    pricing: "Starting at $1,800/month",
    marketPrice: "$3,000-15,000/month",
    benefits: ["40-60% accuracy improvement", "80% automation", "25-35% ROI increase"]
  },
  {
    title: "IT Services", 
    description: "85+ comprehensive IT services from cloud infrastructure to cybersecurity, quantum computing, edge computing, blockchain infrastructure, AI infrastructure, and enterprise digital transformation",
    icon: Network,
    href: "/it-services",
    count: "85+ Services",
    pricing: "Starting at $800/month",
    marketPrice: "$1,500-8,000/month",
    benefits: ["99.9% uptime", "50% cost reduction", "24/7 support"]
  },
  {
    title: "Micro SaaS",
    description: "120+ innovative micro SaaS solutions for modern businesses across all industries including CRM, project management, e-commerce, HR systems, marketing automation, and financial management",
    icon: Cloud,
    href: "/micro-saas",
    pricing: "Starting at $1,200/month",
    marketPrice: "$2,000-8,000/month",
    benefits: ["Reduce costs by 40%", "Improve efficiency by 60%", "Scale rapidly"]
  }
];

const featuredServices = [
  {
    title: "Quantum AI Solutions",
    description: "Next-generation quantum machine learning algorithms for solving complex optimization problems and advanced pattern recognition.",
    icon: "⚛️",
    features: ["Quantum Machine Learning", "Quantum Optimization", "Quantum Neural Networks", "Hybrid Classical-Quantum Models"],
    price: "Starting at $8,500/month",
    marketPrice: "$15,000-50,000/month",
    benefits: ["Solve problems 1000x faster", "Breakthrough optimization results", "Future-proof technology"]
  },
  {
    title: "Autonomous Systems AI",
    description: "Self-driving vehicles, drones, and robotic systems powered by advanced AI for autonomous operations.",
    icon: "🚗",
    features: ["Autonomous Vehicle AI", "Drone Navigation", "Robotic Process Automation", "Fleet Management AI"],
    price: "Starting at $12,000/month",
    marketPrice: "$20,000-100,000/month",
    benefits: ["Reduce costs by 60%", "Improve safety by 95%", "Enable 24/7 operations"]
  },
  {
    title: "AI-Powered Healthcare",
    description: "Medical AI solutions for diagnosis, drug discovery, personalized treatment, and patient monitoring.",
    icon: "🏥",
    features: ["Medical Image Analysis", "Drug Discovery", "Personalized Treatment", "Predictive Health Analytics"],
    price: "Starting at $5,500/month",
    marketPrice: "$8,000-25,000/month",
    benefits: ["Improve accuracy by 40%", "Reduce costs by 30%", "Save lives through early detection"]
  },
  {
    title: "Financial AI & Trading",
    description: "Advanced AI for algorithmic trading, risk management, fraud detection, and financial forecasting.",
    icon: "💰",
    features: ["Algorithmic Trading", "Risk Assessment", "Fraud Detection", "Portfolio Optimization"],
    price: "Starting at $4,200/month",
    marketPrice: "$6,000-20,000/month",
    benefits: ["Increase profits by 25-40%", "Reduce fraud by 90%", "Automate financial decisions"]
  },
  {
    title: "Edge Computing Solutions",
    description: "Distributed computing infrastructure for real-time processing and low latency applications.",
    icon: "🌐",
    features: ["Edge Server Deployment", "IoT Data Processing", "Real-time Analytics", "5G Integration"],
    price: "Starting at $2,500/month",
    marketPrice: "$4,500-12,000/month",
    benefits: ["Reduce latency by 80%", "Process data locally", "Improve user experience"]
  },
  {
    title: "Blockchain Infrastructure",
    description: "Secure and scalable blockchain solutions for decentralized applications and DeFi platforms.",
    icon: "🔗",
    features: ["Blockchain Network Setup", "Smart Contract Development", "DeFi Platforms", "NFT Marketplaces"],
    price: "Starting at $3,500/month",
    marketPrice: "$6,000-20,000/month",
    benefits: ["Ensure data immutability", "Enable decentralized operations", "Reduce transaction costs"]
  },
  {
    title: "AI Content Generation",
    description: "Automated content creation, copywriting, video production, and creative AI solutions for marketing.",
    icon: "✍️",
    features: ["Automated Copywriting", "Video Generation", "Image Creation", "Multilingual Content"],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-8,000/month",
    benefits: ["Reduce creation time by 80%", "Scale production 10x", "Maintain brand voice"]
  },
  {
    title: "Quantum Computing Services",
    description: "Next-generation quantum computing solutions for complex problem solving and optimization.",
    icon: "⚛️",
    features: ["Quantum Algorithms", "Quantum Simulation", "Quantum ML", "Quantum Cryptography"],
    price: "Starting at $5,000/month",
    marketPrice: "$10,000-50,000/month",
    benefits: ["Solve problems 1000x faster", "Handle massive datasets", "Future-proof solutions"]
  },
  {
    title: "AI-Powered Cybersecurity",
    description: "Intelligent threat detection, automated security monitoring, and AI-driven incident response.",
    icon: "🔒",
    features: ["Threat Detection", "Automated Response", "Behavioral Analysis", "Predictive Security"],
    price: "Starting at $3,800/month",
    marketPrice: "$5,500-15,000/month",
    benefits: ["Detect threats 10x faster", "Reduce false positives by 70%", "Prevent breaches"]
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
      title="Zion Tech Group - Leading AI, IT & Micro SAAS Solutions Provider"
      description="Zion Tech Group provides cutting-edge AI services, IT solutions, and innovative micro SAAS platforms. Transform your business with our comprehensive technology services and solutions."
      keywords="AI development, cloud solutions, blockchain, IoT platforms, micro SAAS, IT services, technology solutions"
      canonical="https://ziontechgroup.com"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          {/* Background Animation */}
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
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI & Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, quantum computing, blockchain, IoT, and digital transformation services. We deliver 235+ innovative solutions to transform your business with cutting-edge technology and expert implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started Today
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
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
          </div>
          
          <div className="container mx-auto px-4 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow"
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
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      {service.marketPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {service.marketPrice}
                        </span>
                      )}
                    </div>
                    {service.marketPrice && (
                      <div className="text-xs text-green-600 font-medium mb-2">
                        Save up to 40% vs market rate
                      </div>
                    )}
                    {service.benefits && (
                      <div className="text-xs text-gray-600">
                        <div className="font-semibold mb-1">Key Benefits:</div>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Competitive Pricing</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Micro SaaS: $19 - $4,999/month</li>
                  <li>• IT Services: $120 - $500/hour</li>
                  <li>• AI Solutions: $1,000 - $1M/project</li>
                  <li>• Blockchain: $50K - $500K/project</li>
                  <li>• Quantum Computing: $100K - $1M/project</li>
                  <li>• Transparent, no hidden fees</li>
                </ul>
              </motion.div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
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