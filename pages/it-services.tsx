import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Monitor, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award, 
  Star, 
  Zap, 
  TrendingUp, 
  Users, 
  Lock, 
  Globe, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Smartphone, 
  Laptop, 
  Building, 
  BarChart3, 
  Code, 
  Search, 
  ShoppingCart, 
  BookOpen, 
  Brain, 
  DollarSign, 
  Rocket, 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    id: 1,
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management with 24/7 monitoring.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery', 'Security Hardening'],
    pricing: '$2,000 - $10,000/month',
    category: 'Cloud Computing',
    popular: true,
    benefits: ['Reduced Costs', 'Better Scalability', 'Enhanced Security', 'Improved Performance'],
    marketPrice: '$5,000 - $15,000/month',
    link: 'https://ziontechgroup.com/cloud-infrastructure',
    contact: '+1 302 464 0950'
  },
  {
    id: 2,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Audits', 'Compliance Management'],
    pricing: '$3,000 - $15,000/month',
    category: 'Cybersecurity',
    popular: true,
    benefits: ['Enhanced Security', 'Compliance', 'Risk Mitigation', '24/7 Monitoring'],
    marketPrice: '$8,000 - $25,000/month',
    link: 'https://ziontechgroup.com/cybersecurity',
    contact: '+1 302 464 0950'
  },
  {
    id: 3,
    title: 'Network Management',
    description: 'Complete network infrastructure design, implementation, and ongoing management services.',
    icon: Network,
    features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting', 'Performance Optimization'],
    pricing: '$1,500 - $8,000/month',
    category: 'Network Services',
    popular: false,
    benefits: ['Reliable Connectivity', 'Better Performance', 'Reduced Downtime', 'Cost Efficiency'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/network-management',
    contact: '+1 302 464 0950'
  },
  {
    id: 4,
    title: 'System Administration',
    description: 'Professional system administration services for servers, databases, and applications.',
    icon: Server,
    features: ['Server Management', 'Database Administration', 'Application Support', 'Backup & Recovery', 'Performance Tuning'],
    pricing: '$2,500 - $12,000/month',
    category: 'System Administration',
    popular: true,
    benefits: ['System Reliability', 'Performance Optimization', 'Data Protection', 'Expert Support'],
    marketPrice: '$5,000 - $20,000/month',
    link: 'https://ziontechgroup.com/system-administration',
    contact: '+1 302 464 0950'
  },
  {
    id: 5,
    title: 'DevOps & CI/CD',
    description: 'DevOps implementation with continuous integration and deployment pipelines for faster, more reliable software delivery.',
    icon: Code,
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing'],
    pricing: '$4,000 - $18,000/month',
    category: 'DevOps',
    popular: true,
    benefits: ['Faster Deployment', 'Better Quality', 'Reduced Risk', 'Team Collaboration'],
    marketPrice: '$8,000 - $30,000/month',
    link: 'https://ziontechgroup.com/devops',
    contact: '+1 302 464 0950'
  },
  {
    id: 6,
    title: 'Data Analytics & BI',
    description: 'Comprehensive data analytics and business intelligence solutions to drive data-driven decisions.',
    icon: BarChart3,
    features: ['Data Warehousing', 'ETL Processes', 'Dashboard Development', 'Predictive Analytics', 'Report Automation'],
    pricing: '$3,500 - $16,000/month',
    category: 'Data Analytics',
    popular: false,
    benefits: ['Data-Driven Decisions', 'Business Insights', 'Automated Reporting', 'Competitive Advantage'],
    marketPrice: '$7,000 - $25,000/month',
    link: 'https://ziontechgroup.com/data-analytics',
    contact: '+1 302 464 0950'
  }
];

const categories = [
  { name: 'All', count: itServices.length },
  { name: 'Cloud Computing', count: itServices.filter(s => s.category === 'Cloud Computing').length },
  { name: 'Cybersecurity', count: itServices.filter(s => s.category === 'Cybersecurity').length },
  { name: 'Network Services', count: itServices.filter(s => s.category === 'Network Services').length },
  { name: 'System Administration', count: itServices.filter(s => s.category === 'System Administration').length },
  { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
  { name: 'Data Analytics', count: itServices.filter(s => s.category === 'Data Analytics').length }
];

export default function ITServices() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud computing, cybersecurity, network management, system administration, and DevOps solutions for your business."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              IT Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Comprehensive IT solutions to keep your business running smoothly. 
              From cloud computing to cybersecurity, we provide the expertise you need.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg font-semibold"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="relative max-w-md mx-auto mb-8">
              <input
                type="text"
                placeholder="Search IT services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {service.popular && (
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-1 mb-4">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Our Price:</span>
                    <span className="font-bold text-blue-600">{service.pricing}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Market Price:</span>
                    <span className="text-gray-600 line-through">{service.marketPrice}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our IT experts help you build a robust, secure, and scalable technology foundation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}