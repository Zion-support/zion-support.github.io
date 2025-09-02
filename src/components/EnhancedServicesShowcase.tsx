import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Zap, Rocket, Atom, Cpu, Database, 
  Network, Smartphone, Lock, BarChart3, Code, Server, 
  Cpu as ChipIcon, Wifi, Globe2, Bot, Workflow, Eye, Sparkles,
  Star, TrendingUp, Users, Award, CheckCircle, ArrowRight,
  Search, Filter, DollarSign, Clock, Zap as ZapIcon
} from 'lucide-react';
import { LoadingSkeleton, ServicesGridSkeleton } from './ui/loading-skeleton';

interface Service {

  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
  };
  features: string[];

  marketSize: string;
  growthRate: string;
  color: string;
  link: string;
  popular?: boolean;
  new?: boolean;
}

const services: Service[] = [
  {
    id: 'ai-autonomous-business',
    icon: Brain,
    title: 'AI Autonomous Business Operations',
    description: 'Automate complex business processes with intelligent AI agents',
    category: 'AI & Machine Learning',
    price: { monthly: 8500, yearly: 85000, currency: 'USD' },
    features: ['Self-learning agents', 'Multi-agent collaboration', '90% process automation', 'Real-time optimization'],
    marketSize: '$45 billion by 2030',
    growthRate: '+35% annually',
    color: 'from-purple-500 to-pink-500',
    link: '/services/ai-autonomous-business-operations',
    popular: true
  },
  {
    id: 'quantum-ai-optimization',
    icon: Atom,
    title: 'Quantum AI Optimization Platform',
    description: 'Quantum-classical hybrid algorithms for unprecedented optimization',
    category: 'Quantum Computing',
    price: { monthly: 15000, yearly: 150000, currency: 'USD' },
    features: ['Quantum-classical hybrid', '1000x faster processing', 'Real-time optimization', 'Advanced algorithms'],
    marketSize: '$65 billion by 2030',
    growthRate: '+40% annually',
    color: 'from-blue-500 to-indigo-500',
    link: '/services/quantum-ai-optimization',
    new: true
  },
  {
    id: 'cloud-infrastructure',
    icon: Cloud,
    title: 'Cloud Infrastructure & DevOps',
    description: 'Scalable cloud solutions with automated deployment and management',
    category: 'Cloud & Infrastructure',
    price: { monthly: 12000, yearly: 120000, currency: 'USD' },
    features: ['Auto-scaling', 'CI/CD pipelines', 'Infrastructure as code', '24/7 monitoring'],
    marketSize: '$1.5 trillion by 2030',
    growthRate: '+25% annually',
    color: 'from-cyan-500 to-blue-500',
    link: '/services/cloud-infrastructure-devops'
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced security solutions for modern threat landscapes',
    category: 'Cybersecurity',
    price: { monthly: 8500, yearly: 85000, currency: 'USD' },
    features: ['99.9% threat detection', 'Real-time response', 'Zero-day protection', 'Compliance ready'],
    marketSize: '$300 billion by 2030',
    growthRate: '+30% annually',
    color: 'from-red-500 to-orange-500',
    link: '/services/ai-cybersecurity'
  },
  {
    id: 'digital-transformation',
    icon: Zap,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation consulting and implementation',
    category: 'Consulting',
    price: { monthly: 15000, yearly: 150000, currency: 'USD' },
    features: ['Strategy development', 'Process optimization', 'Technology integration', 'Change management'],
    marketSize: '$500 billion by 2030',
    growthRate: '+20% annually',
    color: 'from-green-500 to-emerald-500',
    link: '/services/digital-transformation'
  },
  {
    id: 'edge-computing',
    icon: ChipIcon,
    title: 'Edge Computing Platform',
    description: 'Real-time data processing at the edge for ultra-low latency',
    category: 'Emerging Technologies',
    price: { monthly: 9500, yearly: 95000, currency: 'USD' },
    features: ['90% latency reduction', 'Real-time processing', 'Edge AI capabilities', 'Global deployment'],
    marketSize: '$50 billion by 2030',
    growthRate: '+45% annually',
    color: 'from-indigo-500 to-purple-500',
    link: '/services/edge-computing'
  }
];

const categories = ['All', 'AI & Machine Learning', 'Quantum Computing', 'Cloud & Infrastructure', 'Cybersecurity', 'Consulting', 'Emerging Technologies'];

