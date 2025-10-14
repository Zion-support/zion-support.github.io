import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Code, 
  Cloud, 
  Wifi, 
  Shield, 
  Users, 
  BarChart3, 
  Smartphone, 
  Database, 
  Settings, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  TrendingUp,
  Clock,
  Award,
  Globe,
  Lock,
  Cpu,
  Layers,
  Target,
  Rocket,
  Lightbulb,
  PieChart,
  FileText,
  MessageSquare,
  Bot,
  Workflow,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Monitor,
  Server,
  Network,
  Smartphone as Mobile,
  Laptop,
  Tablet,
  Headphones,
  Camera,
  Mic,
  Video,
  Image,
  File,
  Folder,
  Archive,
  Trash2,
  Edit,
  Copy,
  Share,
  Link,
  ExternalLink,
  ChevronRight,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  User,
  UserCheck,
  UserPlus,
  UserX,
  Users2,
  UserCircle,
  UserCog,
  UserSearch,
  UserMinus,
  UserEdit,
  UserShield,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserEdit2,
  UserShield2,
  UserSearch2,
  UserCog2,
  UserCircle2,
  Users3,
  UserCheck3,
  UserX3,
  UserPlus3,
  UserMinus3,
  UserEdit3,
  UserShield3,
  UserSearch3,
  UserCog3,
  UserCircle3,
  Users4,
  UserCheck4,
  UserX4,
  UserPlus4,
  UserMinus4,
  UserEdit4,
  UserShield4,
  UserSearch4,
  UserCog4,
  UserCircle4,
  Users5,
  UserCheck5,
  UserX5,
  UserPlus5,
  UserMinus5,
  UserEdit5,
  UserShield5,
  UserSearch5,
  UserCog5,
  UserCircle5,
  Users6,
  UserCheck6,
  UserX6,
  UserPlus6,
  UserMinus6,
  UserEdit6,
  UserShield6,
  UserSearch6,
  UserCog6,
  UserCircle6,
  Users7,
  UserCheck7,
  UserX7,
  UserPlus7,
  UserMinus7,
  UserEdit7,
  UserShield7,
  UserSearch7,
  UserCog7,
  UserCircle7,
  Users8,
  UserCheck8,
  UserX8,
  UserPlus8,
  UserMinus8,
  UserEdit8,
  UserShield8,
  UserSearch8,
  UserCog8,
  UserCircle8,
  Users9,
  UserCheck9,
  UserX9,
  UserPlus9,
  UserMinus9,
  UserEdit9,
  UserShield9,
  UserSearch9,
  UserCog9,
  UserCircle9,
  Users10,
  UserCheck10,
  UserX10,
  UserPlus10,
  UserMinus10,
  UserEdit10,
  UserShield10,
  UserSearch10,
  UserCog10,
  UserCircle10
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    },
    {
      id: 'it-services',
      name: 'IT Services',
      icon: <Code className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      id: '5g-solutions',
      name: '5G Solutions',
      icon: <Wifi className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    }
  ];

  const allServices = [
    // AI Services
    {
      category: 'ai-services',
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced AI-powered analytics platform with real-time insights, predictive modeling, and automated reporting capabilities.',
      price: '$299/month',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration', 'Machine Learning Models'],
      icon: <BarChart3 className="w-8 h-8" />,
      link: '/ai-analytics-dashboard-pro',
      popular: true
    },
    {
      category: 'ai-services',
      title: 'AI Code Assistant Pro',
      description: 'Intelligent code generation, debugging, and optimization with support for 50+ programming languages and frameworks.',
      price: '$199/month',
      features: ['Code Generation', 'Bug Detection', 'Performance Optimization', 'Multi-language Support', 'IDE Integration'],
      icon: <Code className="w-8 h-8" />,
      link: '/ai-code-assistant-pro',
      popular: true
    },
    {
      category: 'ai-services',
      title: 'AI Content Generation Pro',
      description: 'Advanced AI content creation platform for blogs, social media, marketing materials, and technical documentation.',
      price: '$149/month',
      features: ['Multi-format Content', 'SEO Optimization', 'Brand Voice Training', 'Plagiarism Detection', 'Content Scheduling'],
      icon: <FileText className="w-8 h-8" />,
      link: '/ai-content-generation-pro'
    },
    {
      category: 'ai-services',
      title: 'AI Chatbot Enterprise',
      description: 'Enterprise-grade conversational AI with multi-language support, advanced NLP, and seamless integration capabilities.',
      price: '$249/month',
      features: ['Multi-language Support', 'Advanced NLP', 'Integration APIs', 'Analytics Dashboard', 'Custom Training'],
      icon: <MessageSquare className="w-8 h-8" />,
      link: '/ai-chatbot-enterprise'
    },
    {
      category: 'ai-services',
      title: 'AI Business Intelligence Pro',
      description: 'Comprehensive BI solution with AI-driven insights, automated reporting, and advanced data visualization.',
      price: '$399/month',
      features: ['AI Insights', 'Automated Reports', 'Data Visualization', 'Predictive Analytics', 'Custom Dashboards'],
      icon: <PieChart className="w-8 h-8" />,
      link: '/ai-business-intelligence-pro'
    },
    {
      category: 'ai-services',
      title: 'AI Automation Suite',
      description: 'Complete automation platform for business processes, workflows, and repetitive tasks with AI optimization.',
      price: '$349/month',
      features: ['Process Automation', 'Workflow Management', 'AI Optimization', 'Integration Hub', 'Performance Monitoring'],
      icon: <Workflow className="w-8 h-8" />,
      link: '/ai-automation-suite'
    },

    // IT Services
    {
      category: 'it-services',
      title: 'AI Cloud Infrastructure',
      description: 'Scalable cloud solutions with AI-powered auto-scaling, monitoring, and cost optimization for maximum efficiency.',
      price: '$499/month',
      features: ['Auto-scaling', 'AI Monitoring', 'Cost Optimization', '99.9% Uptime', 'Global CDN'],
      icon: <Cloud className="w-8 h-8" />,
      link: '/ai-cloud-infrastructure',
      popular: true
    },
    {
      category: 'it-services',
      title: 'Advanced Security Suite',
      description: 'Comprehensive cybersecurity solution with AI threat detection, automated response, and compliance management.',
      price: '$399/month',
      features: ['AI Threat Detection', 'Automated Response', 'Compliance Management', '24/7 Monitoring', 'Incident Response'],
      icon: <Shield className="w-8 h-8" />,
      link: '/advanced-security-suite'
    },
    {
      category: 'it-services',
      title: 'API Management Platform',
      description: 'Complete API lifecycle management with AI-powered analytics, security, and performance optimization.',
      price: '$199/month',
      features: ['API Gateway', 'Rate Limiting', 'Analytics Dashboard', 'Security Policies', 'Developer Portal'],
      icon: <Network className="w-8 h-8" />,
      link: '/ai-api-management'
    },
    {
      category: 'it-services',
      title: 'Database Solutions Pro',
      description: 'Advanced database management with AI optimization, automated backups, and performance monitoring.',
      price: '$299/month',
      features: ['AI Optimization', 'Automated Backups', 'Performance Monitoring', 'Scalability', 'Security'],
      icon: <Database className="w-8 h-8" />,
      link: '/database-solutions'
    },
    {
      category: 'it-services',
      title: 'DevOps Solutions',
      description: 'Complete DevOps platform with CI/CD pipelines, infrastructure as code, and automated deployment.',
      price: '$349/month',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Deployment', 'Monitoring', 'Security Scanning'],
      icon: <Settings className="w-8 h-8" />,
      link: '/devops-solutions'
    },
    {
      category: 'it-services',
      title: 'Performance Monitoring',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered insights and alerting.',
      price: '$149/month',
      features: ['Real-time Monitoring', 'AI Insights', 'Custom Alerts', 'Performance Analytics', 'Root Cause Analysis'],
      icon: <Monitor className="w-8 h-8" />,
      link: '/performance-monitoring'
    },

    // 5G Solutions
    {
      category: '5g-solutions',
      title: '5G Implementation',
      description: 'Complete 5G network deployment with ultra-low latency, massive IoT connectivity, and edge computing.',
      price: '$999/month',
      features: ['5G Network Setup', 'IoT Integration', 'Edge Computing', 'Performance Monitoring', 'Security'],
      icon: <Wifi className="w-8 h-8" />,
      link: '/5g-implementation',
      popular: true
    },
    {
      category: '5g-solutions',
      title: '5G Network Infrastructure',
      description: 'Robust 5G infrastructure solutions with high-speed connectivity and reliable network architecture.',
      price: '$799/month',
      features: ['Network Architecture', 'High-speed Connectivity', 'Reliability', 'Scalability', 'Maintenance'],
      icon: <Server className="w-8 h-8" />,
      link: '/5g-network-infrastructure'
    },
    {
      category: '5g-solutions',
      title: '5G IoT Solutions',
      description: 'Comprehensive IoT solutions leveraging 5G technology for smart devices and connected systems.',
      price: '$599/month',
      features: ['IoT Device Management', 'Real-time Data Processing', 'Edge Analytics', 'Device Security', 'Scalability'],
      icon: <Cpu className="w-8 h-8" />,
      link: '/5g-iot-solutions'
    },
    {
      category: '5g-solutions',
      title: '5G Smart City Solutions',
      description: 'Advanced smart city infrastructure powered by 5G technology for urban development and management.',
      price: '$1299/month',
      features: ['Smart Infrastructure', 'Urban Analytics', 'Traffic Management', 'Environmental Monitoring', 'Citizen Services'],
      icon: <Globe className="w-8 h-8" />,
      link: '/5g-smart-city-solutions'
    },
    {
      category: '5g-solutions',
      title: '5G Edge Computing',
      description: 'Edge computing solutions for ultra-low latency applications and real-time data processing.',
      price: '$699/month',
      features: ['Edge Processing', 'Low Latency', 'Real-time Analytics', 'Local Data Storage', 'Bandwidth Optimization'],
      icon: <Layers className="w-8 h-8" />,
      link: '/5g-edge-computing'
    },
    {
      category: '5g-solutions',
      title: '5G Private Networks',
      description: 'Dedicated 5G private networks for enterprise applications with enhanced security and control.',
      price: '$899/month',
      features: ['Private Network', 'Enhanced Security', 'Custom Configuration', 'Dedicated Resources', 'Priority Support'],
      icon: <Lock className="w-8 h-8" />,
      link: '/5g-private-networks'
    },

    // Micro SAAS Services
    {
      category: 'micro-saas',
      title: 'AI Accounting Assistant',
      description: 'Intelligent accounting software with AI-powered bookkeeping, tax preparation, and financial insights.',
      price: '$99/month',
      features: ['Automated Bookkeeping', 'Tax Preparation', 'Financial Insights', 'Invoice Management', 'Expense Tracking'],
      icon: <FileText className="w-8 h-8" />,
      link: '/ai-accounting-assistant',
      popular: true
    },
    {
      category: 'micro-saas',
      title: 'AI Content Moderation Pro',
      description: 'Advanced content moderation platform with AI-powered detection and automated content filtering.',
      price: '$79/month',
      features: ['AI Detection', 'Automated Filtering', 'Custom Rules', 'Real-time Processing', 'Analytics Dashboard'],
      icon: <Eye className="w-8 h-8" />,
      link: '/ai-content-moderation-pro'
    },
    {
      category: 'micro-saas',
      title: 'AI Climate Solutions Pro',
      description: 'Environmental monitoring and climate prediction platform with AI-powered analytics and reporting.',
      price: '$149/month',
      features: ['Environmental Monitoring', 'Climate Prediction', 'Carbon Tracking', 'Sustainability Reports', 'Alert System'],
      icon: <Globe className="w-8 h-8" />,
      link: '/ai-climate-solutions-pro'
    },
    {
      category: 'micro-saas',
      title: 'AI Agricultural Intelligence Pro',
      description: 'Smart farming solution with AI-powered crop monitoring, yield prediction, and resource optimization.',
      price: '$199/month',
      features: ['Crop Monitoring', 'Yield Prediction', 'Resource Optimization', 'Weather Integration', 'Farm Analytics'],
      icon: <Target className="w-8 h-8" />,
      link: '/ai-agricultural-intelligence-pro'
    },
    {
      category: 'micro-saas',
      title: 'AI 3D Generation',
      description: 'AI-powered 3D model generation and rendering platform for designers, architects, and developers.',
      price: '$129/month',
      features: ['3D Model Generation', 'AI Rendering', 'Texture Creation', 'Animation Tools', 'Export Options'],
      icon: <Layers className="w-8 h-8" />,
      link: '/ai-3d-generation'
    },
    {
      category: 'micro-saas',
      title: 'AI Blockchain Solutions',
      description: 'Blockchain integration platform with AI-powered smart contracts and decentralized applications.',
      price: '$179/month',
      features: ['Smart Contracts', 'DApp Development', 'Blockchain Analytics', 'Security Auditing', 'Integration Tools'],
      icon: <Lock className="w-8 h-8" />,
      link: '/ai-blockchain-solutions'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "150+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | Advanced AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI, IT, and 5G services including micro SAAS solutions, cloud infrastructure, cybersecurity, and smart technology implementations." />
        <meta name="keywords" content="AI services, IT solutions, 5G technology, micro SAAS, cloud computing, cybersecurity, business automation, smart solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  Comprehensive Technology Solutions
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Our Services
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your business with cutting-edge AI, IT, and 5G solutions. 
                  From micro SAAS platforms to enterprise-grade systems, we deliver 
                  innovative technology that drives growth and success.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-cyan-400">{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Service Categories Filter */}
          <section className="py-8 bg-slate-800/30 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === 'all'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                  }`}
                >
                  All Services
                </button>
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div 
                    key={index} 
                    className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 relative ${
                      service.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{service.icon}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <div className="flex items-center text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <a
                      href={service.link}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Contact us today to discuss how our AI and IT solutions can accelerate your success.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ServicesPage;