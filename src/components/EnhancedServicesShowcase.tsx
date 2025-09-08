import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Star,
  TrendingUp,
  Lock,
  Cpu
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  gradient: string;
  features: string[];
  price: string;
  popular?: boolean;
  category: 'ai' | 'cloud' | 'security' | 'infrastructure' | 'consulting';
}

export function EnhancedServicesShowcase() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services: Service[] = useMemo(() => [
    {
      id: 'ai-solutions',
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions for business transformation',
      icon: Brain,
      color: 'text-zion-cyan',
      gradient: 'from-zion-cyan to-zion-blue',
      features: [
        'Custom AI Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI-Powered Automation'
      ],
      price: 'From $5,000',
      category: 'ai'
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
      icon: Cloud,
      color: 'text-zion-purple',
      gradient: 'from-zion-purple to-zion-purple-dark',
      features: [
        'Multi-Cloud Strategy',
        'DevOps Implementation',
        'Container Orchestration',
        'Serverless Architecture',
        'Cloud Migration'
      ],
      price: 'From $3,000',
      category: 'cloud'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Services',
      description: 'Enterprise-grade security solutions to protect your business',
      icon: Shield,
      color: 'text-zion-red',
      gradient: 'from-zion-red to-zion-red-dark',
      features: [
        'Threat Detection & Response',
        'Security Audits & Compliance',
        'Penetration Testing',
        'Incident Response',
        'Security Training'
      ],
      price: 'From $4,000',
      category: 'security'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting services',
      icon: Zap,
      color: 'text-zion-green',
      gradient: 'from-zion-green to-zion-green-dark',
      features: [
        'Process Optimization',
        'Technology Assessment',
        'Change Management',
        'Digital Strategy',
        'Implementation Support'
      ],
      price: 'From $6,000',
      category: 'consulting'
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Robust and scalable IT infrastructure solutions',
      icon: Cpu,
      color: 'text-zion-orange',
      gradient: 'from-zion-orange to-zion-orange-dark',
      features: [
        'Network Design & Implementation',
        'Data Center Solutions',
        'Backup & Disaster Recovery',
        'Performance Monitoring',
        '24/7 Support'
      ],
      price: 'From $2,500',
      category: 'infrastructure'
    },
    {
      id: 'managed-services',
      title: 'Managed IT Services',
      description: 'Comprehensive IT management and support services',
      icon: Users,
      color: 'text-zion-blue',
      gradient: 'from-zion-blue to-zion-blue-dark',
      features: [
        'Proactive Monitoring',
        'Help Desk Support',
        'Patch Management',
        'Security Updates',
        'Performance Optimization'
      ],
      price: 'From $1,500/month',
      popular: true,
      category: 'consulting'
    }
  ], []);

  const categories = [
    { id: 'all', label: 'All Services', icon: Globe },
    { id: 'ai', label: 'AI Solutions', icon: Brain },
    { id: 'cloud', label: 'Cloud Services', icon: Cloud },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'infrastructure', label: 'Infrastructure', icon: Cpu },
    { id: 'consulting', label: 'Consulting', icon: Users }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            {t('services.title', 'Our Comprehensive Services')}
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle', 'Discover our full range of technology solutions designed to accelerate your business growth and digital transformation journey.')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'border-zion-cyan bg-zion-cyan text-white shadow-lg'
                  : 'border-zion-slate-light text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout
                className={`relative group cursor-pointer ${
                  service.popular ? 'ring-2 ring-zion-cyan ring-offset-4 ring-offset-zion-slate-dark' : ''
                }`}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Service Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:border-zion-cyan/50 hover:shadow-2xl hover:shadow-zion-cyan/20 group-hover:scale-105">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-zion-cyan fill-current" />
                      <span className="text-zion-slate-light text-sm">4.9/5</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 group-hover:gap-3"
                  >
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Hover Effect Overlay */}
                <AnimatePresence>
                  {hoveredService === service.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <TrendingUp className="h-5 w-5" />
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="text-zion-slate-light mt-4">
            Ready to transform your business? Let's discuss your needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}