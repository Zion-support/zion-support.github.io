import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Cpu, BarChart3, Shield, CheckCircle, ArrowRight, Star, Clock, Users, Zap } from 'lucide-react';

const IotSolutionsPlatformPage: React.FC = () => {
  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Device Connectivity",
      description: "Seamless connectivity for thousands of IoT devices with real-time data transmission"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Edge Computing",
      description: "Intelligent edge processing for real-time decision making and reduced latency"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analytics",
      description: "Advanced analytics and machine learning for predictive insights and optimization"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Privacy",
      description: "End-to-end security with encryption, authentication, and privacy protection"
    }
  ];

  const applications = [
    "Smart Manufacturing",
    "Smart Cities",
    "Healthcare Monitoring",
    "Agriculture Automation",
    "Energy Management",
    "Fleet Tracking",
    "Environmental Monitoring",
    "Retail Analytics",
    "Home Automation",
    "Supply Chain",
    "Predictive Maintenance",
    "Asset Tracking"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small IoT projects",
      features: [
        "Up to 100 devices",
        "Basic analytics",
        "Standard security",
        "Email support",
        "Cloud storage (10GB)",
        "Basic dashboards"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month", 
      description: "Ideal for growing businesses",
      features: [
        "Up to 1,000 devices",
        "Advanced analytics",
        "Enhanced security",
        "Priority support",
        "Cloud storage (100GB)",
        "Custom dashboards",
        "API access",
        "Real-time alerts"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited devices",
        "AI-powered analytics",
        "Enterprise security",
        "24/7 dedicated support",
        "Unlimited storage",
        "White-label platform",
        "Custom integrations",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Real-time device monitoring",
    "Predictive maintenance capabilities",
    "Reduced operational costs",
    "Enhanced efficiency and productivity",
    "Scalable IoT infrastructure",
    "Advanced data insights",
    "Secure device management",
    "Custom IoT solutions"
  ];

  return (
    <>
      <Helmet>
        <title>IoT Solutions Platform - Zion Tech Group | Internet of Things Platform</title>
        <meta name="description" content="Comprehensive IoT solutions platform with device connectivity, edge computing, analytics, and security. Transform your business with intelligent IoT technology." />
        <meta name="keywords" content="iot platform, internet of things, device connectivity, edge computing, iot analytics, smart devices" />
        <meta property="og:title" content="IoT Solutions Platform - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IoT solutions and platform" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IoT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Connect, monitor, and optimize your devices with our comprehensive IoT platform. 
                Transform data into actionable insights with advanced analytics and intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start IoT Journey
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Platform Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">IoT Platform Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IoT solutions for connected device management
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">IoT Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform industries with intelligent IoT solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 group">
                  <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    {application}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">IoT Platform Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the power of connected devices and intelligent automation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-cyan-500/20 transition-all duration-300 group">
                  <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">IoT Platform Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect IoT platform plan for your connected device needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">10K+</div>
                <div className="text-gray-300 text-lg">Connected Devices</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-lg">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">50ms</div>
                <div className="text-gray-300 text-lg">Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Connect Your World?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your business with intelligent IoT solutions. Start your connected device journey today and unlock new possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start IoT Platform
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact IoT Experts
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IotSolutionsPlatformPage;