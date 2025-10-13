'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CpuChipIcon,
  SunIcon,
  BoltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function AIClimatePredictionEnginePage() {
  const features = [
    "Advanced AI climate modeling with 95% accuracy",
    "Real-time weather pattern analysis and prediction",
    "Long-term climate trend forecasting (1-50 years)",
    "Extreme weather event prediction and alerts",
    "Carbon footprint tracking and optimization",
    "Renewable energy production forecasting",
    "Agricultural yield prediction based on climate",
    "Sea level rise and coastal impact modeling",
    "Urban heat island effect analysis",
    "Custom climate risk assessment reports"
  ];

  const industries = [
    {
      name: "Agriculture",
      description: "Optimize crop planning and yield prediction",
      icon: SunIcon,
      benefits: ["30% increase in crop yield", "Reduced weather-related losses", "Optimal planting schedules"]
    },
    {
      name: "Energy",
      description: "Forecast renewable energy production",
      icon: BoltIcon,
      benefits: ["25% better energy planning", "Reduced grid instability", "Optimized storage management"]
    },
    {
      name: "Insurance",
      description: "Assess climate-related risks accurately",
      icon: ShieldCheckIcon,
      benefits: ["40% better risk assessment", "Reduced claim payouts", "Improved pricing models"]
    },
    {
      name: "Urban Planning",
      description: "Design climate-resilient cities",
      icon: GlobeAltIcon,
      benefits: ["Future-proof infrastructure", "Reduced climate damage", "Sustainable development"]
    }
  ];

  const pricingTiers = [
    {
      name: "Basic",
      price: "$299",
      period: "/month",
      features: [
        "Up to 1,000 predictions per month",
        "Basic weather forecasting",
        "7-day weather outlook",
        "Email support",
        "Standard API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      features: [
        "Up to 10,000 predictions per month",
        "Advanced climate modeling",
        "30-day weather outlook",
        "Priority support",
        "Advanced API access",
        "Custom risk assessments",
        "Historical data analysis"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "/month",
      features: [
        "Unlimited predictions",
        "Premium climate models",
        "Long-term forecasting (1-50 years)",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label solution",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Prediction Engine - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered climate prediction engine with 95% accuracy. Forecast weather patterns, climate trends, and extreme events for better decision making." />
        <meta name="keywords" content="AI climate prediction, weather forecasting, climate modeling, environmental AI, climate risk assessment, renewable energy forecasting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-500 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-900/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CloudIcon className="w-4 h-4" />
              AI-Powered Climate Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Climate Prediction Engine
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Predict climate patterns with 95% accuracy using advanced AI technology
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Our revolutionary AI climate prediction engine analyzes vast amounts of environmental data to provide 
              accurate weather forecasts, climate trend predictions, and extreme weather event warnings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Climate Analysis
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Climate Intelligence Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology that understands and predicts complex climate patterns
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <ChartBarIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Feature {index + 1}</h3>
                    <p className="text-gray-300 text-sm">{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transforming Industries with Climate Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI climate prediction engine serves diverse industries with tailored solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-cyan-800/50 to-blue-800/50 p-6 rounded-xl border border-cyan-600/30 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{industry.description}</p>
                    <div className="space-y-2">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded-full">
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your climate prediction needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div 
                key={tier.name}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  tier.popular 
                    ? 'border-cyan-500 ring-2 ring-cyan-500/20' 
                    : 'border-slate-600 hover:border-cyan-500'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-green-400">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
                      : 'bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500'
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
      <section className="py-20 bg-gradient-to-r from-slate-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Predict the Future of Climate?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join leading organizations using our AI climate prediction engine to make data-driven decisions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}