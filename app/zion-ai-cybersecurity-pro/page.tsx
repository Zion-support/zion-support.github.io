import React from "react";
import { ArrowRight, CheckCircle, Star, Shield, Lock, Eye, Zap, Sparkles, Clock, DollarSign, Globe, Smartphone, Monitor, Headphones, Mic, Camera, Image, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, Banknote, Coins, Gift, Tag, Percent, Calculator, PieChart, LineChart, Activity, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Scanner, Fax, Phone, Voicemail, Headset, Speaker, Volume2, VolumeX, Play as PlayIcon, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass, Target, Users, BarChart3, Code, Database, Mail, MessageSquare, Calendar, Search, Filter, Download, Upload, Share, Bell, Heart, ThumbsUp, Award, Rocket, Cpu, Wifi, Battery, Headphones as HeadphonesIcon, AlertTriangle, Bug, Key, Fingerprint, Scan, Network, Server, Database as DatabaseIcon, Cloud, Brain, Bot, Settings, Wrench, Tool, Hammer, Wrench as WrenchIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";

export default function ZionAICybersecurityPro() {
  const features = [
    "AI-powered threat detection and prevention",
    "Real-time network monitoring and analysis",
    "Automated incident response and remediation",
    "Advanced behavioral analytics and anomaly detection",
    "Zero-day vulnerability protection",
    "Intelligent firewall and intrusion prevention",
    "Automated security patch management",
    "Compliance monitoring and reporting (GDPR, HIPAA, SOX)",
    "AI-powered phishing and malware detection",
    "Advanced encryption and data protection",
    "24/7 AI security monitoring",
    "Custom security policy enforcement"
  ];

  const pricingTiers = [
    {
      name: "Essential",
      price: "$199",
      period: "/month",
      originalPrice: "$399",
      discount: "50% OFF",
      features: [
        "Up to 50 devices",
        "Basic AI threat detection",
        "Email security",
        "Web filtering",
        "Basic reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      originalPrice: "$799",
      discount: "50% OFF",
      features: [
        "Up to 200 devices",
        "Advanced AI threat detection",
        "Full network protection",
        "Advanced reporting",
        "Priority support",
        "Compliance monitoring",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      originalPrice: "$1599",
      discount: "50% OFF",
      features: [
        "Unlimited devices",
        "All AI security features",
        "Custom AI training",
        "24/7 dedicated support",
        "White-label options",
        "On-premise deployment",
        "SLA guarantee",
        "Custom security policies"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      company: "Financial Services Corp",
      role: "CISO",
      content: "Zion AI Cybersecurity Pro has reduced our security incidents by 95%. The AI threat detection is incredibly accurate and fast.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Jennifer Lee",
      company: "Healthcare Systems",
      role: "Security Director",
      content: "The automated compliance monitoring and reporting features have saved us countless hours and ensured we meet all regulatory requirements.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Platform",
      role: "CTO",
      content: "The AI-powered behavioral analytics caught several insider threats we would have missed. It's like having a security expert watching 24/7.",
      rating: 5,
      avatar: "MC"
    }
  ];

  const securityFeatures = [
    {
      title: "Threat Detection",
      description: "AI identifies and blocks threats in real-time",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Behavioral Analytics",
      description: "Monitors user behavior for anomalies and threats",
      icon: <Eye className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Incident Response",
      description: "Automated response and remediation of security events",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Compliance Monitoring",
      description: "Ensures adherence to security regulations and standards",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500"
    }
  ];

  const threatTypes = [
    {
      title: "Malware Protection",
      description: "AI-powered detection and prevention of all malware types",
      icon: <Bug className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Phishing Defense",
      description: "Advanced email and web phishing protection",
      icon: <Mail className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "DDoS Mitigation",
      description: "Intelligent traffic analysis and attack prevention",
      icon: <Network className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Insider Threats",
      description: "Behavioral analysis to detect malicious insiders",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const complianceStandards = [
    "GDPR (General Data Protection Regulation)",
    "HIPAA (Health Insurance Portability and Accountability Act)",
    "SOX (Sarbanes-Oxley Act)",
    "PCI DSS (Payment Card Industry Data Security Standard)",
    "ISO 27001 (Information Security Management)",
    "NIST Cybersecurity Framework",
    "SOC 2 Type II",
    "FedRAMP (Federal Risk and Authorization Management Program)"
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Cybersecurity Pro - Advanced AI Security Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionary AI-powered cybersecurity platform with advanced threat detection, behavioral analytics, automated incident response, and compliance monitoring. Protect your business 24/7."
        />
        <meta
          name="keywords"
          content="AI cybersecurity, threat detection, security monitoring, incident response, compliance monitoring, behavioral analytics, malware protection, phishing defense, DDoS mitigation"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-cybersecurity-pro" />
      </Helmet>
      <SEOOptimizer
        title="Zion AI Cybersecurity Pro - Advanced AI Security Platform | Zion Tech Group"
        description="Revolutionary AI-powered cybersecurity platform with advanced threat detection, behavioral analytics, automated incident response, and compliance monitoring. Protect your business 24/7."
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
              <Shield className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-red-400 text-sm font-medium">Advanced AI Security Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Zion AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 animate-pulse">
                {" "}Cybersecurity Pro
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The future of cybersecurity is here. Protect your business with AI-powered threat detection, 
              behavioral analytics, and automated incident response. Stay one step ahead of cybercriminals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Shield className="w-5 h-5" />}
              >
                Get Security Assessment
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                Watch Demo
              </FuturisticButton>
            </div>
            
            {/* Security Dashboard Preview */}
            <div className="relative max-w-6xl mx-auto mb-16">
              <div className="aspect-video bg-gradient-to-br from-slate-800/50 to-red-800/50 rounded-2xl border border-red-500/20 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI Security Command Center</h3>
                    <p className="text-gray-300">See how AI protects your business 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                AI-Powered Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Advanced artificial intelligence to protect your business from all cyber threats
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="group cursor-pointer text-center"
                  glowColor="red"
                >
                  <div className="p-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Protection */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Threat Protection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect against all types of cyber threats with AI-powered detection and prevention
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threatTypes.map((threat, index) => (
                <FuturisticCard
                  key={index}
                  className="group cursor-pointer text-center"
                  glowColor="orange"
                >
                  <div className="p-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${threat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {threat.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {threat.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                      {threat.description}
                    </p>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Security Solution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to protect your business from cyber threats
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="group cursor-pointer"
                  glowColor="purple"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-red-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                        {feature}
                      </h3>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance & Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet all regulatory requirements with automated compliance monitoring
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <FuturisticCard
                  key={index}
                  className="group cursor-pointer text-center"
                  glowColor="green"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                      {standard}
                    </h3>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Security Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our free security assessment and choose the plan that fits your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <FuturisticCard
                  key={index}
                  className={`group cursor-pointer relative ${tier.popular ? 'ring-2 ring-red-500' : ''}`}
                  glowColor={tier.popular ? "red" : "purple"}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-4xl font-bold text-red-400">{tier.price}</span>
                        <span className="text-gray-400">{tier.period}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-sm text-gray-500 line-through">{tier.originalPrice}</span>
                        <span className="text-sm text-green-400 font-semibold">{tier.discount}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <FuturisticButton
                      href="/contact"
                      variant={tier.popular ? "primary" : "outline"}
                      size="lg"
                      className="w-full"
                    >
                      {tier.popular ? "Get Security Assessment" : "Learn More"}
                    </FuturisticButton>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of organizations who trust Zion AI Cybersecurity Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard
                  key={index}
                  className="group"
                  glowColor="red"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't wait for a cyber attack. Protect your business with AI-powered cybersecurity. 
              Get a free security assessment today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Shield className="w-5 h-5" />}
              >
                Get Security Assessment
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                Watch Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-red-400 hover:text-red-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}