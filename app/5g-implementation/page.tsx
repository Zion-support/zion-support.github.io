import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Wifi, 
  Server, 
  Cpu, 
  Globe, 
  Shield, 
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
  Cloud,
  Zap,
  Brain,
  Code,
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

const FiveGImplementation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Ultra-Low Latency',
      description: 'Achieve sub-millisecond latency with our advanced 5G network infrastructure for real-time applications.',
      benefits: ['<1ms latency', 'Real-time processing', 'Edge computing', 'Mission-critical apps']
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Massive IoT Connectivity',
      description: 'Connect millions of IoT devices with our scalable 5G network designed for smart cities and industries.',
      benefits: ['1M+ devices/km²', 'Low power consumption', 'Long-range coverage', 'Battery optimization']
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Edge Computing Integration',
      description: 'Deploy edge computing solutions to process data closer to the source for faster response times.',
      benefits: ['Edge data centers', 'Local processing', 'Reduced bandwidth', 'Improved performance']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, network slicing, and advanced threat protection.',
      benefits: ['Network slicing', 'End-to-end encryption', 'Threat detection', 'Compliance ready']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Coverage',
      description: 'Worldwide 5G coverage with seamless roaming and consistent performance across all locations.',
      benefits: ['Global roaming', 'Consistent speeds', 'Multi-carrier support', 'Worldwide coverage']
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Network Monitoring',
      description: 'Real-time network monitoring and analytics with AI-powered insights and predictive maintenance.',
      benefits: ['Real-time monitoring', 'AI analytics', 'Predictive maintenance', 'Performance optimization']
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Enable Industry 4.0 with real-time monitoring, predictive maintenance, and automated quality control.',
      icon: <Settings className="w-6 h-6" />,
      benefits: ['Real-time monitoring', 'Predictive maintenance', 'Quality control', 'Automation']
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Support autonomous vehicle networks with ultra-reliable, low-latency communication.',
      icon: <Car className="w-6 h-6" />,
      benefits: ['V2X communication', 'Real-time navigation', 'Safety systems', 'Traffic management']
    },
    {
      title: 'Smart Cities',
      description: 'Power smart city infrastructure with connected sensors, traffic management, and public services.',
      icon: <Globe className="w-6 h-6" />,
      benefits: ['Traffic optimization', 'Environmental monitoring', 'Public safety', 'Resource management']
    },
    {
      title: 'Healthcare',
      description: 'Enable telemedicine, remote surgery, and real-time patient monitoring with 5G connectivity.',
      icon: <Heart className="w-6 h-6" />,
      benefits: ['Telemedicine', 'Remote surgery', 'Patient monitoring', 'Medical imaging']
    },
    {
      title: 'Gaming & Entertainment',
      description: 'Deliver immersive AR/VR experiences and cloud gaming with ultra-low latency 5G.',
      icon: <Gamepad2 className="w-6 h-6" />,
      benefits: ['Cloud gaming', 'AR/VR streaming', 'Real-time multiplayer', 'Immersive experiences']
    },
    {
      title: 'Financial Services',
      description: 'Enable high-frequency trading and real-time financial transactions with ultra-low latency.',
      icon: <DollarSign className="w-6 h-6" />,
      benefits: ['High-frequency trading', 'Real-time transactions', 'Risk management', 'Compliance']
    }
  ];

  const pricingTiers = [
    {
      name: 'Small Business',
      price: '$999',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 100 devices',
        'Basic 5G coverage',
        'Standard support',
        'Basic monitoring',
        '1 edge location',
        '10GB data/month'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for large organizations',
      features: [
        'Up to 1,000 devices',
        'Premium 5G coverage',
        'Priority support',
        'Advanced monitoring',
        '5 edge locations',
        '100GB data/month',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: true
    },
    {
      name: 'Global Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For multinational corporations',
      features: [
        'Unlimited devices',
        'Global 5G coverage',
        '24/7 dedicated support',
        'AI-powered monitoring',
        'Unlimited edge locations',
        'Unlimited data',
        'White-label options',
        'Custom development',
        'On-site deployment'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '10x', label: 'Faster than 4G', icon: <Zap className="w-6 h-6" /> },
    { number: '<1ms', label: 'Ultra-Low Latency', icon: <Clock className="w-6 h-6" /> },
    { number: '1M+', label: 'Devices per km²', icon: <Cpu className="w-6 h-6" /> },
    { number: '99.99%', label: 'Reliability', icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G network deployment with ultra-low latency, massive IoT connectivity, and edge computing. Transform your business with next-generation wireless technology." />
        <meta name="keywords" content="5G implementation, 5G deployment, ultra-low latency, IoT connectivity, edge computing, smart cities, autonomous vehicles" />
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
                  Next-Generation Wireless Technology
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    5G Implementation
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Deploy ultra-fast, ultra-reliable 5G networks with massive IoT connectivity and edge computing. 
                  Transform your business with next-generation wireless technology that enables new possibilities.
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
                  Advanced 5G <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Capabilities</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Harness the power of 5G technology with our comprehensive implementation services
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

          {/* Use Cases Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Transform Your Industry with <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">5G</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover how 5G technology can revolutionize your business across various industries
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
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
          <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Flexible <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the 5G implementation plan that fits your business needs and scale
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
                  Ready to Deploy 5G?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Contact us today to discuss your 5G implementation needs and get a customized solution.
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

export default FiveGImplementation;