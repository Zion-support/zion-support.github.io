import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Database, 
  Globe, 
  Zap, 
  Shield, 
  TrendingUp, 
  Star,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Code,
  Bot,
  Scan,
  DollarSign,
  Users,
  Lock,
  Rocket,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Clock,
  Award,
  Target,
  BarChart3,
  Lightbulb,
  Globe as GlobeIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, SPECIALIZED_SERVICES } from '@/data/innovativeMicroSaasServices2025';

interface ServiceShowcaseProps {
  showTitle?: boolean;
}

export function EnhancedServicesShowcase({ showTitle = true }: ServiceShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAllServices, setShowAllServices] = useState(false);

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.length },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('AI') || s.category.includes('Analytics')).length },
    { id: 'fintech', name: 'FinTech', icon: DollarSign, color: 'from-zion-green to-zion-cyan', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('FinTech')).length },
    { id: 'healthcare-ai', name: 'Healthcare AI', icon: Brain, color: 'from-zion-red to-zion-purple', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Healthcare')).length },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Quantum')).length },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-purple to-zion-blue', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Blockchain')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Cybersecurity')).length },
    { id: 'edtech', name: 'EdTech', icon: BookOpen, color: 'from-zion-orange to-zion-blue', count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('EdTech')).length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? INNOVATIVE_MICRO_SAAS_SERVICES_2025 
    : INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
        service.subcategory.toLowerCase().includes(selectedCategory.replace('-', ' '))
      );

  const displayedServices = showAllServices ? filteredServices : filteredServices.slice(0, 6);

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
      <div className="container-responsive">
        {showTitle && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-responsive font-bold mb-6">
              <span className="text-gradient">Enhanced Micro SAAS</span>
              <br />
              <span className="text-white">Services & Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of cutting-edge micro SAAS solutions designed to transform your business. 
              From AI-powered analytics to quantum computing, we offer innovative technology services that drive growth and efficiency.
            </p>
            
            {/* Contact Information */}
            <div className="mt-8 p-6 bg-zion-slate-light/10 rounded-xl border border-zion-cyan/20 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-zion-cyan">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2 text-zion-cyan">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2 text-zion-cyan">
                  <MapPin className="w-4 h-4" />
                  <span>Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Navigation */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="card-futuristic group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                    <getCategoryIcon(service.category) className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-zion-slate-light">per month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Details */}
              <div className="space-y-4 mb-6">
                {/* Category & Innovation Level */}
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
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-zion-cyan" />
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-zion-green" />
                    Key Benefits:
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <Award className="w-3 h-3 text-zion-green" />
                        {benefit}
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
                  className="btn-futuristic px-4 py-2 text-sm"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Contact CTA */}
              <div className="mt-4 p-3 bg-zion-cyan/10 rounded-lg border border-zion-cyan/20">
                <div className="text-center text-sm">
                  <p className="text-zion-slate-light mb-2">Ready to get started?</p>
                  <div className="flex gap-2 justify-center">
                    <a
                      href="tel:+13024640950"
                      className="flex items-center gap-1 text-zion-cyan hover:text-white transition-colors text-xs"
                    >
                      <Phone className="w-3 h-3" />
                      Call Now
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex items-center gap-1 text-zion-cyan hover:text-white transition-colors text-xs"
                    >
                      <Mail className="w-3 h-3" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More/Less Button */}
        {filteredServices.length > 6 && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="btn-futuristic px-8 py-3"
            >
              {showAllServices ? 'Show Less' : `Show All ${filteredServices.length} Services`}
            </button>
          </motion.div>
        )}

        {/* Specialized Services Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="text-gradient">Specialized Solutions</span>
            </h3>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our specialized technology solutions designed for specific industries and cutting-edge applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALIZED_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                className="card-futuristic text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="text-zion-cyan font-bold mb-4">
                  {service.marketPrice}
                </div>
                
                <Link
                  to={`/services/${service.id}`}
                  className="btn-neon w-full"
                >
                  Explore Solution
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center p-12 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10 rounded-2xl border border-zion-cyan/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h3>
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
          
          <div className="text-zion-slate-light">
            <p className="mb-2">📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a></p>
            <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}