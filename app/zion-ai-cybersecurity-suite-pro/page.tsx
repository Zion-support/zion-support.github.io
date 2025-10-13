import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Sparkles, 
  Star, 
  Award,
  Cloud,
  Brain,
  Code,
  Database,
  Mail,
  Smartphone,
  Monitor,
  Globe,
  Target,
  TrendingUp,
  DollarSign,
  Settings,
  FileText,
  MessageSquare,
  Calendar,
  Search,
  Filter,
  Heart,
  ThumbsUp,
  Rocket,
  Cpu,
  Wifi,
  Battery,
  Camera,
  Headphones,
  Mic,
  Video,
  Image,
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
  LineChart,
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
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
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
  Bell,
  Bookmark,
  Briefcase,
  Building,
  Clipboard,
  Command,
  Compass as CompassIcon,
  Download,
  Edit,
  ExternalLink,
  Flag,
  Folder,
  Home,
  Info,
  Key,
  User,
  UserCheck,
  UserPlus,
  UserX,
  X,
  BarChart3,
  Clock,
  Users
} from "lucide-react";
import SEOOptimizer from "@/components/SEOOptimizer";
import FuturisticCard from "@/components/FuturisticCard";
import FuturisticButton from "@/components/FuturisticButton";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import ResponsiveGrid from "@/components/ResponsiveGrid";

