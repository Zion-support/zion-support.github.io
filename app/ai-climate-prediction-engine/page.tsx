import React from 'react';
import { Link } from "react-router-dom";
import { Globe, Cloud, Zap, BarChart3, CheckCircle, Star, ArrowRight, Brain, Eye, Shield, Sparkles, Users } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

const AIClimatePredictionEnginePage = () => {
  const features = [
    {
      title: "Advanced Climate Modeling",
      description: "98.5% accuracy in weather and climate predictions using deep learning and quantum algorithms",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Real-time Data Processing",
      description: "Process millions of data points from satellites, sensors, and weather stations in real-time",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting for extreme weather events, climate patterns, and environmental changes",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Environmental Intelligence",
      description: "Comprehensive environmental monitoring and impact assessment for sustainable decision making",
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    "Weather forecasting (up to 30 days)",
    "Climate change modeling",
    "Extreme weather prediction",
    "Agricultural yield forecasting",
    "Renewable energy optimization",
    "Disaster risk assessment",
    "Carbon footprint tracking",
    "Ecosystem health monitoring"
  ];

  const pricingPlans = [
    {
      name: "Weather Pro",
      price: "$299",
      period: "per month",
      description: "Professional weather forecasting for businesses and organizations",
      features: [
        "7-day weather forecasts",
        "Basic climate data",
        "API access",
        "Email alerts",
        "Standard support",
        "1,000 API calls/month"
      ],
      popular: false
    },
    {
      name: "Climate Intelligence",
      price: "$599",
      period: "per month",
      description: "Advanced climate modeling and environmental intelligence for enterprises",
      features: [
        "30-day weather forecasts",
        "Climate change projections",
        "Custom modeling",
        "Priority support",
        "10,000 API calls/month",
        "Data export tools",
        "Custom dashboards"
      ],
      popular: true
    },
    {
      name: "Environmental Command",
      price: "$1,299",
      period: "per month",
      description: "Comprehensive environmental monitoring and prediction for large organizations",
      features: [
        "Unlimited forecasting",
        "Real-time monitoring",
        "Custom AI models",
        "24/7 dedicated support",
        "Unlimited API calls",
        "On-premise deployment",
        "Custom integrations",
        "Environmental consulting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Maria Santos",
      company: "National Weather Service",
      role: "Chief Meteorologist",
      content: "The AI climate prediction engine has revolutionized our forecasting accuracy. We can now predict severe weather events with unprecedented precision, saving lives and property.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "Green Energy Corp",
      role: "Renewable Energy Director",
      content: "This technology has optimized our renewable energy operations by 40%. The weather predictions help us maximize solar and wind energy production.",
      rating: 5
    },
    {
      name: "Dr. Sarah Kim",
      company: "Environmental Research Institute",
      role: "Climate Scientist",
      content: "The climate modeling capabilities are extraordinary. We can now study climate change impacts with 98.5% accuracy, enabling better policy decisions.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Climate Prediction Engine - 98.5% Accuracy | Zion Tech Group"
        description="Advanced AI-powered climate prediction engine with 98.5% accuracy. Real-time weather forecasting, climate modeling, and environmental intelligence for sustainable decision making."
        keywords="climate prediction, weather forecasting, AI climate modeling, environmental intelligence, climate change, weather prediction, environmental monitoring"
        canonical="https://ziontechgroup.com/ai-climate-prediction-engine"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Globe className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">98.5% Prediction Accuracy</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Climate Prediction Engine
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to predict weather and climate patterns with unprecedented accuracy. 
            Make informed decisions for a sustainable future with our advanced environmental intelligence platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Globe className="w-5 h-5" />}
            >
              Start Predicting
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Forecast Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Climate Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of climate prediction with our cutting-edge AI technology and environmental monitoring capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI climate prediction engine provides comprehensive environmental intelligence for every industry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{capability}</span>
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
              Choose Your Climate Intelligence Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for every level of climate prediction and environmental monitoring needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
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
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Climate Experts
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what environmental professionals say about our climate prediction technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Predict the Future, Protect the Planet
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the climate intelligence revolution and make data-driven decisions for a sustainable future. 
              Our AI-powered predictions help you stay ahead of environmental changes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Globe className="w-5 h-5" />}
              >
                Start Predicting
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<BarChart3 className="w-5 h-5" />}
              >
                Climate Assessment
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIClimatePredictionEnginePage;