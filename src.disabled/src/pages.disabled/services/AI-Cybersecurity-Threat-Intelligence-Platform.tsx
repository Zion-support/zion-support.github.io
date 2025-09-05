import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Zap, 
  Lock, 
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Database,
  Activity,
  Lightbulb,
  Rocket,
  Award,
  Clock,
  DollarSign,
  Target,
  Users,
  BarChart3,
  TrendingUp,
  Brain,
  Server,
  Network,
  Code,
  Search
} from 'lucide-react';

export default function AICybersecurityThreatIntelligencePlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that identify and analyze threats in real-time with 99.9% accuracy"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 continuous monitoring of your entire digital infrastructure with instant threat alerts"
    },
    {
      icon: AlertTriangle,
      title: "Predictive Threat Intelligence",
      description: "Anticipate and prevent cyber attacks before they happen using predictive analytics"
    },
    {
      icon: Shield,
      title: "Automated Response",
      description: "Instant automated threat response and mitigation to minimize damage and downtime"
    },
    {
      icon: Globe,
      title: "Global Threat Database",
      description: "Access to the world's largest threat intelligence database with real-time updates"
    },
    {
      icon: Zap,
      title: "Zero-Day Protection",
      description: "Protection against unknown threats using behavioral analysis and anomaly detection"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 100 endpoints",
        "Basic threat detection",
        "Email alerts",
        "24/7 monitoring",
        "Basic support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 1,000 endpoints",
        "Advanced AI detection",
        "Real-time alerts",
        "Automated response",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large enterprises",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Custom development",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "99.9% Threat Detection",
      description: "Industry-leading accuracy in identifying and preventing cyber threats"
    },
    {
      icon: Clock,
      title: "Real-time Response",
      description: "Instant threat response in milliseconds, not minutes"
    },
    {
      icon: DollarSign,
      title: "Cost Protection",
      description: "Prevent costly data breaches and downtime"
    },
    {
      icon: Users,
      title: "Compliance Ready",
      description: "Meet all major compliance requirements automatically"
    }
  ];

  const threatTypes = [
    {
      name: "Malware & Ransomware",
      description: "Advanced detection and prevention of malicious software",
      icon: Code
    },
    {
      name: "Phishing Attacks",
      description: "AI-powered detection of sophisticated phishing attempts",
      icon: Users
    },
    {
      name: "DDoS Attacks",
      description: "Real-time mitigation of distributed denial of service attacks",
      icon: Network
    },
    {
      name: "Data Exfiltration",
      description: "Prevent unauthorized data access and theft",
      icon: Database
    },
    {
      name: "Insider Threats",
      description: "Monitor and detect malicious insider activities",
      icon: Eye
    },
    {
      name: "Zero-Day Exploits",
      description: "Protection against unknown vulnerabilities",
      icon: AlertTriangle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 text-red-400 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Cybersecurity
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stay Ahead of
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> Cyber Threats</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our AI-powered Cybersecurity Threat Intelligence Platform provides real-time threat detection, 
              predictive analytics, and automated response to protect your business from evolving cyber risks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-red-600 text-red-400 font-semibold rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300">
                Schedule Demo
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
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive cybersecurity protection powered by cutting-edge AI technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Protect against all types of cyber threats with our advanced AI-powered security platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <threat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{threat.name}</h3>
                <p className="text-gray-300">{threat.description}</p>
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
              Choose Your Security Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to protect businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-red-500/50 bg-red-500/5' 
                    : 'border-white/10'
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
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
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

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-orange-600 hover:to-red-600'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven results and industry-leading technology that keeps your business secure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that trust our AI-powered cybersecurity platform to protect their digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-red-600 text-red-400 font-semibold rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}