export default function ZionAiCybersecuritySuitePro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent sophisticated cyber threats in real-time"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero-Trust Security",
      description: "Implement zero-trust architecture with AI-powered continuous verification and access control"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Behavioral Analytics",
      description: "Monitor user and system behavior patterns to identify anomalies and potential security breaches"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Advanced Encryption",
      description: "Military-grade encryption with AI-optimized key management and quantum-resistant algorithms"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Predictive Security",
      description: "AI predicts potential security vulnerabilities and suggests proactive mitigation strategies"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "24/7 AI-powered security monitoring with instant threat response and automated incident handling"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$199",
      period: "/month",
      originalPrice: "$399",
      discount: "50% OFF",
      features: [
        "Up to 50 endpoints",
        "Basic AI threat detection",
        "Email security",
        "Web filtering",
        "24/7 monitoring",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      originalPrice: "$999",
      discount: "50% OFF",
      features: [
        "Up to 200 endpoints",
        "Advanced AI features",
        "Complete security suite",
        "Compliance reporting",
        "Priority support",
        "Custom integrations",
        "Security training",
        "Incident response"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      originalPrice: "$1999",
      discount: "50% OFF",
      features: [
        "Unlimited endpoints",
        "Premium AI capabilities",
        "Custom AI training",
        "Dedicated security team",
        "24/7 phone support",
        "White-label solution",
        "On-premise deployment",
        "Custom compliance"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "99.9% Threat Prevention",
      description: "AI-powered protection blocks 99.9% of known and unknown cyber threats"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Response",
      description: "Automated threat response in under 30 seconds, 24/7"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Reduce Security Costs",
      description: "Eliminate need for multiple security tools and reduce management overhead by 70%"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Compliance Ready",
      description: "Meet GDPR, HIPAA, SOX, and other regulatory requirements automatically"
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      role: "CISO",
      company: "Financial Services Corp",
      content: "Zion AI Cybersecurity Suite Pro has been a game-changer for our security posture. The AI threat detection caught several sophisticated attacks that traditional tools missed.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Maria Rodriguez",
      role: "IT Director",
      company: "Healthcare Systems Inc",
      content: "The compliance automation and real-time monitoring features have saved us countless hours and significantly improved our security posture.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Alex Thompson",
      role: "Security Manager",
      company: "Tech Startup Hub",
      content: "Best cybersecurity investment we've made. The AI predictions are incredibly accurate and the automated response has prevented several potential breaches.",
      rating: 5,
      avatar: "AT"
    }
  ];

  const securityModules = [
    {
      title: "AI Threat Intelligence",
      description: "Real-time threat intelligence powered by machine learning algorithms that analyze global threat patterns and predict emerging risks",
      icon: <Brain className="w-8 h-8" />,
      features: ["Global threat monitoring", "Predictive threat analysis", "Custom threat feeds", "Automated threat hunting"]
    },
    {
      title: "Behavioral Analytics Engine",
      description: "Advanced user and entity behavior analytics (UEBA) that identifies anomalous activities and potential insider threats",
      icon: <Eye className="w-8 h-8" />,
      features: ["User behavior profiling", "Anomaly detection", "Risk scoring", "Insider threat prevention"]
    },
    {
      title: "Automated Incident Response",
      description: "AI-driven incident response that automatically contains threats, investigates incidents, and implements remediation measures",
      icon: <Zap className="w-8 h-8" />,
      features: ["Automated containment", "Forensic analysis", "Remediation workflows", "Recovery automation"]
    },
    {
      title: "Quantum-Safe Encryption",
      description: "Future-proof encryption solutions that protect against quantum computing threats and ensure long-term data security",
      icon: <Lock className="w-8 h-8" />,
      features: ["Quantum-resistant algorithms", "Post-quantum cryptography", "Key management", "Data sovereignty"]
    }
  ];

  const complianceStandards = [
    { name: "GDPR", description: "General Data Protection Regulation compliance" },
    { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
    { name: "SOX", description: "Sarbanes-Oxley Act compliance" },
    { name: "PCI DSS", description: "Payment Card Industry Data Security Standard" },
    { name: "ISO 27001", description: "Information Security Management System" },
    { name: "NIST", description: "National Institute of Standards and Technology" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Cybersecurity Suite Pro - Advanced AI-Powered Security | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your organization with Zion AI Cybersecurity Suite Pro. Advanced AI threat detection, behavioral analytics, and automated incident response. Get enterprise-grade security."
        />
        <meta
          name="keywords"
          content="AI cybersecurity, threat detection, behavioral analytics, incident response, security automation, compliance, enterprise security"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-cybersecurity-suite-pro" />
      </Helmet>
      <SEOOptimizer />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Cybersecurity
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Zion AI Cybersecurity
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Suite Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your organization with the most advanced AI-powered cybersecurity suite. 
                Real-time threat detection, behavioral analytics, and automated incident response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  href="/contact"
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Get Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </FuturisticButton>
                <FuturisticButton
                  href="#demo"
                  variant="outline"
                  className="border-red-500 text-red-300 hover:bg-red-500/20 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </FuturisticButton>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-300">Threat Prevention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">30s</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">1000+</div>
                <div className="text-gray-300">Enterprises Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Modules Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Advanced Security Modules
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered security solutions for complete protection
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {securityModules.map((module, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-red-900/30 border border-red-500/20"
                >
                  <div className="text-red-400 mb-4">{module.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {module.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {module.description}
                  </p>
                  <ul className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-red-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Core Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enterprise-grade security features powered by artificial intelligence
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-red-900/30 border border-red-500/20"
                >
                  <div className="text-red-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Compliance & Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet regulatory requirements with automated compliance monitoring and reporting
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {complianceStandards.map((standard, index) => (
                <FuturisticCard
                  key={index}
                  className="p-6 text-center bg-gradient-to-br from-slate-800/50 to-red-900/30 border border-red-500/20"
                >
                  <div className="text-2xl font-bold text-red-400 mb-2">{standard.name}</div>
                  <div className="text-sm text-gray-300">{standard.description}</div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-red-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Enterprise Security Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security solutions for organizations of all sizes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard
                  key={index}
                  className={`p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-red-600/20 to-orange-600/20 border-red-500/50 scale-105'
                      : 'bg-gradient-to-br from-slate-800/50 to-red-900/30 border-red-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-red-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-gray-400 line-through">{plan.originalPrice}</span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        {plan.discount}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <FuturisticButton
                    href="/contact"
                    className={`w-full py-3 font-semibold rounded-xl ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white'
                        : 'border border-red-500 text-red-300 hover:bg-red-500/20'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our AI Security Suite?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enterprise-grade protection with AI-powered intelligence
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {benefits.map((benefit, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 text-center bg-gradient-to-br from-slate-800/50 to-red-900/30 border border-red-500/20"
                >
                  <div className="text-red-400 mb-4 mx-auto w-fit">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-red-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Security Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations are protecting their assets with AI-powered security
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-red-900/30 border border-red-500/20"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <FuturisticCard className="p-12 text-center bg-gradient-to-br from-red-600/20 to-orange-600/20 border border-red-500/50">
              <h2 className="text-4xl font-bold text-white mb-6">
                Secure Your Organization Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Don't wait for a security breach. Get enterprise-grade AI-powered protection 
                that adapts to evolving threats. Contact us for a free security assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  href="/contact"
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Get Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </FuturisticButton>
                <FuturisticButton
                  href="tel:+13024640950"
                  variant="outline"
                  className="border-red-500 text-red-300 hover:bg-red-500/20 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Call: +1 302 464 0950
                  <Phone className="ml-2 h-5 w-5" />
                </FuturisticButton>
              </div>
            </FuturisticCard>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}