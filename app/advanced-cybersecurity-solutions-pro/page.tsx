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
  Users,
  Zap,
  Sparkles
} from "lucide-react";
import SEOOptimizer from "@/components/SEOOptimizer";
import FuturisticCard from "@/components/FuturisticCard";
import FuturisticButton from "@/components/FuturisticButton";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import ResponsiveGrid from "@/components/ResponsiveGrid";

export default function AdvancedCybersecuritySolutionsPro() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero-Trust Architecture",
      description: "Implement comprehensive zero-trust security model with continuous verification and least-privilege access"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent sophisticated cyber threats in real-time"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Behavioral Analytics",
      description: "Monitor user and entity behavior patterns to identify anomalies and potential security breaches"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Advanced Encryption",
      description: "Military-grade encryption with quantum-resistant algorithms and automated key management"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Incident Response",
      description: "24/7 security operations center with automated incident response and forensic analysis"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Compliance Management",
      description: "Automated compliance monitoring for GDPR, HIPAA, SOX, PCI-DSS, and other regulatory requirements"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential Security",
      price: "$2,500",
      period: "/month",
      originalPrice: "$4,500",
      discount: "44% OFF",
      features: [
        "Basic threat detection",
        "Firewall management",
        "Antivirus protection",
        "Email security",
        "24/7 monitoring",
        "Monthly reports",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Advanced Security",
      price: "$7,500",
      period: "/month",
      originalPrice: "$15,000",
      discount: "50% OFF",
      features: [
        "Everything in Essential",
        "AI threat detection",
        "Behavioral analytics",
        "Incident response",
        "Compliance monitoring",
        "Security training",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise Security",
      price: "$15,000",
      period: "/month",
      originalPrice: "$30,000",
      discount: "50% OFF",
      features: [
        "Everything in Advanced",
        "Zero-trust architecture",
        "Advanced threat hunting",
        "Dedicated security team",
        "Custom security policies",
        "24/7 phone support",
        "White-label solution",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "99.9% Threat Prevention",
      description: "Advanced AI and machine learning block 99.9% of known and unknown cyber threats"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Response",
      description: "Automated threat response in under 30 seconds with 24/7 security monitoring"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Reduce Security Costs",
      description: "Consolidate security tools and reduce management overhead by 60%"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Compliance Ready",
      description: "Meet all major compliance requirements with automated monitoring and reporting"
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      role: "CISO",
      company: "Financial Services Group",
      content: "Zion's cybersecurity solutions have been a game-changer. We've prevented multiple sophisticated attacks and our security posture has never been stronger.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Lisa Rodriguez",
      role: "IT Security Director",
      company: "Healthcare Systems Inc",
      content: "The AI-powered threat detection caught several advanced persistent threats that traditional security tools missed. Excellent service and support.",
      rating: 5,
      avatar: "LR"
    },
    {
      name: "Michael Chen",
      role: "VP of Security",
      company: "Tech Startup Hub",
      content: "Best cybersecurity investment we've made. The automated incident response has saved us countless hours and prevented potential breaches.",
      rating: 5,
      avatar: "MC"
    }
  ];

  const securityServices = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security testing to identify vulnerabilities and assess security posture",
      icon: <Target className="w-8 h-8" />,
      features: ["Network penetration testing", "Web application testing", "Social engineering", "Physical security assessment"]
    },
    {
      title: "Security Auditing",
      description: "Thorough security audits to evaluate compliance and identify security gaps",
      icon: <Search className="w-8 h-8" />,
      features: ["Compliance auditing", "Risk assessment", "Security gap analysis", "Remediation planning"]
    },
    {
      title: "Incident Response",
      description: "Rapid response to security incidents with forensic analysis and recovery planning",
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ["24/7 incident response", "Forensic analysis", "Recovery planning", "Post-incident review"]
    },
    {
      title: "Security Training",
      description: "Comprehensive security awareness training for employees and IT staff",
      icon: <Users className="w-8 h-8" />,
      features: ["Security awareness training", "Phishing simulation", "Incident response training", "Compliance training"]
    }
  ];

  const complianceStandards = [
    { name: "GDPR", description: "General Data Protection Regulation compliance" },
    { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
    { name: "SOX", description: "Sarbanes-Oxley Act compliance" },
    { name: "PCI DSS", description: "Payment Card Industry Data Security Standard" },
    { name: "ISO 27001", description: "Information Security Management System" },
    { name: "NIST", description: "National Institute of Standards and Technology" },
    { name: "SOC 2", description: "Service Organization Control 2 compliance" },
    { name: "FISMA", description: "Federal Information Security Management Act" }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Cybersecurity Solutions Pro - Enterprise Security Services | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your organization with our advanced cybersecurity solutions. AI-powered threat detection, zero-trust architecture, and 24/7 monitoring. Get security assessment!"
        />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, zero-trust security, incident response, compliance, security audit, penetration testing"
        />
        <link rel="canonical" href="https://ziontechgroup.com/advanced-cybersecurity-solutions-pro" />
      </Helmet>
      <SEOOptimizer />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Advanced Cybersecurity
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Advanced Cybersecurity
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Solutions Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your organization with the most advanced cybersecurity solutions. 
                AI-powered threat detection, zero-trust architecture, and 24/7 security monitoring.
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
                <div className="text-gray-300">Organizations Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Services Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Comprehensive Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cybersecurity solutions for complete protection
              </p>
            </div>

            <ResponsiveGrid className="gap-8">
              {securityServices.map((service, index) => (
                <FuturisticCard
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-red-900/30 border border-red-500/20"
                >
                  <div className="text-red-400 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
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

        {/* Compliance Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-red-900/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Compliance & Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet regulatory requirements with automated compliance monitoring
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
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

        {/* Features Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge security technologies for maximum protection
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
                Why Choose Our Security Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enterprise-grade protection with advanced AI and machine learning
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
                See how organizations are protecting their assets with our security solutions
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
                Don't wait for a security breach. Get enterprise-grade protection that adapts to evolving threats. 
                Contact us for a free security assessment and consultation.
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