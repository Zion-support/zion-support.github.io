import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  Cloud, 
  Globe, 
  Lock, 
  Cpu,
  Database,
  Network,
  Smartphone,
  Rocket,
  Target,
  TrendingUp,
  CheckCircle,
  Users,
  Clock,
  Search
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  features: string[];
  price: string;
  path: string;
  gradient: string;
  popular?: boolean;
  new?: boolean;
}

const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI-Powered Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
    icon: Brain,
    category: 'Artificial Intelligence',
    features: ['Machine Learning', 'Predictive Analytics', 'Process Automation', 'Real-time Insights'],
    price: 'From $2,999/month',
    path: '/ai-solutions',
    gradient: 'from-cyan-500 to-blue-600',
    popular: true
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Build, deploy, and scale your applications with enterprise-grade cloud infrastructure.',
    icon: Cloud,
    category: 'Infrastructure',
    features: ['Cloud Migration', 'DevOps Automation', 'Container Orchestration', '24/7 Monitoring'],
    price: 'From $1,999/month',
    path: '/services/cloud',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your digital assets with advanced security protocols and threat detection.',
    icon: Shield,
    category: 'Security',
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance'],
    price: 'From $3,499/month',
    path: '/services/cybersecurity',
    gradient: 'from-red-500 to-orange-600',
    new: true
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Modernize your business processes and technology stack for the digital age.',
    icon: Rocket,
    category: 'Consulting',
    features: ['Process Optimization', 'Technology Assessment', 'Change Management', 'ROI Tracking'],
    price: 'From $5,999/month',
    path: '/services/digital-transformation',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    id: 'iot-edge',
    title: 'IoT & Edge Computing',
    description: 'Connect and manage devices at the edge with intelligent IoT solutions.',
    icon: Cpu,
    category: 'Emerging Tech',
    features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Scalable Architecture'],
    price: 'From $4,999/month',
    path: '/services/iot-edge',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    description: 'Explore the future of computing with quantum technology solutions.',
    icon: Network,
    category: 'Future Tech',
    features: ['Quantum Algorithms', 'Optimization Problems', 'Research & Development', 'Proof of Concept'],
    price: 'From $15,999/month',
    path: '/services/quantum-computing',
    gradient: 'from-indigo-500 to-purple-600',
    new: true
  }
];

const categories = [
  { name: 'All Services', value: 'all', count: services.length },
  { name: 'AI & ML', value: 'ai', count: services.filter(s => s.category === 'Artificial Intelligence').length },
  { name: 'Infrastructure', value: 'infrastructure', count: services.filter(s => s.category === 'Infrastructure').length },
  { name: 'Security', value: 'security', count: services.filter(s => s.category === 'Security').length },
  { name: 'Consulting', value: 'consulting', count: services.filter(s => s.category === 'Consulting').length },
  { name: 'Emerging Tech', value: 'emerging', count: services.filter(s => s.category === 'Emerging Tech').length },
  { name: 'Future Tech', value: 'future', count: services.filter(s => s.category === 'Future Tech').length }
];

export default function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [hoveredService, setHoveredService] = React.useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => {
        if (selectedCategory === 'ai') return service.category === 'Artificial Intelligence';
        if (selectedCategory === 'infrastructure') return service.category === 'Infrastructure';
        if (selectedCategory === 'security') return service.category === 'Security';
        if (selectedCategory === 'consulting') return service.category === 'Consulting';
        if (selectedCategory === 'emerging') return service.category === 'Emerging Tech';
        if (selectedCategory === 'future') return service.category === 'Future Tech';
        return true;
      });

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover our comprehensive range of technology solutions designed to transform your business and drive innovation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 border border-slate-700/50'
              }`}
            >
              {category.name}
              <span className="ml-2 px-2 py-1 bg-slate-700/50 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 px-4 py-2 bg-zion-slate-dark/50 border border-zion-slate/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-zion-slate-light" />
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Badges */}
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                    {service.category}
                  </span>
                  <div className="flex gap-2">
                    {service.popular && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full font-medium">
                        Popular
                      </span>
                    )}
                    {service.new && (
                      <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full font-medium">
                        New
                      </span>
                    )}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-slate-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="text-lg font-bold text-cyan-400 mb-4">
                  {service.price}
                </div>

                {/* CTA Button */}
                <Link 
                  to={service.path}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already leveraging our cutting-edge technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}