import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, TrendingUp, Zap, Brain, Shield, Cloud, Rocket, Heart, Globe, Cpu, Lock, Users, DollarSign, Clock, Target, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin, ExternalLink, ChevronRight, Sparkles, Flame, Lightning, Sun, Moon, Planet, Galaxy, Universe, Infinity, Alpha, Beta, Gamma, Delta, Epsilon, Zeta, Eta, Theta, Iota, Kappa, Lambda, Mu, Nu, Xi, Omicron, Pi, Rho, Sigma, Tau, Upsilon, Phi, Chi, Psi, Omega } from 'lucide-react';
import { SEO } from '@/components/SEO';

const ComprehensivePricingGuide2027: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  const pricingData = [
    // Revolutionary 2030 Services
    {
      id: 'quantum-ai-hybrid-platform',
      title: 'Quantum AI Hybrid Platform',
      category: 'Revolutionary 2030',
      description: 'Revolutionary platform combining quantum computing with advanced AI',
      monthlyPrice: 25000,
      yearlyPrice: 250000,
      marketPrice: '$25,000 - $75,000/month',
      features: [
        'Quantum-classical hybrid algorithms',
        'AI-powered quantum error correction',
        'Real-time quantum state visualization',
        'Multi-qubit entanglement management',
        'Quantum machine learning models',
        'Financial portfolio optimization',
        'Drug discovery simulations',
        'Climate modeling capabilities'
      ],
      benefits: [
        '1000x faster computation for specific problems',
        'Breakthrough solutions in drug discovery',
        'Unprecedented financial modeling accuracy',
        'Future-proof quantum-ready infrastructure'
      ],
      useCases: [
        'Pharmaceutical research & development',
        'Financial risk assessment & trading',
        'Climate change modeling & prediction',
        'Cryptography & cybersecurity'
      ],
      targetAudience: 'Research institutions, Pharmaceutical companies, Financial institutions',
      roi: '500-1000%',
      implementationTime: '3-4 months',
      trainingIncluded: true,
      customizationLevel: 'High',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600',
      featured: true
    },
    {
      id: 'ai-cybersecurity-platform-2030',
      title: 'AI-Powered Cybersecurity Platform 2030',
      category: 'Revolutionary 2030',
      description: 'Next-generation cybersecurity platform using advanced AI and machine learning',
      monthlyPrice: 8999,
      yearlyPrice: 89990,
      marketPrice: '$8,999 - $24,999/month',
      features: [
        'AI-powered threat detection',
        'Behavioral analytics',
        'Zero-day exploit prevention',
        'Automated incident response',
        'Threat intelligence sharing',
        'Advanced endpoint protection',
        'Cloud security monitoring',
        'IoT device security'
      ],
      benefits: [
        '99.9% threat detection accuracy',
        '90% reduction in false positives',
        'Real-time threat response',
        'Automated compliance reporting'
      ],
      useCases: [
        'Enterprise security operations',
        'Government cybersecurity',
        'Financial institution protection',
        'Healthcare data security'
      ],
      targetAudience: 'Large enterprises, Government agencies, Financial institutions',
      roi: '300-500%',
      implementationTime: '2-3 months',
      trainingIncluded: true,
      customizationLevel: 'High',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      featured: true
    },
    {
      id: 'autonomous-ai-business-operations',
      title: 'Autonomous AI Business Operations Platform',
      category: 'Revolutionary 2030',
      description: 'Revolutionary platform that autonomously manages business operations',
      monthlyPrice: 15999,
      yearlyPrice: 159990,
      marketPrice: '$15,999 - $45,999/month',
      features: [
        'AI-powered process automation',
        'Autonomous decision making',
        'Predictive business analytics',
        'Intelligent resource allocation',
        'Automated customer service',
        'Smart inventory management',
        'Dynamic pricing optimization',
        'Workflow orchestration'
      ],
      benefits: [
        '80% reduction in operational costs',
        '95% process automation',
        'Real-time business optimization',
        '24/7 autonomous operation'
      ],
      useCases: [
        'Manufacturing operations',
        'Retail & e-commerce',
        'Financial services',
        'Healthcare operations'
      ],
      targetAudience: 'Large enterprises, Manufacturing companies, Retail chains',
      roi: '400-700%',
      implementationTime: '4-5 months',
      trainingIncluded: true,
      customizationLevel: 'Very High',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      featured: true
    },
    {
      id: 'quantum-financial-trading-platform',
      title: 'Quantum Financial Trading Platform',
      category: 'Revolutionary 2030',
      description: 'Advanced trading platform leveraging quantum computing and AI',
      monthlyPrice: 35000,
      yearlyPrice: 350000,
      marketPrice: '$35,000 - $100,000/month',
      features: [
        'Quantum-powered market analysis',
        'AI-driven trading strategies',
        'Real-time risk assessment',
        'Portfolio optimization',
        'High-frequency trading',
        'Market prediction models',
        'Compliance monitoring',
        'Performance analytics'
      ],
      benefits: [
        '1000x faster market analysis',
        '95% prediction accuracy',
        'Real-time risk management',
        'Optimized portfolio returns'
      ],
      useCases: [
        'Hedge funds',
        'Investment banks',
        'Asset management firms',
        'Trading desks'
      ],
      targetAudience: 'Hedge funds, Investment banks, Asset managers',
      roi: '800-1200%',
      implementationTime: '5-6 months',
      trainingIncluded: true,
      customizationLevel: 'Very High',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-600',
      featured: true
    },
    {
      id: 'ai-healthcare-diagnostics-platform',
      title: 'AI-Powered Healthcare Diagnostics Platform',
      category: 'Revolutionary 2030',
      description: 'Advanced healthcare platform using AI and machine learning',
      monthlyPrice: 12999,
      yearlyPrice: 129990,
      marketPrice: '$12,999 - $35,999/month',
      features: [
        'AI-powered medical imaging analysis',
        'Symptom assessment & diagnosis',
        'Treatment recommendation engine',
        'Patient outcome prediction',
        'Drug interaction checking',
        'Medical record analysis',
        'Telemedicine integration',
        'Clinical decision support'
      ],
      benefits: [
        '95% diagnostic accuracy',
        '50% faster diagnosis',
        'Reduced medical errors',
        'Improved patient outcomes'
      ],
      useCases: [
        'Hospitals & clinics',
        'Medical imaging centers',
        'Primary care practices',
        'Specialty medical practices'
      ],
      targetAudience: 'Hospitals, Medical clinics, Healthcare systems',
      roi: '300-600%',
      implementationTime: '3-4 months',
      trainingIncluded: true,
      customizationLevel: 'High',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      featured: false
    },
    {
      id: 'sustainable-smart-city-platform',
      title: 'Sustainable Smart City Platform',
      category: 'Revolutionary 2030',
      description: 'Comprehensive platform for building and managing sustainable smart cities',
      monthlyPrice: 45000,
      yearlyPrice: 450000,
      marketPrice: '$45,000 - $120,000/month',
      features: [
        'IoT infrastructure management',
        'Smart energy grid optimization',
        'Traffic flow optimization',
        'Environmental monitoring',
        'Waste management optimization',
        'Public safety systems',
        'Citizen engagement platform',
        'Data analytics dashboard'
      ],
      benefits: [
        '30% reduction in energy consumption',
        '40% improvement in traffic flow',
        '50% reduction in waste',
        'Enhanced public safety'
      ],
      useCases: [
        'Municipal governments',
        'City planning departments',
        'Utility companies',
        'Transportation authorities'
      ],
      targetAudience: 'City governments, Municipalities, Urban planners',
      roi: '400-800%',
      implementationTime: '6-8 months',
      trainingIncluded: true,
      customizationLevel: 'Very High',
      icon: Globe,
      color: 'from-teal-500 to-cyan-600',
      featured: false
    },
    {
      id: 'ai-education-platform-2030',
      title: 'AI-Powered Education Platform 2030',
      category: 'Revolutionary 2030',
      description: 'Revolutionary educational platform using AI for personalized learning',
      monthlyPrice: 7999,
      yearlyPrice: 79990,
      marketPrice: '$7,999 - $22,999/month',
      features: [
        'AI-powered personalized learning',
        'Intelligent tutoring systems',
        'Adaptive curriculum generation',
        'Student performance analytics',
        'Learning path optimization',
        'Content recommendation engine',
        'Assessment automation',
        'Progress tracking'
      ],
      benefits: [
        '40% improvement in learning outcomes',
        'Personalized learning paths',
        'Real-time performance tracking',
        'Reduced administrative workload'
      ],
      useCases: [
        'K-12 schools',
        'Higher education institutions',
        'Corporate training programs',
        'Online learning platforms'
      ],
      targetAudience: 'Educational institutions, School districts, Universities',
      roi: '250-400%',
      implementationTime: '2-3 months',
      trainingIncluded: true,
      customizationLevel: 'High',
      icon: Users,
      color: 'from-indigo-500 to-purple-600',
      featured: false
    },
    {
      id: 'quantum-internet-security-platform',
      title: 'Quantum Internet Security Platform',
      category: 'Revolutionary 2030',
      description: 'Next-generation internet security using quantum cryptography',
      monthlyPrice: 28000,
      yearlyPrice: 280000,
      marketPrice: '$28,000 - $75,000/month',
      features: [
        'Quantum key distribution (QKD)',
        'Quantum-resistant cryptography',
        'Post-quantum algorithms',
        'Quantum random number generation',
        'Quantum-secure communication',
        'Network monitoring & detection',
        'Threat intelligence',
        'Compliance reporting'
      ],
      benefits: [
        'Unbreakable encryption',
        'Future-proof security',
        'Quantum-resistant algorithms',
        'Real-time threat detection'
      ],
      useCases: [
        'Government communications',
        'Financial institutions',
        'Healthcare organizations',
        'Critical infrastructure'
      ],
      targetAudience: 'Government agencies, Financial institutions, Critical infrastructure',
      roi: '600-900%',
      implementationTime: '4-5 months',
      trainingIncluded: true,
      customizationLevel: 'Very High',
      icon: Lock,
      color: 'from-purple-500 to-pink-600',
      featured: false
    },
    {
      id: 'ai-manufacturing-platform-2030',
      title: 'AI-Powered Manufacturing Platform 2030',
      category: 'Revolutionary 2030',
      description: 'Comprehensive manufacturing platform using AI, IoT, and machine learning',
      monthlyPrice: 18999,
      yearlyPrice: 189990,
      marketPrice: '$18,999 - $50,000/month',
      features: [
        'AI-powered production optimization',
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Inventory management',
        'Energy efficiency monitoring',
        'Worker safety systems',
        'Performance analytics'
      ],
      benefits: [
        '25% increase in production efficiency',
        '40% reduction in downtime',
        '30% improvement in quality',
        '20% reduction in energy costs'
      ],
      useCases: [
        'Automotive manufacturing',
        'Electronics production',
        'Pharmaceutical manufacturing',
        'Food & beverage production'
      ],
      targetAudience: 'Manufacturing companies, Industrial facilities, Production plants',
      roi: '350-600%',
      implementationTime: '3-4 months',
      trainingIncluded: true,
      customizationLevel: 'High',
      icon: Cpu,
      color: 'from-slate-500 to-gray-600',
      featured: false
    }
  ];

  const categories = ['All', ...Array.from(new Set(pricingData.map(item => item.category)))];
  const priceRanges = [
    'All',
    'Under $10K',
    '$10K - $25K',
    '$25K - $50K',
    'Over $50K'
  ];

  const filteredData = useMemo(() => {
    let filtered = pricingData;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange !== 'All') {
      switch (selectedPriceRange) {
        case 'Under $10K':
          filtered = filtered.filter(item => item.monthlyPrice < 10000);
          break;
        case '$10K - $25K':
          filtered = filtered.filter(item => item.monthlyPrice >= 10000 && item.monthlyPrice < 25000);
          break;
        case '$25K - $50K':
          filtered = filtered.filter(item => item.monthlyPrice >= 25000 && item.monthlyPrice < 50000);
          break;
        case 'Over $50K':
          filtered = filtered.filter(item => item.monthlyPrice >= 50000);
          break;
        default:
          break;
      }
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedPriceRange]);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'Revolutionary 2030': Zap,
      'AI Services': Brain,
      'Cybersecurity': Shield,
      'Cloud & DevOps': Cloud,
      'IT Infrastructure': Cpu,
      'Micro SaaS': Rocket
    };
    return iconMap[category] || Zap;
  };

  const getPriceRangeColor = (price: number) => {
    if (price < 10000) return 'text-green-400';
    if (price < 25000) return 'text-yellow-400';
    if (price < 50000) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group" 
        description="Explore our complete pricing guide for AI, quantum computing, cybersecurity, and innovative technology services. Get transparent pricing and ROI information."
        canonical="/pricing"
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              Comprehensive
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Pricing Guide 2027
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Transparent pricing for our revolutionary AI, quantum computing, and innovative technology services. 
              Understand costs, ROI, and implementation timelines to make informed decisions.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search services, technologies, or solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                  />
                </div>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{pricingData.length} Services</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>250-1200% ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Transparent Pricing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-slate-900/60 backdrop-blur border transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl overflow-hidden ${
                  item.featured 
                    ? 'border-purple-400/40 hover:border-purple-400/60 hover:shadow-purple-400/10' 
                    : 'border-cyan-400/15 hover:border-cyan-400/40 hover:shadow-cyan-400/10'
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-400/20 text-purple-300 border border-purple-400/30">
                      Featured
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300 border border-slate-600/30">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className={`text-3xl font-bold ${getPriceRangeColor(item.monthlyPrice)}`}>
                        ${item.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-slate-400">/month</span>
                    </div>
                    <div className="text-sm text-slate-400 mb-2">
                      Market: {item.marketPrice}
                    </div>
                    <div className="text-sm text-green-400 font-medium">
                      ROI: {item.roi}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-slate-200">Key Features:</h4>
                    {item.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {item.features.length > 4 && (
                      <div className="text-xs text-slate-400">
                        +{item.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  {/* Implementation Details */}
                  <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                    <div>
                      <span className="text-slate-400">Implementation:</span>
                      <div className="text-white font-medium">{item.implementationTime}</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Training:</span>
                      <div className="text-white font-medium">
                        {item.trainingIncluded ? 'Included' : 'Additional'}
                      </div>
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Target Audience:</h4>
                    <p className="text-xs text-slate-300 line-clamp-2">{item.targetAudience}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                    </Link>
                    <Link
                      to="/revolutionary-services-2030"
                      className="w-full bg-slate-800/50 text-slate-300 text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-slate-700/50 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No services found</h3>
              <p className="text-slate-400">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pricing Comparison</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Compare our pricing with industry standards and understand the value proposition
            </p>
          </div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-lg rounded-xl p-6 border border-green-500/30 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                ${Math.max(...allServices.map(s => s.price)).toLocaleString()}
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
          </motion.div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
              <h3 className="text-xl font-semibold mb-4 text-center">Market Average</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>AI Services</span>
                  <span className="text-slate-400">$15K - $50K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantum Computing</span>
                  <span className="text-slate-400">$50K - $200K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Cybersecurity</span>
                  <span className="text-slate-400">$10K - $30K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Implementation</span>
                  <span className="text-slate-400">6-12 months</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-400/30">
              <h3 className="text-xl font-semibold mb-4 text-center text-cyan-300">Zion Tech Group</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>AI Services</span>
                  <span className="text-cyan-400">$8K - $35K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantum Computing</span>
                  <span className="text-cyan-400">$25K - $45K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Cybersecurity</span>
                  <span className="text-cyan-400">$9K - $28K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Implementation</span>
                  <span className="text-cyan-400">2-6 months</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
              <h3 className="text-xl font-semibold mb-4 text-center">Value Proposition</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Cost Savings</span>
                  <span className="text-green-400">30-60%</span>
                </div>
                <div className="flex justify-between">
                  <span>Faster Implementation</span>
                  <span className="text-green-400">50-75%</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI Improvement</span>
                  <span className="text-green-400">200-500%</span>
                </div>
                <div className="flex justify-between">
                  <span>Support Quality</span>
                  <span className="text-green-400">24/7 Enterprise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss pricing, implementation, and how our revolutionary services 
            can transform your business and drive unprecedented growth.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <a 
                href="tel:+13024640950" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
            <a 
              href="/revolutionary-services-2030" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {pricingData.length}
              </div>
              <div className="text-lg font-semibold mb-2">Services</div>
              <div className="text-sm text-gray-400">Comprehensive coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                $500K+
              </div>
              <div className="text-lg font-semibold mb-2">Monthly Revenue</div>
              <div className="text-sm text-gray-400">Premium pricing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                1200%
              </div>
              <div className="text-lg font-semibold mb-2">Max ROI</div>
              <div className="text-sm text-gray-400">Quantum trading</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                6 months
              </div>
              <div className="text-lg font-semibold mb-2">Max Implementation</div>
              <div className="text-sm text-gray-400">Fast deployment</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
