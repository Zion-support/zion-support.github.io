import React, { useState } from 'react';
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
  Sprout,
  Eye,
  Bot,
  FileText,
  Rocket
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Security Hardening', '24/7 Monitoring'],
    pricing: '$2,000 - $25,000/month',
    category: 'Cloud Services',
    popular: true
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Advanced security measures to protect your business from cyber threats and data breaches.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training'],
    pricing: '$1,500 - $15,000/month',
    category: 'Security',
    popular: true
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and maintenance of robust network infrastructure for optimal performance.',
    icon: Network,
    features: ['Network Design', 'Performance Optimization', 'Troubleshooting', 'Scalability Planning'],
    pricing: '$1,200 - $12,000/setup',
    category: 'Infrastructure',
    popular: true
  },
  {
    title: 'Database Management',
    description: 'Expert database administration, optimization, and migration services for all major platforms.',
    icon: Database,
    features: ['Performance Tuning', 'Backup & Recovery', 'Migration Services', 'Security Hardening'],
    pricing: '$800 - $8,000/month',
    category: 'Database',
    popular: false
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Streamline development workflows with automated deployment and continuous integration.',
    icon: Code,
    features: ['Pipeline Automation', 'Container Orchestration', 'Monitoring Setup', 'Deployment Strategies'],
    pricing: '$2,500 - $20,000/setup',
    category: 'DevOps',
    popular: true
  },
  {
    title: 'Data Center Migration',
    description: 'Seamless migration of your infrastructure to modern data centers or cloud platforms.',
    icon: Server,
    features: ['Migration Planning', 'Zero Downtime', 'Data Integrity', 'Performance Optimization'],
    pricing: '$5,000 - $100,000/project',
    category: 'Migration',
    popular: false
  },
  {
    title: 'IT Asset Management',
    description: 'Comprehensive tracking and management of all IT assets throughout their lifecycle.',
    icon: Monitor,
    features: ['Asset Tracking', 'License Management', 'Lifecycle Planning', 'Cost Optimization'],
    pricing: '$500 - $5,000/month',
    category: 'Management',
    popular: false
  },
  {
    title: 'AI-Powered IT Operations Management',
    description: 'Intelligent IT operations with AI-driven automation and predictive analytics.',
    icon: Brain,
    features: ['Predictive Maintenance', 'Automated Troubleshooting', 'Performance Analytics', 'Cost Optimization'],
    pricing: '$3,000 - $30,000/month',
    category: 'AI Operations',
    popular: true
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implement zero trust security model for enhanced protection against modern threats.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Detection'],
    pricing: '$5,000 - $50,000/setup',
    category: 'Security',
    popular: true
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Deploy edge computing solutions for low-latency applications and IoT connectivity.',
    icon: Cpu,
    features: ['Edge Deployment', 'IoT Integration', 'Low Latency', 'Distributed Processing'],
    pricing: '$2,000 - $25,000/setup',
    category: 'Edge Computing',
    popular: false
  },
  {
    title: '5G Network Infrastructure',
    description: 'Design and implement 5G networks for ultra-fast connectivity and IoT applications.',
    icon: Wifi,
    features: ['5G Planning', 'Network Optimization', 'IoT Integration', 'Performance Testing'],
    pricing: '$10,000 - $100,000/setup',
    category: '5G Networks',
    popular: false
  },
  {
    title: 'Quantum Security Solutions',
    description: 'Next-generation security using quantum cryptography and quantum-resistant algorithms.',
    icon: Lock,
    features: ['Quantum Cryptography', 'Post-Quantum Security', 'Key Distribution', 'Future-Proofing'],
    pricing: '$25,000 - $250,000/setup',
    category: 'Quantum Security',
    popular: false
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Build and maintain blockchain networks for secure, decentralized applications.',
    icon: Globe,
    features: ['Blockchain Development', 'Smart Contracts', 'Node Management', 'Security Auditing'],
    pricing: '$5,000 - $50,000/setup',
    category: 'Blockchain',
    popular: false
  },
  {
    title: 'IoT Platform Management',
    description: 'Comprehensive IoT solution management including device connectivity and data processing.',
    icon: Smartphone,
    features: ['Device Management', 'Data Processing', 'Connectivity Solutions', 'Analytics Dashboard'],
    pricing: '$1,500 - $15,000/month',
    category: 'IoT',
    popular: true
  },
  {
    title: 'Disaster Recovery Solutions',
    description: 'Comprehensive disaster recovery planning and implementation for business continuity.',
    icon: Shield,
    features: ['Recovery Planning', 'Backup Solutions', 'Testing & Validation', 'RTO/RPO Optimization'],
    pricing: '$2,000 - $20,000/setup',
    category: 'Disaster Recovery',
    popular: false
  },
  {
    title: 'IT Compliance & Governance',
    description: 'Ensure compliance with industry regulations and implement governance frameworks.',
    icon: FileText,
    features: ['Compliance Auditing', 'Policy Development', 'Risk Assessment', 'Training Programs'],
    pricing: '$1,000 - $10,000/month',
    category: 'Compliance',
    popular: false
  },
  {
    title: 'Cyber Threat Intelligence Platform',
    description: 'Advanced threat intelligence and security information management system.',
    icon: Shield,
    features: ['Threat Detection', 'Intelligence Feeds', 'Incident Response', 'Threat Hunting'],
    pricing: '$30,000 - $150,000/setup',
    category: 'Threat Intelligence',
    popular: true
  }
];

const categories = ['All', 'Cloud Services', 'Security', 'Infrastructure', 'Database', 'DevOps', 'Migration', 'Management', 'AI Operations', 'Edge Computing', '5G Networks', 'Quantum Security', 'Blockchain', 'IoT', 'Disaster Recovery', 'Compliance', 'Threat Intelligence'];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive information technology services to modernize your infrastructure, 
                enhance security, and optimize performance across all business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  href="#services" 
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-900 rounded-lg font-semibold transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        {service.popular && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-500">Starting at</span>
                          <div className="text-lg font-bold text-green-600">
                            {service.pricing}
                          </div>
                        </div>
                        <Link
                          href="/contact"
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our IT experts are ready to help you design, implement, and maintain 
                a robust technology infrastructure that scales with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Free IT Assessment
                </Link>
                <Link 
                  href="/micro-saas" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold"
                >
                  Explore Micro SaaS
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}