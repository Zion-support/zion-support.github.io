import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Cpu, 
  Database, 
  Cloud,
  Brain,
  Network,
  Leaf,
  Heart,
  DollarSign,
  Eye,
  Target,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Rocket,
  Award,
  Lightbulb,
  ShieldCheck,
  Globe2,
  CpuIcon,
  DatabaseIcon,
  CloudIcon,
  BrainIcon,
  NetworkIcon,
  LeafIcon,
  HeartIcon,
  DollarSignIcon,
  EyeIcon,
  TargetIcon,
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ExternalLinkIcon,
  RocketIcon,
  AwardIcon,
  LightbulbIcon,
  ShieldCheckIcon
} from 'lucide-react';
import { cuttingEdgeMicroSaasServices2026 } from '../../data/2026-cutting-edge-micro-saas-services';
import { emergingTechnologyServices2026 } from '../../data/2026-emerging-technology-services';

export function ComprehensiveServicesShowcase2026() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('comprehensive-services-showcase-2026');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Combine all services
  const allServices = [...cuttingEdgeMicroSaasServices2026, ...emergingTechnologyServices2026];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Sparkles className="h-5 w-5" />, color: 'from-zion-cyan to-zion-purple' },
    { id: 'Cybersecurity & AI', name: 'Cybersecurity', icon: <Shield className="h-5 w-5" />, color: 'from-red-500 to-orange-500' },
    { id: 'FinTech & AI', name: 'FinTech', icon: <DollarSign className="h-5 w-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'Healthcare & AI', name: 'Healthcare', icon: <Heart className="h-5 w-5" />, color: 'from-blue-500 to-indigo-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge', icon: <Zap className="h-5 w-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Blockchain & Web3', name: 'Web3', icon: <Network className="h-5 w-5" />, color: 'from-yellow-500 to-orange-500' },
    { id: 'Green Technology', name: 'Green Tech', icon: <Leaf className="h-5 w-5" />, color: 'from-emerald-500 to-teal-500' },
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: <Eye className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'Quantum Computing', name: 'Quantum', icon: <Brain className="h-5 w-5" />, color: 'from-cyan-500 to-blue-500' },
    { id: 'Space Technology', name: 'Space Tech', icon: <Globe className="h-5 w-5" />, color: 'from-slate-500 to-gray-500' },
    { id: 'Biotechnology & AI', name: 'Biotech', icon: <Cpu className="h-5 w-5" />, color: 'from-pink-500 to-rose-500' },
    { id: 'Autonomous Systems & Robotics', name: 'Robotics', icon: <Rocket className="h-5 w-5" />, color: 'from-blue-500 to-indigo-500' },
    { id: 'Advanced AI & Machine Learning', name: 'AI/ML', icon: <Brain className="h-5 w-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Quantum Machine Learning', name: 'Quantum ML', icon: <Brain className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'Neuromorphic Computing', name: 'Neuromorphic', icon: <Brain className="h-5 w-5" />, color: 'from-pink-500 to-rose-500' },
    { id: 'Synthetic Biology', name: 'Synthetic Bio', icon: <Leaf className="h-5 w-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'Advanced Robotics', name: 'Advanced Robotics', icon: <Rocket className="h-5 w-5" />, color: 'from-gray-500 to-slate-500' },
    { id: 'Digital Twin Technology', name: 'Digital Twin', icon: <Globe className="h-5 w-5" />, color: 'from-cyan-500 to-blue-500' },
    { id: 'Brain-Computer Interface', name: 'BCI', icon: <Brain className="h-5 w-5" />, color: 'from-violet-500 to-purple-500' },
    { id: 'Quantum Internet', name: 'Quantum Internet', icon: <Globe className="h-5 w-5" />, color: 'from-teal-500 to-cyan-500' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity & AI': return <Shield className="h-6 w-6" />;
      case 'FinTech & AI': return <DollarSign className="h-6 w-6" />;
      case 'Healthcare & AI': return <Heart className="h-6 w-6" />;
      case 'IoT & Edge Computing': return <Zap className="h-6 w-6" />;
      case 'Blockchain & Web3': return <Network className="h-6 w-6" />;
      case 'Green Technology': return <Leaf className="h-6 w-6" />;
      case 'AR/VR & Metaverse': return <Eye className="h-6 w-6" />;
      case 'Quantum Computing': return <Brain className="h-6 w-6" />;
      case 'Space Technology': return <Globe className="h-6 w-6" />;
      case 'Biotechnology & AI': return <Cpu className="h-6 w-6" />;
      case 'Autonomous Systems & Robotics': return <Rocket className="h-6 w-6" />;
      case 'Advanced AI & Machine Learning': return <Brain className="h-6 w-6" />;
      case 'Quantum Machine Learning': return <Brain className="h-6 w-6" />;
      case 'Neuromorphic Computing': return <Brain className="h-6 w-6" />;
      case 'Synthetic Biology': return <Leaf className="h-6 w-6" />;
      case 'Advanced Robotics': return <Rocket className="h-6 w-6" />;
      case 'Digital Twin Technology': return <Globe className="h-6 w-6" />;
      case 'Brain-Computer Interface': return <Brain className="h-6 w-6" />;
      case 'Quantum Internet': return <Globe className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  return (
    <section id="comprehensive-services-showcase-2026" className="py-20 bg-gradient-to-br from-zion-slate-dark/50 via-zion-slate/30 to-zion-blue-dark/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-zion-cyan" />
            <h2 className="text-4xl font-bold tracking-tight text-white">
              2026 Cutting-Edge Micro SAAS Services
            </h2>
            <Sparkles className="h-8 w-8 text-zion-cyan" />
          </div>
          <p className="text-xl text-zion-gray-light max-w-4xl mx-auto leading-relaxed">
            Discover our revolutionary micro SAAS solutions that are transforming industries with AI, 
            quantum computing, blockchain, and emerging technologies. Built for the future, available today.
          </p>
          
          {/* Contact Information Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-6 border border-zion-cyan/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-zion-cyan" />
                <div>
                  <p className="text-sm text-zion-gray-light">Phone</p>
                  <p className="font-semibold text-white">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-zion-cyan" />
                <div>
                  <p className="text-sm text-zion-gray-light">Email</p>
                  <p className="font-semibold text-white">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-zion-cyan" />
                <div>
                  <p className="text-sm text-zion-gray-light">Address</p>
                  <p className="font-semibold text-white">364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-xl text-white placeholder-zion-gray-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-gray-light" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' border-transparent text-white shadow-lg'
                      : 'bg-zion-slate/30 border-zion-cyan/30 text-zion-gray-light hover:border-zion-cyan/50 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-zion-slate/80 to-zion-slate-dark/80 rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(service.category)}
                        <span className="text-xs text-zion-cyan font-medium px-2 py-1 bg-zion-cyan/10 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  {service.popular && (
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-xs font-medium">Popular</span>
                    </div>
                  )}
                </div>

                {/* Service Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-zion-gray-light text-sm mb-3 leading-relaxed">
                    {service.tagline}
                  </p>
                  <p className="text-zion-gray text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-zion-cyan" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zion-gray-light">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-zion-cyan font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing and CTA */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-zion-gray-light">{service.period}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-zion-gray-light">Setup Time</div>
                    <div className="text-sm text-white font-medium">{service.setupTime}</div>
                  </div>
                </div>

                {/* Market Position */}
                <div className="mb-4 p-3 bg-zion-slate/30 rounded-lg border border-zion-cyan/20">
                  <p className="text-xs text-zion-gray-light leading-relaxed">
                    <strong className="text-zion-cyan">Market Position:</strong> {service.marketPosition}
                  </p>
                </div>

                {/* ROI and Metrics */}
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-zion-slate/30 rounded-lg">
                    <div className="text-sm text-zion-gray-light">ROI</div>
                    <div className="text-xs text-white font-medium leading-tight">{service.roi}</div>
                  </div>
                  <div className="text-center p-3 bg-zion-slate/30 rounded-lg">
                    <div className="text-sm text-zion-gray-light">Market Size</div>
                    <div className="text-xs text-white font-medium leading-tight">{service.marketSize}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-3 rounded-lg font-medium text-center hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <button
                    onClick={() => setSelectedService(service.id)}
                    className="px-4 py-3 border border-zion-cyan/30 text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                </div>

                {/* Service Stats */}
                <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                  <div className="flex items-center justify-between text-xs text-zion-gray-light">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{service.customers} customers</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current text-yellow-400" />
                      <span>{service.rating} ({service.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-zion-gray-light text-lg">
              No services found matching your criteria. Try adjusting your search or category filter.
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-gray-light mb-6 max-w-2xl mx-auto">
              Our cutting-edge micro SAAS services are designed to give you a competitive advantage 
              in today's rapidly evolving technology landscape. Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-lg font-medium hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-zion-cyan/30 text-zion-cyan px-8 py-4 rounded-lg font-medium hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zion-slate-dark rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const service = allServices.find(s => s.id === selectedService);
                if (!service) return null;

                return (
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color}`}>
                          <span className="text-4xl">{service.icon}</span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-2">{service.name}</h2>
                          <p className="text-zion-gray-light">{service.tagline}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="text-zion-gray-light hover:text-white transition-colors duration-300"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                        <p className="text-zion-gray-light mb-6 leading-relaxed">{service.description}</p>

                        <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-zion-gray-light">
                              <CheckCircle className="h-4 w-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <h3 className="text-lg font-semibold text-white mb-3">Use Cases</h3>
                        <ul className="space-y-2 mb-6">
                          {service.useCases.map((useCase, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-zion-gray-light">
                              <Target className="h-4 w-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="bg-zion-slate/30 rounded-xl p-6 mb-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Service Details</h3>
                          <div className="space-y-4">
                            <div className="flex justify-between">
                              <span className="text-zion-gray-light">Price:</span>
                              <span className="text-white font-semibold">{service.price}{service.period}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zion-gray-light">Setup Time:</span>
                              <span className="text-white">{service.setupTime}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zion-gray-light">Trial:</span>
                              <span className="text-white">{service.trialDays} days</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zion-gray-light">Category:</span>
                              <span className="text-white">{service.category}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-zion-slate/30 rounded-xl p-6 mb-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Market Information</h3>
                          <div className="space-y-4">
                            <div>
                              <span className="text-zion-gray-light text-sm">Market Position:</span>
                              <p className="text-white text-sm mt-1">{service.marketPosition}</p>
                            </div>
                            <div>
                              <span className="text-zion-gray-light text-sm">ROI:</span>
                              <p className="text-white text-sm mt-1">{service.roi}</p>
                            </div>
                            <div>
                              <span className="text-zion-gray-light text-sm">Market Size:</span>
                              <p className="text-white text-sm mt-1">{service.marketSize}</p>
                            </div>
                            <div>
                              <span className="text-zion-gray-light text-sm">Growth Rate:</span>
                              <p className="text-white text-sm mt-1">{service.growthRate}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-zion-slate/30 rounded-xl p-6">
                          <h3 className="text-lg font-semibold text-white mb-4">Technology Stack</h3>
                          <div className="flex flex-wrap gap-2">
                            {service.technology.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                      <Link
                        to={service.link}
                        className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-3 rounded-lg font-medium text-center hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300"
                      >
                        Get Started
                      </Link>
                      <a
                        href="tel:+13024640950"
                        className="flex-1 border border-zion-cyan/30 text-zion-cyan px-6 py-3 rounded-lg font-medium text-center hover:bg-zion-cyan/10 transition-all duration-300"
                      >
                        Call for Demo
                      </a>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Icon components
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);