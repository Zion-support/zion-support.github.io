import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Code, 
  Settings, 
  CheckCircle, 
  Users, 
  DollarSign, 
  Brain, 
  Cpu, 
  Wifi, 
  Monitor, 
  AlertTriangle, 
  TrendingUp, 
  Lock, 
  Globe, 
  HardDrive, 
  Smartphone, 
  Building, 
  BarChart3,
  Package,
  GraduationCap,
  Atom,
  Leaf,
  Link as LinkIcon,
  ArrowRight, 
  Clock, 
  Award, 
  Star, 
  Zap,
  Search, 
  ShoppingCart, 
  BookOpen, 
  Rocket,
  Laptop
} from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud infrastructure setup, management, and optimization services',
    icon: Cloud,
    features: ['AWS/Azure/GCP Setup', 'Server Management', 'Auto-scaling', 'Cost Optimization'],
    pricing: '$2,000 - $10,000/month',
    category: 'Cloud Computing',
    popular: true,
    benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', '24/7 monitoring'],
    marketPrice: '$5,000/month',
    link: '/contact'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your business from cyber threats',
    icon: Shield,
    features: ['Security Assessment', 'Threat Monitoring', 'Incident Response', 'Compliance'],
    pricing: '$1,500 - $8,000/month',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance assurance', '24/7 protection'],
    marketPrice: '$4,000/month',
    link: '/contact'
  },
  {
    title: 'Database Management',
    description: 'Expert database design, optimization, and maintenance services',
    icon: Database,
    features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Migration'],
    pricing: '$1,000 - $5,000/month',
    category: 'Database',
    popular: false,
    benefits: ['Improved performance', 'Data integrity', 'Reduced downtime', 'Scalability'],
    marketPrice: '$2,500/month',
    link: '/contact'
  }
];

const industries = [
  { name: 'Healthcare', icon: Shield, description: 'Secure and compliant IT solutions for healthcare organizations' },
  { name: 'Finance', icon: TrendingUp, description: 'Robust IT infrastructure for financial services' },
  { name: 'Manufacturing', icon: Building, description: 'Industrial IT solutions and automation' },
  { name: 'Retail', icon: ShoppingCart, description: 'E-commerce and retail technology solutions' },
  { name: 'Education', icon: GraduationCap, description: 'Educational technology and learning management systems' },
  { name: 'Government', icon: Globe, description: 'Secure government IT solutions and compliance' }
];

export default function ITServices() {
  return (
    <Layout>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud computing, cybersecurity, database management, and more. Professional IT solutions for your business." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
=======
import { 
  Code, 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Server, 
  Users, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

const itServices = [
  {
    id: 1,
    title: 'Cloud Infrastructure Setup',
    description: 'Complete cloud infrastructure setup and migration services for AWS, Azure, and Google Cloud.',
    icon: Cloud,
    features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Monitoring & Alerting'],
    pricing: '$2,999 - $9,999/month',
    category: 'Cloud & Infrastructure',
    benefits: ['99.9% Uptime', 'Cost Optimization', 'Scalability', 'Security'],
    popular: true
  },
  {
    id: 2,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive cybersecurity services including threat detection, vulnerability assessment, and compliance.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Security Training'],
    pricing: '$1,999 - $7,999/month',
    category: 'Security',
    benefits: ['24/7 Monitoring', 'Threat Prevention', 'Compliance', 'Incident Response'],
    popular: true
  },
  {
    id: 3,
    title: 'IT Support & Helpdesk',
    description: '24/7 IT support and helpdesk services to keep your business running smoothly.',
    icon: Users,
    features: ['24/7 Support', 'Remote Assistance', 'Hardware Support', 'Software Support'],
    pricing: '$99 - $299/user/month',
    category: 'Support',
    benefits: ['Fast Response', 'Expert Support', 'Proactive Monitoring', 'Documentation'],
    popular: false
  },
  {
    id: 4,
    title: 'Database Management',
    description: 'Professional database administration, optimization, and maintenance services.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security'],
    pricing: '$1,499 - $4,999/month',
    category: 'Database',
    benefits: ['High Performance', 'Data Security', 'Automated Backups', 'Monitoring'],
    popular: false
  },
  {
    id: 5,
    title: 'Network Infrastructure',
    description: 'Complete network design, implementation, and maintenance services.',
    icon: Server,
    features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting'],
    pricing: '$2,499 - $8,999/month',
    category: 'Networking',
    benefits: ['Reliable Connectivity', 'Security', 'Performance', 'Scalability'],
    popular: false
  },
  {
    id: 6,
    title: 'IT Service Management',
    description: 'ITSM implementation and management using industry best practices and tools.',
    icon: Settings,
    features: ['Service Desk', 'Change Management', 'Incident Management', 'Problem Management'],
    pricing: '$3,999 - $14,999/month',
    category: 'ITSM',
    benefits: ['Process Standardization', 'Better Visibility', 'Cost Optimization', 'Service Quality'],
    popular: false
  }
];

const categories = [
  'All',
  'Cloud & Infrastructure',
  'Security',
  'Support',
  'Database',
  'Networking',
  'ITSM'
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' }
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => 
                           feature.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, database management, and 24/7 support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
                IT <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Professional IT services to keep your business running smoothly. From cloud computing to cybersecurity, 
                we provide comprehensive technology solutions.
=======
                IT{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive IT services to keep your business running smoothly and securely. 
                From cloud infrastructure to cybersecurity, we've got you covered.
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View AI Services
                </Link>
=======
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our IT Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive IT solutions designed to enhance your business operations and security.
=======
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional IT services designed to keep your business running smoothly and securely.
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                    {service.marketPrice && (
                      <span className="text-gray-500 ml-2">(Market: {service.marketPrice})</span>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={service.link}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our IT solutions are tailored for various industries and business requirements.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
=======
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-blue-600">
                        <IconComponent className="w-12 h-12" />
                      </div>
                      {service.popular && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="text-2xl font-bold text-blue-600 mb-4">
                        {service.pricing}
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center w-full justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
=======
              initial={{ opacity: 0, y: 30 }}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Enhance Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can improve your business operations and security.
=======
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss your IT needs and create a customized solution for your business.
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/micro-saas"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Micro SaaS
=======
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Pricing
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}