import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Brain, Zap, Cloud, CheckCircle, ArrowRight, Star, Phone, Mail, Smartphone, Cpu, Network } from 'lucide-react';

const FiveGAiIntegrationPage: React.FC = () => {
  const features = [
    "AI-powered 5G network optimization",
    "Real-time network performance monitoring",
    "Intelligent traffic management and routing",
    "Edge AI computing integration",
    "Automated network slicing and resource allocation",
    "Predictive maintenance and fault detection",
    "AI-driven capacity planning and scaling",
    "Advanced analytics and reporting dashboard",
    "Integration with existing network infrastructure",
    "Custom AI model deployment and training"
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small to medium networks",
      features: [
        "Basic AI optimization",
        "Up to 10 base stations",
        "Standard monitoring",
        "Email support",
        "Monthly reports",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for enterprise networks",
      features: [
        "Advanced AI algorithms",
        "Up to 100 base stations",
        "Real-time monitoring",
        "Priority support",
        "Custom dashboards",
        "Advanced analytics",
        "Edge AI computing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For large-scale deployments",
      features: [
        "Full AI suite",
        "Unlimited base stations",
        "24/7 monitoring",
        "Dedicated support team",
        "Custom AI models",
        "Advanced edge computing",
        "SLA guarantee",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Enhanced Performance",
      description: "AI optimization improves network performance by up to 40%"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Edge AI Computing",
      description: "Process data locally for ultra-low latency applications"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligent Automation",
      description: "Automated network management and optimization"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Future-Ready",
      description: "Scalable solution that grows with your network"
    }
  ];

  const useCases = [
    {
      title: "Smart Cities",
      description: "AI-powered traffic management and public safety",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "Industrial IoT",
      description: "Real-time monitoring and predictive maintenance",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Autonomous Vehicles",
      description: "Ultra-low latency communication for safety",
      icon: <Wifi className="w-8 h-8" />
    },
    {
      title: "Healthcare",
      description: "Remote surgery and telemedicine applications",
      icon: <Brain className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G AI Integration - Zion Tech Group | Next-Gen Network Intelligence</title>
        <meta name="description" content="Revolutionary 5G AI integration platform with intelligent network optimization, edge computing, and automated management. Starting at $1,999/month." />
        <meta name="keywords" content="5G AI integration, network optimization, edge computing, intelligent networks, 5G automation" />
        <meta property="og:title" content="5G AI Integration - Zion Tech Group" />
        <meta property="og:description" content="Transform your 5G network with AI-powered intelligence and automation." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 pt-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                5G + AI Integration
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  5G AI Integration
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Combine the power of 5G networks with artificial intelligence for 
                intelligent network optimization, edge computing, and automated management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                  Get Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Revolutionary Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G AI integration transforms industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{useCase.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for intelligent 5G network management
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our 5G AI Integration?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The future of network intelligence is here
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your network size and requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-cyan-500/20'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your 5G Network?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of intelligent networking with our 5G AI integration platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGAiIntegrationPage;