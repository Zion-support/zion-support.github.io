import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Star, Zap, Shield, Globe, Cpu, Brain, 
  Atom, Rocket, Target, Microscope, DollarSign, Phone, 
  Mail, MapPin, ArrowRight, TrendingUp, Users, Briefcase
} from 'lucide-react';

// Mock data for services
const mockServices = [
  {
    id: 'ai-analytics',
    name: 'AI-Powered Analytics Platform',
    category: ['AI', 'Analytics'],
    price: '499',
    description: 'Intelligent insights and predictive analytics for your business',
    features: ['Real-time data processing', 'Machine learning models', 'Custom dashboards']
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    category: ['Quantum', 'Technology'],
    price: '2999',
    description: 'Next-generation quantum computing services',
    features: ['Quantum algorithms', 'Hardware optimization', 'Research support']
  },
  {
    id: 'biotech-platform',
    name: 'Biotech Innovation Platform',
    category: ['Biotech', 'Healthcare'],
    price: '1999',
    description: 'Cutting-edge biotechnology solutions',
    features: ['Drug discovery', 'Clinical trials', 'Data analysis']
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function ComprehensivePricing2029() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const categories = [
    { id: 'all', name: 'All Services', icon: Briefcase, count: mockServices.length },
    { id: 'ai', name: 'AI Services', icon: Brain, count: mockServices.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum Tech', icon: Atom, count: mockServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'biotech', name: 'Biotech', icon: Microscope, count: mockServices.filter(s => s.category.includes('Biotech')).length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? mockServices 
    : mockServices.filter(service => 
        service.category.some(cat => cat.toLowerCase().includes(selectedCategory))
      );

  const getPrice = (price: string) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    return billingCycle === 'monthly' ? numericPrice : Math.round(numericPrice * 0.8);
  };

  const getBillingText = (price: string) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    if (billingCycle === 'monthly') {
      return `$${numericPrice.toLocaleString()}/month`;
    } else {
      return `$${Math.round(numericPrice * 0.8).toLocaleString()}/month (billed annually)`;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Head>
        <title>2029 Comprehensive Pricing - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive 2029 pricing for AI autonomous ecosystems, emerging tech breakthroughs, and practical business solutions. Transparent pricing with flexible billing options." />
        <meta name="keywords" content="2029 pricing, AI services pricing, quantum technology pricing, business solutions pricing, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/2029-comprehensive-pricing" />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8">
              2029 Comprehensive Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Transparent pricing for our revolutionary 2029 services. Choose the perfect plan 
              for your business transformation journey.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="text-gray-400">Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-gray-400">Annual (20% off)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${
                  selectedCategory === category.id
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : 'border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
                <span className="ml-2 px-2 py-1 text-xs bg-gray-700 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-3xl font-bold text-blue-400 mb-4">
                  {getBillingText(service.price)}
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors text-center block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific needs and get a customized quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {contactInfo.mobile}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-md transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2029 Zion Tech Group. All rights reserved.</p>
          <p className="mt-2">
            <a href={contactInfo.website} className="text-blue-400 hover:text-blue-300">
              {contactInfo.website}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}