import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, AlertTriangle, Zap, CheckCircle, ArrowRight,
  Users, Activity, Database, BarChart3, Calendar, Clock, Globe, 
  Smartphone, Monitor, Tablet, Server, Network, Wifi, ShieldCheck,
  Bot, Workflow, Brain, Atom, Leaf, Gamepad2, Coins, Satellite,
  MessageCircle, Search, Settings, Palette, Cpu, HardDrive
} from 'lucide-react';

export default function EnterpriseCybersecurityPlatform(props: any) {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection and prevention with real-time monitoring"
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Comprehensive zero trust architecture with identity verification"
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 security operations center with automated incident response"
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Management",
      description: "Automated vulnerability scanning and patch management"
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Rapid incident response with automated containment and recovery"
    },
    {
      icon: Brain,
      title: "AI Security Analytics",
      description: "Machine learning-powered security analytics and threat intelligence"
    }
  ];

  const benefits = [
    "Reduce security incidents by 90% with advanced threat detection",
    "Achieve 99.9% uptime with comprehensive security monitoring",
    "Comply with industry standards (SOC 2, ISO 27001, GDPR)",
    "Reduce security costs by 60% with automated incident response",
    "Protect against 99.9% of known and unknown threats",
    "Get real-time security insights and threat intelligence"
  ];

  const securityModules = [
    {
      icon: Shield,
      title: "Network Security",
      description: "Advanced firewall, intrusion detection, and network monitoring",
      features: ["Next-gen firewall", "IDS/IPS", "Network segmentation"]
    },
    {
      icon: Lock,
      title: "Identity & Access",
      description: "Multi-factor authentication and privileged access management",
      features: ["SSO integration", "MFA enforcement", "Role-based access"]
    },
    {
      icon: Eye,
      title: "Endpoint Security",
      description: "Comprehensive endpoint protection and device management",
      features: ["Antivirus", "EDR", "Device control"]
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Encryption, data loss prevention, and backup solutions",
      features: ["Data encryption", "DLP", "Backup & recovery"]
    }
  ];

  const complianceStandards = [
    {
      name: "SOC 2 Type II",
      icon: CheckCircle,
      description: "Service Organization Control 2 compliance"
    },
    {
      name: "ISO 27001",
      icon: CheckCircle,
      description: "Information security management certification"
    },
    {
      name: "GDPR",
      icon: CheckCircle,
      description: "General Data Protection Regulation compliance"
    },
    {
      name: "HIPAA",
      icon: CheckCircle,
      description: "Healthcare data protection standards"
    },
    {
      name: "PCI DSS",
      icon: CheckCircle,
      description: "Payment card industry security standards"
    },
    {
      name: "NIST",
      icon: CheckCircle,
      description: "National Institute of Standards and Technology"
    }
  ];

  const pricing = [
    {
      name: "Essential",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic threat detection",
        "Firewall protection",
        "Vulnerability scanning",
        "Email security",
        "24/7 monitoring",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses and enterprises",
      features: [
        "Advanced threat detection",
        "Zero trust security",
        "Incident response",
        "Compliance reporting",
        "Priority support",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Comprehensive security for large organizations",
      features: [
        "Everything in Professional",
        "Custom security policies",
        "Dedicated security team",
        "Advanced analytics",
        "On-premise deployment",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Enterprise Cybersecurity</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise Cybersecurity Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your organization with comprehensive cybersecurity solutions featuring 
              AI-powered threat detection, zero trust security, and 24/7 monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced cybersecurity tools to protect your organization from all types of threats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Enterprise Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your organization with industry-leading security solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Modules Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Security Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security modules to protect every aspect of your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600/50"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg mr-4">
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{module.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Compliance Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet and exceed industry security and compliance requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 text-center"
              >
                <CheckCircle className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{standard.name}</h3>
                <p className="text-gray-300 text-sm">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Security Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your security needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-orange-500/50 shadow-lg shadow-orange-500/25' 
                    : 'border-slate-600/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25'
                      : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of organizations who trust our cybersecurity platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
              >
                Start Your Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-400 hover:text-white transition-all duration-300"
              >
                Schedule Security Audit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>