import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Coins,
  ChartBar,
  Target,
  Dna,
  Microscope,
  Stethoscope,
  Pill,
  TestTube,
  Telescope,
  Planet,
  Orbit,
  Comet,
  Galaxy,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  MapPin
} from 'lucide-react';

export default function ComprehensivePricingGuide2031() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allServices = [
    {
      name: 'AI Quantum Financial Platform',
      description: 'Revolutionary platform combining quantum computing, AI, and blockchain for financial markets',
      icon: Atom,
      href: '/services/ai-quantum-financial-platform',
      category: 'Financial Technology',
      pricing: {
        starter: { price: 2999, period: 'month', features: ['Quantum computing access (2 hours/month)', 'AI prediction models (5 models)', 'Basic market analytics'] },
        professional: { price: 7999, period: 'month', features: ['Quantum computing access (10 hours/month)', 'AI prediction models (20 models)', 'Advanced market analytics', 'Custom model training'] },
        enterprise: { price: 19999, period: 'month', features: ['Unlimited quantum computing access', 'All AI prediction models', 'Custom model development', '24/7 dedicated support'] }
      },
      benefits: ['15-25% better returns', '40% risk reduction', 'Real-time execution', 'Global market access'],
      marketPrice: '$5,000 - $25,000/month',
      roi: '300-500%',
      innovationLevel: 'Revolutionary'
    },
    {
      name: 'AI Space Technology Platform',
      description: 'Next-generation space exploration and satellite management with AI technology',
      icon: Satellite,
      href: '/services/ai-space-technology-platform',
      category: 'Space Technology',
      pricing: {
        starter: { price: 4999, period: 'month', features: ['Basic satellite tracking (10 satellites)', 'Space debris monitoring', 'Research data access'] },
        professional: { price: 12999, period: 'month', features: ['Advanced satellite management (100 satellites)', 'Real-time collision avoidance', 'Custom AI model training'] },
        enterprise: { price: 29999, period: 'month', features: ['Unlimited satellite management', 'Classified data handling', 'Custom AI development', '24/7 dedicated support'] }
      },
      benefits: ['35-45% mission success increase', '99.9% collision prevention', 'Real-time monitoring', 'Global coverage'],
      marketPrice: '$8,000 - $35,000/month',
      roi: '250-400%',
      innovationLevel: 'Cutting-Edge'
    },
    {
      name: 'AI Healthcare Genomics Platform',
      description: 'Transform healthcare with AI-powered genomics and personalized medicine',
      icon: Dna,
      href: '/services/ai-healthcare-genomics-platform',
      category: 'Healthcare Technology',
      pricing: {
        starter: { price: 3999, period: 'month', features: ['Basic genomic analysis (100 samples/month)', 'Standard disease prediction models', 'Research data access'] },
        professional: { price: 8999, period: 'month', features: ['Advanced genomic analysis (1,000 samples/month)', 'Custom disease prediction models', 'Clinical decision support'] },
        enterprise: { price: 24999, period: 'month', features: ['Unlimited genomic analysis', 'Custom AI model development', 'Drug discovery platform access', '24/7 dedicated support'] }
      },
      benefits: ['40-60% diagnostic accuracy', 'Early disease detection', 'Faster results', '25-35% better outcomes'],
      marketPrice: '$6,000 - $30,000/month',
      roi: '200-350%',
      innovationLevel: 'Breakthrough'
    },
    {
      name: 'AI Enterprise Orchestrator',
      description: 'Multi-agent AI coordination & workflow automation for enterprise-scale operations',
      icon: Brain,
      href: '/services/ai-enterprise-orchestrator',
      category: 'Enterprise AI',
      pricing: {
        starter: { price: 5999, period: 'month', features: ['Basic workflow automation', '5 AI agents', 'Standard integrations'] },
        professional: { price: 14999, period: 'month', features: ['Advanced workflow automation', '20 AI agents', 'Custom integrations', 'Priority support'] },
        enterprise: { price: 34999, period: 'month', features: ['Unlimited automation', 'Unlimited AI agents', 'Custom development', '24/7 dedicated support'] }
      },
      benefits: ['40% efficiency increase', 'Real-time coordination', 'Scalable operations', 'Cost optimization'],
      marketPrice: '$8,000 - $40,000/month',
      roi: '250-400%',
      innovationLevel: 'Advanced'
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'AI-powered threat detection and response for comprehensive security',
      icon: Shield,
      href: '/services/ai-cybersecurity-suite',
      category: 'Cybersecurity',
      pricing: {
        starter: { price: 4999, period: 'month', features: ['Basic threat detection', 'Real-time monitoring', 'Standard reporting'] },
        professional: { price: 11999, period: 'month', features: ['Advanced threat detection', 'Automated response', 'Custom AI models', 'Priority support'] },
        enterprise: { price: 27999, period: 'month', features: ['Unlimited threat detection', 'Custom AI development', '24/7 SOC support', 'Compliance automation'] }
      },
      benefits: ['99.9% threat detection', 'Real-time response', 'Automated compliance', 'Risk reduction'],
      marketPrice: '$7,000 - $35,000/month',
      roi: '300-500%',
      innovationLevel: 'Advanced'
    },
    {
      name: 'Quantum AI Platform',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      icon: Atom,
      href: '/services/quantum-ai-platform',
      category: 'Quantum Computing',
      pricing: {
        starter: { price: 6999, period: 'month', features: ['Basic quantum access', 'Standard algorithms', 'Research support'] },
        professional: { price: 17999, period: 'month', features: ['Advanced quantum access', 'Custom algorithms', 'Priority support', 'Custom development'] },
        enterprise: { price: 39999, period: 'month', features: ['Unlimited quantum access', 'Custom development', '24/7 support', 'On-premise options'] }
      },
      benefits: ['1000x faster processing', 'Complex problem solving', 'Research acceleration', 'Competitive advantage'],
      marketPrice: '$10,000 - $50,000/month',
      roi: '400-600%',
      innovationLevel: 'Revolutionary'
    }
  ];

  const categories = ['all', ...new Set(allServices.map(service => service.category))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'low', label: 'Under $5,000/month' },
    { value: 'medium', label: '$5,000 - $15,000/month' },
    { value: 'high', label: 'Over $15,000/month' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'low' && service.pricing.starter.price < 5000) ||
      (priceRange === 'medium' && service.pricing.starter.price >= 5000 && service.pricing.starter.price <= 15000) ||
      (priceRange === 'high' && service.pricing.starter.price > 15000);
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Comprehensive Pricing Guide 2031
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transparent Pricing for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> All Services</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our complete pricing structure for all AI, IT, and Micro SAAS solutions. 
              From quantum computing to healthcare genomics, find the perfect plan for your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105">
                Get Custom Quote
              </Link>
              <Link to="/services" className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ float: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ float: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-40 right-20 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl"
          />
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 py-8 px-4 border-y border-zion-cyan/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-zion-cyan" />
              </div>
              <div>
                <p className="text-sm text-zion-cyan">Phone</p>
                <p className="font-semibold">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-zion-cyan" />
              </div>
              <div>
                <p className="text-sm text-zion-cyan">Email</p>
                <p className="font-semibold">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-zion-cyan" />
              </div>
              <div>
                <p className="text-sm text-zion-cyan">Website</p>
                <a href={contactInfo.website} className="font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-zion-cyan" />
              </div>
              <div>
                <p className="text-sm text-zion-cyan">Address</p>
                <p className="font-semibold text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zion-blue-dark/50 backdrop-blur-lg rounded-2xl p-6 border border-zion-purple/30">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              {/* Price Range Filter */}
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>
              </div>
              {/* Results Count */}
              <div className="flex items-center justify-center">
                <span className="text-zion-slate-light text-sm">
                  {filteredServices.length} services found
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-zion-slate-light">
              Discover cutting-edge solutions designed to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-zion-blue-dark/50 backdrop-blur-lg rounded-2xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  {/* Service Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">
                          ${service.pricing.starter.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-zion-slate-light">per month</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                        {service.category}
                      </span>
                      <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full">
                        {service.innovationLevel}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zion-slate-light text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing Plans */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Pricing Plans:</h4>
                    <div className="space-y-3">
                      {Object.entries(service.pricing).map(([plan, details]) => (
                        <div key={plan} className="flex items-center justify-between p-3 bg-zion-blue-dark/30 rounded-lg">
                          <div>
                            <span className="text-white font-medium capitalize">{plan}</span>
                            <span className="text-zion-slate-light text-sm ml-2">${details.price.toLocaleString()}/{details.period}</span>
                          </div>
                          <Link 
                            to={service.href}
                            className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
                          >
                            Learn More →
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-6">
                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div className="text-center p-2 bg-zion-cyan/20 rounded">
                        <div className="text-zion-cyan">Market Price</div>
                        <div className="text-white font-semibold text-xs">{service.marketPrice}</div>
                      </div>
                      <div className="text-center p-2 bg-zion-purple/20 rounded">
                        <div className="text-zion-purple">ROI</div>
                        <div className="text-white font-semibold text-xs">{service.roi}</div>
                      </div>
                      <div className="text-center p-2 bg-zion-cyan/20 rounded">
                        <div className="text-zion-cyan">Innovation</div>
                        <div className="text-white font-semibold text-xs">{service.innovationLevel}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex space-x-3">
                    <Link
                      to={service.href}
                      className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-3 rounded-lg text-center text-sm font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-3 border border-zion-cyan text-zion-cyan rounded-lg text-sm font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our innovative solutions can drive growth, 
              efficiency, and competitive advantage for your organization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zion-blue-dark/50 backdrop-blur-lg rounded-xl p-6 border border-zion-purple/30">
                <MessageCircle className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light mb-3">Speak directly with our experts</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-zion-cyan hover:text-zion-cyan-light font-semibold"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="bg-zion-blue-dark/50 backdrop-blur-lg rounded-xl p-6 border border-zion-purple/30">
                <Mail className="w-12 h-12 text-zion-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light mb-3">Get detailed information and quotes</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-zion-purple hover:text-zion-purple-light font-semibold"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="bg-zion-blue-dark/50 backdrop-blur-lg rounded-xl p-6 border border-zion-purple/30">
                <Globe className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Website</h3>
                <p className="text-zion-slate-light mb-3">Explore our full portfolio</p>
                <a
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-zion-cyan-light font-semibold"
                >
                  Visit Site →
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Schedule a Free Consultation
              </h3>
              <p className="text-zion-cyan text-lg mb-6">
                Get personalized recommendations and implementation strategies for your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}?subject=Free Consultation Request&body=Hi, I'd like to schedule a free consultation to discuss how your innovative services can benefit my business. Please let me know available times.`}
                  className="bg-white text-zion-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Schedule Consultation
                </a>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}