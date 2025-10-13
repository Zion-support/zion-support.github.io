import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Settings, 
  BarChart3, 
  TrendingUp, 
  Award,
  Clock,
  DollarSign,
  Star,
  CheckCircle,
  ArrowRight,
  Brain,
  Target,
  Activity,
  Filter,
  Download,
  Share,
  Cpu,
  Layers,
  Sparkles,
  Crown,
  Diamond,
  Flame,
  Thunder,
  Sun,
  Moon,
  Heart,
  ThumbsUp,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  Gift,
  Tag,
  Percent,
  Calculator,
  PieChart,
  LineChart,
  Monitor,
  Smartphone,
  Wifi,
  HardDrive,
  MemoryStick,
  Printer,
  Scanner,
  Fax,
  Phone,
  Voicemail,
  Headset,
  Speaker,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond as DiamondIcon,
  Star as StarIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  Hourglass,
  Mail,
  MessageSquare,
  Calendar,
  Search,
  Bell,
  BookOpen,
  Lightbulb,
  Puzzle,
  Gamepad2,
  Package,
  Receipt,
  ClipboardList,
  Workflow,
  Lock,
  Eye,
  AlertTriangle,
  RefreshCw,
  Upload,
  Download as DownloadIcon,
  Trash2,
  Edit,
  Copy,
  Move,
  Folder,
  File,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  Bookmark,
  Tag as TagIcon,
  Flag,
  Star as StarIcon2,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown,
  MessageCircle,
  Send,
  Reply,
  Forward,
  Share2,
  ExternalLink,
  Link,
  Unlink,
  Lock as LockIcon,
  Unlock,
  Key,
  User,
  UserCheck,
  UserX,
  UserPlus,
  Users as UsersIcon,
  UserCog,
  UserMinus,
  UserEdit,
  UserSearch,
  UserShield,
  UserStar,
  UserHeart,
  UserCheck as UserCheckIcon,
  UserX as UserXIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon2,
  UserCog as UserCogIcon,
  UserMinus as UserMinusIcon,
  UserEdit as UserEditIcon,
  UserSearch as UserSearchIcon,
  UserShield as UserShieldIcon,
  UserStar as UserStarIcon,
  UserHeart as UserHeartIcon
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CloudInfrastructure = () => {
  const features = [
    {
      title: "Auto-scaling Infrastructure",
      description: "Automatically scale resources up or down based on demand to optimize costs and performance",
      icon: <Zap className="w-6 h-6" />,
      stats: "99.9% uptime SLA"
    },
    {
      title: "Multi-cloud Support",
      description: "Deploy across AWS, Azure, Google Cloud, and private clouds with unified management",
      icon: <Globe className="w-6 h-6" />,
      stats: "4+ cloud providers"
    },
    {
      title: "Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solutions with automated failover",
      icon: <Shield className="w-6 h-6" />,
      stats: "RTO < 15 minutes"
    },
    {
      title: "Cost Optimization",
      description: "AI-powered cost optimization to reduce cloud spending by up to 40%",
      icon: <DollarSign className="w-6 h-6" />,
      stats: "40% cost reduction"
    },
    {
      title: "Security Hardening",
      description: "Enterprise-grade security with compliance automation and threat protection",
      icon: <Lock className="w-6 h-6" />,
      stats: "SOC 2 Type II certified"
    },
    {
      title: "DevOps Integration",
      description: "Seamless integration with CI/CD pipelines and infrastructure as code",
      icon: <Settings className="w-6 h-6" />,
      stats: "50+ integrations"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$249",
      period: "month",
      description: "Perfect for small businesses with basic cloud infrastructure needs",
      features: [
        "Up to 10 servers",
        "Basic monitoring",
        "Email support",
        "Standard backup",
        "Basic security",
        "Monthly reports"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$699",
      period: "month",
      description: "Ideal for growing businesses with advanced infrastructure requirements",
      features: [
        "Up to 100 servers",
        "Advanced monitoring",
        "Priority support",
        "Automated backup",
        "Advanced security",
        "Real-time alerts",
        "API access",
        "Custom configurations"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "month",
      description: "For large organizations with complex infrastructure and compliance needs",
      features: [
        "Unlimited servers",
        "Enterprise monitoring",
        "Dedicated support",
        "Disaster recovery",
        "Enterprise security",
        "24/7 phone support",
        "Custom integrations",
        "SLA guarantee",
        "On-premise hybrid"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const services = [
    {
      title: "Cloud Migration",
      description: "Complete migration to cloud with zero downtime and minimal disruption",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Zero-downtime migration", "Data migration", "Application modernization", "Performance optimization"]
    },
    {
      title: "Container Orchestration",
      description: "Kubernetes and Docker container management with auto-scaling and monitoring",
      icon: <Package className="w-8 h-8" />,
      features: ["Kubernetes management", "Container orchestration", "Auto-scaling", "Service mesh"]
    },
    {
      title: "Database Management",
      description: "Managed database services with high availability and automated backups",
      icon: <Database className="w-8 h-8" />,
      features: ["Database optimization", "Automated backups", "High availability", "Performance tuning"]
    },
    {
      title: "Network Security",
      description: "Advanced network security with firewalls, VPN, and intrusion detection",
      icon: <Shield className="w-8 h-8" />,
      features: ["Firewall management", "VPN solutions", "Intrusion detection", "Network monitoring"]
    },
    {
      title: "Monitoring & Analytics",
      description: "Comprehensive monitoring and analytics with real-time insights and alerts",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time monitoring", "Performance analytics", "Alert management", "Custom dashboards"]
    },
    {
      title: "Backup & Recovery",
      description: "Automated backup and disaster recovery solutions with point-in-time recovery",
      icon: <HardDrive className="w-8 h-8" />,
      features: ["Automated backups", "Point-in-time recovery", "Cross-region replication", "Testing & validation"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "E-commerce Platform",
      role: "CTO",
      content: "Zion's cloud infrastructure services helped us scale from 10,000 to 1 million users without any downtime. The auto-scaling and cost optimization features are incredible.",
      rating: 5,
      avatar: "SC",
      results: "100x user growth"
    },
    {
      name: "Michael Rodriguez",
      company: "SaaS Startup",
      role: "DevOps Lead",
      content: "The migration to cloud was seamless and the ongoing management is hands-off. We've reduced our infrastructure costs by 45% while improving performance.",
      rating: 5,
      avatar: "MR",
      results: "45% cost reduction"
    },
    {
      name: "Emily Johnson",
      company: "Financial Services",
      role: "IT Director",
      content: "The security and compliance features gave us confidence to move sensitive data to the cloud. We're now fully compliant with industry regulations.",
      rating: 5,
      avatar: "EJ",
      results: "100% compliance"
    }
  ];

  const stats = [
    { number: "1,000+", label: "Infrastructures Managed", icon: <Server className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Savings", icon: <DollarSign className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring & Support", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Cloud Infrastructure Services - Enterprise Cloud Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services with auto-scaling, multi-cloud support, disaster recovery, and cost optimization. Transform your IT infrastructure with our expert cloud solutions." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud management, AWS, Azure, Google Cloud, cloud security, disaster recovery, auto-scaling, cloud optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-infrastructure" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <Cloud className="w-4 h-4 text-indigo-400 mr-2" />
            <span className="text-indigo-400 text-sm font-medium">Enterprise Cloud Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Cloud Infrastructure
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your IT infrastructure with our comprehensive cloud services. Auto-scaling, multi-cloud support, 
            disaster recovery, and cost optimization in one complete solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Cloud className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Cloud Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive cloud infrastructure features designed for enterprise-scale operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-indigo-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-indigo-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end cloud infrastructure services for every aspect of your IT environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Cloud Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the cloud infrastructure plan that fits your organization's needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-indigo-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "#signup"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations are using our cloud infrastructure services to scale and grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-indigo-400">{testimonial.results}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of organizations using our cloud infrastructure services to scale, 
              optimize costs, and improve performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Cloud className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Eye className="w-5 h-5" />}
              >
                View Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>30-day free trial • No setup fees • 24/7 support</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CloudInfrastructure;