import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Server, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  BarChart3, 
  Smartphone, 
  Database, 
  Settings, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  TrendingUp,
  Clock,
  Award,
  Lock,
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
  Network,
  Wifi,
  Brain,
  Code,
  Cpu,
  Database as DbIcon,
  Settings as SettingsIcon,
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
  Award as AwardIcon,
  Clock as TimeIcon
} from 'lucide-react';

const AICloudInfrastructure: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'AI-Powered Auto-Scaling',
      description: 'Intelligent scaling that automatically adjusts resources based on demand patterns and AI predictions.',
      benefits: ['Predictive scaling', 'Cost optimization', 'Performance monitoring', 'Resource allocation']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, compliance certifications, and advanced threat protection.',
      benefits: ['End-to-end encryption', 'SOC 2 compliance', 'Threat detection', 'Access controls']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global CDN Network',
      description: 'Worldwide content delivery network with edge locations for ultra-fast performance and low latency.',
      benefits: ['Global edge locations', 'Low latency', 'High availability', 'DDoS protection']
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Real-time Monitoring',
      description: 'Comprehensive monitoring and analytics with AI-powered insights and automated alerting.',
      benefits: ['Real-time metrics', 'AI insights', 'Custom alerts', 'Performance analytics']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Managed Databases',
      description: 'Fully managed database services with automated backups, scaling, and performance optimization.',
      benefits: ['Automated backups', 'Auto-scaling', 'Performance tuning', 'High availability']
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'DevOps Integration',
      description: 'Seamless integration with CI/CD pipelines, infrastructure as code, and automated deployment.',
      benefits: ['CI/CD pipelines', 'Infrastructure as code', 'Automated deployment', 'Version control']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small applications',
      features: [
        '2 CPU cores',
        '4GB RAM',
        '50GB storage',
        'Basic monitoring',
        'Email support',
        '1 environment'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '8 CPU cores',
        '16GB RAM',
        '200GB storage',
        'Advanced monitoring',
        'Priority support',
        '3 environments',
        'Auto-scaling',
        'Load balancing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited CPU cores',
        'Unlimited RAM',
        'Unlimited storage',
        'AI-powered monitoring',
        '24/7 dedicated support',
        'Unlimited environments',
        'Advanced auto-scaling',
        'Global CDN',
        'Custom configurations'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Clock className="w-6 h-6" /> },
    { number: '50+', label: 'Global Regions', icon: <Globe className="w-6 h-6" /> },
    { number: '<100ms', label: 'Average Latency', icon: <Zap className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud solutions with AI-powered auto-scaling, monitoring, and cost optimization. Deploy and manage applications with maximum efficiency and reliability." />
        <meta name="keywords" content="cloud infrastructure, AI cloud, auto-scaling, cloud monitoring, cloud security, cloud deployment, cloud management" />
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
                  AI-Powered Cloud Solutions
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Cloud Infrastructure
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Deploy and scale your applications with AI-powered cloud infrastructure. 
                  Get auto-scaling, intelligent monitoring, and cost optimization for maximum efficiency and reliability.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </a>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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

          {/* Features Section */}
          <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Advanced Cloud <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Capabilities</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to build, deploy, and scale applications in the cloud
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Flexible <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the cloud infrastructure plan that fits your needs and scale as you grow
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingTiers.map((tier, index) => (
                  <div 
                    key={index} 
                    className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 relative ${
                      tier.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10 scale-105' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-400 mb-4">{tier.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                        <span className="text-gray-400 ml-2">{tier.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>
                      Get Started
                    </button>
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
                  Ready to Scale in the Cloud?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Contact us today to discuss your cloud infrastructure needs and get a customized solution.
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

export default AICloudInfrastructure;