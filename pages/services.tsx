import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Monitor, 
  Settings, 
  CheckCircle, 
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
  DollarSign, 
  Rocket, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';
import Layout from '../components/Layout';

const services = [
  {
    id: 1,
    title: 'AI & Machine Learning',
    description: 'Transform your business with cutting-edge AI solutions and machine learning models.',
    icon: Brain,
    features: ['Custom AI Models', 'Data Analytics', 'Predictive Insights', 'Automation'],
    pricing: 'Starting at $5,000/month',
    category: 'AI & ML',
    benefits: ['Increased Efficiency', 'Better Decision Making', 'Cost Reduction', 'Competitive Advantage']
  },
  {
    id: 2,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    icon: Cloud,
    features: ['Cloud Migration', 'Infrastructure Setup', 'Monitoring', 'Security'],
    pricing: 'Starting at $3,000/month',
    category: 'Cloud',
    benefits: ['Scalability', 'Cost Efficiency', 'Reliability', 'Global Reach']
  },
  {
    id: 3,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions.',
    icon: Shield,
    features: ['Security Audits', 'Threat Detection', 'Data Protection', 'Compliance'],
    pricing: 'Starting at $2,500/month',
    category: 'Security',
    benefits: ['Data Protection', 'Compliance', 'Risk Mitigation', 'Peace of Mind']
  },
  {
    id: 4,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with latest technologies.',
    icon: Code,
    features: ['Responsive Design', 'Performance Optimization', 'SEO', 'Maintenance'],
    pricing: 'Starting at $2,000/project',
    category: 'Development',
    benefits: ['Modern Design', 'Fast Loading', 'Mobile Friendly', 'SEO Optimized']
  },
  {
    id: 5,
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with advanced analytics solutions.',
    icon: BarChart3,
    features: ['Data Visualization', 'Reporting', 'Predictive Analytics', 'Business Intelligence'],
    pricing: 'Starting at $1,500/month',
    category: 'Analytics',
    benefits: ['Data-Driven Decisions', 'Performance Insights', 'Trend Analysis', 'ROI Tracking']
  },
  {
    id: 6,
    title: 'IT Consulting',
    description: 'Strategic IT consulting to help you make informed technology decisions.',
    icon: Settings,
    features: ['Technology Assessment', 'Strategic Planning', 'Implementation', 'Support'],
    pricing: 'Starting at $200/hour',
    category: 'Consulting',
    benefits: ['Expert Guidance', 'Cost Optimization', 'Technology Roadmap', 'Best Practices']
  }
];

const categories = ['All', 'AI & ML', 'Cloud', 'Security', 'Development', 'Analytics', 'Consulting'];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout title="Services - Zion Tech Group">
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, cloud solutions, cybersecurity, and web development." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Comprehensive technology solutions to drive your business forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Started
                </Link>
                <Link href="#services" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
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
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{service.pricing}</div>
                    <div className="text-sm text-gray-500">{service.category}</div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="text-sm text-green-600">
                        ✓ {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let our experts help you choose the right solutions for your business needs.
            </p>
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}