import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  Target, 
  Settings, 
  Users, 
  TrendingUp, 
  BarChart, 
  Shield, 
  Cloud, 
  Sparkles, 
  FileText, 
  Bot, 
  Globe, 
  Smartphone, 
  Database, 
  Lock, 
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
  Layers,
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

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Brain, count: 25 },
    { id: 'automation', name: 'AI Automation', icon: Settings, count: 8 },
    { id: 'analytics', name: 'AI Analytics', icon: BarChart, count: 6 },
    { id: 'content', name: 'AI Content', icon: FileText, count: 5 },
    { id: 'customer', name: 'Customer AI', icon: Users, count: 4 },
    { id: 'security', name: 'AI Security', icon: Shield, count: 2 }
  ];

  const aiServices = [
    {
      id: 1,
      name: 'AI Enterprise Solutions',
      description: 'Comprehensive AI implementation for enterprise organizations with custom models and integration.',
      category: 'automation',
      icon: Brain,
      price: 1500,
      period: 'month',
      features: [
        'Custom AI model development',
        'Enterprise integration',
        '24/7 technical support',
        'Scalable infrastructure',
        'Data security compliance',
        'Performance monitoring',
        'Custom training datasets',
        'API development'
      ],
      benefits: [
        'Increase efficiency by 300%',
        'Reduce operational costs by 70%',
        'Improve decision making',
        'Scale AI across organization'
      ],
      rating: 4.9,
      clients: 500,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-enterprise-solutions'
    },
    {
      id: 2,
      name: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation with personalization and optimization.',
      category: 'automation',
      icon: Target,
      price: 199,
      period: 'month',
      features: [
        'Campaign automation',
        'Customer segmentation',
        'Personalized content',
        'A/B testing optimization',
        'Multi-channel management',
        'Performance analytics',
        'Lead scoring',
        'Email automation'
      ],
      benefits: [
        'Increase conversion rates by 200%',
        'Reduce marketing costs by 50%',
        'Improve customer engagement',
        'Scale marketing efforts'
      ],
      rating: 4.8,
      clients: 1200,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-marketing-automation'
    },
    {
      id: 3,
      name: 'AI Business Process Automation',
      description: 'Intelligent automation of complex business processes with decision-making capabilities.',
      category: 'automation',
      icon: Settings,
      price: 399,
      period: 'month',
      features: [
        'Workflow automation',
        'Document processing',
        'Data extraction',
        'Exception handling',
        'Integration APIs',
        'Process monitoring',
        'Custom rules engine',
        'Reporting dashboard'
      ],
      benefits: [
        'Complete processes 50x faster',
        'Reduce manual errors by 95%',
        'Improve compliance',
        'Free up staff for strategic work'
      ],
      rating: 4.7,
      clients: 800,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-process-automation'
    },
    {
      id: 4,
      name: 'AI Data Analytics Platform',
      description: 'Advanced AI-powered analytics with predictive modeling and real-time insights.',
      category: 'analytics',
      icon: BarChart,
      price: 799,
      period: 'month',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Machine learning models',
        'Data visualization',
        'Automated reporting',
        'Anomaly detection',
        'Trend analysis',
        'Custom metrics'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify opportunities early',
        'Reduce analysis time by 80%',
        'Increase revenue by 25%'
      ],
      rating: 4.9,
      clients: 600,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-data-analytics'
    },
    {
      id: 5,
      name: 'AI Content Generation Suite',
      description: 'Comprehensive AI content creation for all marketing and communication needs.',
      category: 'content',
      icon: FileText,
      price: 199,
      period: 'month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email campaigns',
        'Product descriptions',
        'SEO optimization',
        'Multi-language support',
        'Brand voice training',
        'Content scheduling'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain consistent quality',
        'Scale content production',
        'Improve SEO rankings'
      ],
      rating: 4.6,
      clients: 1500,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-content-generation'
    },
    {
      id: 6,
      name: 'AI Customer Support System',
      description: 'Intelligent customer support with 24/7 AI chatbots and human-like interactions.',
      category: 'customer',
      icon: Users,
      price: 299,
      period: 'month',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Ticket management',
        'Knowledge base integration',
        'Sentiment analysis',
        'Escalation handling',
        'Performance analytics',
        'Custom training'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time',
        'Scale customer service',
        'Increase satisfaction scores'
      ],
      rating: 4.8,
      clients: 900,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-customer-support'
    },
    {
      id: 7,
      name: 'AI Sales Intelligence',
      description: 'AI-powered sales optimization with lead scoring and automated follow-ups.',
      category: 'automation',
      icon: TrendingUp,
      price: 499,
      period: 'month',
      features: [
        'Lead scoring',
        'Sales forecasting',
        'Pipeline management',
        'Automated follow-ups',
        'Competitor analysis',
        'Price optimization',
        'Customer insights',
        'ROI tracking'
      ],
      benefits: [
        'Increase sales by 150%',
        'Improve lead quality',
        'Reduce sales cycle time',
        'Boost conversion rates'
      ],
      rating: 4.7,
      clients: 700,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-sales-intelligence'
    },
    {
      id: 8,
      name: 'AI Healthcare Solutions',
      description: 'Advanced AI applications for healthcare including diagnostics and patient care.',
      category: 'automation',
      icon: Users,
      price: 1999,
      period: 'month',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Patient monitoring',
        'Drug discovery support',
        'Treatment recommendations',
        'Clinical decision support',
        'Compliance tracking',
        'Research analytics'
      ],
      benefits: [
        'Improve diagnostic accuracy',
        'Reduce medical errors',
        'Enhance patient outcomes',
        'Accelerate research'
      ],
      rating: 4.9,
      clients: 200,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-healthcare'
    },
    {
      id: 9,
      name: 'AI Financial Services',
      description: 'AI-powered financial solutions for trading, risk management, and fraud detection.',
      category: 'analytics',
      icon: TrendingUp,
      price: 1499,
      period: 'month',
      features: [
        'Algorithmic trading',
        'Risk assessment',
        'Fraud detection',
        'Credit scoring',
        'Portfolio optimization',
        'Market analysis',
        'Regulatory compliance',
        'Real-time monitoring'
      ],
      benefits: [
        'Increase trading profits',
        'Reduce financial risks',
        'Detect fraud early',
        'Optimize investments'
      ],
      rating: 4.8,
      clients: 300,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-fintech'
    },
    {
      id: 10,
      name: 'AI Cybersecurity Platform',
      description: 'Advanced AI security solutions with real-time threat detection and response.',
      category: 'security',
      icon: Shield,
      price: 999,
      period: 'month',
      features: [
        'Threat detection',
        'Anomaly analysis',
        'Automated response',
        'Vulnerability scanning',
        'Incident management',
        'Compliance monitoring',
        'Security analytics',
        '24/7 monitoring'
      ],
      benefits: [
        'Prevent security breaches',
        'Reduce response time',
        'Improve compliance',
        'Lower security costs'
      ],
      rating: 4.9,
      clients: 400,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-cybersecurity'
    },
    {
      id: 11,
      name: 'AI Cloud Infrastructure',
      description: 'Intelligent cloud management with automated scaling and optimization.',
      category: 'automation',
      icon: Cloud,
      price: 1299,
      period: 'month',
      features: [
        'Auto-scaling',
        'Resource optimization',
        'Cost management',
        'Performance monitoring',
        'Disaster recovery',
        'Load balancing',
        'Security management',
        'Compliance tracking'
      ],
      benefits: [
        'Reduce cloud costs by 40%',
        'Improve performance',
        'Ensure high availability',
        'Simplify management'
      ],
      rating: 4.7,
      clients: 350,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-cloud-infrastructure'
    },
    {
      id: 12,
      name: 'AI Mobile App Development',
      description: 'Create intelligent mobile applications with AI-powered features and capabilities.',
      category: 'automation',
      icon: Smartphone,
      price: 2499,
      period: 'month',
      features: [
        'AI-powered features',
        'Natural language processing',
        'Computer vision',
        'Predictive analytics',
        'Personalization',
        'Offline AI capabilities',
        'Cross-platform development',
        'Performance optimization'
      ],
      benefits: [
        'Create innovative apps',
        'Improve user experience',
        'Increase engagement',
        'Stand out from competition'
      ],
      rating: 4.8,
      clients: 150,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-mobile-development'
    },
    {
      id: 13,
      name: 'AI E-commerce Solutions',
      description: 'Revolutionize online stores with AI-powered personalization and automation.',
      category: 'automation',
      icon: Globe,
      price: 1799,
      period: 'month',
      features: [
        'Product recommendations',
        'Dynamic pricing',
        'Inventory optimization',
        'Customer segmentation',
        'Chatbot integration',
        'Search optimization',
        'Fraud prevention',
        'Analytics dashboard'
      ],
      benefits: [
        'Increase sales by 200%',
        'Improve customer experience',
        'Reduce cart abandonment',
        'Optimize operations'
      ],
      rating: 4.7,
      clients: 250,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-ecommerce'
    },
    {
      id: 14,
      name: 'AI Workflow Automation',
      description: 'Automate complex business workflows with intelligent decision-making capabilities.',
      category: 'automation',
      icon: Workflow,
      price: 599,
      period: 'month',
      features: [
        'Process automation',
        'Decision trees',
        'Exception handling',
        'Integration management',
        'Approval workflows',
        'Task assignment',
        'Progress tracking',
        'Custom triggers'
      ],
      benefits: [
        'Complete workflows 30x faster',
        'Reduce manual errors',
        'Improve consistency',
        'Free up resources'
      ],
      rating: 4.6,
      clients: 600,
      status: 'popular',
      link: 'https://ziontechgroup.com/ai-workflow-automation'
    },
    {
      id: 15,
      name: 'AI Data Visualization',
      description: 'Transform complex data into interactive, AI-powered visualizations and insights.',
      category: 'analytics',
      icon: PieChart,
      price: 399,
      period: 'month',
      features: [
        'Interactive dashboards',
        'Real-time updates',
        'Custom visualizations',
        'Data storytelling',
        'Automated insights',
        'Collaborative features',
        'Export capabilities',
        'Mobile optimization'
      ],
      benefits: [
        'Make data accessible',
        'Improve decision making',
        'Save analysis time',
        'Enhance presentations'
      ],
      rating: 4.8,
      clients: 400,
      status: 'trending',
      link: 'https://ziontechgroup.com/ai-data-visualization'
    }
  ];

  const filteredServices = aiServices.filter(service => 
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
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Comprehensive AI Solutions for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with our cutting-edge AI services. From automation to analytics, 
            we provide comprehensive AI solutions that drive growth, efficiency, and innovation.
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join hundreds of businesses already using our AI solutions to increase productivity, 
              reduce costs, and drive innovation.
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

export default AIServicesPage;