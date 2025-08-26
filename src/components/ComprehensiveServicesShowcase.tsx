import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Lock, 
  Code, 
  Rocket, 
  Users, 
  TrendingUp, 
  Heart, 
  Network, 
  Smartphone,
  Building,
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '@/data/innovativeMicroSaasServices2025';
import { NEXT_GEN_INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '@/data/nextGenInnovativeMicroSaasServices2025';
import { COMPREHENSIVE_IT_SERVICES_2025 } from '@/data/comprehensiveITServices2025';
import { COMPREHENSIVE_AI_SERVICES_2025 } from '@/data/comprehensiveAIServices2025';

const serviceCategories = [
  {
    id: 'ai-analytics',
    name: 'AI & Analytics',
    icon: Brain,
    color: 'from-zion-cyan to-zion-purple',
    description: 'Advanced AI solutions for business intelligence and analytics',
    count: COMPREHENSIVE_AI_SERVICES_2025.filter(s => s.category.includes('AI')).length
  },
  {
    id: 'ai-marketing',
    name: 'AI & Marketing',
    icon: TrendingUp,
    color: 'from-zion-orange to-zion-purple',
    description: 'AI-powered marketing automation and personalization',
    count: COMPREHENSIVE_AI_SERVICES_2025.filter(s => s.category.includes('Marketing')).length
  },
  {
    id: 'ai-customer-experience',
    name: 'AI & Customer Experience',
    icon: Users,
    color: 'from-zion-pink to-zion-purple',
    description: 'Intelligent customer experience and support solutions',
    count: COMPREHENSIVE_AI_SERVICES_2025.filter(s => s.category.includes('Customer Experience')).length
  },
  {
    id: 'ai-security',
    name: 'AI & Security',
    icon: Shield,
    color: 'from-zion-purple to-zion-red',
    description: 'AI-enhanced cybersecurity and fraud detection',
    count: COMPREHENSIVE_AI_SERVICES_2025.filter(s => s.category.includes('Security')).length
  },
  {
    id: 'ai-supply-chain',
    name: 'AI & Supply Chain',
    icon: Network,
    color: 'from-zion-green to-zion-blue',
    description: 'Intelligent supply chain optimization and management',
    count: COMPREHENSIVE_AI_SERVICES_2025.filter(s => s.category.includes('Supply Chain')).length
  },
  {
    id: 'ai-healthcare',
    name: 'AI & Healthcare',
    icon: Heart,
    color: 'from-zion-red to-zion-pink',
    description: 'AI-powered healthcare diagnostics and solutions',
    count: COMPREHENSIVE_AI_SERVICES_2025.filter(s => s.category.includes('Healthcare')).length
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-zion-purple to-zion-red',
    description: 'Comprehensive cybersecurity and threat intelligence',
    count: COMPREHENSIVE_IT_SERVICES_2025.filter(s => s.category.includes('Cybersecurity')).length
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    icon: Rocket,
    color: 'from-zion-blue to-zion-cyan',
    description: 'Next-generation quantum computing solutions',
    count: NEXT_GEN_INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Quantum')).length
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    icon: Lock,
    color: 'from-zion-purple to-zion-blue',
    description: 'Decentralized blockchain and Web3 solutions',
    count: NEXT_GEN_INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Blockchain')).length
  },
  {
    id: 'iot-edge',
    name: 'IoT & Edge Computing',
    icon: Cpu,
    color: 'from-zion-green to-zion-cyan',
    description: 'Internet of Things and edge computing solutions',
    count: COMPREHENSIVE_IT_SERVICES_2025.filter(s => s.category.includes('IoT')).length
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-zion-blue to-zion-cyan',
    description: 'Cloud-native development and DevOps services',
    count: COMPREHENSIVE_IT_SERVICES_2025.filter(s => s.category.includes('Cloud')).length
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    icon: TrendingUp,
    color: 'from-zion-orange to-zion-blue',
    description: 'Strategic digital transformation consulting',
    count: COMPREHENSIVE_IT_SERVICES_2025.filter(s => s.category.includes('Digital Transformation')).length
  },
  {
    id: 'metaverse-vr',
    name: 'Metaverse & VR',
    icon: Globe,
    color: 'from-zion-purple to-zion-cyan',
    description: 'Metaverse and virtual reality business solutions',
    count: NEXT_GEN_INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Metaverse')).length
  },
  {
    id: 'enterprise-software',
    name: 'Enterprise Software',
    icon: Building,
    color: 'from-zion-blue to-zion-purple',
    description: 'Custom enterprise software solutions',
    count: COMPREHENSIVE_IT_SERVICES_2025.filter(s => s.category.includes('Enterprise')).length
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    icon: Smartphone,
    color: 'from-zion-green to-zion-orange',
    description: 'Professional mobile app development services',
    count: COMPREHENSIVE_IT_SERVICES_2025.filter(s => s.category.includes('Mobile')).length
  }
];

export function ComprehensiveServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...NEXT_GEN_INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...COMPREHENSIVE_IT_SERVICES_2025,
    ...COMPREHENSIVE_AI_SERVICES_2025
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
        service.subcategory.toLowerCase().includes(selectedCategory.replace('-', ' '))
      );

  return (
    <section className="py-20 bg-futuristic">
      <div className="container-responsive">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-responsive font-bold text-futuristic mb-6">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-responsive text-zion-slate-light max-w-3xl mx-auto">
            Discover our complete portfolio of cutting-edge services, from AI-powered solutions to quantum computing, 
            designed to transform your business and drive innovation across all industries.
          </p>
        </motion.div>

        {/* Service Categories */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {serviceCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r ' + category.color + ' text-white'
                  : 'bg-white/5 text-zion-slate-light hover:bg-white/10'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <category.icon className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm font-medium">{category.name}</div>
              <div className="text-xs opacity-75">{category.count} services</div>
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredServices.slice(0, 12).map((service, index) => (
            <motion.div
              key={service.id}
              className="card-futuristic-enhanced group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-zion-slate-light">
                      {service.pricingModel === 'monthly' ? 'per month' : 'per project'}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Service Details */}
              <div className="space-y-4 mb-6">
                {/* Category & Innovation Level */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zion-cyan font-medium">{service.category}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    service.innovationLevel === 'Revolutionary' 
                      ? 'bg-zion-cyan/20 text-zion-cyan' 
                      : 'bg-zion-purple/20 text-zion-purple'
                  }`}>
                    {service.innovationLevel}
                  </span>
                </div>

                {/* ROI & Market Price */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-zion-green">
                    <TrendingUp className="w-4 h-4" />
                    <span>ROI: {service.roi}</span>
                  </div>
                  <div className="text-zion-slate-light">
                    Market: {service.marketPrice}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-zion-cyan" />
                    <span>{service.supportLevel}</span>
                  </div>
                </div>
                
                <Link
                  to={`/services/${service.id}`}
                  className="btn-futuristic-enhanced px-4 py-2 text-sm"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="/services"
            className="btn-futuristic-enhanced inline-flex items-center"
          >
            View All {allServices.length} Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
