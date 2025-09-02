import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  BarChart3, 
  Lock,
  CheckCircle,
  Star,
  ArrowRight,
  Cpu,
  Database,
  Network,
  Globe,
  Users,
  Award,
  Rocket,
  Target,
  Lightbulb,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  Bell,
  Clock,
  Calendar,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  CheckSquare,
  FileText,
  Layers,
  GitBranch,
  RefreshCw,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  Wifi,
  Key,
  Fingerprint,
  Scan,
  Bug,
  Virus,
  Fire,
  AlertCircle,
  ShieldCheck,
  UserCheck,
  Activity,
  BarChart,
  PieChart,
  LineChart,
  Play
} from 'lucide-react';

const AICybersecurityOperationsCenter = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and respond to threats in real-time with 99.9% accuracy"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero-Day Attack Prevention",
      description: "Predictive AI models that identify and block unknown threats before they can cause damage"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Network Security Monitoring",
      description: "24/7 monitoring of network traffic with AI-driven anomaly detection and automated response"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Advanced Access Control",
      description: "Multi-factor authentication, biometric verification, and AI-powered user behavior analysis"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Threat Intelligence",
      description: "Real-time threat feeds from 200+ global sources with AI-powered correlation and analysis"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Automated Incident Response",
      description: "AI-driven incident triage, automated containment, and intelligent threat hunting"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "AI Threat Detection",
        "24/7 Security Monitoring",
        "Basic Incident Response",
        "Security Dashboard",
        "Email Support",
        "5 User Licenses",
        "Mobile App Access",
        "Basic Reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for mid-size companies and growing businesses",
      features: [
        "Advanced AI Algorithms",
        "Zero-Day Attack Prevention",
        "Advanced Analytics Dashboard",
        "API Integration",
        "Priority Support",
        "25 User Licenses",
        "Custom Security Policies",
        "Advanced Reporting",
        "Threat Intelligence Feed",
        "Automated Response"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large corporations and multinational companies",
      features: [
        "Full AI Security Suite",
        "Custom AI Model Training",
        "White-label Solutions",
        "Dedicated Security Team",
        "Unlimited Users",
        "Advanced API & SDK",
        "On-premise Deployment",
        "Custom Integrations",
        "Compliance Management",
        "24/7 Premium Support"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: "99.9% Threat Detection",
      description: "AI algorithms detect threats with unprecedented accuracy and speed"
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Zero False Positives",
      description: "Advanced ML reduces false alarms by 95% compared to traditional solutions"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "24/7 Protection",
      description: "Continuous monitoring and automated response ensure round-the-clock security"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Proactive Defense",
      description: "Predictive AI prevents attacks before they happen, not just after"
    }
  ];

  const securityServices = [
    {
      icon: <Eye className="w-8 h-8 text-blue-500" />,
      title: "Threat Hunting",
      description: "Proactive search for hidden threats using AI-powered analysis"
    },
    {
      icon: <Bug className="w-8 h-8 text-green-500" />,
      title: "Vulnerability Assessment",
      description: "Continuous scanning and AI-driven risk prioritization"
    },
    {
      icon: <Fire className="w-8 h-8 text-purple-500" />,
      title: "Incident Response",
      description: "Automated containment and AI-guided recovery procedures"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
      title: "Compliance Management",
      description: "Automated compliance monitoring and reporting for all major standards"
    }
  ];

  const complianceStandards = [
    "SOC 2 Type II",
    "ISO 27001",
    "GDPR",
    "HIPAA",
    "PCI DSS",
    "NIST Cybersecurity Framework",
    "CIS Controls",
    "FedRAMP"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-red-500 to-orange-600 p-3 rounded-full">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Operations Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your organization with the most advanced AI-powered cybersecurity platform. 
              Detect, prevent, and respond to threats in real-time with autonomous security operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Security Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of cybersecurity with cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-red-500 to-orange-600 p-3 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI-powered platform provides end-to-end cybersecurity protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Compliance Standards
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet all major cybersecurity compliance requirements with automated monitoring and reporting
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-red-500 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-red-500 to-orange-600 p-3 rounded-lg w-fit mx-auto mb-4">
                  <CheckSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{standard}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Security Platform?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your cybersecurity operations with unprecedented intelligence and automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Security Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the security plan that best fits your organization's needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-red-500 ring-2 ring-red-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 via-orange-900/20 to-yellow-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies already using our AI-powered cybersecurity platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-400">
              Ready to discuss how our AI Cybersecurity Operations Center can protect your organization?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="https://ziontechgroup.com/services" className="block text-red-400 hover:text-red-300 transition-colors">
                  All Services
                </a>
                <a href="https://ziontechgroup.com/pricing" className="block text-red-400 hover:text-red-300 transition-colors">
                  Pricing Guide
                </a>
                <a href="https://ziontechgroup.com/case-studies" className="block text-red-400 hover:text-red-300 transition-colors">
                  Case Studies
                </a>
                <a href="https://ziontechgroup.com/contact" className="block text-red-400 hover:text-red-300 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityOperationsCenter;