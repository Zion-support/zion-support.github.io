import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Brain, 
  BarChart3, 
  Globe, 
  Users, 
  Award, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Target, 
  Settings, 
  Monitor, 
  Play, 
  Pause, 
  Stop, 
  Download, 
  Upload, 
  Share, 
  Bell, 
  Heart, 
  ThumbsUp, 
  MessageSquare, 
  Calendar, 
  Search, 
  Filter, 
  Home, 
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
  Diamond, 
  Star as StarIcon, 
  Moon, 
  Sun, 
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
  Clock3, 
  Clock4, 
  Clock5, 
  Clock6, 
  Clock7, 
  Clock8, 
  Clock9, 
  Clock10, 
  Clock11, 
  Clock12, 
  Calendar as CalendarIcon, 
  CalendarDays, 
  CalendarCheck, 
  CalendarX, 
  CalendarPlus, 
  CalendarMinus, 
  CalendarRange, 
  CalendarSearch, 
  CalendarHeart, 
  CalendarStar, 
  CalendarClock, 
  CalendarUser, 
  CalendarEdit, 
  CalendarTrash, 
  CalendarSettings, 
  CalendarImport, 
  CalendarExport, 
  CalendarShare, 
  CalendarLock, 
  CalendarUnlock, 
  CalendarKey, 
  CalendarShield, 
  CalendarAlert, 
  CalendarBell, 
  CalendarZap, 
  CalendarSparkles, 
  CalendarGift, 
  CalendarAward, 
  CalendarTrophy, 
  CalendarMedal, 
  CalendarCrown, 
  CalendarGem, 
  CalendarDiamond, 
  CalendarPearl, 
  CalendarRuby, 
  CalendarSapphire, 
  CalendarEmerald, 
  CalendarTopaz, 
  CalendarAmethyst, 
  CalendarQuartz, 
  CalendarCrystal, 
  CalendarJewel, 
  CalendarTreasure, 
  CalendarGold, 
  CalendarSilver, 
  CalendarBronze, 
  CalendarPlatinum, 
  CalendarTitanium, 
  CalendarSteel, 
  CalendarIron, 
  CalendarCopper, 
  CalendarAluminum, 
  CalendarZinc, 
  CalendarTin, 
  CalendarLead, 
  CalendarMercury, 
  CalendarUranium, 
  CalendarPlutonium, 
  CalendarRadium, 
  CalendarThorium, 
  CalendarActinium, 
  CalendarProtactinium, 
  CalendarNeptunium, 
  CalendarAmericium, 
  CalendarCurium, 
  CalendarBerkelium, 
  CalendarCalifornium, 
  CalendarEinsteinium, 
  CalendarFermium, 
  CalendarMendelevium, 
  CalendarNobelium, 
  CalendarLawrencium, 
  CalendarRutherfordium, 
  CalendarDubnium, 
  CalendarSeaborgium, 
  CalendarBohrium, 
  CalendarHassium, 
  CalendarMeitnerium, 
  CalendarDarmstadtium, 
  CalendarRoentgenium, 
  CalendarCopernicium, 
  CalendarNihonium, 
  CalendarFlerovium, 
  CalendarMoscovium, 
  CalendarLivermorium, 
  CalendarTennessine, 
  CalendarOganesson, 
  Package, 
  Receipt, 
  ClipboardList, 
  Workflow, 
  Key, 
  Fingerprint, 
  Scan, 
  Activity, 
  Layers, 
  Grid, 
  List, 
  Map, 
  Compass, 
  Navigation, 
  Globe2, 
  WifiOff, 
  Signal, 
  Bluetooth, 
  Usb, 
  HardDrive, 
  MemoryStick, 
  Printer, 
  Scanner, 
  Fax, 
  Phone, 
  Voicemail, 
  Headset, 
  Speaker, 
  VolumeX, 
  Music, 
  BookOpen, 
  Lightbulb, 
  Puzzle, 
  Gamepad2, 
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
  LineChart
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const ZionAICyberDefenseMatrixPro = () => {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and analyze threats in real-time with 99.9% accuracy",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Real-time analysis", "Behavioral analytics", "Anomaly detection", "Predictive threat modeling"]
    },
    {
      title: "Zero-Trust Architecture",
      description: "Implement zero-trust security principles with continuous verification and micro-segmentation",
      icon: <Lock className="w-6 h-6" />,
      benefits: ["Continuous verification", "Micro-segmentation", "Identity management", "Access controls"]
    },
    {
      title: "Automated Incident Response",
      description: "AI-driven incident response that automatically contains and mitigates threats within seconds",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Instant response", "Automated containment", "Threat isolation", "Recovery automation"]
    },
    {
      title: "Advanced Threat Intelligence",
      description: "Global threat intelligence feeds with AI analysis and correlation for proactive defense",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Global threat feeds", "AI correlation", "Proactive defense", "Threat hunting"]
    },
    {
      title: "Compliance & Governance",
      description: "Automated compliance monitoring and reporting for major security frameworks and regulations",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Compliance monitoring", "Automated reporting", "Audit trails", "Regulatory updates"]
    },
    {
      title: "Security Orchestration",
      description: "Unified security operations center with centralized monitoring and management capabilities",
      icon: <Settings className="w-6 h-6" />,
      benefits: ["Centralized monitoring", "Unified dashboard", "Workflow automation", "Team collaboration"]
    }
  ];

  const securityLayers = [
    {
      title: "Network Security",
      description: "Advanced network monitoring and protection with AI-powered traffic analysis",
      icon: <Globe className="w-8 h-8" />,
      capabilities: ["Traffic analysis", "DDoS protection", "Intrusion detection", "Network segmentation"]
    },
    {
      title: "Endpoint Protection",
      description: "Comprehensive endpoint security with behavioral analysis and threat prevention",
      icon: <Monitor className="w-8 h-8" />,
      capabilities: ["Malware detection", "Behavioral analysis", "Device management", "Threat prevention"]
    },
    {
      title: "Cloud Security",
      description: "Cloud-native security with automated compliance and threat detection",
      icon: <Cloud className="w-8 h-8" />,
      capabilities: ["Cloud monitoring", "Compliance automation", "Data protection", "Access management"]
    },
    {
      title: "Application Security",
      description: "Application-level security with automated vulnerability scanning and protection",
      icon: <Shield className="w-8 h-8" />,
      capabilities: ["Vulnerability scanning", "Code analysis", "Runtime protection", "API security"]
    }
  ];

  const pricingPlans = [
    {
      name: "Defense Basic",
      price: "$299",
      period: "per month",
      description: "Essential security for small to medium businesses",
      features: [
        "Up to 100 endpoints",
        "Basic threat detection",
        "Email support",
        "Standard reporting",
        "Basic compliance",
        "24/7 monitoring"
      ],
      popular: false
    },
    {
      name: "Defense Professional",
      price: "$799",
      period: "per month",
      description: "Advanced security for growing organizations",
      features: [
        "Up to 500 endpoints",
        "Advanced AI detection",
        "Priority support",
        "Advanced reporting",
        "Full compliance suite",
        "Incident response",
        "Threat intelligence",
        "API access"
      ],
      popular: true
    },
    {
      name: "Defense Enterprise",
      price: "$1,999",
      period: "per month",
      description: "Comprehensive security for large enterprises",
      features: [
        "Unlimited endpoints",
        "Premium AI detection",
        "24/7 dedicated support",
        "Custom reporting",
        "Advanced compliance",
        "Full incident response",
        "Premium threat intelligence",
        "Full API access",
        "White-label options",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "99.9%", label: "Threat Detection Rate", icon: <Target className="w-6 h-6" /> },
    { number: "0.1s", label: "Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Eye className="w-6 h-6" /> },
    { number: "100%", label: "Compliance Coverage", icon: <Award className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "David Chen",
      company: "Global Financial Corp",
      role: "CISO",
      content: "Zion AI Cyber Defense Matrix Pro has transformed our security posture. We've reduced security incidents by 95% while improving response times by 99%.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Sarah Johnson",
      company: "Healthcare Systems Inc",
      role: "Security Director",
      content: "The AI-powered threat detection is incredible. It caught sophisticated attacks that traditional systems missed, protecting our patient data.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Rodriguez",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The automated incident response saved us from a major breach. The system contained the threat before our team even knew about it.",
      rating: 5,
      avatar: "MR"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Cyber Defense Matrix Pro - Advanced AI Cybersecurity Platform | Zion Tech Group"
        description="Protect your organization with Zion AI Cyber Defense Matrix Pro. Advanced AI-powered cybersecurity with real-time threat detection, automated response, and zero-trust architecture."
        keywords="AI cybersecurity, threat detection, cyber defense, security automation, zero trust, incident response, threat intelligence"
        canonical="https://ziontechgroup.com/zion-ai-cyber-defense-matrix-pro"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Shield className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Cybersecurity</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Cyber Defense Matrix Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The most advanced AI-powered cybersecurity platform. Protect your organization with intelligent threat detection, 
            automated response, and zero-trust architecture that adapts to evolving threats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Security Layers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Layer Security Defense
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive protection across all attack vectors with AI-powered security layers
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityLayers.map((layer, index) => (
              <FuturisticCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4">
                    {layer.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{layer.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{layer.description}</p>
                <ul className="space-y-2">
                  {layer.capabilities.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge AI technology combined with proven security methodologies for maximum protection
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Security Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect security solution for your organization
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative hover:scale-105 transition-transform duration-300 ${
                  plan.popular ? 'ring-2 ring-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full justify-center"
                >
                  {plan.popular ? "Get Started" : "Choose Plan"}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
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
              See what security professionals say about our AI-powered defense platform
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Fortify Your Defenses?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join thousands of organizations using Zion AI Cyber Defense Matrix Pro to protect against 
            evolving cyber threats with AI-powered intelligence and automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAICyberDefenseMatrixPro;