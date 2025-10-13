import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Brain, 
  Globe, 
  Server, 
  Database, 
  Users, 
  Settings, 
  BarChart3, 
  TrendingUp, 
  Award,
  Clock,
  DollarSign,
  Star,
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
  Hourglass
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AICybersecuritySuitePro = () => {
  const features = [
    {
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent sophisticated cyber threats in real-time",
      icon: <Brain className="w-6 h-6" />,
      stats: "99.9% threat detection rate"
    },
    {
      title: "Zero-Trust Architecture",
      description: "Implement zero-trust security model with continuous verification and least privilege access",
      icon: <Shield className="w-6 h-6" />,
      stats: "100% network coverage"
    },
    {
      title: "Automated Incident Response",
      description: "AI-powered response system automatically contains and mitigates security incidents",
      icon: <Zap className="w-6 h-6" />,
      stats: "Sub-minute response time"
    },
    {
      title: "Compliance Automation",
      description: "Automated compliance monitoring and reporting for GDPR, HIPAA, SOX, and other regulations",
      icon: <CheckCircle className="w-6 h-6" />,
      stats: "50+ compliance frameworks"
    },
    {
      title: "Behavioral Analytics",
      description: "Monitor user and entity behavior to detect insider threats and anomalous activities",
      icon: <Eye className="w-6 h-6" />,
      stats: "95% anomaly detection"
    },
    {
      title: "Vulnerability Management",
      description: "Continuous vulnerability scanning and prioritization with automated patching recommendations",
      icon: <Target className="w-6 h-6" />,
      stats: "24/7 monitoring"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses with basic security needs",
      features: [
        "Up to 50 users",
        "Basic threat detection",
        "Email security",
        "Firewall management",
        "Vulnerability scanning",
        "Email support",
        "Basic reporting"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$799",
      period: "month",
      description: "Ideal for mid-size companies with advanced security requirements",
      features: [
        "Up to 500 users",
        "Advanced AI threat detection",
        "Zero-trust architecture",
        "Automated incident response",
        "Compliance automation",
        "Priority support",
        "Advanced analytics",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "month",
      description: "For large organizations with complex security and compliance needs",
      features: [
        "Unlimited users",
        "AI-powered security operations",
        "Custom security policies",
        "White-label solution",
        "Dedicated security team",
        "24/7 phone support",
        "Custom integrations",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const securityModules = [
    {
      title: "Network Security",
      description: "Advanced firewall, intrusion detection, and network segmentation",
      icon: <Globe className="w-8 h-8" />,
      features: ["Next-gen firewall", "Intrusion prevention", "Network monitoring", "Traffic analysis"]
    },
    {
      title: "Endpoint Protection",
      description: "Comprehensive endpoint security with AI-powered threat prevention",
      icon: <Monitor className="w-8 h-8" />,
      features: ["Antivirus & antimalware", "Device control", "Application whitelisting", "USB protection"]
    },
    {
      title: "Email Security",
      description: "Advanced email protection against phishing, malware, and spam",
      icon: <Mail className="w-8 h-8" />,
      features: ["Phishing protection", "Malware scanning", "Spam filtering", "Email encryption"]
    },
    {
      title: "Data Protection",
      description: "Comprehensive data security with encryption and access controls",
      icon: <Database className="w-8 h-8" />,
      features: ["Data encryption", "Access controls", "Data loss prevention", "Backup security"]
    },
    {
      title: "Identity Management",
      description: "Advanced identity and access management with multi-factor authentication",
      icon: <Users className="w-8 h-8" />,
      features: ["Single sign-on", "MFA", "Privileged access", "Identity governance"]
    },
    {
      title: "Security Analytics",
      description: "AI-powered security analytics and threat intelligence",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Threat intelligence", "Security dashboards", "Incident analysis", "Risk assessment"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Financial Services",
      role: "CISO",
      content: "Zion AI Cybersecurity Suite Pro has transformed our security posture. We've reduced security incidents by 90% and achieved full compliance with industry regulations.",
      rating: 5,
      avatar: "SC",
      results: "90% incident reduction"
    },
    {
      name: "Michael Rodriguez",
      company: "Healthcare Provider",
      role: "IT Director",
      content: "The AI threat detection and automated response capabilities are outstanding. We can now detect and respond to threats in seconds, not hours.",
      rating: 5,
      avatar: "MR",
      results: "99% faster response"
    },
    {
      name: "Emily Johnson",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The compliance automation features saved us months of work. We're now fully compliant with GDPR and PCI-DSS requirements.",
      rating: 5,
      avatar: "EJ",
      results: "100% compliance"
    }
  ];

  const stats = [
    { number: "1,000+", label: "Organizations Protected", icon: <Shield className="w-6 h-6" /> },
    { number: "99.9%", label: "Threat Detection Rate", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Compliance Frameworks", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Enterprise Security Platform | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity platform with threat detection, zero-trust architecture, and automated incident response. Protect your organization with enterprise-grade security." />
        <meta name="keywords" content="AI cybersecurity, enterprise security, threat detection, zero-trust, incident response, compliance automation, security analytics, network security" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cybersecurity-suite-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">Enterprise-Grade AI Security</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              AI Cybersecurity Suite Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advanced AI-powered cybersecurity platform that protects your organization from sophisticated threats. 
            Zero-trust architecture, automated incident response, and compliance automation in one comprehensive solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Shield className="w-5 h-5" />}
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
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive security capabilities powered by artificial intelligence and machine learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Security Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete security coverage across all attack vectors and compliance requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityModules.map((module, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-red-400 transition-colors">
                  {module.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {module.description}
                </p>
                <div className="space-y-2">
                  {module.features.map((feature, idx) => (
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
              Enterprise Security Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your organization's needs and compliance requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-red-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations are using our AI cybersecurity suite to protect their assets
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
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-red-400">{testimonial.results}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Organization Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait for a security breach. Protect your organization with AI-powered cybersecurity 
              that adapts to evolving threats.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Shield className="w-5 h-5" />}
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
              <p>30-day free trial • No setup fees • 24/7 security monitoring</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AICybersecuritySuitePro;