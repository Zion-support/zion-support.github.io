import React, { useState, useEffect } from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Search, 
  Download, 
  Play, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Brain,
  Cloud,
  Users,
  Database,
  Lock,
  Globe,
  Rocket
 } from 'lucide-react';
import { SEO  } from '@/components/SEO';

const ComprehensivePricing2025: React.FC = (): JSX.Element => {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [sortBy, setSortBy] = useState('price');
  const [billingCycle, setBillingCycle] = useState<any>('monthly');

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
      features[
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
      features[
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
      features[
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
      features[
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
      features[
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
      features[
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
    };
  ];

  const filteredServices = services.filter(service => {;
    const matchesIndustry = selectedIndustry === 'all' || service.industry === selectedIndustry;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesIndustry && matchesSearch}).sort((a, b) => {
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
        return 0}
  });

  const getDiscountedPrice = (price: number, discount: number)  => {;
    return Math.round(price * (1 - discount / 100))};

  const totalROI = filteredServices.reduce((sum, service) => sum + parseInt(service.roi), 0);

  return (
    <>
      <SEO 
        title = "Comprehensive Pricing 2025 | Zion Tech Group"
        description="Transparent pricing for our comprehensive range of AI services, IT solutions, and technology platforms. Get competitive rates with flexible billing options."
        keywords="pricing, AI services pricing, IT solutions cost, cybersecurity pricing, cloud services pricing, data analytics pricing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-32 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 
}}
              animate = {
  { opacity: 1,
  y: 0 
}}
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
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-green-800 to-blue-800 py-6">
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
        </section>

        {/* Search and Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-green-400"
              >
                {categories.map(category  => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <select 
                value={selectedIndustry} 
                onChange={(e) => setSelectedIndustry(e.target.value)} 
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-green-400"
              >
                {industries.map(industry  => (
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
        </section>

        {/* Pricing Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index)  => (
                <motion.div
                  key={service.id}
                  initial = {
  { opacity: 0,
  y: 20 
}}
                  whileInView = {
  { opacity: 1,
  y: 0 
}}
                  transition = {
  { duration: 0.5,
  delay: index * 0.1 
}}
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
                      ${billingCycle === 'annual' && service.annualDiscount
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

                  <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">ROI</div>
                      <div className="text-green-400 font-semibold">{service.roi}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Delivery</div>
                      <div className="text-blue-400 font-semibold">{service.delivery}</div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-400 hover:to-blue-400 transition-all duration-300 mb-3">
                    Get Started
                  </button>
                  
                  <button className="w-full border border-white/20 text-white py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Stats */}
        <section className="py-16 bg-gradient-to-r from-green-800/20 to-blue-800/20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  ${totalValue.toLocaleString()}
                </div>
                <div className="text-gray-300">Total Value</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {filteredServices.length}
                </div>
                <div className="text-gray-300">Services Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {Math.round(totalROI / filteredServices.length)}%
                </div>
                <div className="text-gray-300">Average ROI</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-400/50">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team for personalized pricing and custom solutions tailored to your business needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2"/>
                  Get Custom Quote
                </button>
                <button className="px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/20 transition-all duration-300 flex items-center">
                  <Play className="w-5 h-5 mr-2"/>
                  Schedule Demo
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                Free consultation • Custom pricing • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </section>
      </div>
    </>;
  )};

export default ComprehensivePricing2025;