import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Cpu, Database, Zap, Brain, CheckCircle, ArrowRight, Star, Phone, Mail, Activity, Search, BookOpen, Lightbulb, ThumbsUp, MessageCircle, HelpCircle, Server, Network, Key, Fingerprint, Scan, Cloud, HardDrive, Smartphone, Tablet, Monitor, Router, Sensor, Thermometer, Home, Building } from 'lucide-react';

const AiIotManagementProPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Device Intelligence",
      description: "Advanced AI algorithms analyze device behavior, predict failures, and optimize performance across your entire IoT ecosystem.",
      benefits: ["Predictive maintenance", "Behavioral analysis", "Performance optimization", "Anomaly detection"]
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Universal Connectivity",
      description: "Connect and manage devices across all major IoT protocols including WiFi, Bluetooth, Zigbee, LoRaWAN, and cellular.",
      benefits: ["Multi-protocol support", "Seamless integration", "Real-time sync", "Protocol translation"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Edge Computing",
      description: "Process data locally at the edge for faster response times, reduced latency, and improved reliability.",
      benefits: ["Local processing", "Reduced latency", "Offline capability", "Bandwidth optimization"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Management",
      description: "Intelligent automation for device provisioning, firmware updates, configuration management, and troubleshooting.",
      benefits: ["Auto-provisioning", "Firmware updates", "Config management", "Auto-troubleshooting"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with device authentication, data encryption, and compliance management for IoT deployments.",
      benefits: ["Device authentication", "Data encryption", "Compliance tracking", "Security monitoring"]
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Comprehensive analytics and monitoring with real-time dashboards, alerts, and insights for your IoT infrastructure.",
      benefits: ["Real-time monitoring", "Custom dashboards", "Smart alerts", "Performance insights"]
    }
  ];

  const deviceTypes = [
    { name: "Sensors", icon: <Thermometer className="w-8 h-8" />, color: "text-blue-500" },
    { name: "Cameras", icon: <Camera className="w-8 h-8" />, color: "text-green-500" },
    { name: "Smart Home", icon: <Home className="w-8 h-8" />, color: "text-cyan-500" },
    { name: "Industrial", icon: <Building className="w-8 h-8" />, color: "text-purple-500" },
    { name: "Vehicles", icon: <Car className="w-8 h-8" />, color: "text-orange-500" },
    { name: "Wearables", icon: <Smartphone className="w-8 h-8" />, color: "text-red-500" },
    { name: "Environmental", icon: <Wind className="w-8 h-8" />, color: "text-indigo-500" },
    { name: "Medical", icon: <Activity className="w-8 h-8" />, color: "text-pink-500" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "month",
      description: "Perfect for small IoT deployments and pilot projects",
      features: [
        "Up to 100 devices",
        "Basic AI features",
        "Standard protocols",
        "Email support",
        "10GB data storage",
        "Mobile app access",
        "Basic analytics",
        "Cloud deployment"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Ideal for growing businesses with complex IoT needs",
      features: [
        "Up to 1,000 devices",
        "Advanced AI features",
        "All protocols",
        "Priority support",
        "100GB data storage",
        "API access",
        "Advanced analytics",
        "Edge computing",
        "Custom integrations",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "month",
      description: "Complete solution for large-scale IoT deployments",
      features: [
        "Unlimited devices",
        "Full AI suite",
        "Custom protocols",
        "24/7 dedicated support",
        "Unlimited storage",
        "Advanced security",
        "On-premise deployment",
        "Custom development",
        "Training & onboarding",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      company: "Smart City Initiative",
      role: "IoT Director",
      content: "AI IoT Management Pro has revolutionized our smart city infrastructure. We're managing 50,000+ devices across the city with 99.9% uptime and 60% reduction in maintenance costs.",
      rating: 5
    },
    {
      name: "Sarah Kim",
      company: "Manufacturing Corp",
      role: "Operations Manager",
      content: "The predictive maintenance and edge computing features have been game-changers. We've reduced equipment downtime by 75% and improved production efficiency by 40%.",
      rating: 5
    },
    {
      name: "David Thompson",
      company: "Healthcare Systems",
      role: "IT Director",
      content: "The AI-powered device management and security features have helped us maintain HIPAA compliance while managing thousands of medical devices. The ROI was achieved within 4 months.",
      rating: 5
    }
  ];

  const metrics = [
    { number: "1M+", label: "Devices Managed", icon: <Cpu className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Activity className="w-6 h-6" /> },
    { number: "75%", label: "Reduced Downtime", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Brain className="w-6 h-6" /> }
  ];

  const protocols = [
    { name: "WiFi", description: "Wireless networking" },
    { name: "Bluetooth", description: "Short-range communication" },
    { name: "Zigbee", description: "Mesh networking" },
    { name: "LoRaWAN", description: "Long-range IoT" },
    { name: "Cellular", description: "Mobile connectivity" },
    { name: "Ethernet", description: "Wired connection" },
    { name: "Z-Wave", description: "Home automation" },
    { name: "Thread", description: "IPv6 networking" }
  ];

  return (
    <>
      <Helmet>
        <title>AI IoT Management Pro - Intelligent IoT Platform | Zion Tech Group</title>
        <meta name="description" content="Manage your IoT ecosystem with AI-powered intelligence. Device management, edge computing, and real-time analytics for connected devices." />
        <meta name="keywords" content="AI IoT management, IoT platform, device management, edge computing, IoT analytics, connected devices, smart infrastructure" />
        <meta property="og:title" content="AI IoT Management Pro - Zion Tech Group" />
        <meta property="og:description" content="Intelligent IoT management platform with AI-powered device intelligence" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-iot-management-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI IoT Management Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI IoT Management Pro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your IoT ecosystem with AI-powered device intelligence, edge computing, 
                  and comprehensive management for connected devices across all industries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Get IoT Assessment
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Device Types Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    All Device Types Supported
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Manage any type of connected device across all industries and use cases.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {deviceTypes.map((device, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className={`${device.color} mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                      {device.icon}
                    </div>
                    <div className="text-white font-semibold text-sm">{device.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    AI-Powered IoT Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to manage your IoT ecosystem with intelligent automation and insights.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Metrics Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Proven IoT Results
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of organizations achieving remarkable IoT success with our AI platform.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-400">{metric.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{metric.number}</div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Protocols Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Universal Protocol Support
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Connect devices using any major IoT protocol with seamless integration and management.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {protocols.map((protocol, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-cyan-400 font-bold text-lg mb-2">{protocol.name}</div>
                    <div className="text-gray-300 text-sm">{protocol.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Scalable IoT Plans
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your IoT deployment size and complexity.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    IoT Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how organizations are transforming their operations with our AI IoT platform.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your IoT Infrastructure?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Start your IoT assessment today and discover how our AI-powered management 
                  platform can optimize your connected device ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get IoT Assessment
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AiIotManagementProPage;