export function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'marketSize'>('name');
  const [isLoading, setIsLoading] = useState(false);

  const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = service.price.monthly >= priceRange[0] && service.price.monthly <= priceRange[1];
      
      return matchesCategory && matchesSearch && matchesPrice;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'marketSize':
          return parseInt(a.marketSize.replace(/[^0-9]/g, '')) - parseInt(b.marketSize.replace(/[^0-9]/g, ''));

        default:
          return a.title.localeCompare(b.title);
      }
    });

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export const EnhancedServicesShowcase: React.FC = (): JSX.Element => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const services = [
    {
      title: 'AI Workflow Automation',
      description: 'Transform business operations with intelligent automation that learns and scales',
      price: 'From $299/month',
      path: '/services/ai-workflow-automation',
              icon: GitFork,
      category: 'AI & Automation',
      features: ['Process optimization', 'AI-powered workflows', 'Real-time analytics', 'Scalable automation'],
      benefits: ['Reduce manual work by 70-85%', 'Improve efficiency by 60%', 'Cut operational costs by 40-50%'],
      color: 'from-cyan-500 to-blue-600',
      glowColor: 'cyan'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered threat detection and prevention',
      price: 'From $499/month',
      path: '/services/ai-cybersecurity',
      icon: Shield,
      category: 'Security',
      features: ['Threat detection', 'Behavioral analytics', 'Automated response', 'Compliance monitoring'],
      benefits: ['Detect threats 10x faster', 'Reduce false positives by 85%', 'Prevent 99.9% of attacks'],
      color: 'from-purple-500 to-indigo-600',
      glowColor: 'purple'
    },
    {
      title: 'Quantum Computing',
      description: 'Solve complex problems 1000x faster with quantum computing solutions',
      price: 'From $2,999/month',
      path: '/services/quantum-computing-solutions',
      icon: Atom,
      category: 'Quantum Tech',
      features: ['Quantum algorithms', 'ML acceleration', 'Financial modeling', 'Drug discovery'],
      benefits: ['1000x faster computation', 'Breakthrough discoveries', 'Unbreakable encryption'],
      color: 'from-green-500 to-emerald-600',
      glowColor: 'green'
    },
    {
      title: 'IoT Edge Computing',
      description: 'Process data at the edge and reduce latency by 90%',
      price: 'From $399/month',
      path: '/services/iot-edge-computing',
      icon: Cpu,
      category: 'IoT & Edge',
      features: ['Edge processing', 'Device management', 'Real-time analytics', 'AI at the edge'],
      benefits: ['Reduce latency by 90%', 'Cut bandwidth costs by 60-80%', 'Scale to millions of devices'],
      color: 'from-orange-500 to-red-600',
      glowColor: 'orange'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Build, deploy, and scale with enterprise-grade cloud infrastructure',
      price: 'From $799/month',
      path: '/services/cloud-devops',
      icon: Cloud,
      category: 'Infrastructure',
      features: ['Cloud migration', 'CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting'],
      benefits: ['Faster deployments', 'Improved reliability', 'Cost optimization', 'Scalability'],
      color: 'from-blue-500 to-cyan-600',
      glowColor: 'blue'
    },
    {
      title: 'AI Sales Copilot',
      description: 'Automate sales processes and boost conversion rates with AI',
      price: 'From $1,500/month',
      path: '/services/ai-sales-copilot',
      icon: Brain,;
      category: 'Sales AI',;
      features: ['Lead scoring', 'CRM automation', 'Sales analytics', 'Predictive insights'],;
      benefits: ['Reduce admin time by 40-60%', 'Improve conversion rates', 'Shorten sales cycles'],;
      color: 'from-pink-500 to-rose-600',;
      glowColor: 'pink';
    };
  ];
  const containerVariants = {
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0.1;
      };
    };
  };
const categories = ['All', 'AI & Analytics', 'Quantum Computing', 'Cybersecurity', 'Cloud & DevOps', 'Data & Analytics', 'Blockchain & Web3'];

export default function EnhancedServicesShowcase(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredService, setHoveredService] = useState<any>(null);

  const filteredServices = selectedCategory === 'All'
    ? services: anyanyanyanyanyanyanyanyanyanyanyanyanyanyservices.filter(service               => service.category === selectedCategory);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  return (
    <section className = "py-24 bg-futuristic-enhanced relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial = {
  { opacity: 0,
  y: 20 
}}
          whileInView = {
  { opacity: 1,
  y: 0 
}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Cutting-Edge Technology Solutions
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
            Transform your business with our innovative AI-powered services designed for the future
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport = {
  { once: anyanyanyanyanyanyanyanyanyanyanyanyanyanytrue,
  margin: "-100px" 
}}
        >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          {services.map((service, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              <div className="relative bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-xl p-8 rounded-3xl border border-zion-cyan/20 hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 hover:transform hover:scale-105">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-semibold rounded-full border border-zion-cyan/30 mb-2">
                        {service.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                    <div className="flex items-center text-zion-slate-light text-sm">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>5.0</span>
                    </div>
                  </div>
                </div>
                {/* Description */}
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-3">Business Impact:</h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-zion-slate-light text-sm">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
                {/* CTA Button */}
                <Link
                  to={service.path}
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold text-center block hover:shadow-lg hover:shadow-${service.glowColor}-500/25 transition-all duration-300 group-hover:scale-105`}
                  Explore Service
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
=======
    return filtered;
  }, [selectedCategory, searchQuery, priceRange, sortBy]);

  const handleServiceClick = (service: Service) => {
    // Simulate loading for demo purposes
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  if (isLoading) {
    return <ServicesGridSkeleton />;
  }

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Revolutionary Technology Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Transform your business with cutting-edge AI, quantum computing, and cloud solutions
          </motion.p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Price Range and Sort */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Price Range:</span>
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-32"
              />
              <span className="text-sm text-gray-600">${priceRange[1].toLocaleString()}</span>
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="marketSize">Sort by Market Size</option>
            </select>
          </div>
        </div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Badges */}
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    {service.popular && (
                      <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                        Popular
                      </span>
                    )}
                    {service.new && (
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        New
                      </span>
                    )}
                  </div>

                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <service.icon className="w-8 h-8" />
                      <div className="text-right">
                        <div className="text-2xl font-bold">${service.price.monthly.toLocaleString()}</div>
                        <div className="text-sm opacity-90">/month</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Market Info */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{service.growthRate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe2 className="w-4 h-4" />
                        <span>{service.marketSize}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}

                    <Link
                      to={service.link}
                      onClick={() => handleServiceClick(service)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 group-hover:shadow-lg"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl opacity-90 mb-6">
              Let's discuss how our revolutionary services can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

