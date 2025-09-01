import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Globe, 
  Zap, 
  Database,
  Cpu,
  Lock,
  Network,
  Rocket,
  Target,
  TrendingUp
} from 'lucide-react';
import { ModernCard } from './ui/ModernCard';
import { ModernButton } from './ui/ModernButton';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  gradient: string;
  features: string[];
  href: string;
  category: 'AI' | 'Cloud' | 'Security' | 'Infrastructure' | 'Innovation';
  featured: boolean;
}

const services: Service[] = [
  {
    id: 'ai-business-intelligence',
    title: 'AI Business Intelligence',
    description: 'Transform your data into actionable insights with advanced AI algorithms and machine learning.',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-500/20 to-pink-500/20',
    features: ['Predictive Analytics', 'Machine Learning', 'Natural Language Processing', 'Real-time Insights'],
    href: '/services/ai-business-intelligence',
    category: 'AI',
    featured: true
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Streamline your development and operations with modern cloud infrastructure and automation.',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', '24/7 Monitoring'],
    href: '/services/cloud-devops',
    category: 'Cloud',
    featured: true
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Protect your digital assets with comprehensive security measures and threat intelligence.',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    gradient: 'from-green-500/20 to-emerald-500/20',
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training'],
    href: '/services/cybersecurity',
    category: 'Security',
    featured: true
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin Platform',
    description: 'Create virtual replicas of your physical systems for simulation and optimization.',
    icon: Globe,
    color: 'from-orange-500 to-red-500',
    gradient: 'from-orange-500/20 to-red-500/20',
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Maintenance', 'Performance Optimization'],
    href: '/services/digital-twin',
    category: 'Innovation',
    featured: true
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & BI',
    description: 'Unlock the power of your data with advanced analytics and business intelligence tools.',
    icon: Database,
    color: 'from-indigo-500 to-purple-500',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    features: ['Data Warehousing', 'Business Intelligence', 'Data Visualization', 'Advanced Reporting'],
    href: '/services/data-analytics',
    category: 'AI',
    featured: false
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure',
    description: 'Build robust and scalable technology foundations for your business growth.',
    icon: Cpu,
    color: 'from-gray-500 to-slate-500',
    gradient: 'from-gray-500/20 to-slate-500/20',
    features: ['Network Design', 'Server Management', 'Storage Solutions', 'Backup & Recovery'],
    href: '/services/it-infrastructure',
    category: 'Infrastructure',
    featured: false
  }
];

const categories = [
  { id: 'all', name: 'All Services', icon: Rocket },
  { id: 'AI', name: 'AI & Machine Learning', icon: Brain },
  { id: 'Cloud', name: 'Cloud & DevOps', icon: Cloud },
  { id: 'Security', name: 'Cybersecurity', icon: Shield },
  { id: 'Infrastructure', name: 'IT Infrastructure', icon: Cpu },
  { id: 'Innovation', name: 'Innovation', icon: Zap }
];

export const ModernServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section className="py-20 bg-futuristic relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-zion-purple/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-zion-cyan/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-responsive relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                  : 'border-zion-slate-light/30 text-gray-300 hover:border-zion-cyan/50 hover:text-zion-cyan/70'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Services grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <ModernCard
                  variant={service.featured ? 'elevated' : 'default'}
                  className="h-full group cursor-pointer"
                  onClick={() => window.location.href = service.href}
                >
                  {/* Service header */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-center text-sm text-gray-400"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Featured badge */}
                  {service.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* CTA button */}
                  <div className="mt-auto">
                    <ModernButton
                      variant="outline"
                      size="sm"
                      fullWidth
                      onClick={() => window.location.href = service.href}
                      icon={<Target className="w-4 h-4" />}
                    >
                      Learn More
                    </ModernButton>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 opacity-0 rounded-2xl"
                    animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </ModernCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <ModernCard variant="glass" className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how our technology solutions can drive your success and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ModernButton
                size="lg"
                onClick={() => window.location.href = '/contact'}
                icon={<TrendingUp className="w-5 h-5" />}
              >
                Get Started
              </ModernButton>
              <ModernButton
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/services'}
              >
                View All Services
              </ModernButton>
            </div>
          </ModernCard>
        </motion.div>
      </div>
    </section>
  );
};