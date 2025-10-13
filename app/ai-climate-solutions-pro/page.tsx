'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CloudIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  GlobeAltIcon,
  CpuChipIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

export default function AIClimateSolutionsProPage() {
  const climateSolutions = [
    {
      title: "AI Climate Prediction Engine",
      description: "Advanced AI-powered climate modeling and prediction system for accurate weather forecasting, climate change analysis, and environmental impact assessment.",
      icon: CloudIcon,
      features: [
        "Advanced climate modeling algorithms",
        "Real-time weather prediction",
        "Climate change impact analysis",
        "Environmental data visualization",
        "Predictive analytics for agriculture",
        "Carbon footprint tracking",
        "Disaster risk assessment",
        "API integration for weather data"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "$4,999/month",
      setupFee: "$15,000",
      benefits: ["95% prediction accuracy", "Real-time monitoring", "Climate insights"],
      useCases: ["Agriculture planning", "Disaster preparedness", "Environmental monitoring"],
      href: "/ai-climate-prediction-engine"
    },
    {
      title: "AI Carbon Management System",
      description: "Comprehensive carbon footprint tracking and management system with AI-powered optimization recommendations for reducing environmental impact.",
      icon: ChartBarIcon,
      features: [
        "Automated carbon footprint calculation",
        "AI-powered reduction recommendations",
        "Real-time emissions monitoring",
        "Sustainability reporting",
        "Carbon offset marketplace",
        "Supply chain tracking",
        "Compliance management",
        "ROI analysis for green initiatives"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$2,999/month",
      setupFee: "$8,000",
      benefits: ["30% carbon reduction", "Automated tracking", "Compliance ready"],
      useCases: ["Corporate sustainability", "Supply chain optimization", "ESG reporting"],
      href: "/ai-carbon-management"
    },
    {
      title: "AI Renewable Energy Optimizer",
      description: "Intelligent renewable energy management system that optimizes solar, wind, and other renewable energy sources for maximum efficiency and cost savings.",
      icon: LightBulbIcon,
      features: [
        "Energy production optimization",
        "Smart grid integration",
        "Battery storage management",
        "Energy trading algorithms",
        "Predictive maintenance",
        "Cost optimization",
        "Grid stability monitoring",
        "Renewable energy forecasting"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "$3,499/month",
      setupFee: "$12,000",
      benefits: ["25% energy savings", "Optimized production", "Smart grid ready"],
      useCases: ["Solar farms", "Wind energy", "Smart cities"],
      href: "/ai-renewable-energy-optimizer"
    },
    {
      title: "AI Environmental Monitoring",
      description: "Comprehensive environmental monitoring system using IoT sensors and AI to track air quality, water quality, and ecosystem health in real-time.",
      icon: GlobeAltIcon,
      features: [
        "Air quality monitoring",
        "Water quality assessment",
        "Biodiversity tracking",
        "Pollution source identification",
        "Environmental alerts",
        "Data visualization dashboards",
        "Regulatory compliance",
        "Predictive environmental modeling"
      ],
      color: "from-teal-500 to-green-500",
      price: "$2,499/month",
      setupFee: "$6,000",
      benefits: ["Real-time monitoring", "Early warning system", "Compliance automation"],
      useCases: ["Urban monitoring", "Industrial compliance", "Ecosystem protection"],
      href: "/ai-environmental-monitoring"
    },
    {
      title: "AI Sustainable Agriculture",
      description: "AI-powered precision agriculture system that optimizes crop yields, reduces water usage, and minimizes environmental impact through smart farming techniques.",
      icon: CpuChipIcon,
      features: [
        "Precision irrigation systems",
        "Crop yield optimization",
        "Pest and disease detection",
        "Soil health monitoring",
        "Weather-based recommendations",
        "Resource optimization",
        "Sustainable farming practices",
        "Farm management automation"
      ],
      color: "from-emerald-500 to-teal-500",
      price: "$1,999/month",
      setupFee: "$5,000",
      benefits: ["40% water savings", "Higher crop yields", "Reduced chemical use"],
      useCases: ["Smart farming", "Precision agriculture", "Sustainable food production"],
      href: "/ai-sustainable-agriculture"
    },
    {
      title: "AI Waste Management Optimizer",
      description: "Intelligent waste management system that optimizes collection routes, reduces waste generation, and maximizes recycling through AI-powered analysis.",
      icon: ShieldCheckIcon,
      features: [
        "Smart waste collection routing",
        "Waste composition analysis",
        "Recycling optimization",
        "Waste reduction recommendations",
        "Collection efficiency tracking",
        "Circular economy support",
        "Cost optimization",
        "Environmental impact reporting"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$1,799/month",
      setupFee: "$4,500",
      benefits: ["50% collection efficiency", "Reduced waste", "Higher recycling rates"],
      useCases: ["Municipal waste management", "Industrial waste", "Circular economy"],
      href: "/ai-waste-management"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Solutions Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered climate solutions for environmental monitoring, carbon management, renewable energy optimization, and sustainable agriculture. Combat climate change with cutting-edge technology." />
        <meta name="keywords" content="AI climate solutions, environmental monitoring, carbon management, renewable energy, sustainable agriculture, climate change, green technology" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Climate Solutions Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Combat climate change with cutting-edge AI technology
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our advanced AI climate solutions help organizations monitor environmental impact, 
              optimize renewable energy, manage carbon footprints, and build sustainable futures 
              through intelligent technology and data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Climate Solutions Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {climateSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div 
                  key={solution.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-green-400">{solution.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Setup fee: <span className="text-yellow-400 font-semibold">{solution.setupFee}</span>
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={solution.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-green-400 hover:text-green-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-green-700 hover:to-teal-700 transition-all"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Climate Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Climate Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the fight against climate change with innovative AI technology and proven results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Insights</h3>
              <p className="text-gray-300">
                Advanced machine learning algorithms provide accurate predictions and actionable insights for climate action.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Monitoring</h3>
              <p className="text-gray-300">
                Continuous monitoring and analysis of environmental data with instant alerts and recommendations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">
                Demonstrated success in reducing carbon footprints and improving environmental outcomes for our clients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GlobeAltIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Impact</h3>
              <p className="text-gray-300">
                Contributing to global climate goals and helping organizations meet their sustainability commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Make a Climate Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join the fight against climate change with our AI-powered environmental solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Climate Assessment
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Climate Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-green-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-green-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}