import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap,
  Shield,
  Cloud,
  Brain,
  Star,
  CheckCircle,
  TrendingUp,
  Globe,
  Building,
  Users,
  Rocket,
  Lightbulb
} from 'lucide-react';

interface PricingItem {
  id: number;
  name: string;
  description: string;
  category: string;
  industry: string;
  price: number;
  period: string;
  annualDiscount: number;
  features: string[];
  icon: string;
  popular: boolean;
  roi: string;
  delivery: string;
}

export function ComprehensivePricing2025() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const pricingData: PricingItem[] = [
    {
      id: 1,
      name: 'AI Process Automation',
      description: 'Intelligent automation for complex business processes',
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
    }
  ];

  const categories = ['All', 'AI Services', 'Cybersecurity', 'Cloud Services'];
  const industries = [
    'All',
    'Technology',
    'Retail',
    'Manufacturing',
    'Finance'
  ];

  const filteredData = pricingData.filter(item => {
    const categoryMatch = 
      selectedCategory === 'All' || item.category === selectedCategory;
    const industryMatch = 
      selectedIndustry === 'All' || item.industry === selectedIndustry;
    return categoryMatch && industryMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Comprehensive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Pricing 2025
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Transparent pricing for our AI-powered technology solutions. 
            Choose the plan that fits your business needs and start transforming your operations today.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-2">Industry</label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
            >
              {industries.map(industry => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.id * 0.1 }}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border ${
                item.popular ? 'border-cyan-400' : 'border-white/20'
              } relative hover:border-cyan-500/50 transition-all duration-300`}
            >
              {item.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {item.description}
                </p>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">
                    ${item.price}
                  </span>
                  <span className="text-gray-300">/{item.period}</span>
                </div>
                
                <div className="flex justify-center gap-4 text-sm mb-4">
                  <span className="text-green-400">ROI: {item.roi}</span>
                  <span className="text-blue-400">
                    Delivery: {item.delivery}
                  </span>
                </div>

                {item.annualDiscount > 0 && (
                  <div className="text-yellow-400 text-sm mb-4">
                    Save {item.annualDiscount}% with annual billing
                  </div>
                )}
              </div>

              <ul className="space-y-2 mb-6">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 rounded-lg font-medium hover:scale-105 transition-transform">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss your specific needs and receive a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Request Custom Quote
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ComprehensivePricing2025;