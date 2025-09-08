import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { SEO } from '@/components/SEO';

const ComprehensivePricing2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [sortBy, setSortBy] = useState('price');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const categories = ['all', 'AI Services', 'IT Solutions', 'Cybersecurity', 'Cloud Services', 'Data Analytics'];
  const industries = ['all', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Technology'];

  const services = [
    {
      id: 1,
      name: 'AI Workflow Automation',
      description: 'Intelligent automation platform that streamlines business processes',
      category: 'AI Services',
      industry: 'Technology',
      price: 1200,
      period: 'per month',
      annualDiscount: 20,
      features: [
        'Process automation',
        'AI decision making',
        'Integration APIs',
        'Analytics dashboard',
        'Custom workflows',
        '24/7 support'
      ],
      icon: '🤖',
      popular: true,
      roi: '300%',
      delivery: '2-4 weeks'
    },
    {
      id: 2,
      name: 'AI Customer Experience Platform',
      description: 'Personalized customer engagement powered by artificial intelligence',
      category: 'AI Services',
      industry: 'Retail',
      price: 2500,
      period: 'per month',
      annualDiscount: 15,
      features: [
        'Customer segmentation',
        'Predictive analytics',
        'Omnichannel support',
        'Real-time insights',
        'A/B testing',
        'Performance monitoring'
      ],
      icon: '💝',
      popular: false,
      roi: '250%',
      delivery: '3-5 weeks'
    },
    {
      id: 3,
      name: 'AI Supply Chain Optimization',
      description: 'End-to-end supply chain management with AI-driven insights',
      category: 'AI Services',
      industry: 'Manufacturing',
      price: 3800,
      period: 'per month',
      annualDiscount: 25,
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route planning',
        'Risk management',
        'Supplier analytics',
        'Real-time tracking'
      ],
      icon: '📦',
      popular: true,
      roi: '400%',
      delivery: '4-6 weeks'
    },
    {
      id: 4,
      name: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and response using machine learning',
      category: 'Cybersecurity',
      industry: 'Finance',
      price: 2200,
      period: 'per month',
      annualDiscount: 20,
      features: [
        'Threat detection',
        'Behavioral analysis',
        'Incident response',
        'Compliance reporting',
        'Security monitoring',
        'Vulnerability assessment'
      ],
      icon: '🔒',
      popular: false,
      roi: '350%',
      delivery: '2-3 weeks'
    },
    {
      id: 5,
      name: 'Cloud & DevOps Solutions',
      description: 'Scalable cloud infrastructure and automated deployment',
      category: 'Cloud Services',
      industry: 'Technology',
      price: 1800,
      period: 'per month',
      annualDiscount: 15,
      features: [
        'Cloud migration',
        'CI/CD pipelines',
        'Monitoring',
        'Auto-scaling',
        'Security compliance',
        'Backup & recovery'
      ],
      icon: '☁️',
      popular: false,
      roi: '280%',
      delivery: '3-4 weeks'
    },
    {
      id: 6,
      name: 'AI Data Governance',
      description: 'Comprehensive data protection and compliance management',
      category: 'Data Analytics',
      industry: 'Healthcare',
      price: 1500,
      period: 'per month',
      annualDiscount: 20,
      features: [
        'Data classification',
        'Privacy controls',
        'Audit trails',
        'GDPR compliance',
        'Data lineage',
        'Risk assessment'
      ],
      icon: '🛡️',
      popular: false,
      roi: '320%',
      delivery: '2-4 weeks'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'all' || service.industry === selectedIndustry;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesIndustry && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'roi':
        return parseInt(b.roi) - parseInt(a.roi);
      case 'delivery':
        return parseInt(a.delivery) - parseInt(b.delivery);
      default:
        return 0;
    }
  });

  const getDiscountedPrice = (price: number, discount: number) => {
    return Math.round(price * (1 - discount / 100));
  };

  const totalValue = filteredServices.reduce((sum, service) => sum + service.price, 0);
  const totalROI = filteredServices.reduce((sum, service) => sum + parseInt(service.roi), 0);

  return (
    <React.Fragment>
      <SEO 
        title="Comprehensive Pricing 2025 | Zion Tech Group"
        description="Transparent pricing for our comprehensive range of AI services, IT solutions, and technology platforms. Get competitive rates with flexible billing options."
        keywords="pricing, AI services pricing, IT solutions cost, cybersecurity pricing, cloud services pricing, data analytics pricing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-32 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Transparent
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Pricing 2025
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Competitive pricing for our comprehensive range of AI services, IT solutions, and technology platforms. 
                Choose the plan that fits your business needs with flexible billing options.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 hover:from-green-400 hover:to-blue-400 transition-all duration-300"
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

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4">
                <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                  className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                    billingCycle === 'annual' ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === 'annual' ? 'transform translate-x-8' : 'transform translate-x-1'
                  }`} />
                </button>
                <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                  Annual
                  <span className="text-sm text-green-400 ml-1">(Save up to 25%)</span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">{allServices.length}+</div>
              <div className="text-sm text-gray-300">Innovative Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15</div>
              <div className="text-sm text-gray-300">Technology Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-sm text-gray-300">Annual Discount</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">30</div>
              <div className="text-sm text-gray-300">Day Free Trial</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
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
    </React.Fragment>
  )};

export default ComprehensivePricing2025;>