import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Database,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Lock,
  Cpu,
  Network,
  Server,
  Smartphone,
  Monitor,
  Rocket,
  Target,
  BarChart3,
  Leaf,
  Factory,
  Building,
  Car,
  Scale,
  Eye,
  Globe2,
  Atom,
  ServerCog,
  Clock,
  DollarSign
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  href: string;
  category: string;
  color: string;
  gradient: string;
  badge?: string;
  stats: {
    label: string;
    value: string;
    icon: React.ComponentType<any>;
  }[];
}

const services: Service[] = [
  {
    id: 'ai-business-intelligence',
    title: 'AI Business Intelligence',
    description: 'Transform your data into actionable insights with cutting-edge AI algorithms and machine learning models.',
    icon: Brain,
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Reporting'],
    href: '/services/ai-business-intelligence',
    category: 'Artificial Intelligence',
    color: 'zion-cyan',
    gradient: 'from-zion-cyan to-zion-blue',
    badge: 'Trending',
    stats: [
      { label: 'Accuracy', value: '95%+', icon: Target },
      { label: 'ROI', value: '450%', icon: TrendingUp },
      { label: 'Time Saved', value: '80%', icon: Clock }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Streamline your development and deployment processes with modern cloud infrastructure and automation.',
    icon: Cloud,
    features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code'],
    href: '/services/cloud-devops',
    category: 'Infrastructure',
    color: 'zion-blue',
    gradient: 'from-zion-blue to-zion-purple',
    badge: 'Popular',
    stats: [
      { label: 'Uptime', value: '99.99%', icon: Server },
      { label: 'Deploy Speed', value: '10x', icon: Rocket },
      { label: 'Cost Savings', value: '60%', icon: DollarSign }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Protect your digital assets with comprehensive security measures and threat intelligence.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management'],
    href: '/services/cybersecurity',
    category: 'Security',
    color: 'zion-purple',
    gradient: 'from-zion-purple to-zion-cyan',
    badge: 'Critical',
    stats: [
      { label: 'Threats Blocked', value: '99.9%', icon: Lock },
      { label: 'Response Time', value: '<5min', icon: Clock },
      { label: 'Compliance', value: '100%', icon: CheckCircle }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Unlock the power of your data with advanced analytics, visualization, and business intelligence tools.',
    icon: Database,
    features: ['Big Data Processing', 'Real-time Analytics', 'Data Visualization', 'Business Intelligence'],
    href: '/services/data-analytics',
    category: 'Analytics',
    color: 'zion-green',
    gradient: 'from-zion-green to-zion-cyan',
    stats: [
      { label: 'Data Processed', value: '1TB+', icon: Database },
      { label: 'Insights Generated', value: '1000+', icon: BarChart3 },
      { label: 'Decision Speed', value: '5x', icon: Zap }
    ]
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Modernize your business processes and technology stack for the digital age.',
    icon: Rocket,
    features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Technology Consulting'],
    href: '/services/digital-transformation',
    category: 'Consulting',
    color: 'zion-orange',
    gradient: 'from-zion-orange to-zion-red',
    stats: [
      { label: 'Efficiency Gain', value: '300%', icon: TrendingUp },
      { label: 'Cost Reduction', value: '40%', icon: DollarSign },
      { label: 'Time to Market', value: '50%', icon: Clock }
    ]
  },
  {
    id: 'iot-solutions',
    title: 'IoT Solutions',
    description: 'Connect and monitor your physical assets with intelligent IoT devices and platforms.',
    icon: Network,
    features: ['Sensor Networks', 'Edge Computing', 'Real-time Monitoring', 'Predictive Maintenance'],
    href: '/services/iot-solutions',
    category: 'Emerging Tech',
    color: 'zion-pink',
    gradient: 'from-zion-pink to-zion-purple',
    stats: [
      { label: 'Devices Connected', value: '10K+', icon: Network },
      { label: 'Data Points', value: '1M+', icon: Database },
      { label: 'Maintenance Cost', value: '-70%', icon: DollarSign }
    ]
  }
];

const categories = [
  'All',
  'Artificial Intelligence',
  'Infrastructure',
  'Security',
  'Analytics',
  'Consulting',
  'Emerging Tech'
];

export const ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-futuristic relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark opacity-90" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 bg-zion-cyan/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 bg-zion-purple/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container-responsive relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-full px-4 py-2 text-zion-cyan text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4" />
            Our Services
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive Technology Solutions
          </h2>
          
          <p className="text-xl text-zion-cyan/70 max-w-3xl mx-auto leading-relaxed">
            From cutting-edge AI to robust infrastructure, we provide end-to-end technology solutions 
            that drive innovation and business growth.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-zion-cyan/10 text-zion-cyan/70 hover:bg-zion-cyan/20 hover:text-zion-cyan border border-zion-cyan/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative h-full bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-${service.color}/20 text-${service.color} border border-${service.color}/30`}>
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 bg-gradient-to-br from-${service.color}/20 to-${service.color}/40 rounded-2xl flex items-center justify-center mb-6 border border-${service.color}/30`}
                >
                  <service.icon className={`w-8 h-8 text-${service.color}`} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-zion-cyan/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * idx }}
                        className="flex items-center gap-2 text-zion-cyan/60 text-sm"
                      >
                        <CheckCircle className={`w-4 h-4 text-${service.color}`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {service.stats.map((stat, idx) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 * idx }}
                        className="text-center"
                      >
                        <div className="text-lg font-bold text-zion-cyan">{stat.value}</div>
                        <div className="text-xs text-zion-cyan/50">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={service.href}
                    className={`group inline-flex items-center gap-2 text-${service.color} hover:text-${service.color}/80 font-medium transition-all duration-300`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-cyan/70 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can drive innovation, 
              efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 text-zion-cyan hover:text-zion-cyan/80 font-medium px-8 py-4 rounded-xl border border-zion-cyan/30 hover:border-zion-cyan/50 transition-all duration-300 backdrop-blur-sm"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};