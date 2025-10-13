import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Cpu, 
  Shield, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Award,
  Globe,
  Sparkles,
  Database,
  Eye,
  Settings
} from 'lucide-react';

const ZionIoTAI = () => {
  const features = [
    {
      icon: <Wifi className="w-8 h-8 text-cyan-400" />,
      title: "Smart Device Management",
      description: "AI-powered centralized management of all IoT devices with real-time monitoring and automated updates",
      benefit: "99.9% device uptime"
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: "Edge Computing AI",
      description: "Process data locally on IoT devices using AI models for faster response times and reduced latency",
      benefit: "50ms response time"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "IoT Security Suite",
      description: "Advanced security monitoring and threat detection for IoT networks and connected devices",
      benefit: "Zero security breaches"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: "Predictive Analytics",
      description: "AI-driven insights and predictions for device maintenance, energy optimization, and performance",
      benefit: "30% cost reduction"
    }
  ];

  const pricingPlans = [
    {
      name: "IoT Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small IoT deployments and smart homes",
      features: [
        "Up to 100 devices",
        "Basic device management",
        "Standard security monitoring",
        "Email support",
        "10GB data storage"
      ],
      popular: false
    },
    {
      name: "IoT Professional",
      price: "$399",
      period: "/month",
      description: "Advanced IoT management for growing businesses",
      features: [
        "Up to 1,000 devices",
        "Advanced AI analytics",
        "Real-time monitoring",
        "Priority support",
        "100GB data storage",
        "Custom dashboards"
      ],
      popular: true
    },
    {
      name: "IoT Enterprise",
      price: "$1,299",
      period: "/month",
      description: "Complete IoT solution for large organizations",
      features: [
        "Unlimited devices",
        "Full AI suite",
        "24/7 monitoring",
        "Dedicated support",
        "Unlimited data storage",
        "White-label solutions",
        "API access"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "Optimize production lines with AI-powered predictive maintenance",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Smart Cities",
      description: "Manage traffic, utilities, and public services with IoT intelligence",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Healthcare IoT",
      description: "Monitor patients and medical devices with AI-powered insights",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Agriculture",
      description: "Optimize crop yields with smart sensors and AI analytics",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const supportedProtocols = [
    { name: "MQTT", description: "Lightweight messaging protocol" },
    { name: "CoAP", description: "Constrained Application Protocol" },
    { name: "HTTP/HTTPS", description: "Web-based communication" },
    { name: "WebSocket", description: "Real-time bidirectional communication" },
    { name: "LoRaWAN", description: "Long-range wireless protocol" },
    { name: "Zigbee", description: "Low-power mesh networking" },
    { name: "Bluetooth", description: "Short-range wireless communication" },
    { name: "WiFi", description: "High-speed wireless networking" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <Helmet>
        <title>Zion IoT AI - Smart IoT Management & Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your IoT operations with Zion IoT AI - intelligent device management, edge computing, and predictive analytics for connected devices." />
        <meta name="keywords" content="IoT AI, smart devices, edge computing, IoT management, predictive analytics, IoT security, connected devices" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-iot-ai" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
              <Wifi className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">Smart IoT Intelligence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion IoT AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered IoT management platform that transforms connected devices 
              into intelligent systems with predictive analytics and edge computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Start IoT Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center gap-2 border border-cyan-500/50 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Watch Demo
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1M+</div>
              <div className="text-gray-300">Devices Managed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">50ms</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl border border-pink-500/20">
              <div className="text-4xl font-bold text-pink-400 mb-2">30%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Intelligent IoT Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IoT management powered by cutting-edge AI and edge computing technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-cyan-300 font-medium">{feature.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Protocols */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-cyan-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Supported Protocols
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Universal compatibility with all major IoT communication protocols and standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportedProtocols.map((protocol, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    📡
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{protocol.name}</h3>
                  <p className="text-sm text-gray-300">{protocol.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI-powered IoT is transforming industries and creating smart ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-cyan-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              IoT AI Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the IoT intelligence level that matches your connected device ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50' 
                  : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className={`w-full py-4 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Connect Your Future
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join leading organizations who trust Zion IoT AI for their connected device management. 
            Contact us today to start your smart IoT journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Our IoT Experts
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center gap-2 border border-cyan-500/50 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionIoTAI;