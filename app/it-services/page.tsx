import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Code, 
  Cloud, 
  Shield, 
  Database, 
  Smartphone, 
  Globe, 
  Settings, 
  Layers,
  Server,
  Network,
  Monitor,
  HardDrive,
  Wifi,
  Lock,
  Key,
  Zap,
  Cpu,
  CircuitBoard,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Award,
  Headphones,
  MessageSquare,
  FileCheck,
  PieChart,
  Activity,
  Eye,
  MousePointer,
  Workflow,
  GitBranch,
  Terminal,
  Wrench,
  Rocket,
  Lightbulb,
  BookOpen,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  AlertCircle,
  Info,
  HelpCircle,
  X,
  Plus,
  Minus,
  Edit,
  Trash2,
  Copy,
  Share,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Filter,
  Sort,
  Grid,
  List,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  Move,
  Resize,
  Crop,
  Scissors,
  Eraser,
  Pen,
  Pencil,
  Brush,
  Highlighter,
  Marker,
  StickyNote,
  Bookmark,
  Tag,
  Hash,
  AtSign,
  Percent,
  Hash as NumberSign,
  DollarSign as Dollar,
  Euro,
  Pound,
  Yen,
  Rupee,
  Bitcoin,
  Ethereum,
  CreditCard as Card,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  TrendingUp as Trending,
  TrendingDown as TrendingDownIcon,
  BarChart3,
  PieChart as Pie,
  LineChart,
  AreaChart,
  ScatterChart,
  CandlestickChart,
  Gauge,
  Thermometer,
  Droplet,
  Wind,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudSleet,
  CloudWind,
  CloudSun,
  CloudMoon,
  CloudSunRain,
  CloudMoonRain,
  CloudSnowRain,
  CloudLightningRain,
  CloudDrizzleRain,
  CloudFogRain,
  CloudHailRain,
  CloudSleetRain,
  CloudWindRain,
  CloudSunRain as CloudSunRainIcon,
  CloudMoonRain as CloudMoonRainIcon,
  CloudSnowRain as CloudSnowRainIcon,
  CloudLightningRain as CloudLightningRainIcon,
  CloudDrizzleRain as CloudDrizzleRainIcon,
  CloudFogRain as CloudFogRainIcon,
  CloudHailRain as CloudHailRainIcon,
  CloudSleetRain as CloudSleetRainIcon,
  CloudWindRain as CloudWindRainIcon
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All IT Services', icon: Code, count: 20 },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server, count: 6 },
    { id: 'development', name: 'Development', icon: Code, count: 5 },
    { id: 'security', name: 'Security', icon: Shield, count: 4 },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud, count: 3 },
    { id: 'support', name: 'Support', icon: Headphones, count: 2 }
  ];

  const itServices = [
    {
      id: 1,
      name: 'Enterprise IT Infrastructure',
      description: 'Complete IT infrastructure setup and management for enterprise organizations.',
      category: 'infrastructure',
      icon: Server,
      price: 999,
      period: 'month',
      features: [
        'Server setup and configuration',
        'Network infrastructure design',
        'Data center management',
        'Backup and disaster recovery',
        'Performance monitoring',
        '24/7 technical support',
        'Security implementation',
        'Compliance management'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Reduce IT costs by 40%',
        'Improve system performance',
        'Ensure business continuity'
      ],
      rating: 4.9,
      clients: 300,
      status: 'popular',
      link: 'https://ziontechgroup.com/enterprise-it-infrastructure'
    },
    {
      id: 2,
      name: 'Cloud Migration Services',
      description: 'Seamless migration to cloud platforms with optimization and security.',
      category: 'cloud',
      icon: Cloud,
      price: 1299,
      period: 'month',
      features: [
        'Cloud strategy planning',
        'Application migration',
        'Data migration',
        'Security configuration',
        'Performance optimization',
        'Cost optimization',
        'Training and support',
        'Ongoing management'
      ],
      benefits: [
        'Reduce infrastructure costs by 60%',
        'Improve scalability',
        'Enhance security',
        'Increase flexibility'
      ],
      rating: 4.8,
      clients: 250,
      status: 'trending',
      link: 'https://ziontechgroup.com/cloud-migration'
    },
    {
      id: 3,
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      category: 'security',
      icon: Shield,
      price: 799,
      period: 'month',
      features: [
        'Security assessment',
        'Threat monitoring',
        'Firewall configuration',
        'Endpoint protection',
        'Email security',
        'Incident response',
        'Security training',
        'Compliance management'
      ],
      benefits: [
        'Prevent security breaches',
        'Meet compliance requirements',
        'Reduce security risks',
        'Protect sensitive data'
      ],
      rating: 4.9,
      clients: 400,
      status: 'popular',
      link: 'https://ziontechgroup.com/cybersecurity-solutions'
    },
    {
      id: 4,
      name: 'Web Development Services',
      description: 'Custom web applications and websites built with modern technologies.',
      category: 'development',
      icon: Globe,
      price: 1799,
      period: 'month',
      features: [
        'Custom web applications',
        'Responsive design',
        'E-commerce solutions',
        'CMS development',
        'API integration',
        'Performance optimization',
        'SEO optimization',
        'Maintenance and support'
      ],
      benefits: [
        'Increase online presence',
        'Improve user experience',
        'Boost conversion rates',
        'Scale with business growth'
      ],
      rating: 4.7,
      clients: 500,
      status: 'trending',
      link: 'https://ziontechgroup.com/web-development'
    },
    {
      id: 5,
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      category: 'development',
      icon: Smartphone,
      price: 2499,
      period: 'month',
      features: [
        'Native iOS development',
        'Native Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Analytics integration',
        'Maintenance and updates'
      ],
      benefits: [
        'Reach mobile users',
        'Improve customer engagement',
        'Increase brand visibility',
        'Generate new revenue streams'
      ],
      rating: 4.8,
      clients: 200,
      status: 'popular',
      link: 'https://ziontechgroup.com/mobile-app-development'
    },
    {
      id: 6,
      name: 'Database Management',
      description: 'Comprehensive database design, optimization, and management services.',
      category: 'infrastructure',
      icon: Database,
      price: 899,
      period: 'month',
      features: [
        'Database design',
        'Performance optimization',
        'Data migration',
        'Backup and recovery',
        'Security implementation',
        'Monitoring and maintenance',
        'Query optimization',
        'Scalability planning'
      ],
      benefits: [
        'Improve data performance',
        'Ensure data integrity',
        'Reduce storage costs',
        'Enhance data security'
      ],
      rating: 4.6,
      clients: 350,
      status: 'trending',
      link: 'https://ziontechgroup.com/database-management'
    },
    {
      id: 7,
      name: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management solutions.',
      category: 'infrastructure',
      icon: Network,
      price: 1199,
      period: 'month',
      features: [
        'Network design and planning',
        'Router and switch configuration',
        'Wireless network setup',
        'VPN implementation',
        'Network monitoring',
        'Security configuration',
        'Performance optimization',
        '24/7 support'
      ],
      benefits: [
        'Improve network performance',
        'Enhance security',
        'Reduce downtime',
        'Support remote work'
      ],
      rating: 4.7,
      clients: 280,
      status: 'popular',
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      id: 8,
      name: 'DevOps Services',
      description: 'Streamline development and deployment with modern DevOps practices.',
      category: 'development',
      icon: Settings,
      price: 1599,
      period: 'month',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure as code',
        'Monitoring and logging',
        'Automated testing',
        'Deployment automation',
        'Performance optimization',
        'Team training'
      ],
      benefits: [
        'Faster deployments',
        'Reduce deployment errors',
        'Improve collaboration',
        'Scale development processes'
      ],
      rating: 4.8,
      clients: 180,
      status: 'trending',
      link: 'https://ziontechgroup.com/devops-services'
    },
    {
      id: 9,
      name: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services for your organization.',
      category: 'support',
      icon: Headphones,
      price: 299,
      period: 'month',
      features: [
        '24/7 technical support',
        'Remote assistance',
        'Hardware troubleshooting',
        'Software installation',
        'User training',
        'Ticket management',
        'Knowledge base',
        'SLA compliance'
      ],
      benefits: [
        'Reduce downtime',
        'Improve productivity',
        'Lower support costs',
        'Enhance user satisfaction'
      ],
      rating: 4.9,
      clients: 600,
      status: 'popular',
      link: 'https://ziontechgroup.com/it-support'
    },
    {
      id: 10,
      name: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions.',
      category: 'infrastructure',
      icon: HardDrive,
      price: 499,
      period: 'month',
      features: [
        'Automated backups',
        'Cloud storage integration',
        'Disaster recovery planning',
        'Data encryption',
        'Recovery testing',
        'Compliance management',
        'Monitoring and alerts',
        '24/7 support'
      ],
      benefits: [
        'Protect critical data',
        'Minimize downtime',
        'Meet compliance requirements',
        'Ensure business continuity'
      ],
      rating: 4.8,
      clients: 450,
      status: 'trending',
      link: 'https://ziontechgroup.com/data-backup-recovery'
    },
    {
      id: 11,
      name: 'API Development & Integration',
      description: 'Custom API development and third-party system integration services.',
      category: 'development',
      icon: GitBranch,
      price: 1299,
      period: 'month',
      features: [
        'Custom API development',
        'Third-party integrations',
        'API documentation',
        'Authentication setup',
        'Rate limiting',
        'Monitoring and analytics',
        'Version management',
        'Testing and optimization'
      ],
      benefits: [
        'Connect systems seamlessly',
        'Improve data flow',
        'Reduce manual processes',
        'Enable new capabilities'
      ],
      rating: 4.7,
      clients: 220,
      status: 'popular',
      link: 'https://ziontechgroup.com/api-development'
    },
    {
      id: 12,
      name: 'Cloud Security Management',
      description: 'Specialized security services for cloud environments and applications.',
      category: 'security',
      icon: Lock,
      price: 999,
      period: 'month',
      features: [
        'Cloud security assessment',
        'Identity and access management',
        'Data encryption',
        'Compliance monitoring',
        'Threat detection',
        'Security policies',
        'Incident response',
        'Regular audits'
      ],
      benefits: [
        'Secure cloud environments',
        'Meet compliance standards',
        'Prevent data breaches',
        'Reduce security risks'
      ],
      rating: 4.9,
      clients: 150,
      status: 'trending',
      link: 'https://ziontechgroup.com/cloud-security'
    },
    {
      id: 13,
      name: 'System Administration',
      description: 'Comprehensive system administration and server management services.',
      category: 'infrastructure',
      icon: Monitor,
      price: 699,
      period: 'month',
      features: [
        'Server administration',
        'User account management',
        'System monitoring',
        'Performance optimization',
        'Security updates',
        'Backup management',
        'Troubleshooting',
        'Documentation'
      ],
      benefits: [
        'Maintain system stability',
        'Improve performance',
        'Reduce downtime',
        'Ensure security'
      ],
      rating: 4.6,
      clients: 320,
      status: 'popular',
      link: 'https://ziontechgroup.com/system-administration'
    },
    {
      id: 14,
      name: 'Software Development',
      description: 'Custom software development for business applications and tools.',
      category: 'development',
      icon: Code,
      price: 1999,
      period: 'month',
      features: [
        'Custom software development',
        'Requirements analysis',
        'UI/UX design',
        'Quality assurance',
        'Testing and deployment',
        'Documentation',
        'Training and support',
        'Maintenance and updates'
      ],
      benefits: [
        'Streamline business processes',
        'Improve efficiency',
        'Reduce manual work',
        'Enable new capabilities'
      ],
      rating: 4.8,
      clients: 100,
      status: 'trending',
      link: 'https://ziontechgroup.com/software-development'
    },
    {
      id: 15,
      name: 'IT Consulting Services',
      description: 'Strategic IT consulting to optimize your technology infrastructure.',
      category: 'support',
      icon: Lightbulb,
      price: 399,
      period: 'month',
      features: [
        'IT strategy planning',
        'Technology assessment',
        'Cost optimization',
        'Vendor management',
        'Project planning',
        'Risk assessment',
        'Compliance review',
        'Training and guidance'
      ],
      benefits: [
        'Optimize IT investments',
        'Improve efficiency',
        'Reduce costs',
        'Align IT with business goals'
      ],
      rating: 4.7,
      clients: 180,
      status: 'popular',
      link: 'https://ziontechgroup.com/it-consulting'
    }
  ];

  const filteredServices = itServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'popular': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'trending': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'new': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 cyber-text">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Comprehensive IT Solutions for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            From infrastructure to development, we provide complete IT services that keep your business 
            running smoothly, securely, and efficiently with cutting-edge technology.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`quantum-card p-6 hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${service.id * 50}ms` }}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center energy-pulse">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                        <span className="text-gray-500">•</span>
                        <span className="text-sm text-gray-300">{service.clients} clients</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="text-xs text-gray-400 bg-slate-800/50 px-2 py-1 rounded">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${service.price}
                      <span className="text-sm text-gray-400">/{service.period}</span>
                    </div>
                    <div className="text-xs text-gray-500">Starting price</div>
                  </div>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button flex items-center space-x-2 px-4 py-2 text-sm"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 cyber-text">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join hundreds of businesses already using our IT services to improve efficiency, 
              reduce costs, and enhance security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;