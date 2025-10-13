import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Leaf, Globe, BarChart3, Zap, Shield, Brain, ArrowRight, CheckCircle, Star, Users, Award, Cloud, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIClimateSolutionsPage = () => {
  const features = [
    {
      title: "Climate Prediction AI",
      description: "Advanced AI models for accurate weather forecasting, climate change prediction, and extreme weather event detection",
      icon: <Cloud className="w-8 h-8" />,
      benefits: ["95% accuracy", "Long-term forecasting", "Early warning systems"]
    },
    {
      title: "Carbon Footprint Analytics",
      description: "AI-powered carbon tracking and reduction strategies for businesses and individuals",
      icon: <Leaf className="w-8 h-8" />,
      benefits: ["Real-time tracking", "Reduction strategies", "Sustainability reporting"]
    },
    {
      title: "Renewable Energy Optimization",
      description: "Intelligent optimization of renewable energy systems for maximum efficiency and grid stability",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Energy optimization", "Grid stability", "Cost reduction"]
    },
    {
      title: "Environmental Monitoring",
      description: "AI-powered monitoring of air quality, water resources, and ecosystem health",
      icon: <Droplets className="w-8 h-8" />,
      benefits: ["Real-time monitoring", "Environmental alerts", "Data insights"]
    }
  ];

  const pricing = [
    {
      name: "Climate Starter",
      price: "$999",
      period: "per month",
      description: "Basic climate AI tools for small organizations",
      features: [
        "Weather forecasting",
        "Basic carbon tracking",
        "Email alerts",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Climate Professional",
      price: "$4,999",
      period: "per month",
      description: "Advanced climate AI for medium organizations",
      features: [
        "Advanced forecasting",
        "Carbon analytics suite",
        "Energy optimization",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Climate Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Complete climate AI solution for large organizations",
      features: [
        "Full climate suite",
        "Custom models",
        "Dedicated support team",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const applications = [
    {
      title: "Agriculture",
      description: "AI-powered precision farming and crop optimization for sustainable agriculture",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: "Energy Sector",
      description: "Smart grid management and renewable energy optimization",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Urban Planning",
      description: "Smart city solutions for sustainable urban development",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Disaster Management",
      description: "AI-powered early warning systems and disaster response planning",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>AI Climate Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered climate solutions. Weather forecasting, carbon tracking, renewable energy optimization, and environmental monitoring." />
        <meta name="keywords" content="AI climate, climate AI, weather forecasting, carbon tracking, renewable energy, environmental monitoring, sustainability" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-climate-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 mb-6">
            <Leaf className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">AI-Powered Climate Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400">
              AI Climate Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Combat climate change with AI-powered solutions for weather forecasting, carbon tracking, 
            renewable energy optimization, and environmental monitoring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Leaf className="w-5 h-5" />}
            >
              Start Climate Action
            </FuturisticButton>
            <FuturisticButton
              href="#features"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Explore Solutions
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Climate AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI-powered climate solutions designed to help organizations 
              reduce their environmental impact and build a sustainable future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-green-400 transition-colors">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Climate Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI climate solutions are transforming industries worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {application.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
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
              Climate AI Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect climate AI solution for your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-green-500/50 shadow-2xl shadow-green-500/25' 
                  : 'border-white/20 hover:border-green-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-cyan-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Fight Climate Change?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join the global effort to combat climate change with AI-powered solutions. 
            Contact our climate technology experts to start your sustainability journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Leaf className="w-5 h-5" />}
            >
              Start Climate Action
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

export default AIClimateSolutionsPage;