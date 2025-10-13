import React from 'react';
import { Cpu, Zap, Cloud, Shield, Target, BarChart3, ArrowRight, Star, Award, Globe, Smartphone, Mail, MapPin, CheckCircle, Clock, Users, Brain } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIEdgeComputingPage = () => {
  const features = [
    {
      title: "Real-time AI Processing",
      description: "Ultra-low latency AI inference at the edge with sub-10ms response times for critical applications and IoT devices.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Distributed Intelligence",
      description: "Intelligent edge nodes that work together to process data locally while maintaining synchronization with cloud systems.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Autonomous Edge Management",
      description: "Self-managing edge infrastructure with AI-powered optimization, load balancing, and automatic failover capabilities.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Hybrid Cloud Integration",
      description: "Seamless integration between edge computing and cloud services with intelligent data routing and processing decisions.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Edge Starter",
      price: "$599",
      period: "per month",
      description: "Perfect for small IoT deployments and edge applications",
      features: [
        "Up to 10 edge nodes",
        "Basic AI inference",
        "Standard monitoring",
        "Email support",
        "Cloud synchronization"
      ],
      popular: false
    },
    {
      name: "Edge Professional",
      price: "$1,999",
      period: "per month",
      description: "Ideal for enterprise edge computing and industrial IoT",
      features: [
        "Up to 50 edge nodes",
        "Advanced AI processing",
        "Real-time monitoring",
        "Priority support",
        "Custom AI models",
        "Edge-to-cloud analytics"
      ],
      popular: true
    },
    {
      name: "Edge Enterprise",
      price: "$4,999",
      period: "per month",
      description: "For large-scale edge computing deployments",
      features: [
        "Unlimited edge nodes",
        "Custom AI algorithms",
        "White-label solution",
        "Dedicated support team",
        "On-premise deployment",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "10ms", label: "Ultra-Low Latency", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Edge Uptime", icon: <Shield className="w-6 h-6" /> },
    { number: "1000+", label: "Edge Nodes Supported", icon: <Cpu className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring & Support", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Edge Computing - Real-time AI Processing at the Edge | Zion Tech Group"
        description="Revolutionary AI edge computing platform with ultra-low latency processing, distributed intelligence, and autonomous edge management. Transform your IoT and real-time applications."
        keywords="edge computing, AI edge, real-time processing, IoT, distributed intelligence, edge AI, low latency computing"
        canonical="https://ziontechgroup.com/ai-edge-computing"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Cpu className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Next-Generation Edge Computing</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Edge Computing
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionize your applications with AI-powered edge computing. Ultra-low latency processing, 
            distributed intelligence, and autonomous edge management for the next generation of IoT and real-time systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Cpu className="w-5 h-5" />}
            >
              Start Edge Computing
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Edge Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered edge computing platform provides cutting-edge capabilities for real-time processing and distributed intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Edge Computing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect edge computing solution for your real-time processing and IoT needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Transform Your Edge Computing
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the edge computing revolution with our AI-powered platform. 
            Perfect for IoT, real-time applications, and distributed systems.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-cyan-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Cpu className="w-5 h-5" />}
            >
              Start Edge Computing
            </FuturisticButton>
            <FuturisticButton
              href="/services"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              View All Services
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEdgeComputingPage;