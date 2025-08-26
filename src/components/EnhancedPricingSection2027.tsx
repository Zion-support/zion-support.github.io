import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight, 
  Crown, 
  Rocket, 
  Building,
  Brain,
  Network,
  Heart,
  DollarSign,
  Eye,
  Target,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  Info,
  TrendingUp,
  Award,
  Sparkles,
  Calculator,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  RotateCcw,
  Settings,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Briefcase,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  User,
  Users2,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserTag,
  UserCheck3,
  UserCheck4,
  UserCheck5,
  UserCheck6,
  UserCheck7,
  UserCheck8,
  UserCheck9,
  UserCheck10
} from 'lucide-react';

export function EnhancedPricingSection2027() {
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'plans' | 'services' | 'enterprise' | 'comparison'>('plans');

  const plans = [
    {
      name: "Starter",
      price: 99,
      period: "month",
      description: "Perfect for small businesses and startups",
      icon: <Rocket className="w-8 h-8"/>,
      color: "from-zion-cyan to-zion-blue",
      bgColor: "from-zion-cyan/20 to-zion-blue/20",
      features: [
        "Up to 5 team members",
        "Basic AI tools access",
        "Email support",
        "Standard templates",
        "1 project at a time",
        "Basic analytics",
        "Community forum access",
        "Monthly updates"
      ],
      notIncluded: [
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "White-label options",
        "Advanced AI models",
        "Custom training",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Get Started",
      savings: "Save 20% with annual billing"
    },
    {
      name: "Professional",
      price: 299,
      period: "month",
      description: "Ideal for growing companies and teams",
      icon: <Building className="w-8 h-8"/>,
      color: "from-zion-purple to-zion-purple-dark",
      bgColor: "from-zion-purple/20 to-zion-purple-dark/20",
      features: [
        "Up to 25 team members",
        "Full AI tools access",
        "Priority email support",
        "Advanced templates",
        "Unlimited projects",
        "Team collaboration",
        "Advanced analytics",
        "Custom integrations",
        "API access",
        "White-label options",
        "Advanced AI models",
        "Custom training data"
      ],
      notIncluded: [
        "Custom AI model development",
        "Dedicated account manager",
        "On-premise deployment",
        "SLA guarantees",
        "Custom compliance"
      ],
      popular: true,
      cta: "Start Free Trial",
      savings: "Save 25% with annual billing"
    },
    {
      name: "Enterprise",
      price: 999,
      period: "month",
      description: "For large organizations with complex needs",
      icon: <Crown className="w-8 h-8"/>,
      color: "from-zion-cyan-light to-zion-purple",
      bgColor: "from-zion-cyan-light/20 to-zion-purple/20",
      features: [
        "Unlimited team members",
        "All AI tools + custom models",
        "24/7 phone support",
        "Custom templates",
        "Unlimited projects",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees",
        "On-premise options",
        "Custom AI model development",
        "Custom training data",
        "Custom compliance",
        "White-label solutions",
        "Priority feature development"
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Sales",
      savings: "Save 30% with annual billing"
    }
  ];

  const addons = [
    {
      name: "AI Model Training",
      price: 199,
      period: "month",
      description: "Custom AI model training and optimization",
      icon: <Brain className="w-6 h-6"/>,
      features: ["Custom model training", "Performance optimization", "Model monitoring", "Continuous learning", "Model versioning"]
    },
    {
      name: "Premium Support",
      price: 99,
      period: "month",
      description: "24/7 dedicated support with guaranteed response times",
      icon: <Shield className="w-6 h-6"/>,
      features: ["24/7 phone support", "Guaranteed 2-hour response", "Dedicated support team", "Priority ticket handling", "Custom training sessions"]
    },
    {
      name: "Advanced Analytics",
      price: 149,
      period: "month",
      description: "Comprehensive analytics and reporting suite",
      icon: <BarChart3 className="w-6 h-6"/>,
      features: ["Custom dashboards", "Advanced reporting", "Data export options", "Predictive analytics", "Real-time monitoring"]
    },
    {
      name: "Custom Integration",
      price: 299,
      period: "month",
      description: "Custom system integration and API development",
      icon: <Network className="w-6 h-6"/>,
      features: ["Custom API development", "System integration", "Data migration", "Custom workflows", "Third-party integrations"]
    },
    {
      name: "White-Label Solution",
      price: 399,
      period: "month",
      description: "Complete white-label solution for resellers",
      icon: <Building className="w-6 h-6"/>,
      features: ["Custom branding", "Reseller dashboard", "Revenue sharing", "Custom domain", "Branded support"]
    },
    {
      name: "Compliance & Security",
      price: 199,
      period: "month",
      description: "Advanced compliance and security features",
      icon: <Shield className="w-6 h-6"/>,
      features: ["SOC 2 compliance", "GDPR compliance", "HIPAA compliance", "Advanced encryption", "Audit trails"]
    }
  ];

  const serviceCategories = [
    {
      name: "AI Services",
      icon: <Brain className="w-6 h-6" />,
      services: [
        { name: "AI Autonomous Trading", price: 8999, period: "month", features: ["AI-powered trading", "Risk management", "Portfolio optimization"] },
        { name: "AI Consciousness Simulator", price: 15999, period: "month", features: ["Quantum consciousness", "AI research tools", "Ethical framework"] },
        { name: "AI Business Operations", price: 5999, period: "month", features: ["Business automation", "Decision making", "Process optimization"] }
      ]
    },
    {
      name: "Blockchain & Web3",
      icon: <Network className="w-6 h-6" />,
      services: [
        { name: "Quantum-Secure Blockchain", price: 3999, period: "month", features: ["Quantum cryptography", "Smart contracts", "DeFi integration"] }
      ]
    },
    {
      name: "Healthcare Technology",
      icon: <Heart className="w-6 h-6" />,
      services: [
        { name: "AI Healthcare Diagnosis", price: 6999, period: "month", features: ["AI diagnosis", "Treatment recommendations", "Patient monitoring"] }
      ]
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      services: [
        { name: "Autonomous Cybersecurity", price: 4999, period: "month", features: ["Threat detection", "Automated response", "Zero-trust architecture"] }
      ]
    },
    {
      name: "Emerging Technology",
      icon: <Rocket className="w-6 h-6" />,
      services: [
        { name: "Quantum Computing as a Service", price: 12999, period: "month", features: ["Quantum processors", "Algorithm library", "Research tools"] }
      ]
    },
    {
      name: "Business Solutions",
      icon: <Briefcase className="w-6 h-6" />,
      services: [
        { name: "Supply Chain Optimization", price: 3999, period: "month", features: ["AI forecasting", "Inventory optimization", "Route optimization"] }
      ]
    },
    {
      name: "Content Creation",
      icon: <FileText className="w-6 h-6" />,
      services: [
        { name: "Autonomous Content Creation", price: 2999, period: "month", features: ["AI content generation", "Multi-format support", "Brand consistency"] }
      ]
    }
  ];

  const getDiscountedPrice = (price: number) => {
    const discount = billingPeriod === 'year' ? (billingPeriod === 'year' ? 0.25 : 0) : 0;
    return Math.round(price * (1 - discount));
  };

  const getAnnualSavings = (price: number) => {
    if (billingPeriod === 'year') {
      return Math.round(price * 12 * 0.25);
    }
    return 0;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-zion-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <DollarSign className="h-8 w-8 text-zion-cyan" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Comprehensive <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Pricing</span> 2027
            </h2>
            <DollarSign className="h-8 w-8 text-zion-cyan" />
          </div>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your business. All plans include our core features with transparent pricing and no hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-zion-blue-dark/40 rounded-xl p-1 border border-zion-blue-light/30">
            <button 
              onClick={() => setBillingPeriod('month')} 
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                billingPeriod === 'month'
                  ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                  : 'text-zion-slate-light hover:text-zion-cyan'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingPeriod('year')} 
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                billingPeriod === 'year'
                  ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                  : 'text-zion-slate-light hover:text-zion-cyan'
              }`}
            >
              Annual
              <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">Save up to 30%</span>
            </button>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {[
            { id: 'plans', name: 'Subscription Plans', icon: <Crown className="h-4 w-4" /> },
            { id: 'services', name: 'Individual Services', icon: <Rocket className="h-4 w-4" /> },
            { id: 'enterprise', name: 'Enterprise Solutions', icon: <Building className="h-4 w-4" /> },
            { id: 'comparison', name: 'Plan Comparison', icon: <BarChart3 className="h-4 w-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan border border-zion-cyan/20'
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </motion.div>

        {/* Content based on active tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'plans' && (
            <motion.div
              key="plans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              variants={containerVariants}
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  variants={itemVariants}
                  className={`relative group ${
                    plan.popular 
                      ? 'ring-2 ring-zion-cyan ring-offset-4 ring-offset-zion-slate-dark' 
                      : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`h-full bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-slate-dark/70 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 ${
                    plan.popular ? 'bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10' : ''
                  }`}>
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-zion-slate-light mb-4">{plan.description}</p>
                      <div className="mb-2">
                        <span className="text-4xl font-bold text-zion-cyan">
                          ${getDiscountedPrice(plan.price)}
                        </span>
                        <span className="text-zion-slate-light">/{billingPeriod}</span>
                      </div>
                      {billingPeriod === 'year' && (
                        <div className="text-green-400 text-sm font-medium">
                          Save ${getAnnualSavings(plan.price)} annually
                        </div>
                      )}
                    </div>

                    <div className="space-y-4 mb-8">
                      <h4 className="text-white font-semibold text-lg">What's included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                            <span className="text-zion-slate-light">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.notIncluded.length > 0 && (
                      <div className="space-y-4 mb-8">
                        <h4 className="text-zion-slate-light font-semibold text-lg">Not included:</h4>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <X className="w-5 h-5 text-zion-slate-light mt-0.5 flex-shrink-0" />
                              <span className="text-zion-slate-light">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <button className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan/90 hover:to-zion-purple/90'
                        : 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 hover:bg-zion-cyan/30'
                    }`}>
                      {plan.cta}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/30 border border-zion-cyan/20 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl border border-zion-cyan/30">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                        <div className="text-2xl font-bold text-zion-cyan mb-4">
                          ${service.price.toLocaleString()}/{service.period}
                        </div>
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <Check className="w-4 h-4 text-zion-cyan" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 px-4 rounded-lg font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'enterprise' && (
            <motion.div
              key="enterprise"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12 max-w-4xl mx-auto">
                <Crown className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">
                  Enterprise Solutions
                </h3>
                <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
                  For large organizations with complex requirements, we offer custom enterprise solutions 
                  tailored to your specific needs, compliance requirements, and business objectives.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-white mb-4">Enterprise Features</h4>
                    <ul className="space-y-3 text-zion-slate-light">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-zion-cyan" />
                        Custom AI model development
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-zion-cyan" />
                        On-premise deployment options
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-zion-cyan" />
                        Custom compliance frameworks
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-zion-cyan" />
                        Dedicated account management
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-zion-cyan" />
                        SLA guarantees
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-white mb-4">Contact Information</h4>
                    <div className="space-y-3 text-zion-slate-light">
                      <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-zion-cyan" />
                        +1 302 464 0950
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-zion-cyan" />
                        kleber@ziontechgroup.com
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-zion-cyan" />
                        https://ziontechgroup.com
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-zion-cyan" />
                        364 E Main St STE 1008 Middletown DE 19709
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solution Inquiry"
                    className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
                  >
                    Contact Enterprise Sales
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border border-zion-cyan/50 text-zion-cyan px-8 py-4 rounded-xl font-medium hover:bg-zion-cyan/10 transition-all duration-300"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'comparison' && (
            <motion.div
              key="comparison"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="overflow-x-auto"
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zion-cyan/20">
                    <th className="text-left p-4 text-zion-slate-light font-medium">Feature</th>
                    <th className="text-center p-4 text-zion-slate-light font-medium">Starter</th>
                    <th className="text-center p-4 text-zion-slate-light font-medium">Professional</th>
                    <th className="text-center p-4 text-zion-slate-light font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zion-cyan/10">
                  {[
                    { feature: "Team Members", starter: "Up to 5", professional: "Up to 25", enterprise: "Unlimited" },
                    { feature: "AI Tools Access", starter: "Basic", professional: "Full", enterprise: "Full + Custom" },
                    { feature: "Support", starter: "Email", professional: "Priority Email", enterprise: "24/7 Phone" },
                    { feature: "Projects", starter: "1 at a time", professional: "Unlimited", enterprise: "Unlimited" },
                    { feature: "Analytics", starter: "Basic", professional: "Advanced", enterprise: "Advanced + Custom" },
                    { feature: "Integrations", starter: "Standard", professional: "Custom", enterprise: "Custom + API" },
                    { feature: "Account Manager", starter: "No", professional: "No", enterprise: "Dedicated" },
                    { feature: "SLA Guarantees", starter: "No", professional: "No", enterprise: "Yes" },
                    { feature: "On-Premise", starter: "No", professional: "No", enterprise: "Yes" },
                    { feature: "Custom AI Models", starter: "No", professional: "No", enterprise: "Yes" }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-zion-slate-dark/30 transition-colors duration-200">
                      <td className="p-4 text-white font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-zion-slate-light">{row.starter}</td>
                      <td className="p-4 text-center text-zion-slate-light">{row.professional}</td>
                      <td className="p-4 text-center text-zion-slate-light">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Additional <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Add-ons</span>
            </h3>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Enhance your plan with powerful add-ons designed to meet your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-slate-dark/70 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl border border-zion-cyan/30">
                    {addon.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{addon.name}</h4>
                    <div className="text-zion-cyan font-bold">
                      ${addon.price}/{addon.period}
                    </div>
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-4">{addon.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <Check className="w-4 h-4 text-zion-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 py-2 px-4 rounded-lg font-medium hover:bg-zion-cyan/30 transition-all duration-300">
                  Add to Plan
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Choose the perfect plan for your business and start transforming your operations with our innovative AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border border-zion-cyan/50 text-zion-cyan px-8 py-4 rounded-xl font-medium hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}