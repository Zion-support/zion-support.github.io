import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BoltIcon, 
  ChartBarIcon, 
  ClockIcon, 
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  SunIcon,
  LightBulbIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const AISmartEnergyPage = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "Energy Consumption Optimization",
      description: "AI algorithms analyze energy usage patterns and automatically optimize consumption to reduce costs by up to 40%."
    },
    {
      icon: SunIcon,
      title: "Renewable Energy Integration",
      description: "Smart management of solar, wind, and other renewable sources with predictive analytics for optimal energy mix."
    },
    {
      icon: ChartBarIcon,
      title: "Predictive Maintenance",
      description: "Machine learning models predict equipment failures and schedule maintenance to prevent costly downtime."
    },
    {
      icon: LightBulbIcon,
      title: "Smart Grid Management",
      description: "Advanced grid optimization with real-time load balancing and demand response capabilities."
    },
    {
      icon: CogIcon,
      title: "Automated Energy Trading",
      description: "AI-powered energy trading platform that buys and sells energy at optimal times for maximum savings."
    },
    {
      icon: BoltIcon,
      title: "Peak Demand Management",
      description: "Intelligent load shifting and demand response to reduce peak energy costs and grid stress."
    }
  ];

  const benefits = [
    "Reduce energy costs by 40%",
    "Increase energy efficiency by 35%",
    "Prevent equipment failures by 90%",
    "Optimize renewable energy by 50%",
    "Reduce carbon footprint by 30%",
    "Improve grid stability by 60%"
  ];

  const pricingPlans = [
    {
      name: "Residential",
      price: "$99",
      period: "per month",
      description: "Perfect for homes",
      features: [
        "Smart meter integration",
        "Energy usage analytics",
        "Cost optimization",
        "Mobile app access",
        "Email support"
      ]
    },
    {
      name: "Commercial",
      price: "$499",
      period: "per month",
      description: "Ideal for businesses",
      features: [
        "Multi-site management",
        "Advanced AI analytics",
        "Predictive maintenance",
        "Energy trading",
        "Priority support",
        "API integrations"
      ]
    },
    {
      name: "Industrial",
      price: "$1,999",
      period: "per month",
      description: "For large facilities",
      features: [
        "Custom AI models",
        "Full automation",
        "Dedicated manager",
        "Advanced analytics",
        "White-label solution",
        "24/7 monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Smart Energy Management - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered energy management system that reduces costs by 40%, optimizes renewable energy, and prevents equipment failures." />
        <meta name="keywords" content="AI energy management, smart energy, renewable energy, energy optimization, smart grid, energy trading" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <BoltIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Smart Energy
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your energy management with AI that reduces costs by 40%, optimizes renewable energy usage, and prevents equipment failures before they happen.
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
            Intelligent Energy Solutions
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
            Proven Energy Savings
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
            Flexible Energy Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan.name === 'Commercial' 
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
                  plan.name === 'Commercial'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'border border-slate-600 text-gray-300 hover:border-purple-500 hover:text-white'
                }`}>
                  {plan.name === 'Commercial' ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Energy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 1,500+ organizations using AI Smart Energy to reduce costs and improve efficiency.
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
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISmartEnergyPage;