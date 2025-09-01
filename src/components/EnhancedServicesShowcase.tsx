import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Users, 
  Zap,
  Shield,
  Globe,
  Brain,
  Rocket,
  Target,
  Award,
  Sparkles,
  Clock,
  DollarSign
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  price: string;
  rating: number;
  reviewCount: number;
  features: string[];
  benefits: string[];
  path: string;
  gradient: string;
  badge?: string;
  stats: { label: string; value: string; icon: React.ComponentType<any> }[];
}

export default function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: 25 },
    { id: 'ai', name: 'AI Solutions', icon: Brain, count: 8 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Globe, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'data', name: 'Data & Analytics', icon: TrendingUp, count: 4 },
    { id: 'iot', name: 'IoT & Edge', icon: Zap, count: 3 }
  ];

  const services: Service[] = [
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Transform your business data into actionable insights with our advanced AI-powered analytics platform.',
      icon: Brain,
      category: 'ai',
      price: 'From $2,500/month',
      rating: 4.9,
      reviewCount: 127,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
      benefits: ['45% faster decision making', '300% ROI improvement', '24/7 monitoring'],
      path: '/services/ai-business-intelligence',
      gradient: 'from-cyan-500 to-blue-600',
      badge: 'Most Popular',
      stats: [
        { label: 'Accuracy', value: '95%+', icon: Target },
        { label: 'ROI', value: '300%', icon: TrendingUp },
        { label: 'Clients', value: '500+', icon: Users }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps Solutions',
      description: 'Streamline your development and deployment processes with enterprise-grade cloud infrastructure.',
      icon: Globe,
      category: 'cloud',
      price: 'From $1,800/month',
      rating: 4.8,
      reviewCount: 89,
      features: ['CI/CD Pipelines', 'Auto-scaling', 'Monitoring', 'Security'],
      benefits: ['70% faster deployments', '99.99% uptime', 'Cost optimization'],
      path: '/services/cloud-devops',
      gradient: 'from-blue-500 to-purple-600',
      badge: 'Enterprise Ready',
      stats: [
        { label: 'Uptime', value: '99.99%', icon: Target },
        { label: 'Deployment', value: '70% faster', icon: Rocket },
        { label: 'Cost', value: '40% less', icon: DollarSign }
      ]
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Suite',
      description: 'Protect your digital assets with next-generation AI-powered threat detection and response.',
      icon: Shield,
      category: 'security',
      price: 'From $3,200/month',
      rating: 4.9,
      reviewCount: 156,
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Compliance'],
      benefits: ['90% threat reduction', 'Real-time protection', 'Zero false positives'],
      path: '/services/ai-cybersecurity-suite',
      gradient: 'from-red-500 to-orange-600',
      badge: 'Top Rated',
      stats: [
        { label: 'Threat Detection', value: '90%', icon: Target },
        { label: 'Response Time', value: '<5min', icon: Clock },
        { label: 'False Positives', value: '0%', icon: Award }
      ]
    },
    {
      id: 'data-analytics',
      title: 'Advanced Data Analytics',
      description: 'Unlock the power of your data with comprehensive analytics and visualization solutions.',
      icon: TrendingUp,
      category: 'data',
      price: 'From $2,100/month',
      rating: 4.7,
      reviewCount: 94,
      features: ['Data Mining', 'Visualization', 'Reporting', 'Integration'],
      benefits: ['60% better insights', 'Automated reporting', 'Real-time data'],
      path: '/services/data-analytics',
      gradient: 'from-green-500 to-emerald-600',
      stats: [
        { label: 'Insights', value: '60% better', icon: Target },
        { label: 'Processing', value: '10x faster', icon: Zap },
        { label: 'Accuracy', value: '98%', icon: Award }
      ]
    },
    {
      id: 'iot-edge-platform',
      title: 'IoT & Edge Computing',
      description: 'Build scalable IoT solutions with our edge computing platform for real-time data processing.',
      icon: Zap,
      category: 'iot',
      price: 'From $2,800/month',
      rating: 4.6,
      reviewCount: 67,
      features: ['Edge Processing', 'Device Management', 'Real-time Analytics', 'Security'],
      benefits: ['50% latency reduction', 'Scalable architecture', 'Cost efficiency'],
      path: '/services/edge-computing-platform',
      gradient: 'from-purple-500 to-pink-600',
      stats: [
        { label: 'Latency', value: '50% less', icon: Target },
        { label: 'Scalability', value: '10x', icon: TrendingUp },
        { label: 'Efficiency', value: '80%', icon: Award }
      ]
    },
    {
      id: 'quantum-ai-platform',
      title: 'Quantum AI Platform',
      description: 'Harness the power of quantum computing combined with AI for breakthrough solutions.',
      icon: Rocket,
      category: 'ai',
      price: 'From $5,000/month',
      rating: 4.9,
      reviewCount: 23,
      features: ['Quantum Algorithms', 'AI Integration', 'Optimization', 'Research Tools'],
      benefits: ['1000x faster processing', 'Breakthrough solutions', 'Future-proof technology'],
      path: '/services/quantum-ai-platform',
      gradient: 'from-indigo-500 to-purple-600',
      badge: 'Cutting Edge',
      stats: [
        { label: 'Speed', value: '1000x', icon: Target },
        { label: 'Innovation', value: 'Breakthrough', icon: Rocket },
        { label: 'Future', value: 'Ready', icon: Award }
      ]
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Discover cutting-edge technology solutions designed to transform your business and drive innovation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30'
              }`}
            >
              <category.icon className={`w-5 h-5 mr-2 ${
                selectedCategory === category.id ? 'text-white' : 'text-cyan-400'
              }`} />
              {category.name}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                selectedCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-cyan-500/20 text-cyan-400'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {filteredServices.map ( (service, index) => (<motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25 h-full">
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-medium backdrop-blur-sm">
                        <Sparkles className="w-3 h-3 mr-1" />
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                        <div className="flex items-center text-sm text-slate-400">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          {service.rating} ({service.reviewCount})
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {service.stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-3 bg-slate-700/50 rounded-lg">
                          <div className="text-lg font-bold text-cyan-400">{stat.value}</div>
                          <div className="text-xs text-slate-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link 
                      to={service.path}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can transform your business and drive innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300"
            >
              View All Services
            </Link>
            <a 
              href="tel:+13024640950"
              className="px - 8 py - 4 border border - zion - cyan text - zion - cyan font - semibold rounded - xl hover:bg - zion - cyan hover:text - white transition - all duration - 300"
            >
              Call + 1 302 464 0950
            </a>
          </div>
          <div role="button" className="mt - 6 text - zion - slate - light">
            Questions? Email < a href="mailto:kleber@ziontechgroup.com" className="text - zion - cyan hover:underline">kleber@ziontechgroup.com</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}