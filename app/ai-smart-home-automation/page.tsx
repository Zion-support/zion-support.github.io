import React from "react";
import { Link } from "react-router-dom";
import { Home, Zap, Shield, Brain, Smartphone, Wifi, Thermometer, Lightbulb, Camera, Lock } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";

const AiSmartHomeAutomationPage = () => {
  const features = [
    {
      title: "AI Voice Control",
      description: "Natural language processing for intuitive voice commands and smart home control",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Energy Optimization",
      description: "Intelligent energy management that learns your patterns and reduces costs by up to 30%",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Security Integration",
      description: "Advanced security monitoring with AI-powered threat detection and automated responses",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Mobile Control",
      description: "Complete home control from anywhere with our intuitive mobile app",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const smartDevices = [
    {
      name: "Smart Lighting",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "AI-controlled lighting that adapts to your schedule and mood",
      price: "From $29/month"
    },
    {
      name: "Climate Control",
      icon: <Thermometer className="w-8 h-8" />,
      description: "Intelligent temperature and humidity management",
      price: "From $39/month"
    },
    {
      name: "Security System",
      icon: <Camera className="w-8 h-8" />,
      description: "AI-powered surveillance with facial recognition",
      price: "From $49/month"
    },
    {
      name: "Smart Locks",
      icon: <Lock className="w-8 h-8" />,
      description: "Keyless entry with biometric and app control",
      price: "From $19/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter Home",
      price: "$199",
      period: "month",
      description: "Perfect for apartments and small homes",
      features: [
        "Up to 20 smart devices",
        "Basic AI automation",
        "Mobile app control",
        "Energy monitoring",
        "Email support",
        "Basic security features"
      ],
      popular: false
    },
    {
      name: "Smart Home Pro",
      price: "$399",
      period: "month",
      description: "Most popular for medium homes",
      features: [
        "Up to 50 smart devices",
        "Advanced AI learning",
        "Voice control integration",
        "Energy optimization",
        "Priority support",
        "Advanced security",
        "Custom automation rules",
        "Remote monitoring"
      ],
      popular: true
    },
    {
      name: "Luxury Estate",
      price: "$799",
      period: "month",
      description: "For large homes and estates",
      features: [
        "Unlimited smart devices",
        "Premium AI algorithms",
        "Custom integrations",
        "Dedicated support",
        "Advanced analytics",
        "Professional installation",
        "24/7 monitoring",
        "White-label options"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "30% Energy Savings",
      description: "AI optimization reduces your energy bills significantly",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Enhanced Security",
      description: "24/7 AI monitoring protects your home and family",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Convenience",
      description: "Control everything from one app with voice commands",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Future-Proof",
      description: "Regular updates keep your system cutting-edge",
      icon: <Wifi className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <SEOOptimizer
        title="AI Smart Home Automation - Intelligent Home Control System | Zion Tech Group"
        description="Transform your home with AI-powered smart home automation. Voice control, energy optimization, security integration, and intelligent device management for the modern home."
        keywords="AI smart home automation, home automation, smart home, voice control, energy optimization, home security, IoT devices"
        canonical="https://ziontechgroup.com/ai-smart-home-automation"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Home className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Smart Home Revolution</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Smart Home Automation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your home into an intelligent ecosystem with our AI-powered automation system. 
            Control lighting, climate, security, and more with voice commands and smart algorithms 
            that learn your preferences and optimize your living space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Home className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Smartphone className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Intelligent Home Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our AI technology makes your home smarter, safer, and more efficient
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group cursor-pointer"
                glowColor="cyan"
              >
                <div className="p-6">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Devices Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Smart Device Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect and control all your smart devices from one unified platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {smartDevices.map((device, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {device.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {device.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {device.description}
                </p>
                <p className="text-cyan-400 font-medium text-sm">{device.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Smart Home System?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of truly intelligent home automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Smart Home Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect automation level for your home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of homeowners who have already made their homes smarter, safer, and more efficient. 
            Start your smart home journey today with a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Home className="w-5 h-5" />}
            >
              Schedule Consultation
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Smartphone className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiSmartHomeAutomationPage;