import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Satellite, 
  Globe, 
  Star, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Database,
  Cpu,
  BarChart3,
  Shield,
  Eye,
  Navigation
} from 'lucide-react';

const ZionSpaceAI = () => {
  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      title: "Satellite Constellation Management",
      description: "AI-powered management of satellite networks for optimal coverage and communication",
      benefit: "99.9% satellite uptime"
    },
    {
      icon: <Satellite className="w-8 h-8 text-blue-400" />,
      title: "Space Data Analytics",
      description: "Advanced analysis of satellite imagery and space data for Earth observation and monitoring",
      benefit: "Real-time Earth insights"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "Orbital Mechanics AI",
      description: "AI-driven orbital calculations and trajectory optimization for space missions",
      benefit: "Precision navigation"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: "Space Weather Prediction",
      description: "Predict space weather events and solar activity to protect space assets",
      benefit: "95% prediction accuracy"
    }
  ];

  const pricingPlans = [
    {
      name: "Space Starter",
      price: "$499",
      period: "/month",
      description: "Basic space technology for small satellite operators",
      features: [
        "Up to 10 satellites",
        "Basic orbital tracking",
        "Standard data analytics",
        "Email support",
        "50GB data storage"
      ],
      popular: false
    },
    {
      name: "Space Professional",
      price: "$1,299",
      period: "/month",
      description: "Advanced space solutions for growing space companies",
      features: [
        "Up to 100 satellites",
        "Advanced AI analytics",
        "Real-time monitoring",
        "Priority support",
        "500GB data storage",
        "Custom dashboards"
      ],
      popular: true
    },
    {
      name: "Space Enterprise",
      price: "$3,999",
      period: "/month",
      description: "Complete space technology suite for large organizations",
      features: [
        "Unlimited satellites",
        "Full AI space suite",
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
      title: "Earth Observation",
      description: "Monitor climate change, agriculture, and natural disasters from space",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Communications",
      description: "Global internet and communication services via satellite networks",
      icon: <Satellite className="w-6 h-6" />
    },
    {
      title: "Navigation",
      description: "Precision GPS and navigation services for autonomous vehicles",
      icon: <Navigation className="w-6 h-6" />
    },
    {
      title: "Space Exploration",
      description: "AI-powered mission planning and autonomous spacecraft operations",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const spaceMetrics = [
    { name: "Satellites Managed", value: "2,500+", icon: "🛰️" },
    { name: "Data Processed", value: "15 PB", icon: "📊" },
    { name: "Countries Covered", value: "195+", icon: "🌍" },
    { name: "Mission Success", value: "99.8%", icon: "🎯" },
    { name: "Response Time", value: "< 1s", icon: "⚡" },
    { name: "Uptime", value: "99.99%", icon: "🔒" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <Helmet>
        <title>Zion Space AI - AI-Powered Space Technology & Satellite Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionize space operations with Zion Space AI - advanced satellite management, space data analytics, and orbital mechanics powered by AI." />
        <meta name="keywords" content="space AI, satellite management, space technology, orbital mechanics, space data analytics, satellite communications" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-space-ai" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 animate-pulse"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full px-6 py-3 mb-8 border border-purple-500/30">
              <Rocket className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Space Technology</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Zion Space AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered space technology platform that transforms satellite operations, 
              space data analytics, and orbital mechanics for the next generation of space exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105"
              >
                Launch Space Mission
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center gap-2 border border-purple-500/50 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                Watch Demo
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-xl border border-purple-500/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">2,500+</div>
              <div className="text-gray-300">Satellites Managed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-xl border border-indigo-500/20">
              <div className="text-4xl font-bold text-indigo-400 mb-2">99.99%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
              <div className="text-4xl font-bold text-blue-400 mb-2">15 PB</div>
              <div className="text-gray-300">Data Processed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-xl border border-cyan-500/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">195+</div>
              <div className="text-gray-300">Countries Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Space Technology Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge space technology powered by advanced AI and machine learning algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 px-4 py-2 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-purple-300 font-medium">{feature.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Metrics */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Space Operations Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real performance metrics from our space technology operations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {spaceMetrics.map((metric, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-300">{metric.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Space Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary space technology applications transforming industries and enabling new possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Space AI Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the space technology level that matches your satellite operations and space missions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border-purple-500/50' 
                  : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-purple-400">{plan.price}</span>
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
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600'
                      : 'border border-purple-500/50 text-purple-300 hover:bg-purple-500/10'
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-indigo-900/30">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Reach for the Stars
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the space revolution with Zion Space AI. Together, we can unlock the infinite 
            possibilities of space technology and exploration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Our Space Experts
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center gap-2 border border-purple-500/50 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionSpaceAI;