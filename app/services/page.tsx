'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Zap,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Settings,
  Calendar,
  CheckSquare,
  FileText,
  MessageCircle,
  Heart,
  DollarSign,
  Box,
  Monitor,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const services = [
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      icon: Brain,
      category: 'AI',
      price: 'Starting at $2,999/month',
      features: ['Machine Learning Models', 'NLP Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      id: 2,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure solutions for modern businesses with high availability and security.',
      icon: Cloud,
      category: 'Cloud',
      price: 'Starting at $1,999/month',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery']
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from cyber threats and ensure compliance.',
      icon: Shield,
      category: 'Security',
      price: 'Starting at $3,999/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']
    },
    {
      id: 4,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and visualization tools.',
      icon: BarChart,
      category: 'Analytics',
      price: 'Starting at $2,499/month',
      features: ['Real-time Analytics', 'Data Visualization', 'Business Intelligence', 'Custom Dashboards']
    },
    {
      id: 5,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs with modern technologies and best practices.',
      icon: Code,
      category: 'Development',
      price: 'Starting at $4,999/month',
      features: ['Custom Applications', 'API Development', 'Mobile Apps', 'Web Development']
    },
    {
      id: 6,
      title: 'Database Services',
      description: 'Comprehensive database management and optimization services for improved performance and reliability.',
      icon: Database,
      category: 'Database',
      price: 'Starting at $1,499/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services']
    },
    {
      id: 7,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      icon: Smartphone,
      category: 'Development',
      price: 'Starting at $3,499/month',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Optimization']
    },
    {
      id: 8,
      title: 'IT Consulting',
      description: 'Strategic IT consulting services to help you make informed technology decisions and optimize your infrastructure.',
      icon: Users,
      category: 'Consulting',
      price: 'Starting at $1,999/month',
      features: ['Technology Strategy', 'Architecture Review', 'Cost Optimization', 'Digital Transformation']
    },
    {
      id: 9,
      title: 'Automation Solutions',
      description: 'Streamline your business processes with intelligent automation solutions that reduce manual work.',
      icon: Zap,
      category: 'AI',
      price: 'Starting at $2,999/month',
      features: ['Process Automation', 'Workflow Optimization', 'RPA Implementation', 'Integration Services']
    }
  ];
  const categories = ['all', 'AI', 'Cloud', 'Security', 'Analytics', 'Development', 'Database', 'Consulting'];
  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory});
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud services, cybersecurity, data analytics, and more." />
        <meta name="keywords" content="services, AI solutions, cloud services, cybersecurity, data analytics, mobile development, database services" />
      </Helmet>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business 
              and drive growth.
            </p>
          </div>
        </section>
        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover: bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold">{service.price}</span>
                    <button className="flex items-center text-white hover: text-blue-400 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Quote
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )};
export default ServicesPage