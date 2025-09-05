import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Server, Shield, Cloud, Database, Network, Monitor, Settings, CheckCircle, ArrowRight, Clock, Award, Star, Zap, TrendingUp, Users, Lock, Globe, Cpu, HardDrive, Wifi, Smartphone, Laptop, Building, BarChart3, Code, Search, ShoppingCart, BookOpen, Brain, DollarSign, Rocket, Phone, Mail, MapPin, Headphones } from 'lucide-react';
import Layout from '../components/Layout';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const itServices = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions for modern businesses",
    icon: Cloud,
    features: [
      "AWS, Azure, GCP Migration",
      "Container Orchestration",
      "Serverless Architecture",
      "Cloud Security & Compliance",
      "Auto-scaling Solutions",
      "Disaster Recovery"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-8,000/month",
    benefits: ["99.9% uptime guarantee", "50% cost reduction", "24/7 monitoring"],
    setupTime: "2-4 weeks"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets",
    icon: Shield,
    features: [
      "Security Audits & Assessments",
      "Penetration Testing",
      "Zero-Trust Architecture",
      "Compliance & Risk Management",
      "Incident Response",
      "Security Training"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-10,000/month",
    benefits: ["Reduce security incidents by 90%", "Compliance ready", "24/7 threat monitoring"],
    setupTime: "3-6 weeks"
  },
  {
    title: "DevOps & Automation",
    description: "Streamline your development and deployment processes",    icon: Zap,
    title: 'Cost Savings',
    description: 'Optimized infrastructure and processes',
    stat: '40%'
  },
  {
    title: "Database Management",
    description: "Optimize and secure your data infrastructure",
    icon: Database,
    features: [
      "Database Design & Optimization",
      "Data Migration Services",
      "Backup & Recovery Solutions",
      "Performance Tuning",
      "Data Security & Encryption",
      "Cloud Database Setup"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-5,000/month",
    benefits: ["50% faster queries", "Zero data loss", "Automated backups"],
    setupTime: "2-3 weeks"
  },
  {
    title: 'IoT Platform Development & Management',
    description: 'Comprehensive IoT solutions for device management, data collection, and analytics.',
    icon: Smartphone,
    features: ['Device Management', 'Data Collection', 'Real-time Analytics', 'Remote Monitoring'],
    pricing: '$2,499 - $9,999/month',
    category: 'IoT Platforms',
    benefits: ['Connected Devices', 'Real-time Insights', 'Operational Efficiency', 'Data-Driven Decisions'],
    marketPrice: '$4,000 - $15,000/month',
    link: 'https://ziontechgroup.com/iot-platforms',
    popular: false
  },
  {
    title: 'AI Infrastructure & ML Pipeline Setup',
    description: 'Complete AI infrastructure setup with machine learning pipelines and model deployment.',
    icon: Brain,
    features: ['ML Pipeline Setup', 'Model Training', 'Model Deployment', 'Performance Monitoring'],
    pricing: '$4,999 - $19,999/month',
    category: 'AI Infrastructure',
    benefits: ['Advanced AI Capabilities', 'Scalable ML Operations', 'Automated Workflows', 'High Performance'],
    marketPrice: '$8,000 - $30,000/month',
    link: 'https://ziontechgroup.com/ai-infrastructure',
    popular: true
  },
  {
    title: 'Green IT & Sustainability Solutions',
    description: 'Eco-friendly IT solutions for reducing carbon footprint and energy consumption.',
    icon: Globe,
    features: ['Energy Optimization', 'Carbon Footprint Reduction', 'Sustainable Practices', 'Green Monitoring'],
    pricing: '$1,999 - $7,999/month',
    category: 'Green IT',
    benefits: ['Environmental Impact', 'Cost Savings', 'Sustainability Goals', 'Efficient Operations'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/green-it',
    popular: false
  },
  {
    title: 'AI-Powered DevOps & CI/CD Pipeline',
    description: 'Intelligent DevOps automation with AI-driven deployment, monitoring, and optimization.',
    icon: Settings,
    features: ['AI-driven deployments', 'Automated testing', 'Performance monitoring', 'Rollback automation'],
    pricing: '$3,999 - $12,999/month',
    category: 'DevOps & Automation',
    benefits: ['Faster deployments', 'Reduced errors', 'Automated scaling', 'Better reliability'],
    marketPrice: '$6,000 - $18,000/month',
    link: 'https://ziontechgroup.com/ai-devops',
    popular: true
  },
  {
    title: 'Quantum Computing Integration Services',
    description: 'Quantum computing solutions for complex problem-solving and optimization challenges.',
    icon: Cpu,
    features: ['Quantum algorithm development', 'Hybrid classical-quantum systems', 'Quantum simulation', 'Optimization solutions'],
    pricing: '$19,999 - $99,999/month',
    category: 'Quantum Computing',
    benefits: ['Exponential speedup', 'Complex problem solving', 'Future-proof technology', 'Competitive advantage'],
    marketPrice: '$30,000 - $150,000/month',
    link: 'https://ziontechgroup.com/quantum-computing',
    popular: true
  },
  {
    title: 'AI-Powered Cloud Migration & Optimization',
    description: 'Intelligent cloud migration with automated optimization and cost management.',
    icon: Cloud,
    features: ['Automated migration', 'Cost optimization', 'Performance tuning', 'Security compliance'],
    pricing: '$4,999 - $19,999/month',
    category: 'Cloud Services',
    benefits: ['Reduced migration time', 'Cost savings', 'Better performance', 'Enhanced security'],
    marketPrice: '$8,000 - $30,000/month',
    link: 'https://ziontechgroup.com/ai-cloud-migration',
    popular: true
  },
  {
    title: 'Advanced Threat Intelligence & Response',
    description: 'AI-driven threat detection and automated response system for enterprise security.',
    icon: Shield,
    features: ['Threat intelligence', 'Automated response', 'Behavioral analysis', 'Incident management'],
    pricing: '$7,999 - $24,999/month',
    category: 'Cybersecurity',
    benefits: ['Proactive security', 'Faster threat response', 'Reduced risk', 'Compliance assurance'],
    marketPrice: '$12,000 - $40,000/month',
    link: 'https://ziontechgroup.com/threat-intelligence',
    popular: true
  },
  {
    title: 'Smart Data Center Management',
    description: 'AI-powered data center optimization with predictive maintenance and energy efficiency.',
    icon: Server,
    features: ['Predictive maintenance', 'Energy optimization', 'Capacity planning', 'Automated management'],
    pricing: '$5,999 - $19,999/month',
    category: 'Data Center',
    benefits: ['Reduced downtime', 'Energy savings', 'Better capacity utilization', 'Automated operations'],
    marketPrice: '$10,000 - $30,000/month',
    link: 'https://ziontechgroup.com/smart-datacenter',
    popular: false
  },
  {
    title: 'AI-Powered Network Optimization',
    description: 'Intelligent network management with automated optimization and performance monitoring.',
    icon: Network,
    features: ['Network optimization', 'Traffic analysis', 'Performance monitoring', 'Automated tuning'],
    pricing: '$3,999 - $14,999/month',
    category: 'Network Services',
    benefits: ['Better performance', 'Reduced latency', 'Automated management', 'Cost optimization'],
    marketPrice: '$6,000 - $20,000/month',
    link: 'https://ziontechgroup.com/ai-network-optimization',
    popular: false
  },
  {
    title: 'Intelligent Backup & Disaster Recovery',
    description: 'AI-driven backup solutions with automated disaster recovery and business continuity.',
    icon: HardDrive,
    features: ['Automated backups', 'Disaster recovery', 'Business continuity', 'Data integrity'],
    pricing: '$2,999 - $9,999/month',
    category: 'Backup & Recovery',
    benefits: ['Data protection', 'Fast recovery', 'Business continuity', 'Automated management'],
    marketPrice: '$5,000 - $15,000/month',
    link: 'https://ziontechgroup.com/intelligent-backup',
    popular: true
  },
  {
    title: 'AI-Powered IT Asset Management',
    description: 'Intelligent IT asset tracking, lifecycle management, and optimization.',
    icon: Monitor,
    features: ['Asset tracking', 'Lifecycle management', 'Cost optimization', 'Compliance monitoring'],
    pricing: '$1,999 - $7,999/month',
    category: 'Asset Management',
    benefits: ['Better asset utilization', 'Cost savings', 'Compliance assurance', 'Automated tracking'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-asset-management',
    popular: false
  },
  {
    title: 'Smart IT Service Desk & Automation',
    description: 'AI-powered IT service desk with automated ticket resolution and intelligent routing.',
    icon: Headphones,
    features: ['Automated ticket resolution', 'Intelligent routing', 'Self-service portal', 'Analytics dashboard'],
    pricing: '$2,499 - $8,999/month',
    category: 'Service Desk',
    benefits: ['Faster resolution', 'Reduced costs', 'Better user experience', 'Automated workflows'],
    marketPrice: '$4,000 - $12,000/month',
    link: 'https://ziontechgroup.com/smart-service-desk',
    popular: true
  }
];

const categories = [
  { name: "All", count: itServices.length },
  { name: "AI Operations", count: itServices.filter(s => s.category === "AI Operations").length },
  { name: "Quantum Security", count: itServices.filter(s => s.category === "Quantum Security").length },
  { name: "Edge Computing", count: itServices.filter(s => s.category === "Edge Computing").length },
  { name: "5G Networks", count: itServices.filter(s => s.category === "5G Networks").length },
  { name: "Blockchain Infrastructure", count: itServices.filter(s => s.category === "Blockchain Infrastructure").length },
  { name: "IoT Platforms", count: itServices.filter(s => s.category === "IoT Platforms").length },
  { name: "AI Infrastructure", count: itServices.filter(s => s.category === "AI Infrastructure").length },
  { name: "Green IT", count: itServices.filter(s => s.category === "Green IT").length },
  { name: "DevOps & Automation", count: itServices.filter(s => s.category === "DevOps & Automation").length },
  { name: "Quantum Computing", count: itServices.filter(s => s.category === "Quantum Computing").length },
  { name: "Cloud Services", count: itServices.filter(s => s.category === "Cloud Services").length },
  { name: "Cybersecurity", count: itServices.filter(s => s.category === "Cybersecurity").length },
  { name: "Data Center", count: itServices.filter(s => s.category === "Data Center").length },
  { name: "Network Services", count: itServices.filter(s => s.category === "Network Services").length },
  { name: "Backup & Recovery", count: itServices.filter(s => s.category === "Backup & Recovery").length },
  { name: "Asset Management", count: itServices.filter(s => s.category === "Asset Management").length },
  { name: "Service Desk", count: itServices.filter(s => s.category === "Service Desk").length }
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services and solutions for modern businesses. From AI operations to cybersecurity, we provide cutting-edge technology solutions."
      keywords="IT services, technology solutions, AI operations, cybersecurity, cloud computing, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-4 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-4 md:right-10 w-48 md:w-72 h-48 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-8 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto px-4">
                Comprehensive IT services including AI operations, cybersecurity, cloud computing, 
                and digital transformation solutions for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                <Link href="/contact" className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm md:text-base">
                  Get Free Consultation
                </Link>
                <Link href="#services" className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-sm md:text-base">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="bg-blue-900 text-white py-3 md:py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 md:mb-0">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-blue-300">{contactInfo.phone}</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">{contactInfo.email}</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-200 text-xs md:text-sm">24/7 IT Support Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 md:mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
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
        <section id="services" className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 md:mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-3 md:mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base md:text-lg font-bold text-green-600">
                          {service.pricing}
                        </span>
                        <span className="text-xs md:text-sm text-gray-500 line-through">
                          {service.marketPrice}
                        </span>
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        Save up to 40% vs market rate
                      </div>
                    </div>
                    
                    <div className="mb-3 md:mb-4">
                      <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-3 md:mb-4">
                      <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        href="/contact"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-3 md:px-4 rounded-lg text-xs md:text-sm font-semibold transition-colors"
                      >
                        Get Quote
                      </Link>
                      <Link
                        href="/contact"
                        className="px-3 md:px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg text-xs md:text-sm font-semibold transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Let our IT experts help you implement the perfect solution for your business needs.
                Get a free consultation and custom quote today.
              </p>
              <div className="mb-6 md:mb-8">
                <p className="text-base md:text-lg text-blue-100 mb-2">
                  📞 <strong>Call us:</strong> {contactInfo.phone}
                </p>
                <p className="text-base md:text-lg text-blue-100 mb-2">
                  📧 <strong>Email us:</strong> {contactInfo.email}
                </p>
                <p className="text-base md:text-lg text-blue-100">
                  📍 <strong>Visit us:</strong> {contactInfo.address}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link href="/contact" className="px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-sm md:text-base">
                  Get Free IT Consultation
                </Link>
                <Link href="/ai-services" className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-sm md:text-base">
                  Explore AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}