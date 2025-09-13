import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Cloud, Brain, Globe, Lock, Cpu } from 'lucide-react';

const RevolutionaryServicesShowcase2025: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "AI-Powered Business Automation Suite",
      price: "$299/month",
      originalPrice: "$800/month",
      savings: "63% OFF",
      description: "Transform your business operations with cutting-edge AI automation that reduces costs by 60% and increases productivity by 300%.",
      features: [
        "Intelligent Process Automation",
        "Predictive Analytics Dashboard", 
        "Multi-language AI Support",
        "Real-time Performance Monitoring",
        "Custom AI Model Training",
        "24/7 Automated Operations"
      ],
      category: "AI & Automation",
      icon: Brain,
      popular: true,
      new: true
    },
    {
      id: 2,
      title: "Quantum Computing Solutions Platform",
      price: "$1,999/month",
      originalPrice: "$5,000/month",
      savings: "60% OFF",
      description: "Harness the power of quantum computing for complex problem-solving, optimization, and breakthrough innovations.",
      features: [
        "Quantum Algorithm Development",
        "Advanced Optimization Solutions",
        "Cryptographic Security",
        "Research Collaboration Tools",
        "Quantum Circuit Design",
        "Performance Analytics"
      ],
      category: "Quantum Computing",
      icon: Cpu,
      popular: false,
      new: true
    },
    {
      id: 3,
      title: "Advanced Cybersecurity Defense System",
      price: "$899/month",
      originalPrice: "$2,400/month",
      savings: "63% OFF",
      description: "Protect your organization with AI-powered threat detection, zero-trust architecture, and autonomous security response.",
      features: [
        "AI Threat Detection & Response",
        "Zero-Trust Security Architecture",
        "Behavioral Analytics",
        "Automated Incident Response",
        "Compliance Management",
        "24/7 Security Monitoring"
      ],
      category: "Cybersecurity",
      icon: Shield,
      popular: true,
      new: false
    },
    {
      id: 4,
      title: "Cloud Infrastructure Optimization",
      price: "$599/month",
      originalPrice: "$1,500/month",
      savings: "60% OFF",
      description: "Maximize your cloud investment with intelligent optimization, cost reduction, and performance enhancement.",
      features: [
        "Multi-Cloud Management",
        "Cost Optimization Analytics",
        "Auto-scaling Solutions",
        "Disaster Recovery Planning",
        "Performance Monitoring",
        "Security Hardening"
      ],
      category: "Cloud & DevOps",
      icon: Cloud,
      popular: false,
      new: true
    },
    {
      id: 5,
      title: "Blockchain & Web3 Development Platform",
      price: "$1,299/month",
      originalPrice: "$3,200/month",
      savings: "59% OFF",
      description: "Build decentralized applications, smart contracts, and Web3 solutions with enterprise-grade security.",
      features: [
        "Smart Contract Development",
        "DeFi Protocol Creation",
        "NFT Marketplace Solutions",
        "Cross-chain Integration",
        "Security Auditing",
        "Token Economics Design"
      ],
      category: "Blockchain & Web3",
      icon: Lock,
      popular: true,
      new: true
    },
    {
      id: 6,
      title: "IoT & Edge Computing Solutions",
      price: "$799/month",
      originalPrice: "$2,000/month",
      savings: "60% OFF",
      description: "Connect and optimize your devices with intelligent IoT solutions and edge computing capabilities.",
      features: [
        "Device Management Platform",
        "Edge Computing Infrastructure",
        "Real-time Data Analytics",
        "Predictive Maintenance",
        "Remote Monitoring",
        "Integration APIs"
      ],
      category: "IoT & Edge Computing",
      icon: Globe,
      popular: false,
      new: true
    }
  ];

  const stats = [
    { value: "500+", label: "Successful Projects" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "60%", label: "Average Cost Savings" },
    { value: "24/7", label: "Expert Support" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-400/30 mb-6">
            <Zap className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300 font-medium">Revolutionary Services 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our comprehensive suite of revolutionary technology services designed to accelerate your digital transformation and drive unprecedented growth.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-purple-400/50 transition-all duration-300 ${
                service.popular ? 'ring-2 ring-purple-400/50' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                {service.new && (
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                    NEW
                  </span>
                )}
                {service.popular && (
                  <span className="px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">
                    MOST POPULAR
                  </span>
                )}
              </div>

              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-purple-400 font-medium">{service.category}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <span className="ml-3 text-sm text-gray-400 line-through">{service.originalPrice}</span>
                  <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded">
                    {service.savings}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="px-6 pb-6">
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-purple-400 font-medium">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl border border-purple-400/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our expert team can create a tailored solution that perfectly fits your business needs and objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryServicesShowcase2025;