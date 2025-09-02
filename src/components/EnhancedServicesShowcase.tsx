import React from 'react.ts';
import { motion               } from 'framer-motion.ts';
import { Link               } from 'react-router-dom.ts';
import { Brain,
  Shield,
  Cloud,
  Database,
  Globe,
  Users,
  Target,
  DollarSign,
  Clock,
  CheckCircle,
  Search
               } from 'lucide-react.ts';

interface Service {















  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  marketSize: string;
  path: string;
category: string;













}

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => (
  <motion.div
    initial = {
  { opacity: 0,
  y: 20 

}}
    whileInView = {
  { opacity: 1,
  y: 0 

}}
    viewport={{ once: true }}
    transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
    className="group relative"
  >
    <motion.div
      className="relative bg-zion-slate-dark/50 backdrop-blur-lg border border-zion-slate/30 rounded-3xl p-8 h-full hover:border-zion-cyan/50 transition-all duration-300 cursor-pointer"
      whileHover = {
  { 
        y: -5,
        borderColor: 'rgba(34, 221, 210,
  0.5)'
      

}}
      transition={{ duration: 0.3 }}
    >
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      {/* Icon */}
      <motion.div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} bg-opacity-20 flex items-center justify-center mb-6 relative z-10`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <service.icon className="w-8 h-8 text-white" />
      </motion.div>

      {/* Category badge */}
      <div className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full mb-4">
        {service.category}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <div className="space-y-2 mb-6">
        {service.features.map((feature, featureIndex) => (
          <motion.div
            key={feature}
            className="flex items-center text-sm text-gray-300"
            initial = {
  { opacity: 0,
  x: -20 

}}
            animate = {
  { opacity: 1,
  x: 0 

}}
            transition={{ delay: featureIndex * 0.1 }}
          >
            <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
            {feature}
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-2xl font-bold text-zion-cyan">{service.price}</p>
          <p className="text-xs text-gray-400">Monthly</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-zion-purple">{service.roi}</p>
          <p className="text-xs text-gray-400">ROI</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-zion-blue">{service.marketSize}</p>
          <p className="text-xs text-gray-400">Market</p>
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        className="relative z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to={service.path}
          className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 border border-zion-cyan/30"
        >
          Learn More
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </motion.div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.div>;
  </motion.div>;
);

const services: Service[] = [
  {
    id: 'ai-analytics',
    title: 'AI Predictive Analytics Engine',
    description: 'Advanced machine learning algorithms for real-time business insights and forecasting',
    icon: Brain,
    gradient: 'from-zion-cyan to-zion-purple',
    features['95% prediction accuracy', 'Real-time processing', 'Custom model training', 'Multi-dimensional forecasting'],
    price: '$12,999/month',
    roi: '450% ROI',
    marketSize: '$23.1B Market',
    path: '/services/ai-business-intelligence',
    category: 'AI & Analytics'
  },
  {
    id: 'quantum-optimization',
    title: 'Quantum Optimization Suite',
    description: 'Solve complex optimization problems with hybrid quantum-classical computing',
    icon: Zap,
    gradient: 'from-zion-purple to-zion-blue',
    features['Quantum advantage', 'Custom algorithms', 'Hybrid computing', '800% ROI'],
    price: '$25,999/month',
    roi: '800% ROI',
    marketSize: '$1.8B Market',
    path: '/services/quantum-computing',
    category: 'Quantum Computing'
  },
  {
    id: 'zero-trust-security',
    title: 'Zero Trust Security Platform',
    description: 'Continuous verification with AI behavioral analysis and real-time threat detection',
    icon: Shield,
    gradient: 'from-zion-blue to-zion-cyan',
    features['Continuous verification', 'AI behavioral analysis', 'Real-time detection', '600% ROI'],
    price: '$18,999/month',
    roi: '600% ROI',
    marketSize: '$18.5B Market',
    path: '/services/cybersecurity',
    category: 'Cybersecurity'
  },
  {
    id: 'multi-cloud',
    title: 'Multi-Cloud Orchestration',
    description: 'Unified management across AWS, Azure, and Google Cloud with cost optimization',
    icon: Cloud,
    gradient: 'from-zion-cyan to-zion-blue',
    features['Unified management', 'Cost optimization', 'Performance monitoring', '700% ROI'],
    price: '$15,999/month',
    roi: '700% ROI',
    marketSize: '$12.8B Market',
    path: '/services/cloud-devops',
    category: 'Cloud & DevOps'
  },
  {
    id: 'data-streaming',
    title: 'Real-Time Data Streaming',
    description: 'Process millions of events per second with AI analytics and enterprise scalability',
    icon: Database,
    gradient: 'from-zion-purple to-zion-cyan',
    features['Millions of events/sec', 'AI analytics', 'Low latency', '500% ROI'],
    price: '$13,999/month',
    roi: '500% ROI',
    marketSize: '$15.2B Market',
    path: '/services/data-analytics',
    category: 'Data & Analytics'
  },
  {
    id: 'blockchain-enterprise',
    title: 'Enterprise Blockchain Platform',
    description: 'AI-powered governance and smart contracts with multi-chain support',
    icon: Globe,
    gradient: 'from-zion-blue to-zion-purple',
    features['AI governance', 'Multi-chain support', 'Smart contracts', '600% ROI'],
    price: '$22,999/month',
    roi: '600% ROI',
    marketSize: '$19.9B Market',
    path: '/services/blockchain',
    category: 'Blockchain & Web3'
  }
];

const categories = ['All', 'AI & Analytics', 'Quantum Computing', 'Cybersecurity', 'Cloud & DevOps', 'Data & Analytics', 'Blockchain & Web3'];

export default function EnhancedServicesShowcase(...args[]: any):  {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 12;

  // Combine all services
  const allServices: Service[] = [
    ...enhancedInnovativeServices2025,
    ...enhancedITandAIServices2025
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesInnovation = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
      
      // Price range filtering
      let matchesPrice = true;
      if (selectedPriceRange !== 'all') {
        const price = service.price;
        switch (selectedPriceRange) {
          case 'under-1000':
            matchesPrice = price < 1000;
            break;
          case '1000-5000':
            matchesPrice = price >= 1000 && price <= 5000;
            break;
          case '5000-10000':
            matchesPrice = price > 5000 && price <= 10000;
            break;
          case 'over-10000':
            matchesPrice = price > 10000;
            break;
        }
      }
      
      // Delivery time filtering
      let matchesDelivery = true;
      if (selectedDeliveryTime !== 'all') {
        const delivery = service.estimatedDelivery.toLowerCase();
        switch (selectedDeliveryTime) {
          case 'under-1-week':
            matchesDelivery = delivery.includes('1 week') || delivery.includes('3-5 days');
            break;
          case '1-2-weeks':
            matchesDelivery = delivery.includes('2 weeks') || delivery.includes('1-2 weeks');
            break;
          case '2-4-weeks':
            matchesDelivery = delivery.includes('4 weeks') || delivery.includes('2-4 weeks');
            break;
          case 'over-4-weeks':
            matchesDelivery = delivery.includes('6 weeks') || delivery.includes('8 weeks') || delivery.includes('12 weeks');
            break;
        }
      }
      
      return matchesSearch && matchesCategory && matchesInnovation && matchesPrice && matchesDelivery;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'innovation-high':
          return b.innovationLevel.localeCompare(a.innovationLevel);
        case 'delivery-fast':
          return a.estimatedDelivery.localeCompare(b.estimatedDelivery);
        case 'roi-high':
          return b.roi.localeCompare(a.roi);
        case 'roi':
          return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
        case 'name':
        default:
          return a.title.localeCompare(b.title);
      }
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedInnovationLevel, selectedPriceRange, selectedDeliveryTime, sortBy]);

  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  const innovationLevels = ['all', ...Array.from(new Set(allServices.map(s => s.innovationLevel)))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under-1000', label: 'Under $1,000' },
    { value: '1000-5000', label: '$1,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: 'over-10000', label: 'Over $10,000' }
  ];
  const deliveryTimes = [
    { value: 'all', label: 'All Delivery Times' },
    { value: 'under-1-week', label: 'Under 1 Week' },
    { value: '1-2-weeks', label: '1-2 Weeks' },
    { value: '2-4-weeks', label: '2-4 Weeks' },
    { value: 'over-4-weeks', label: 'Over 4 Weeks' }
  ];

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Revolutionary': return 'text-purple-400 border-purple-400';
      case 'Cutting-edge': return 'text-blue-400 border-blue-400';
      case 'Advanced': return 'text-green-400 border-green-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'enterprise': return 'bg-red-100 text-red-800';
      case 'premium': return 'bg-blue-100 text-blue-800';
      case 'standard': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl font-semibold text-purple-300 mb-4">
              Innovative Micro SAAS, IT & AI Services 2030
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge technology solutions. From AI-powered platforms to quantum-ready infrastructure, 
              we deliver innovative services that drive growth, efficiency, and competitive advantage.
            </p>
            
            {/* Contact Information */}
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-purple-400 mb-2" />
                  <p className="text-white font-semibold">Phone</p>
                  <a href="tel:+13024640950" className="text-purple-300 hover:text-purple-200 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-purple-400 mb-2" />
                  <p className="text-white font-semibold">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-purple-400 mb-2" />
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-purple-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

}}
=======
export const EnhancedServicesShowcase: React.FC = (): JSX.Element => {
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
          {services.map((service, index)               => (
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
        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <motion.div
                  className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-full overflow-hidden"
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    borderColor: 'rgba(34, 221, 210, 0.5)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} bg-opacity-20 flex items-center justify-center mb-6 relative z-10`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  {/* Category badge */}
                  <div className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full mb-4">
                    {service.category}
                  </div>
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center text-sm text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-zion-cyan">{service.price}</p>
                      <p className="text-xs text-gray-400">Monthly</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-zion-purple">{service.roi}</p>
                      <p className="text-xs text-gray-400">ROI</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-zion-blue">{service.marketSize}</p>
                      <p className="text-xs text-gray-400">Market</p>
                    </div>
                  </div>
                  {/* CTA Button */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={service.path}
                      className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 border border-zion-cyan/30"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </motion.div>
                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial = {
  { opacity: 0,
  y: 20 
}}
          whileInView = {
  { opacity: 1,
  y: 0 
}}
          viewport={{ once: true }}
          transition = {
  { duration: anyanyanyanyanyanyanyanyanyanyanyanyanyany0.6,
  delay: 0.3 
}}
        >
          {categories.map((category, index)               => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial = {
  { opacity: 0,
  y: 20 
}}
              whileInView = {
  { opacity: 1,
  y: 0 
}}
              viewport={{ once: true }}
              transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              Call +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-slate-400">
            <p>Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;