import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  SunIcon, 
  ChartBarIcon, 
  ClockIcon, 
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  CloudIcon,
  BeakerIcon,
  MapIcon
} from '@heroicons/react/24/outline';

const AISmartFarmingPage = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "Precision Agriculture",
      description: "AI-powered crop monitoring and management using satellite imagery, drones, and IoT sensors for optimal yield."
    },
    {
      icon: BeakerIcon,
      title: "Soil Analysis & Optimization",
      description: "Advanced soil testing and nutrient management recommendations based on AI analysis of soil composition and weather data."
    },
    {
      icon: CloudIcon,
      title: "Weather Prediction",
      description: "Machine learning models predict weather patterns and provide recommendations for planting, irrigation, and harvesting."
    },
    {
      icon: MapIcon,
      title: "Field Mapping & Planning",
      description: "AI-generated field maps and planting plans optimized for maximum yield and resource efficiency."
    },
    {
      icon: ChartBarIcon,
      title: "Crop Health Monitoring",
      description: "Real-time disease and pest detection using computer vision and automated alert systems for early intervention."
    },
    {
      icon: SunIcon,
      title: "Automated Irrigation",
      description: "Smart irrigation systems that adjust water usage based on soil moisture, weather, and crop needs."
    }
  ];

  const benefits = [
    "Increase crop yield by 25-40%",
    "Reduce water usage by 30%",
    "Lower fertilizer costs by 20%",
    "Minimize pesticide use by 35%",
    "Improve soil health over time",
    "Reduce labor costs by 50%"
  ];

  const pricingPlans = [
    {
      name: "Basic Farm",
      price: "$299",
      period: "per month",
      description: "Perfect for small farms",
      features: [
        "Up to 50 acres",
        "Basic crop monitoring",
        "Weather alerts",
        "Mobile app access",
        "Email support"
      ]
    },
    {
      name: "Professional Farm",
      price: "$799",
      period: "per month",
      description: "Ideal for medium farms",
      features: [
        "Up to 500 acres",
        "Advanced AI analytics",
        "Precision irrigation",
        "Drone integration",
        "Priority support",
        "API access"
      ]
    },
    {
      name: "Enterprise Farm",
      price: "$1,999",
      period: "per month",
      description: "For large operations",
      features: [
        "Unlimited acres",
        "Custom AI models",
        "Full automation",
        "Dedicated manager",
        "Advanced analytics",
        "Multi-farm management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Smart Farming Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered smart farming platform that increases crop yield by 40%, reduces water usage by 30%, and optimizes agricultural operations." />
        <meta name="keywords" content="AI smart farming, precision agriculture, crop monitoring, soil analysis, automated irrigation, agricultural AI" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <SunIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Smart Farming
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize agriculture with AI-powered smart farming that increases crop yield by 40%, reduces water usage by 30%, and optimizes every aspect of farming operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Agricultural AI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Proven Agricultural Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-800/30 rounded-lg p-4">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Scalable Farming Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan.name === 'Professional Farm' 
                  ? 'border-purple-500 ring-2 ring-purple-500/20' 
                  : 'border-slate-700'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.name === 'Professional Farm'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'border border-slate-600 text-gray-300 hover:border-purple-500 hover:text-white'
                }`}>
                  {plan.name === 'Professional Farm' ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 2,000+ farmers using AI Smart Farming to increase yields and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Start Your Free Trial
            </button>
            <button className="border border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Contact Sales
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISmartFarmingPage;