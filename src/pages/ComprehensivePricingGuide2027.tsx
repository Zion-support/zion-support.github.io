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
        'Multi-party integration',
        'Compliance management'
      ],
      description: 'Blockchain-based supply chain solution providing transparency, traceability, and trust across global networks.',
      href: '/services/blockchain-supply-chain',
      ctaLabel: 'Get Blockchain Quote'
    },
    {
      id: 5,
      title: 'AI-Powered Customer Success Platform',
      category: 'AI & Machine Learning',
      price: '$20,000',
      priceRange: '$20K - $60K',
      duration: '5-10 months',
      teamSize: '6-12',
      roi: '380%',
      features: [
        'Predictive analytics',
        'Automated engagement',
        'Customer insights',
        'Churn prevention',
        'Performance tracking'
      ],
      description: 'AI-driven customer success platform that improves retention and increases customer lifetime value.',
      href: '/services/ai-customer-success',
      ctaLabel: 'Get Customer Success Quote'
    },
    {
      id: 6,
      title: 'Cloud-Native DevOps Platform',
      category: 'Cloud Computing',
      price: '$28,000',
      priceRange: '$28K - $70K',
      duration: '6-12 months',
      teamSize: '8-15',
      roi: '290%',
      features: [
        'CI/CD pipelines',
        'Infrastructure as code',
        'Auto-scaling',
        'Monitoring & alerting',
        'Security integration'
      ],
      description: 'Modern cloud-native DevOps platform with automated deployment and infrastructure management.',
      href: '/services/cloud-native-devops',
      ctaLabel: 'Get DevOps Quote'
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseInt(a.price.replace(/[$,]/g, '')) - parseInt(b.price.replace(/[$,]/g, ''));
      case 'duration':
        return parseInt(a.duration.split('-')[0]) - parseInt(b.duration.split('-')[0]);
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
      case 'teamSize':
        return parseInt(a.teamSize.split('-')[0]) - parseInt(b.teamSize.split('-')[0]);
      default:
        return 0;
    }
  });

  const ServiceCard = ({ service }: { service: any }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
      >
        <div className="mb-4">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
            {service.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
        
        <div className="mb-6">
          <div className="text-3xl font-bold text-cyan-400 mb-1">{service.price}</div>
          <div className="text-gray-400 text-sm">{service.priceRange}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div className="flex items-center text-gray-300">
            <Clock className="w-4 h-4 mr-2 text-cyan-400" />
            {service.duration}
          </div>
          <div className="flex items-center text-gray-300">
            <Users className="w-4 h-4 mr-2 text-cyan-400" />
            {service.teamSize}
          </div>
          <div className="flex items-center text-gray-300">
            <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
            {service.roi} ROI
          </div>
          <div className="flex items-center text-gray-300">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            Featured
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="text-green-400 w-4 h-4 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <a
          href={service.href}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
        >
          {service.ctaLabel}
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </motion.div>
    );
  };

  return (
    <>
      <SEO
        title="Comprehensive Pricing Guide 2027 | Zion Tech Group"
        description="Explore our comprehensive pricing guide for 2027. Get detailed pricing for AI, cybersecurity, cloud computing, and emerging technology services."
        keywords="pricing guide 2027, technology services pricing, AI services cost, cybersecurity pricing, cloud computing pricing, Zion Tech Group"
        canonical="https://ziontechgroup.com/pricing-guide-2027"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide 2027
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our cutting-edge technology services. Get detailed quotes and understand the value proposition for your business transformation.
            </p>
            
            {/* Search and Filter Controls */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                {/* Sort By */}
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="price">Sort by Price</option>
                    <option value="duration">Sort by Duration</option>
                    <option value="roi">Sort by ROI</option>
                    <option value="teamSize">Sort by Team Size</option>
                  </select>
                </div>
                
                {/* Results Count */}
                <div className="flex items-center justify-center">
                  <span className="text-gray-300">
                    {filteredServices.length} of {allServices.length} services
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-300">Try adjusting your search criteria or filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Pricing Comparison
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-lg rounded-xl p-6 border border-green-500/30 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  ${Math.max(...allServices.map(s => parseInt(s.price.replace(/[$,]/g, '')))).toLocaleString()}
                </div>
                <div className="text-gray-300">Premium Price</div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {allServices.length}
                </div>
                <div className="text-gray-300">Total Services</div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  {Math.max(...allServices.map(s => parseInt(s.roi.split('%')[0])))}%
                </div>
                <div className="text-gray-300">Max ROI</div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Comparison Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Market Comparison
            </h2>
            
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
                <h3 className="text-xl font-semibold mb-4 text-center text-white">Market Average</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">AI Services</span>
                    <span className="text-slate-400">$15K - $50K/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Quantum Computing</span>
                    <span className="text-slate-400">$50K - $200K/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Cybersecurity</span>
                    <span className="text-slate-400">$10K - $30K/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Implementation</span>
                    <span className="text-slate-400">6-12 months</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
                <h3 className="text-xl font-semibold mb-4 text-center text-white">Our Pricing</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">AI Services</span>
                    <span className="text-cyan-400">$20K - $45K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Quantum Computing</span>
                    <span className="text-cyan-400">$45K - $120K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Cybersecurity</span>
                    <span className="text-cyan-400">$28K - $75K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Implementation</span>
                    <span className="text-cyan-400">5-16 months</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
                <h3 className="text-xl font-semibold mb-4 text-center text-white">Value Proposition</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Cost Savings</span>
                    <span className="text-green-400">15-25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Faster Delivery</span>
                    <span className="text-green-400">20-30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">ROI Improvement</span>
                    <span className="text-green-400">40-60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Support Quality</span>
                    <span className="text-green-400">Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific needs and get a customized quote for your business transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
              </a>
              <a 
                href="/services"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore All Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
