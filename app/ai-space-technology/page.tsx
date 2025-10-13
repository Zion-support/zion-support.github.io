import React from 'react';
import { Rocket, Satellite, Globe, Zap, Shield, ArrowRight, Star, CheckCircle, DollarSign, Clock, Users, Cpu } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AISpaceTechnologyPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Space Technology Solutions",
    "description": "Advanced AI-powered space technology solutions for satellite operations, space exploration, and orbital management",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "100000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const features = [
    {
      title: "Satellite AI Management",
      description: "Autonomous satellite operations using AI for orbit optimization, collision avoidance, and mission planning",
      icon: <Satellite className="w-8 h-8" />,
      benefits: ["99.9% uptime", "Autonomous operations", "Collision prevention"]
    },
    {
      title: "Space Weather Prediction",
      description: "AI-powered space weather forecasting to protect satellites and space missions from solar storms",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Real-time predictions", "Mission protection", "Risk mitigation"]
    },
    {
      title: "Orbital Debris Tracking",
      description: "Advanced AI algorithms for tracking and managing space debris to ensure safe space operations",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Debris tracking", "Collision avoidance", "Space sustainability"]
    },
    {
      title: "Deep Space Navigation",
      description: "AI-powered navigation systems for deep space missions and interplanetary travel",
      icon: <Rocket className="w-8 h-8" />,
      benefits: ["Precise navigation", "Mission success", "Fuel optimization"]
    }
  ];

  const applications = [
    {
      category: "Commercial Space",
      title: "Satellite Constellation Management",
      description: "Manage large satellite constellations with AI for optimal coverage and performance",
      impact: "40% reduction in operational costs"
    },
    {
      category: "Space Exploration",
      title: "Autonomous Spacecraft",
      description: "Enable autonomous decision-making for spacecraft in deep space missions",
      impact: "60% increase in mission success rate"
    },
    {
      category: "Earth Observation",
      title: "Real-time Earth Monitoring",
      description: "AI-powered analysis of Earth observation data for climate and environmental monitoring",
      impact: "Real-time environmental insights"
    },
    {
      category: "Space Security",
      title: "Space Situational Awareness",
      description: "Comprehensive space domain awareness for security and defense applications",
      impact: "100% space object tracking"
    }
  ];

  const pricingPlans = [
    {
      name: "Space Starter",
      price: "$100,000",
      period: "month",
      description: "Basic space AI services for small satellite operations",
      features: [
        "Single satellite management",
        "Basic AI algorithms",
        "Standard monitoring",
        "Email support",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Space Professional",
      price: "$500,000",
      period: "month",
      description: "Advanced space AI for commercial operations",
      features: [
        "Constellation management",
        "Advanced AI algorithms",
        "Real-time monitoring",
        "Priority support",
        "Custom integrations",
        "API access"
      ],
      popular: true
    },
    {
      name: "Space Enterprise",
      price: "$2,000,000",
      period: "month",
      description: "Full space AI suite for government and large enterprises",
      features: [
        "Unlimited satellites",
        "Custom AI development",
        "24/7 monitoring",
        "Dedicated support",
        "On-site deployment",
        "Military-grade security"
      ],
      popular: false
    }
  ];

  const technicalSpecs = [
    {
      spec: "Orbital Prediction Accuracy",
      value: "99.99%",
      description: "Ultra-precise orbital calculations for mission planning"
    },
    {
      spec: "Collision Avoidance",
      value: "< 1 second",
      description: "Real-time collision detection and avoidance maneuvers"
    },
    {
      spec: "Data Processing",
      value: "1TB/hour",
      description: "High-speed processing of satellite telemetry data"
    },
    {
      spec: "AI Model Accuracy",
      value: "99.5%",
      description: "Machine learning models for space operations"
    },
    {
      spec: "Uptime Guarantee",
      value: "99.99%",
      description: "Mission-critical reliability for space operations"
    },
    {
      spec: "Global Coverage",
      value: "100%",
      description: "Worldwide satellite tracking and management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <EnhancedSEO
        title="AI Space Technology Solutions | Zion Tech Group"
        description="Revolutionary AI-powered space technology for satellite management, space exploration, and orbital operations. Starting at $100,000/month."
        keywords="space technology, satellite AI, space exploration, orbital management, space weather, space debris tracking"
        structuredData={structuredData}
      />
      
      <ResponsiveContainer>
        {/* Hero Section */}
        <div className="text-center py-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-6">
            <Star className="w-5 h-5 text-indigo-400 mr-2" />
            <span className="text-indigo-300 font-medium">Space Technology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Space Technology
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionize space operations with AI-powered technology for satellite management, 
            space exploration, and orbital optimization. Reach for the stars with intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            >
              Launch Your Mission
              <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
            <FuturisticButton
              href="#pricing"
              variant="outline"
              className="border-indigo-500 text-indigo-300 hover:bg-indigo-500/10"
            >
              View Pricing
            </FuturisticButton>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Space AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology for the final frontier
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-green-400">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Applications Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Space Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming space operations across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-indigo-400">{app.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{app.title}</h3>
                    <p className="text-gray-300 mb-3">{app.description}</p>
                    <p className="text-green-400 font-medium">{app.impact}</p>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mission-critical technology for space operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSpecs.map((spec, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{spec.value}</h3>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-2">{spec.spec}</h4>
                  <p className="text-gray-300 text-sm">{spec.description}</p>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Space Technology Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the space AI solution for your mission
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    href="/contact"
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700' 
                        : 'border border-indigo-500 text-indigo-300 hover:bg-indigo-500/10'
                    }`}
                  >
                    Launch Mission
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <FuturisticCard className="max-w-4xl mx-auto p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Reach for the Stars?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the space revolution with AI-powered technology. 
              Contact our space technology experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                Schedule Space Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                className="border-indigo-500 text-indigo-300 hover:bg-indigo-500/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default AISpaceTechnologyPage;