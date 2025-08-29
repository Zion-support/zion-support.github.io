import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Rocket,
  Lock,
  Cpu,
  Code,
  Users,
  Globe,
  Heart,
  TrendingUp,
  Zap,
  Database,
  Network,
  Server,
  Cloud,
  FileText,
  BarChart3,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  CheckCircle,
  Clock
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, SPECIALIZED_SERVICES } from '@/data/innovativeMicroSaasServices2025';

export function ServicesOverview() {
  const serviceCategories = [
    {
      id: 'ai-analytics',
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-zion-cyan to-zion-purple',
      description: 'Cutting-edge artificial intelligence and advanced analytics solutions',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('AI'))
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      icon: Rocket,
      color: 'from-zion-blue to-zion-cyan',
      description: 'Next-generation quantum computing and quantum machine learning',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Quantum'))
    },
    {
      id: 'blockchain',
      name: 'Blockchain & Web3',
      icon: Lock,
      color: 'from-zion-purple to-zion-blue',
      description: 'Decentralized solutions and blockchain technology platforms',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Blockchain'))
    },
    {
      id: 'iot-edge',
      name: 'IoT & Edge Computing',
      icon: Cpu,
      color: 'from-zion-green to-zion-cyan',
      description: 'Internet of Things and edge computing solutions',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('IoT'))
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-zion-purple to-zion-red',
      description: 'Advanced security and threat protection solutions',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Cybersecurity'))
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin',
      icon: Server,
      color: 'from-zion-blue to-zion-purple',
      description: 'Virtual replicas and simulation platforms',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Digital Twin'))
    },
    {
      id: 'sustainability',
      name: 'Sustainability',
      icon: Globe,
      color: 'from-zion-green to-zion-blue',
      description: 'Environmental monitoring and sustainability solutions',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Sustainability'))
    },
    {
      id: 'hr-talent',
      name: 'HR & Talent',
      icon: Users,
      color: 'from-zion-pink to-zion-purple',
      description: 'Human resources and talent management platforms',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('HR'))
    },
    {
      id: 'content-creation',
      name: 'Content Creation',
      icon: Code,
      color: 'from-zion-orange to-zion-purple',
      description: 'AI-powered content generation and management',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Content'))
    },
    {
      id: 'legal-tech',
      name: 'Legal Tech',
      icon: FileText,
      color: 'from-zion-purple to-zion-cyan',
      description: 'Legal technology and compliance solutions',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Legal'))
    },
    {
      id: 'fintech',
      name: 'FinTech',
      icon: BarChart3,
      color: 'from-zion-green to-zion-blue',
      description: 'Financial technology and advisory platforms',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('FinTech'))
    },
    {
      id: 'healthcare-ai',
      name: 'Healthcare AI',
      icon: Heart,
      color: 'from-zion-pink to-zion-purple',
      description: 'Healthcare artificial intelligence solutions',
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Healthcare'))
    }
  ];

  return (
    <div className="py-20 bg-futuristic relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="cyber-grid w-full h-full"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-responsive font-bold mb-6">
            <span className="text-gradient neon-text-cyan">Comprehensive Technology</span>
            <br />
            <span className="text-white">Services Portfolio</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover our complete range of innovative micro SAAS services, IT solutions, and AI platforms.
            From cutting-edge quantum computing to practical business applications, we provide the technology
            solutions your business needs to thrive in the digital age.
          </p>
        </motion.div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Link to={`/services/${category.id}`} className="block">
                <div className="card-futuristic h-full hover:border-zion-cyan/50 transition-all duration-300">
                  {/* Category Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Category Info */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300 text-center">
                    {category.name}
                  </h3>

                  <p className="text-zion-slate-light text-sm text-center mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Service Count */}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan mb-1">
                      {category.services.length}
                    </div>
                    <div className="text-xs text-zion-slate-light">
                      Services Available
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-zion-cyan" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Services */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-responsive font-bold mb-8 text-center">
            <span className="text-gradient neon-text-purple">Featured Services</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {INNOVATIVE_MICRO_SAAS_SERVICES_2025.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                className="card-futuristic group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light leading-relaxed mb-3">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-zion-slate-light">per month</div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-cyan font-medium">{service.category}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      service.innovationLevel === 'Cutting-edge'
                        ? 'bg-zion-cyan/20 text-zion-cyan'
                        : 'bg-zion-purple/20 text-zion-purple'
                    }`}>
                      {service.innovationLevel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-zion-green">
                      <TrendingUp className="w-4 h-4" />
                      <span>ROI: {service.roi}</span>
                    </div>
                    <div className="text-zion-slate-light">
                      Market: {service.marketPrice}
                    </div>
                  </div>
                </div>

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
                    className="btn-futuristic px-4 py-2 text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10 rounded-2xl p-12 border border-zion-cyan/20">
            <h2 className="heading-responsive font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Get in touch with our technology experts to discuss your specific needs and discover
              how our innovative solutions can drive your business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>

              <a
                href="tel:+13024640950"
                className="btn-neon px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5 border border-zion-cyan/20">
                <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <p className="font-medium text-white mb-1">Address</p>
                <p className="text-sm text-zion-slate-light">364 E Main St STE 1008</p>
                <p className="text-sm text-zion-slate-light">Middletown DE 19709</p>
              </div>

              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5 border border-zion-purple/20">
                <Mail className="w-8 h-8 text-zion-purple mx-auto mb-2" />
                <p className="font-medium text-white mb-1">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple transition-colors duration-300 text-sm">
                  kleber@ziontechgroup.com
                </a>
              </div>

              <div className="text-center p-4 rounded-xl bg-zion-slate-light/5 border border-zion-blue/20">
                <Globe className="w-8 h-8 text-zion-blue mx-auto mb-2" />
                <p className="font-medium text-white mb-1">Website</p>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-blue transition-colors duration-300 text-sm">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}