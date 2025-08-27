import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, Play, Phone, Mail, MapPin, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ComprehensivePricing2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [sortBy, setSortBy] = useState('price');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const categories = ['all', 'AI Services', 'IT Infrastructure', 'Cybersecurity', 'Cloud Solutions', 'Digital Transformation'];
  const industries = ['all', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Government'];

  const services = [
    {
      id: 1,
      name: 'AI-Powered Business Intelligence',
      description: 'Advanced analytics and insights powered by artificial intelligence',
      category: 'AI Services',
      industry: 'all',
      price: '$2,999',
      period: 'per month',
      annualDiscount: 20,
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration'],
      popular: true,
      icon: '🤖',
      roi: '300%',
      delivery: '2-4 weeks'
    },
    {
      id: 2,
      name: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions for enterprise protection',
      category: 'Cybersecurity',
      industry: 'all',
      price: '$1,499',
      period: 'per month',
      annualDiscount: 15,
      features: ['Threat detection', '24/7 monitoring', 'Incident response', 'Compliance reporting'],
      popular: false,
      icon: '🛡️',
      roi: '250%',
      delivery: '1-2 weeks'
    },
    {
      id: 3,
      name: 'Cloud Migration & Optimization',
      description: 'Seamless cloud migration with performance optimization',
      category: 'Cloud Solutions',
      industry: 'all',
      price: '$3,999',
      period: 'per month',
      annualDiscount: 25,
      features: ['Migration planning', 'Performance tuning', 'Cost optimization', 'Ongoing support'],
      popular: false,
      icon: '☁️',
      roi: '400%',
      delivery: '4-6 weeks'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'all' || service.industry === 'all' || service.industry === selectedIndustry;
    
    return matchesSearch && matchesCategory && matchesIndustry;
  });

  const getDiscountedPrice = (price, discount) => {
    const numericPrice = parseInt(price.replace('$', '').replace(',', ''));
    const discounted = numericPrice * (1 - discount / 100);
    return `$${Math.round(discounted).toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <SEO 
        title="Comprehensive Pricing Guide 2025 - Zion Tech Group" 
        description="Get detailed pricing for our comprehensive IT services, AI solutions, and technology consulting. Transparent pricing with flexible billing options." 
        keywords="pricing, IT services pricing, AI solutions cost, technology consulting rates, Zion Tech Group pricing" 
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Pricing Guide
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transparent pricing for our comprehensive IT services, AI solutions, and technology consulting. 
              Choose the plan that fits your business needs and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                <Download className="w-5 h-5"/>
                Download Pricing Guide
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Play className="w-5 h-5"/>
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-green-800 to-blue-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5 text-green-300"/>
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Mail className="w-5 h-5 text-green-300"/>
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-green-300"/>
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search services..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <Search className="absolute right-3 top-3 w-5 h-5 text-white/60"/>
              </div>
            </div>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)} 
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select 
              value={selectedIndustry} 
              onChange={(e) => setSelectedIndustry(e.target.value)} 
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {industries.map(industry => (
                <option key={industry} value={industry} className="bg-slate-800 text-white">
                  {industry === 'all' ? 'All Industries' : industry}
                </option>
              ))}
            </select>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)} 
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="price" className="bg-slate-800 text-white">Price: Low to High</option>
              <option value="price-desc" className="bg-slate-800 text-white">Price: High to Low</option>
              <option value="roi" className="bg-slate-800 text-white">ROI: High to Low</option>
              <option value="delivery" className="bg-slate-800 text-white">Delivery: Fast to Slow</option>
            </select>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  service.popular
                    ? 'border-purple-500/50 bg-gradient-to-br from-purple-600/20 to-pink-600/20'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                    {service.category}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {billingCycle === 'annual' && service.annualDiscount
                      ? getDiscountedPrice(service.price, service.annualDiscount)
                      : service.price}
                  </div>
                  <div className="text-gray-400 mb-2">{service.period}</div>
                  {billingCycle === 'annual' && service.annualDiscount && (
                    <div className="text-sm text-green-400">
                      {service.annualDiscount}% off annual billing
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">ROI:</span>
                    <span className="text-green-400 font-semibold">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Delivery:</span>
                    <span className="text-blue-400 font-semibold">{service.delivery}</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our team today for a personalized consultation and custom quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2"/>
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="w-5 h-5 mr-2"/>
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
