import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Shield,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Zap,
  Globe,
  Lock,
  Cpu,
  Sparkles,
  ShieldCheck,
  Globe2,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
const InnovativeServices2025: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI Automation Services",
      description: "Revolutionary AI-powered automation solutions that transform business operations",
      icon: Brain,
      color: "from-blue-600 to-cyan-600",
      services: [
        {
          name: "AI Code Review & Quality Assurance",
          description: "Intelligent code analysis, review automation, and quality assurance",
          price: "$1,299/month",
          features: ["AI-powered code analysis", "Security vulnerability detection", "Code quality scoring", "Performance optimization"],
          link: "https://ziontechgroup.com/ai-code-review",
          popular: true
        },
        {
          name: "AI Content Marketing Automation",
          description: "Intelligent content creation, optimization, and distribution automation",
          price: "$899/month",
          features: ["AI-powered content generation", "SEO optimization", "Multi-channel distribution", "Performance analytics"],
          link: "https://ziontechgroup.com/ai-content-marketing",
          popular: true
        },
        {
          name: "AI Customer Support Automation",
          description: "Intelligent customer support with automated responses and issue resolution",
          price: "$699/month",
          features: ["AI-powered chatbots", "Automated ticket routing", "Knowledge base automation", "Sentiment analysis"],
          link: "https://ziontechgroup.com/ai-customer-support",
          popular: true
        }
      ]
    },
    {
      title: "Advanced IT Infrastructure",
      description: "Cutting-edge infrastructure solutions with quantum computing and neuromorphic technology",
      icon: Cpu,
      color: "from-purple-600 to-indigo-600",
      services: [
        {
          name: "Quantum-Secure Cloud Infrastructure",
          description: "Future-proof cloud infrastructure with quantum-resistant encryption",
          price: "$3,999/month",
          features: ["Quantum-resistant encryption", "Post-quantum cryptography", "Multi-cloud orchestration", "Zero-trust security"],
          link: "https://ziontechgroup.com/quantum-secure-cloud",
          popular: true
        },
        {
          name: "Edge Computing Orchestration",
          description: "Intelligent orchestration of distributed edge computing resources",
          price: "$1,899/month",
          features: ["Intelligent workload distribution", "Edge-to-cloud synchronization", "Real-time optimization", "IoT integration"],
          link: "https://ziontechgroup.com/edge-computing-orchestration",
          popular: true
        },
        {
          name: "Neuromorphic Computing Infrastructure",
          description: "Brain-inspired computing architecture for ultra-efficient AI processing",
          price: "$5,999/month",
          features: ["Brain-inspired neural architecture", "Ultra-low power consumption", "Real-time learning", "Spiking neural networks"],
          link: "https://ziontechgroup.com/neuromorphic-computing",
          popular: false
        }
      ]
    },
    {
      title: "Innovative Micro-SaaS Solutions",
      description: "Specialized SaaS solutions for specific industries and business needs",
      icon: Sparkles,
      color: "from-green-600 to-emerald-600",
      services: [
        {
          name: "AI Legal Document Automation",
          description: "Intelligent legal document creation, review, and automation",
          price: "$599/month",
          features: ["AI-powered contract generation", "Legal document review", "Compliance checking", "Workflow automation"],
          link: "https://ziontechgroup.com/ai-legal-automation",
          popular: true
        },
        {
          name: "AI Real Estate Analytics",
          description: "Intelligent real estate market analysis and investment insights",
          price: "$799/month",
          features: ["Market trend analysis", "Investment opportunity identification", "Property valuation", "Risk assessment"],
          link: "https://ziontechgroup.com/ai-real-estate-analytics",
          popular: true
        },
        {
          name: "AI Restaurant Management",
          description: "Intelligent restaurant operations, inventory, and customer management",
          price: "$399/month",
          features: ["Inventory management", "Demand forecasting", "Staff optimization", "Customer analytics"],
          link: "https://ziontechgroup.com/ai-restaurant-management",
          popular: true
        }
      ]
    },
    {
      title: "Cutting-Edge AI Research",
      description: "Revolutionary AI platforms for advanced research and scientific discovery",
      icon: Rocket,
      color: "from-orange-600 to-red-600",
      services: [
        {
          name: "AI Drug Discovery Platform",
          description: "Accelerate drug discovery with AI-powered molecular analysis",
          price: "$8,999/month",
          features: ["Molecular analysis", "Drug efficacy prediction", "Toxicity prediction", "Clinical trial optimization"],
          link: "https://ziontechgroup.com/ai-drug-discovery",
          popular: true
        },
        {
          name: "AI Climate Prediction Platform",
          description: "Predict climate patterns with AI-powered environmental analysis",
          price: "$3,999/month",
          features: ["Climate modeling", "Weather prediction", "Environmental analysis", "Risk assessment"],
          link: "https://ziontechgroup.com/ai-climate-prediction",
          popular: true
        },
        {
          name: "AI Space Exploration Platform",
          description: "Revolutionize space exploration with AI-powered mission optimization",
          price: "$12,999/month",
          features: ["Mission planning", "Satellite optimization", "Astronomical analysis", "Risk assessment"],
          link: "https://ziontechgroup.com/ai-space-exploration",
          popular: false
        }
      ]
    }
  ];
  const contactInfo = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEOHead
        config={{
          title: "Innovative Services 2025 - Zion Tech Group",
          description: "Discover our cutting-edge AI, IT infrastructure, and micro-SaaS services. Revolutionary solutions for the future of business and technology.",
          keywords: "AI services, IT infrastructure, micro-SaaS, quantum computing, neuromorphic computing, AI automation, Zion Tech Group"
        }}
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Innovative Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI, IT infrastructure, and micro-SaaS solutions that transform businesses and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive suite of innovative services spans multiple domains, from AI automation to quantum computing infrastructure
            </p>
          </motion.div>
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-slate-700/50 rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                        service.popular ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 'border-slate-600/50'
                      }`}
                    >
                      {service.popular && (
                        <div className="flex items-center gap-2 mb-4">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="text-sm font-semibold text-yellow-400">Popular</span>
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-emerald-400">{service.price}</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 w-full justify-center"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact us today to learn how our innovative services can revolutionize your operations and drive growth
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Market Position Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our innovative services provide unmatched value and competitive advantages in the market
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg w-fit mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Market Leadership</h3>
              <p className="text-gray-300">
                First-to-market solutions in quantum computing, neuromorphic computing, and AI research platforms
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg w-fit mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Excellence</h3>
              <p className="text-gray-300">
                Up to 90% improvement in processing speed, 80% reduction in costs, and 70% faster time-to-market
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg w-fit mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">
                Quantum-resistant encryption, zero-trust architecture, and comprehensive compliance frameworks
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}