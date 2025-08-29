import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Users, 
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Rocket,
  Cpu,
  Database,
  Network,
  Lock,
  Heart,
  Leaf,
  Sun,
  Moon,
  Star as StarIcon,
  Award,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Globe,
  MapPin
} from 'lucide-react';

export default function ComprehensivePricingGuide2027() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Digital Transformation',
    'IoT & Edge Computing',
    'Blockchain',
    'Quantum Computing',
    'Healthcare Technology',
    'Financial Technology',
    'Sustainability',
    'Emerging Technologies'
  ];

  const allServices = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence Platform',
      category: 'AI & Machine Learning',
      price: '$25,000',
      priceRange: '$25K - $75K',
      duration: '6-12 months',
      teamSize: '8-15',
      roi: '340%',
      features: [
        'Real-time data analytics',
        'Predictive modeling',
        'Custom dashboards',
        'API integration',
        '24/7 support'
      ],
      description: 'Comprehensive AI-powered business intelligence solution with advanced analytics and predictive capabilities.',
      href: '/services/ai-business-intelligence',
      ctaLabel: 'Get AI BI Quote'
    },
    {
      id: 2,
      title: 'Quantum AI Cybersecurity Suite',
      category: 'Cybersecurity',
      price: '$45,000',
      priceRange: '$45K - $120K',
      duration: '8-16 months',
      teamSize: '12-20',
      roi: '420%',
      features: [
        'Quantum-resistant encryption',
        'AI threat detection',
        'Zero-trust architecture',
        'Compliance reporting',
        'Incident response'
      ],
      description: 'Next-generation cybersecurity solution combining quantum computing and AI for unparalleled protection.',
      href: '/services/quantum-ai-cybersecurity',
      ctaLabel: 'Get Security Quote'
    },
    {
      id: 3,
      title: 'Edge Computing IoT Platform',
      category: 'IoT & Edge Computing',
      price: '$35,000',
      priceRange: '$35K - $90K',
      duration: '7-14 months',
      teamSize: '10-18',
      roi: '280%',
      features: [
        'Real-time processing',
        'Predictive maintenance',
        'Scalable architecture',
        'Data analytics',
        'Remote monitoring'
      ],
      description: 'Advanced edge computing platform for IoT applications with real-time analytics and predictive capabilities.',
      href: '/services/edge-computing-iot',
      ctaLabel: 'Get IoT Quote'
    },
    {
      id: 4,
      title: 'Blockchain Supply Chain Solution',
      category: 'Blockchain',
      price: '$30,000',
      priceRange: '$30K - $80K',
      duration: '6-12 months',
      teamSize: '8-15',
      roi: '310%',
      features: [
        'Smart contracts',
        'Real-time tracking',
        'Transparency reporting',
        'Compliance management',
        'Integration APIs'
      ],
      description: 'Blockchain-based supply chain solution providing transparency, traceability, and automated compliance.',
      href: '/services/blockchain-supply-chain',
      ctaLabel: 'Get Blockchain Quote'
    },
    {
      id: 5,
      title: 'Cloud-Native DevOps Platform',
      category: 'Cloud Computing',
      price: '$40,000',
      priceRange: '$40K - $100K',
      duration: '8-16 months',
      teamSize: '12-20',
      roi: '290%',
      features: [
        'CI/CD pipelines',
        'Infrastructure as code',
        'Monitoring & alerting',
        'Auto-scaling',
        'Security compliance'
      ],
      description: 'Enterprise-grade DevOps platform with automated deployment, monitoring, and security features.',
      href: '/services/cloud-devops-platform',
      ctaLabel: 'Get DevOps Quote'
    },
    {
      id: 6,
      title: 'Digital Transformation Suite',
      category: 'Digital Transformation',
      price: '$75,000',
      priceRange: '$75K - $200K',
      duration: '12-24 months',
      teamSize: '20-35',
      roi: '380%',
      features: [
        'Legacy system modernization',
        'Process automation',
        'Change management',
        'Training programs',
        'Ongoing support'
      ],
      description: 'Comprehensive digital transformation solution covering technology, processes, and organizational change.',
      href: '/services/digital-transformation',
      ctaLabel: 'Get Transformation Quote'
    },
    {
      id: 7,
      title: 'Quantum Computing Platform',
      category: 'Quantum Computing',
      price: '$150,000',
      priceRange: '$150K - $500K',
      duration: '18-36 months',
      teamSize: '25-40',
      roi: '450%',
      features: [
        'Quantum algorithms',
        'Hybrid classical-quantum',
        'Optimization solvers',
        'Research collaboration',
        'Custom development'
      ],
      description: 'Cutting-edge quantum computing platform for complex optimization and simulation problems.',
      href: '/services/quantum-computing',
      ctaLabel: 'Get Quantum Quote'
    },
    {
      id: 8,
      title: 'Healthcare AI Platform',
      category: 'Healthcare Technology',
      price: '$60,000',
      priceRange: '$60K - $150K',
      duration: '10-20 months',
      teamSize: '15-25',
      roi: '360%',
      features: [
        'Medical imaging AI',
        'Predictive diagnostics',
        'Patient monitoring',
        'HIPAA compliance',
        'Clinical integration'
      ],
      description: 'AI-powered healthcare platform for medical imaging, diagnostics, and patient care optimization.',
      href: '/services/healthcare-ai',
      ctaLabel: 'Get Healthcare Quote'
    },
    {
      id: 9,
      title: 'FinTech Innovation Platform',
      category: 'Financial Technology',
      price: '$80,000',
      priceRange: '$80K - $200K',
      duration: '12-24 months',
      teamSize: '18-30',
      roi: '400%',
      features: [
        'Payment processing',
        'Risk management',
        'Compliance automation',
        'Real-time analytics',
        'Multi-currency support'
      ],
      description: 'Next-generation financial technology platform with advanced security and compliance features.',
      href: '/services/fintech-platform',
      ctaLabel: 'Get FinTech Quote'
    },
    {
      id: 10,
      title: 'Sustainable Tech Solutions',
      category: 'Sustainability',
      price: '$50,000',
      priceRange: '$50K - $120K',
      duration: '8-18 months',
      teamSize: '12-22',
      roi: '320%',
      features: [
        'Energy optimization',
        'Carbon tracking',
        'Green analytics',
        'Sustainability reporting',
        'Regulatory compliance'
      ],
      description: 'Technology solutions focused on environmental sustainability and green business practices.',
      href: '/services/sustainable-tech',
      ctaLabel: 'Get Sustainability Quote'
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
      case 'duration':
        return parseInt(a.duration.split('-')[0]) - parseInt(b.duration.split('-')[0]);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, any> = {
      'AI & Machine Learning': Brain,
      'Cybersecurity': Shield,
      'Cloud Computing': Cloud,
      'Digital Transformation': Rocket,
      'IoT & Edge Computing': Cpu,
      'Blockchain': Lock,
      'Quantum Computing': Zap,
      'Healthcare Technology': Heart,
      'Financial Technology': TrendingUp,
      'Sustainability': Leaf,
      'Emerging Technologies': Star
    };
    return iconMap[category] || Star;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      'AI & Machine Learning': 'from-indigo-600 to-purple-600',
      'Cybersecurity': 'from-red-600 to-pink-600',
      'Cloud Computing': 'from-blue-600 to-cyan-600',
      'Digital Transformation': 'from-purple-600 to-indigo-600',
      'IoT & Edge Computing': 'from-green-600 to-teal-600',
      'Blockchain': 'from-yellow-600 to-orange-600',
      'Quantum Computing': 'from-purple-600 to-indigo-600',
      'Healthcare Technology': 'from-red-600 to-pink-600',
      'Financial Technology': 'from-emerald-600 to-teal-600',
      'Sustainability': 'from-green-600 to-emerald-600',
      'Emerging Technologies': 'from-purple-600 to-pink-600'
    };
    return colorMap[category] || 'from-gray-600 to-gray-700';
  };

  return (
    <>
      <SEO
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Explore our comprehensive pricing guide for cutting-edge technology solutions. Get transparent pricing for AI, cybersecurity, cloud computing, and more."
        keywords={['pricing guide', 'technology pricing', 'AI solutions pricing', 'cybersecurity pricing', 'cloud computing pricing']}
        type="website"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Pricing Guide 2027
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Transparent pricing for cutting-edge technology solutions. Get detailed quotes and understand the investment 
                required for your digital transformation journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Controls Section */}
        <section className="py-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Search Services</label>
                <input
                  type="text"
                  placeholder="Search by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="price">Price (Low to High)</option>
                  <option value="roi">ROI (High to Low)</option>
                  <option value="duration">Duration (Short to Long)</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/70 overflow-hidden">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          {React.createElement(getCategoryIcon(service.category), { className: 'w-6 h-6' })}
                        </div>
                        <span className="text-sm font-medium bg-white/20 px-3 py-2 rounded-full">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Pricing */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-3xl font-bold text-white">{service.price}</div>
                        <span className="text-sm text-slate-400">{service.priceRange}</span>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-cyan-400">{service.duration}</div>
                          <div className="text-xs text-slate-400">Duration</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-400">{service.teamSize}</div>
                          <div className="text-xs text-slate-400">Team Size</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-400">{service.roi}</div>
                          <div className="text-xs text-slate-400">ROI</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-300 mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-slate-400 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <a
                        href={service.href}
                        className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        <span>{service.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {sortedServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-slate-400">Try adjusting your search criteria or filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Flexible Pricing Tiers</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the pricing model that best fits your business needs and budget requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Project-Based',
                  description: 'Fixed pricing for specific deliverables',
                  features: ['Clear scope definition', 'Fixed timeline', 'Predictable costs', 'Quality guarantees'],
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  name: 'Time & Materials',
                  description: 'Flexible pricing based on actual work',
                  features: ['Adaptive scope', 'Flexible timeline', 'Transparent billing', 'Iterative development'],
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  name: 'Retainer Model',
                  description: 'Ongoing partnership with monthly commitment',
                  features: ['Continuous support', 'Priority access', 'Strategic guidance', 'Long-term relationship'],
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-400 mb-6">{tier.description}</p>
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Contact us for a personalized quote and consultation. Our team will work with you to understand 
                your requirements and provide the best solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
