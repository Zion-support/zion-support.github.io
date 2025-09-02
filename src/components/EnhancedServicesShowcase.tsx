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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 12;

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

          </div>
        </motion.div>
      </div>
    </div>
  );
}

