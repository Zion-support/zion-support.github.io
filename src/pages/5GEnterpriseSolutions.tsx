import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Network,
  Zap,
  Shield,
  Cpu,
  Globe,
  Users,
  Target,
  BarChart3,
  Cloud,
  Lock,
  Eye,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Building2,
  Smartphone,
  Server,
  Settings,
  Wifi,
  Signal,
  Rocket,
  Heart,
  ShoppingCart,
  DollarSign,
  Car,
  Clock,
  Award
} from 'lucide-react';

export default function FiveGEnterpriseSolutions() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const features = [
    {
      icon: Network,
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G networks with speeds up to 10 Gbps for enterprise applications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      description: "Sub-1ms latency enabling real-time applications and instant data transmission",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Advanced security protocols and network slicing for isolated, secure communications",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Distributed edge computing infrastructure for faster data processing",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide 5G network coverage with seamless roaming capabilities",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time network monitoring and predictive analytics for optimal performance",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const solutions = [
    {
      title: "Private 5G Networks",
      description: "Custom private 5G infrastructure for enterprise environments with complete control and security.",
      icon: Network,
      features: ["Dedicated spectrum", "On-premises deployment", "Ultra-low latency", "Guaranteed bandwidth"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Edge Computing Integration",
      description: "Combine 5G connectivity with edge computing for real-time data processing and AI applications.",
      icon: Server,
      features: ["Multi-access edge computing", "Real-time analytics", "AI at the edge", "Distributed processing"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "IoT and Industrial Automation",
      description: "Enable massive IoT deployments with 5G for smart factories and industrial automation.",
      icon: Settings,
      features: ["Massive machine-type communications", "Critical communications", "Industrial IoT", "Remote control"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AR/VR and Mixed Reality",
      description: "Power immersive experiences with 5G's high bandwidth and low latency capabilities.",
      icon: Smartphone,
      features: ["Ultra-HD streaming", "Real-time rendering", "Collaborative environments", "Remote training"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Network Slicing",
      description: "Create customized network slices for different enterprise applications and use cases.",
      icon: Wifi,
      features: ["Dedicated virtual networks", "Service level agreements", "Quality of service", "Resource allocation"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Security and Compliance",
      description: "Enterprise-grade security features built into 5G networks for data protection and compliance.",
      icon: Shield,
      features: ["End-to-end encryption", "Network authentication", "Zero trust architecture", "Compliance frameworks"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Smart factories with connected machinery and real-time monitoring",
      icon: Building2,
      applications: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Digital twins"]
    },
    {
      name: "Healthcare",
      description: "Remote patient monitoring and telemedicine applications",
      icon: Heart,
      applications: ["Remote surgery", "Patient monitoring", "Medical IoT", "Emergency response"]
    },
    {
      name: "Transportation",
      description: "Connected vehicles and intelligent transportation systems",
      icon: Car,
      applications: ["Autonomous vehicles", "Traffic management", "Fleet tracking", "Smart logistics"]
    },
    {
      name: "Energy",
      description: "Smart grid management and renewable energy optimization",
      icon: Zap,
      applications: ["Grid monitoring", "Energy trading", "Predictive analytics", "Asset management"]
    },
    {
      name: "Retail",
      description: "Smart retail with personalized customer experiences",
      icon: ShoppingCart,
      applications: ["Customer analytics", "Inventory management", "Personalized marketing", "Checkout optimization"]
    },
    {
      name: "Finance",
      description: "High-frequency trading and financial services",
      icon: DollarSign,
      applications: ["Real-time trading", "Risk management", "Customer services", "Compliance monitoring"]
    }
  ];

  const benefits = [
    "10x faster data transfer speeds compared to 4G",
    "99.9% network uptime guarantee",
    "24/7 enterprise support and monitoring",
    "Custom network configurations for your business",
    "Seamless integration with existing infrastructure",
    "Compliance with industry security standards"
  ];

  const networkMetrics = [
    {
      metric: "Peak Data Rate",
      value: "10 Gbps",
      description: "Maximum download speed"
    },
    {
      metric: "Latency",
      value: "<1ms",
      description: "Network response time"
    },
    {
      metric: "Device Density",
      value: "1M/km²",
      description: "Connected devices per area"
    },
    {
      metric: "Mobility",
      value: "500 km/h",
      description: "Maximum movement speed support"
    }
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "5G-powered smart factories with real-time monitoring, autonomous robots, and predictive maintenance.",
      icon: Building2,
      impact: "40% efficiency boost"
    },
    {
      title: "Autonomous Vehicles",
      description: "Ultra-low latency communication for connected and autonomous vehicles",
      icon: Car,
      impact: "99.9% reliability"
    },
    {
      title: "Remote Healthcare",
      description: "High-bandwidth telemedicine and remote patient monitoring",
      icon: Heart,
      impact: "Real-time diagnostics"
    },
    {
      title: "Smart Cities",
      description: "Connected infrastructure and intelligent urban management",
      icon: Globe,
      impact: "30% cost reduction"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Enterprise Clients", description: "Trusted by Fortune 500 companies" },
    { icon: TrendingUp, value: "10x", label: "Speed Increase", description: "Compared to 4G networks" },
    { icon: Award, value: "99.9%", label: "Uptime", description: "Enterprise-grade reliability" },
    { icon: Globe, value: "25+", label: "Countries", description: "Global 5G deployment" }
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 'overview':
        return (
          <div className="space-y-12">
            {/* Features Grid */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Revolutionary 5G Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 p-6 hover:border-zinc-600/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3 text-center">{feature.title}</h3>
                    <p className="text-zion-slate-light text-sm text-center">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-3 bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'solutions':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Comprehensive 5G Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 p-6 hover:border-zinc-600/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`bg-gradient-to-r ${solution.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3 text-center">{solution.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4 text-center">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'industries':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 p-6 hover:border-zinc-600/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{industry.name}</h3>
                      <p className="text-zion-slate-light text-sm">{industry.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center text-xs text-zion-slate-light">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {app}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full">
                <Network className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Enterprise Solutions</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your enterprise with next-generation 5G connectivity. Experience ultra-fast speeds, 
              ultra-low latency, and massive IoT support for the future of business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Get Started
              </Link>
              <Link to="/demo" className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors">
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-zion-slate-light font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-zion-slate-light text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'overview', name: 'Overview', icon: Eye },
              { id: 'solutions', name: 'Solutions', icon: Network },
              { id: 'industries', name: 'Industries', icon: Building2 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {renderContent()}
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Transform Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{useCase.title}</h3>
                <p className="text-zion-slate-light text-sm mb-3">{useCase.description}</p>
                <div className="text-blue-400 font-semibold text-sm">{useCase.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ready to Transform Your Enterprise with 5G?
            </h2>
            <p className="text-zion-slate-light text-center mb-6">
              Join forward-thinking organizations that are already leveraging 5G technology 
              to gain competitive advantages and drive innovation
            </p>
            
            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300">
                Contact Our Experts
                <ArrowRight className="w-5 h-5 ml-2"/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}