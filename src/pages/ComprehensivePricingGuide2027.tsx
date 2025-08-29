import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ArrowRight, 
  DollarSign, 
  ExternalLink, 
  Workflow, 
  MessageSquare, 
  Globe,
  Shield,
  Brain,
  Database,
  Cloud,
  Zap,
  Target,
  TrendingUp,
  Users,
  Rocket,
  Lock,
  Cpu,
  Network,
  BarChart3,
  FileText,
  Palette,
  Globe2,
  Smartphone,
  Building2,
  Car,
  Leaf,
  Microscope,
  Satellite,
  Atom,
  Network,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Award,
  Users2,
  Globe3,
  Zap2,
  Shield2,
  Brain2,
  Database2,
  Cloud2,
  Zap3,
  Target2,
  TrendingUp2,
  Users3,
  Rocket2,
  Lock2,
  Cpu2,
  Network2,
  BarChart32,
  FileText2,
  Palette2,
  Globe22,
  Smartphone2,
  Building22,
  Car2,
  Leaf2,
  Microscope2,
  Satellite2,
  Atom2,
  Blockchain2
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const ComprehensivePricingGuide2027: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const services = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  // Enhanced category mapping with icons and descriptions
  const categories = [
    { 
      id: 'All', 
      name: 'All Services', 
      icon: Workflow, 
      description: 'Complete portfolio of innovative solutions',
      count: services.length
    },
    { 
      id: 'AI & Analytics', 
      name: 'AI & Analytics', 
      icon: Brain, 
      description: 'Intelligent data analysis and business insights',
      count: services.filter(s => s.category === 'AI & Analytics').length
    },
    { 
      id: 'AI & Content Creation', 
      name: 'AI Content Creation', 
      icon: FileText, 
      description: 'Automated content generation and marketing',
      count: services.filter(s => s.category === 'AI & Content Creation').length
    },
    { 
      id: 'AI & Customer Service', 
      name: 'AI Customer Service', 
      icon: MessageSquare, 
      description: 'Intelligent customer support automation',
      count: services.filter(s => s.category === 'AI & Customer Service').length
    },
    { 
      id: 'Healthcare AI', 
      name: 'Healthcare AI', 
      icon: Microscope, 
      description: 'Medical diagnostics and healthcare solutions',
      count: services.filter(s => s.category === 'Healthcare AI').length
    },
    { 
      id: 'FinTech', 
      name: 'Financial Technology', 
      icon: DollarSign, 
      description: 'AI-powered financial planning and analysis',
      count: services.filter(s => s.category === 'FinTech').length
    },
    { 
      id: 'Legal Technology', 
      name: 'Legal Technology', 
      icon: Shield, 
      description: 'AI-powered legal document analysis',
      count: services.filter(s => s.category === 'Legal Technology').length
    },
    { 
      id: 'Quantum Security', 
      name: 'Quantum Security', 
      icon: Lock, 
      description: 'Future-proof cybersecurity solutions',
      count: services.filter(s => s.category === 'Quantum Security').length
    },
    { 
      id: 'Quantum AI', 
      name: 'Quantum AI', 
      icon: Atom, 
      description: 'Quantum computing and machine learning',
      count: services.filter(s => s.category === 'Quantum AI').length
    },
    { 
      id: 'Blockchain', 
      name: 'Blockchain Solutions', 
      icon: Blockchain, 
      description: 'Distributed ledger and supply chain tracking',
      count: services.filter(s => s.category === 'Blockchain').length
    },
    { 
      id: 'IoT & Smart Cities', 
      name: 'IoT & Smart Cities', 
      icon: Building2, 
      description: 'Smart city infrastructure and management',
      count: services.filter(s => s.category === 'IoT & Smart Cities').length
    },
    { 
      id: 'Space Technology', 
      name: 'Space Technology', 
      icon: Satellite, 
      description: 'Satellite operations and space analytics',
      count: services.filter(s => s.category === 'Space Technology').length
    }
  ];

  const priceRanges = [
    { id: 'All', name: 'All Prices', range: 'All pricing tiers' },
    { id: 'Budget', name: 'Budget ($0-$199)', range: '$0 - $199/month' },
    { id: 'Professional', name: 'Professional ($200-$999)', range: '$200 - $999/month' },
    { id: 'Enterprise', name: 'Enterprise ($1000+)', range: '$1000+/month' }
  ];

  const filtered = useMemo(() => {
    let filteredServices = services;
    
    if (selectedCategory !== 'All') {
      filteredServices = services.filter(s => s.category === selectedCategory);
    }
    
    if (selectedPriceRange !== 'All') {
      switch (selectedPriceRange) {
        case 'Budget':
          filteredServices = filteredServices.filter(s => s.price <= 199);
          break;
        case 'Professional':
          filteredServices = filteredServices.filter(s => s.price >= 200 && s.price <= 999);
          break;
        case 'Enterprise':
          filteredServices = filteredServices.filter(s => s.price >= 1000);
          break;
      }
    }
    
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      filteredServices = filteredServices.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.tags?.some(t => t.toLowerCase().includes(q))
      );
    }
    
    return filteredServices;
  }, [query, selectedCategory, selectedPriceRange, services]);

  const featuredServices = services.filter(s => 
    ['ai-powered-legal-document-reviewer', 'quantum-cybersecurity-suite', 'ai-healthcare-diagnostic-assistant', 'blockchain-supply-chain-tracker'].includes(s.id)
  );

  const getPriceRange = (price: number) => {
    if (price <= 199) return 'Budget';
    if (price <= 999) return 'Professional';
    return 'Enterprise';
  };

  const getPriceRangeColor = (range: string) => {
    switch (range) {
      case 'Budget': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Professional': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Enterprise': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group" 
        description="Complete pricing information for all our innovative AI, Quantum, Blockchain, and IoT services. Get transparent pricing and ROI analysis for every solution."
        canonical="/pricing"
        url="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Pricing Guide 2027
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Transparent pricing for cutting-edge technology solutions. Discover the true cost and ROI of 
              implementing AI, Quantum, Blockchain, and IoT solutions for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-slate-800/50 backdrop-blur border border-cyan-400/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-cyan-400">{services.length}+</div>
                <div className="text-sm text-slate-300">Services Available</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur border border-blue-400/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-blue-400">3</div>
                <div className="text-sm text-slate-300">Pricing Tiers</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur border border-purple-400/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-purple-400">200-1000%</div>
                <div className="text-sm text-slate-300">ROI Range</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <Link 
              to="https://ziontechgroup.com" 
              target="_blank" 
              className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Visit Website
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pricing Tiers Overview</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Choose the pricing tier that best fits your business needs and budget requirements
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Budget Tier',
                price: '$0 - $199',
                description: 'Perfect for startups and small businesses',
                features: ['Essential features', 'Standard support', 'Basic integrations', 'Community forum'],
                color: 'from-green-500 to-emerald-500',
                icon: Users,
                count: services.filter(s => s.price <= 199).length
              },
              {
                name: 'Professional Tier',
                price: '$200 - $999',
                description: 'Ideal for growing businesses and teams',
                features: ['Advanced features', 'Priority support', 'Full integrations', 'Dedicated account manager'],
                color: 'from-blue-500 to-cyan-500',
                icon: Building2,
                count: services.filter(s => s.price >= 200 && s.price <= 999).length
              },
              {
                name: 'Enterprise Tier',
                price: '$1000+',
                description: 'For large organizations and complex requirements',
                features: ['Custom solutions', '24/7 support', 'White-label options', 'On-site implementation'],
                color: 'from-purple-500 to-pink-500',
                icon: Rocket,
                count: services.filter(s => s.price >= 1000).length
              }
            ].map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-slate-900/60 backdrop-blur border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-8 text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <tier.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                <p className="text-slate-300 mb-6">{tier.description}</p>
                <div className="text-2xl font-bold text-white mb-4">{tier.count} Services</div>
                <ul className="space-y-3 text-left">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services with Pricing */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Services with Pricing</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Explore our most popular and innovative solutions with transparent pricing and ROI analysis
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="bg-slate-900/60 backdrop-blur border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-8 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-sm uppercase tracking-wide text-cyan-300/70">{service.category}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriceRangeColor(getPriceRange(service.price))}`}>
                    {getPriceRange(service.price)}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 mb-6 line-clamp-3">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Our Price:</span>
                    <span className="text-3xl font-bold text-green-400">${service.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Market Price:</span>
                    <span className="text-lg text-blue-400">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">ROI:</span>
                    <span className="text-lg text-purple-400">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Innovation Level:</span>
                    <span className="text-lg text-yellow-400">{service.innovationLevel}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-white">Key Benefits:</h4>
                  {service.benefits?.slice(0, 3).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags?.slice(0, 4).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  to={`/services/${service.id.replace(/-/g, '-')}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Solution</h2>
            <p className="text-lg text-slate-300">
              Use our advanced filters to discover services that match your requirements and budget
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, e.g. AI, quantum, blockchain, IoT..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
              />
            </div>

            {/* Filters */}
            <div className="grid gap-4 md:grid-cols-2">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
                >
                  {priceRanges.map(range => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, 30).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-xs uppercase tracking-wide text-cyan-300/70">{service.category}</div>
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold border ${getPriceRangeColor(getPriceRange(service.price))}`}>
                    {getPriceRange(service.price)}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 mb-4 line-clamp-3">{service.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Price:</span>
                    <span className="text-lg font-bold text-green-400">${service.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Market:</span>
                    <span className="text-sm text-blue-400">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">ROI:</span>
                    <span className="text-sm text-purple-400">{service.roi}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {service.tags?.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-slate-800/50 text-slate-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  to={`/services/${service.id.replace(/-/g, '-')}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length > 30 && (
            <div className="text-center mt-12">
              <p className="text-slate-400 mb-4">
                Showing 30 of {filtered.length} services. Use filters to find more specific solutions.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ROI and Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Discover the unique value propositions that make our services the smart choice for forward-thinking businesses
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: TrendingUp,
                title: 'Proven ROI',
                description: 'Our clients see 200-1000% return on investment within the first year',
                color: 'text-green-400'
              },
              {
                icon: Zap,
                title: 'Rapid Implementation',
                description: 'Get up and running in weeks, not months, with our proven deployment process',
                color: 'text-yellow-400'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'SOC 2, ISO 27001, and HIPAA compliant solutions for enterprise-grade security',
                color: 'text-blue-400'
              },
              {
                icon: Users2,
                title: 'Expert Support',
                description: '24/7 technical support and dedicated account management for all enterprise clients',
                color: 'text-purple-400'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
              Contact our team today for a personalized consultation and custom pricing quote. 
              Let us help you find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales Team
              </Link>
              <Link 
                to="/request-quote" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Request Custom Quote
              </Link>
            </div>
            <div className="bg-slate-800/50 border border-cyan-400/20 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <div className="grid gap-4 md:grid-cols-3 text-sm">
                <div className="flex items-center gap-2 justify-center">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="text-cyan-300 hover:text-cyan-200">+1 302 464 0950</a>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">ziontechgroup.com</a>
                </div>
              </div>
              <div className="mt-4 text-center text-slate-400 text-sm">
                364 E Main St STE 1008, Middletown DE 19709
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
