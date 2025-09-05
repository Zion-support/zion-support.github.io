import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  Database,
  Network,
  Rocket,
  Target,
  Award,
  Clock,
  Star,
  Search,
  Filter,
  DollarSign,
  BarChart,
  Lightbulb,
  Code,
  Cloud,
  Lock,
  Smartphone,
  Car,
  Heart,
  Palette,
  Briefcase,
  Building,
  Factory,
  Truck,
  Microscope,
  Atom,
  CircuitBoard,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { ULTIMATE_INNOVATIVE_SERVICES_2026 } from "@/data/ultimateInnovativeServices2026";

export default function ComprehensiveServicesOverview2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const serviceCategories = [
    {
      id: 'quantum-ai',
      name: 'Quantum AI & Computing',
      description: 'Revolutionary quantum computing solutions combined with AI for solving complex optimization problems and advancing computational capabilities.',
      icon: Atom,
      color: 'from-purple-500 to-cyan-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Quantum AI'),
      marketSize: '$1.7 billion by 2027',
      avgROI: '500-2000%',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'neuromorphic-ai',
      name: 'Neuromorphic AI',
      description: 'Brain-inspired computing systems that simulate human neural networks for energy-efficient AI processing and cognitive computing.',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Neuromorphic AI'),
      marketSize: '$8.2 billion by 2028',
      avgROI: '300-800%',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'synthetic-biology',
      name: 'Synthetic Biology & AI',
      description: 'AI-powered biological design and engineering platforms for drug discovery, sustainable manufacturing, and biological innovation.',
      icon: Microscope,
      color: 'from-orange-500 to-red-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Synthetic Biology'),
      marketSize: '$13.4 billion by 2027',
      avgROI: '400-1200%',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'space-technology',
      name: 'Space Technology & AI',
      description: 'Autonomous space systems and AI-powered space operations for satellite management, exploration, and orbital optimization.',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Space Technology'),
      marketSize: '$469.8 billion by 2027',
      avgROI: '600-1500%',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'advanced-materials',
      name: 'Advanced Materials & AI',
      description: 'AI-driven material discovery and design for next-generation electronics, energy storage, and quantum materials.',
      icon: CircuitBoard,
      color: 'from-yellow-500 to-orange-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Advanced Materials'),
      marketSize: '$6.8 billion by 2027',
      avgROI: '500-1000%',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'brain-computer-interface',
      name: 'Brain-Computer Interface',
      description: 'Revolutionary neural technology enabling direct communication between human brain and computers using AI.',
      icon: Cpu,
      color: 'from-teal-500 to-cyan-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Brain-Computer Interface'),
      marketSize: '$3.7 billion by 2027',
      avgROI: '800-2000%',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin & AI',
      description: 'AI-powered digital twin platforms for real-time simulation, predictive analytics, and autonomous optimization.',
      icon: Eye,
      color: 'from-blue-500 to-indigo-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Digital Twin'),
      marketSize: '$86.1 billion by 2028',
      avgROI: '400-1200%',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'extended-reality',
      name: 'Extended Reality & AI',
      description: 'Immersive AI-powered extended reality platforms combining VR, AR, and AI for revolutionary user experiences.',
      icon: Palette,
      color: 'from-pink-500 to-purple-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Extended Reality'),
      marketSize: '$125.2 billion by 2027',
      avgROI: '500-1000%',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'edge-ai',
      name: 'Edge AI & Computing',
      description: 'Autonomous edge AI platforms for real-time processing, distributed learning, and intelligent edge operations.',
      icon: Network,
      color: 'from-green-500 to-blue-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Edge AI'),
      marketSize: '$15.6 billion by 2027',
      avgROI: '400-800%',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'federated-learning',
      name: 'Federated Learning & AI',
      description: 'Privacy-preserving AI platforms enabling collaborative learning across distributed data sources without data sharing.',
      icon: Database,
      color: 'from-purple-500 to-indigo-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Federated Learning'),
      marketSize: '$2.1 billion by 2027',
      avgROI: '500-1200%',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'sustainable-technology',
      name: 'Sustainable Technology & AI',
      description: 'AI-powered sustainable technology platforms for environmental impact analysis and sustainable solution optimization.',
      icon: Heart,
      color: 'from-emerald-500 to-green-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s => s.category === 'Sustainable Technology'),
      marketSize: '$417.4 billion by 2027',
      avgROI: '600-1500%',
      innovationLevel: 'Revolutionary'
    }
  ];

  const filteredCategories = selectedCategory === 'all' ? serviceCategories : serviceCategories.filter(cat => cat.id === selectedCategory);

  const toggleCategoryExpansion = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const totalServices = ULTIMATE_INNOVATIVE_SERVICES_2026.length;
  const totalMarketSize = '$3.2+ trillion';
  const avgROI = '400-1500%';

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="2026 Comprehensive Services Overview - Zion Tech Group"
        description="Comprehensive overview of our 2026 innovative services portfolio across 11 revolutionary technology categories with market analysis and ROI insights."
        keywords="2026 services overview, innovative services portfolio, technology categories, market analysis, ROI insights, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            2026 Comprehensive
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Services</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Overview</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8"
          >
            Explore our comprehensive portfolio of revolutionary innovative services across 11 cutting-edge technology categories. 
            Discover market opportunities, ROI potential, and transformative solutions for your business.
          </motion.p>

          {/* Portfolio Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{totalServices}</div>
              <div className="text-white/80">Revolutionary Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">11</div>
              <div className="text-white/80">Technology Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{totalMarketSize}</div>
              <div className="text-white/80">Total Market Size</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{avgROI}</div>
              <div className="text-white/80">Average ROI Potential</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              <Globe className="w-4 h-4 inline mr-2" />
              All Categories
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-4 h-4 inline mr-2" />
                {category.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>
                      <p className="text-gray-300 max-w-2xl">{category.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleCategoryExpansion(category.id)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {expandedCategory === category.id ? (
                      <ChevronUp className="w-6 h-6 text-zion-cyan" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-zion-cyan" />
                    )}
                  </button>
                </div>

                {/* Category Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-zion-cyan mb-1">{category.services.length}</div>
                    <div className="text-gray-300 text-sm">Services Available</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">{category.avgROI}</div>
                    <div className="text-gray-300 text-sm">Average ROI</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">{category.marketSize}</div>
                    <div className="text-gray-300 text-sm">Market Size</div>
                  </div>
                </div>

                {/* Expandable Services */}
                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {category.services.map((service, serviceIndex) => (
                          <div key={service.id} className="bg-white/5 rounded-lg p-6 border border-white/10">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-xl font-bold text-white">${service.price.toLocaleString()}</div>
                                <div className="text-sm text-gray-400">/month</div>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full">
                                {service.innovationLevel}
                              </span>
                              <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full">
                                {service.roi}
                              </span>
                            </div>

                            <div className="flex gap-2">
                              <Link
                                to="/ultimate-innovative-services-2026"
                                className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:from-zion-blue hover:to-zion-purple transition-all duration-300"
                              >
                                Learn More
                              </Link>
                              <Link
                                to="/contact"
                                className="px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg text-sm font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
                              >
                                Contact
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Category CTA */}
                <div className="text-center pt-6 border-t border-white/10">
                  <Link
                    to="/ultimate-innovative-services-2026"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-purple transition-all duration-300"
                  >
                    Explore {category.name} Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Summary */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Complete 2026 Innovation Portfolio
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto"
          >
            Our comprehensive portfolio represents the cutting edge of technology innovation, 
            offering unprecedented opportunities for business transformation and competitive advantage.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-10 h-10 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Revolutionary</h3>
              <p className="text-zion-cyan">Cutting-edge technology</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">High ROI</h3>
              <p className="text-zion-cyan">400-2000% returns</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Market</h3>
              <p className="text-zion-cyan">$3.2+ trillion opportunity</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Success</h3>
              <p className="text-zion-cyan">Market-leading solutions</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/ultimate-innovative-services-2026"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-purple transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate to-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto"
          >
            Our team of innovation experts is ready to help you implement these revolutionary solutions 
            and drive your business into the future.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-blue hover:to-zion-purple transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Innovation Journey
            </Link>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Visit Our Website
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}