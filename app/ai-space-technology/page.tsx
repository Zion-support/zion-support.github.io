import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Rocket, Satellite, Globe, Brain, Zap, Shield, BarChart3, Cpu, Database, ArrowRight, CheckCircle, Star, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AISpaceTechnologyPage = () => {
  const features = [
    {
      title: "Satellite AI Management",
      description: "Autonomous satellite operations with AI-powered mission planning, orbital optimization, and real-time decision making",
      icon: <Satellite className="w-8 h-8" />,
      benefits: ["Autonomous operations", "Mission optimization", "Real-time control"]
    },
    {
      title: "Space Data Analytics",
      description: "Advanced AI algorithms for processing massive amounts of space data from satellites, telescopes, and space missions",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Big data processing", "Pattern recognition", "Predictive analytics"]
    },
    {
      title: "Space Weather Prediction",
      description: "AI-powered space weather forecasting to protect satellites and space missions from solar storms and cosmic radiation",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Space weather alerts", "Mission protection", "Risk mitigation"]
    },
    {
      title: "Autonomous Spacecraft",
      description: "Self-managing spacecraft with AI navigation, resource management, and mission adaptation capabilities",
      icon: <Rocket className="w-8 h-8" />,
      benefits: ["Autonomous navigation", "Resource optimization", "Mission adaptation"]
    }
  ];

  const pricing = [
    {
      name: "Space AI Starter",
      price: "$4,999",
      period: "per month",
      description: "Basic space AI services for small satellite operations",
      features: [
        "Satellite monitoring",
        "Basic data analytics",
        "Space weather alerts",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Space AI Professional",
      price: "$19,999",
      period: "per month",
      description: "Advanced space AI for commercial satellite constellations",
      features: [
        "Full satellite constellation management",
        "Advanced data analytics",
        "Real-time space weather",
        "Priority support",
        "Custom algorithms"
      ],
      popular: true
    },
    {
      name: "Space AI Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Complete space AI infrastructure for space agencies and large operators",
      features: [
        "Multi-constellation management",
        "AI-powered mission planning",
        "Dedicated support team",
        "Custom space solutions",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const applications = [
    {
      title: "Earth Observation",
      description: "AI-powered analysis of satellite imagery for agriculture, climate monitoring, and disaster response",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Space Communications",
      description: "Intelligent satellite communication networks with adaptive routing and interference mitigation",
      icon: <Satellite className="w-6 h-6" />
    },
    {
      title: "Space Exploration",
      description: "Autonomous rovers and spacecraft with AI navigation and scientific discovery capabilities",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Space Security",
      description: "AI-powered space situational awareness and threat detection for space assets",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Space Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI solutions for space technology. Autonomous satellites, space data analytics, and intelligent space mission management." />
        <meta name="keywords" content="space AI, satellite AI, space technology, space data analytics, autonomous spacecraft, space weather" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-space-technology" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Rocket className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Next-Generation Space AI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Space Technology
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of space exploration with AI-powered satellites, autonomous spacecraft, 
            and intelligent space mission management systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Rocket className="w-5 h-5" />}
            >
              Launch Your Mission
            </FuturisticButton>
            <FuturisticButton
              href="#features"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Explore Capabilities
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Space AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to revolutionize space operations, 
              satellite management, and space exploration missions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Space Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI is transforming space technology across various applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {application.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {application.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {application.description}
                </p>
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
              Space AI Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect space AI solution for your mission requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/25' 
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Launch Mission
                </FuturisticButton>
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
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join the space AI revolution and unlock the full potential of space technology. 
            Contact our space technology experts to begin your journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Rocket className="w-5 h-5" />}
            >
              Launch Your Mission
            </FuturisticButton>
            <FuturisticButton
              href="/ai-services"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore AI Services
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AISpaceTechnologyPage;