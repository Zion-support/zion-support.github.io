import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Cloud, 
  Shield, 
  Globe, 
  Smartphone, 
  Zap, 
  Users, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  BarChart3,
  Settings,
  Code,
  Database,
  Server,
  MessageSquare,
  FileText,
  Mic,
  Search,
  Calendar,
  Package,
  ClipboardList,
  ShoppingCart,
  Target,
  TrendingUp
} from 'lucide-react';
import Layout from './components/Layout';

const services = [
  {
    title: "AI Services",
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning Models", "Computer Vision", "Natural Language Processing", "Predictive Analytics", "AI Chatbots", "Quantum AI"],
    pricing: "Starting at $2,500/month"
  },
  {
    title: "IT Services",
    description: "70+ comprehensive IT services from cloud infrastructure to cybersecurity, quantum computing, and zero-trust architecture",
    icon: Network,
    href: "/it-services",
    features: ["Cloud Migration", "DevOps Automation", "System Integration", "IT Consulting", "Infrastructure Management", "Technical Support"],
    pricing: "Starting at $1,800/month"
  },
  {
    title: "Micro SaaS",
    description: "85+ innovative micro SaaS solutions for modern businesses across all industries with real-time pricing and market analysis",
    icon: Cloud,
    href: "/micro-saas",
    features: ["Workflow Automation", "API Integration", "Custom Dashboards", "Data Processing", "Business Intelligence", "Process Optimization"],
    pricing: "Starting at $1,500/month"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure with enterprise-grade protection",
    icon: Shield,
    href: "/cybersecurity",
    features: ["Security Audits", "Penetration Testing", "Zero-Trust Architecture", "Compliance Management", "Threat Detection", "Incident Response"],
    pricing: "Starting at $2,000/month"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, migration services, and DevOps automation for modern applications",
    icon: Globe,
    href: "/cloud-solutions",
    features: ["AWS/Azure/GCP Migration", "Container Orchestration", "Serverless Architecture", "Cloud Security", "Auto-scaling", "Cost Optimization"],
    pricing: "Starting at $1,800/month"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design",
    icon: Smartphone,
    href: "/mobile-development",
    features: ["iOS Development", "Android Development", "React Native", "Flutter Apps", "Mobile UI/UX", "App Store Optimization"],
    pricing: "Starting at $3,000/month"
  }
];

const stats = [
  { number: '235+', label: 'Services Available' },
  { number: '1,200+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Certified professionals with deep expertise in cutting-edge technologies",
    icon: Award
  },
  {
    title: "Proven Track Record",
    description: "Successfully delivered 1,200+ projects across various industries",
    icon: CheckCircle
  },
  {
    title: "Cost-Effective",
    description: "Transparent pricing with no hidden costs or surprises",
    icon: DollarSign
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance",
    icon: Clock
  }
];

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, IT, Micro SaaS, Cybersecurity, Cloud Solutions, and Mobile Development." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive technology solutions to transform your business with cutting-edge AI, IT services, 
              micro SaaS platforms, and enterprise-grade security.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">
                      {service.pricing}
                    </span>
                    <Link href={service.href}>
                      <a className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Why Choose Zion Tech Group?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Get started with our comprehensive technology solutions today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Link>
                <Link href="/quote">
                  <a className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                    Request Quote
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}