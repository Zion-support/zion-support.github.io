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
  Play, 
  Download, 
  Share, 
  Settings, 
  Filter, 
  Search, 
  Target, 
  Activity, 
  Layers, 
  Globe, 
  Smartphone, 
  Monitor, 
  Database, 
  Cloud, 
  Award, 
  Rocket, 
  Brain, 
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
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  FileText, 
  MessageSquare, 
  Bell, 
  Heart, 
  ThumbsUp, 
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
  CalendarOganesson 
} from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

export default function ZionSecurityShield() {
  const features = [
    {
      title: "Real-time Threat Detection",
      description: "Advanced AI algorithms monitor your systems 24/7 to detect and prevent cyber threats",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Instant threat alerts", "AI-powered detection", "24/7 monitoring"]
    },
    {
      title: "Automated Vulnerability Scanning",
      description: "Comprehensive security scans identify weaknesses before attackers can exploit them",
      icon: <Search className="w-6 h-6" />,
      benefits: ["Regular security scans", "Vulnerability reports", "Patch recommendations"]
    },
    {
      title: "Compliance Monitoring",
      description: "Ensure compliance with GDPR, HIPAA, SOX, and other regulatory requirements",
      icon: <CheckCircle className="w-6 h-6" />,
      benefits: ["GDPR compliance", "HIPAA compliance", "SOX compliance", "Custom regulations"]
    },
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock monitoring by our expert security team",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["Expert monitoring", "Rapid response", "Incident management"]
    },
    {
      title: "Incident Response Automation",
      description: "Automated response to security incidents with predefined playbooks",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ["Automated responses", "Playbook execution", "Rapid containment"]
    },
    {
      title: "Data Encryption",
      description: "End-to-end encryption for data at rest and in transit",
      icon: <Lock className="w-6 h-6" />,
      benefits: ["AES-256 encryption", "Secure key management", "Zero-knowledge architecture"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic threat detection",
        "Monthly vulnerability scans",
        "Email support",
        "Standard compliance reports",
        "Up to 10 devices"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced threat detection",
        "Weekly vulnerability scans",
        "Priority support",
        "Advanced compliance monitoring",
        "Up to 50 devices",
        "Incident response automation",
        "Security training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Enterprise-grade security",
        "Daily vulnerability scans",
        "Dedicated support",
        "Custom compliance frameworks",
        "Unlimited devices",
        "Custom incident response",
        "Security consulting",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Financial Services Inc.",
      role: "CISO",
      content: "Zion Security Shield has reduced our security incidents by 95%. The real-time monitoring gives us peace of mind.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Wang",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The compliance monitoring features helped us achieve HIPAA compliance in record time. Highly recommended!",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "James Rodriguez",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The automated incident response saved us from a major breach. The AI detection is incredibly accurate.",
      rating: 5,
      avatar: "JR"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Threat Detection Accuracy", icon: <Shield className="w-6 h-6" /> },
    { number: "95%", label: "Reduction in Security Incidents", icon: <Activity className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Eye className="w-6 h-6" /> },
    { number: "100%", label: "Compliance Coverage", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Advanced Cybersecurity Protection | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your business with Zion Security Shield - advanced cybersecurity protection featuring real-time threat detection, vulnerability scanning, and compliance monitoring. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, vulnerability scanning, compliance monitoring, security protection, data encryption, incident response, security monitoring"
        />
      </Helmet>
      <SEOOptimizer
        title="Zion Security Shield - Advanced Cybersecurity Protection | Zion Tech Group"
        description="Protect your business with Zion Security Shield - advanced cybersecurity protection featuring real-time threat detection, vulnerability scanning, and compliance monitoring. Start your free trial today!"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 mb-6">
                <Shield className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-red-400 text-sm font-medium">#1 Cybersecurity Solution</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">
                  Zion Security Shield
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced cybersecurity protection with real-time threat detection, vulnerability scanning, 
                and compliance monitoring. Keep your business safe from evolving cyber threats.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Free 14-day trial</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">No setup fees</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 monitoring</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">Expert support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full mb-4">
                    <div className="text-red-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                  Advanced Security Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive cybersecurity protection for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-black/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                  Security Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the security level that matches your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular
                      ? "border-red-500/50 shadow-2xl shadow-red-500/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-400 hover:to-pink-400 transform hover:scale-105"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.popular ? "Start Free Trial" : "Get Started"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                  Trusted by Security Professionals
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See what security experts say about Zion Security Shield
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Protect Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a security breach. Start your free 14-day trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Shield className="mr-2 h-5 w-5" />
                View Pricing
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-red-400 hover:text-red-300">+1 302 464 0950</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}