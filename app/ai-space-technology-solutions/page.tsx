import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Satellite, Globe, Zap, Shield, BarChart3, Cloud, ArrowRight, CheckCircle, Star, Users, Award, Clock, Target, Sparkles, Cpu, Database, Lock, Telescope } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AISpaceTechnologySolutions = () => {
  const features = [
    {
      title: "Satellite Constellation Management",
      description: "AI-powered satellite fleet management with predictive maintenance and orbital optimization",
      icon: <Satellite className="w-8 h-8" />,
      benefits: ["99.9% uptime", "Predictive maintenance", "Orbital optimization", "Real-time monitoring"]
    },
    {
      title: "Space Data Analytics",
      description: "Advanced AI algorithms for processing and analyzing massive amounts of space data",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Real-time processing", "Pattern recognition", "Anomaly detection", "Predictive insights"]
    },
    {
      title: "Autonomous Space Operations",
      description: "Self-managing space systems with AI-driven decision making and autonomous navigation",
      icon: <Rocket className="w-8 h-8" />,
      benefits: ["Autonomous navigation", "Self-healing systems", "Intelligent routing", "Mission optimization"]
    },
    {
      title: "Space Weather Prediction",
      description: "AI-powered space weather forecasting for satellite protection and mission planning",
      icon: <Telescope className="w-8 h-8" />,
      benefits: ["Solar storm prediction", "Radiation forecasting", "Mission safety", "Asset protection"]
    }
  ];

  const applications = [
    {
      category: "Earth Observation",
      services: [
        "Climate monitoring and analysis",
        "Agricultural yield prediction",
        "Disaster response coordination",
        "Urban planning optimization",
        "Environmental impact assessment"
      ],
      impact: "Improve decision-making with real-time Earth data"
    },
    {
      category: "Communication Networks",
      services: [
        "Global internet coverage",
        "Low-latency communication",
        "Emergency communication systems",
        "IoT connectivity solutions",
        "Maritime and aviation tracking"
      ],
      impact: "Connect the unconnected with global coverage"
    },
    {
      category: "Navigation & Positioning",
      services: [
        "Precision GPS enhancement",
        "Autonomous vehicle navigation",
        "Maritime navigation systems",
        "Aviation route optimization",
        "Search and rescue operations"
      ],
      impact: "Enable precise navigation anywhere on Earth"
    },
    {
      category: "Scientific Research",
      services: [
        "Astronomical observations",
        "Planetary exploration",
        "Space debris tracking",
        "Gravitational wave detection",
        "Exoplanet discovery"
      ],
      impact: "Advance human knowledge of the universe"
    }
  ];

  const pricing = [
    {
      name: "Space Starter",
      price: "$4,999",
      period: "per month",
      description: "Perfect for small satellite operations and research projects",
      features: [
        "Basic satellite monitoring",
        "Standard data processing",
        "Email support",
        "API access",
        "Basic analytics dashboard"
      ],
      popular: false
    },
    {
      name: "Space Professional",
      price: "$19,999",
      period: "per month",
      description: "Comprehensive solution for commercial space operations",
      features: [
        "Advanced satellite management",
        "Real-time data processing",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Mission planning tools"
      ],
      popular: true
    },
    {
      name: "Space Enterprise",
      price: "$99,999",
      period: "per month",
      description: "Full-scale space technology platform for large organizations",
      features: [
        "Complete constellation management",
        "AI-powered operations",
        "24/7 dedicated support",
        "Custom space solutions",
        "White-label platform",
        "On-site consultation",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "500+", label: "Satellites Managed", icon: <Satellite className="w-6 h-6" /> },
    { number: "99.9%", label: "System Uptime", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Space Technology Solutions | Zion Tech Group - Next-Gen Space Tech"
        description="Revolutionary AI-powered space technology solutions for satellite management, space data analytics, and autonomous space operations. Transform space missions with cutting-edge AI."
        keywords="space technology, satellite management, space data analytics, autonomous space operations, space AI, satellite constellation, space weather prediction"
        canonical="https://ziontechgroup.com/ai-space-technology-solutions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Rocket className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Next-Generation Space Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Space Technology Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionize space operations with AI-powered satellite management, autonomous space systems, 
            and advanced space data analytics. Transform how we explore and utilize space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Launch Space Mission
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Space Demo
              <Rocket className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
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
              Space AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of AI to revolutionize space operations and exploration
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-cyan-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Space Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform industries with space-based AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">{app.category}</h3>
                <div className="space-y-3 mb-4">
                  {app.services.map((service, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                      {service}
                    </div>
                  ))}
                </div>
                <div className="text-cyan-400 font-semibold text-sm">
                  {app.impact}
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Space Technology Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect space technology plan for your mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                  : 'border-white/20 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-cyan-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Launch Mission
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Reach for the Stars?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Join the space technology revolution and unlock the potential of AI-powered space operations. 
            Contact our space technology experts to discuss your mission requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Launch Space Mission
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Space Demo
              <Rocket className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AISpaceTechnologySolutions;