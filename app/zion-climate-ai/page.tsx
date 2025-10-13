import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Leaf, 
  Wind, 
  Sun, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Award,
  Sparkles,
  Database,
  Cpu,
  BarChart3,
  Shield
} from 'lucide-react';

const ZionClimateAI = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "Climate Modeling",
      description: "Advanced AI models that predict climate patterns and environmental changes with unprecedented accuracy",
      benefit: "95% prediction accuracy"
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-400" />,
      title: "Carbon Footprint Analysis",
      description: "Comprehensive carbon tracking and reduction strategies for businesses and organizations",
      benefit: "30% carbon reduction"
    },
    {
      icon: <Wind className="w-8 h-8 text-blue-400" />,
      title: "Renewable Energy Optimization",
      description: "AI-powered optimization of renewable energy systems for maximum efficiency and sustainability",
      benefit: "40% energy efficiency boost"
    },
    {
      icon: <Sun className="w-8 h-8 text-yellow-400" />,
      title: "Environmental Monitoring",
      description: "Real-time monitoring of air quality, water resources, and ecosystem health",
      benefit: "24/7 environmental insights"
    }
  ];

  const pricingPlans = [
    {
      name: "Climate Starter",
      price: "$199",
      period: "/month",
      description: "Basic climate intelligence for small organizations",
      features: [
        "Basic climate modeling",
        "Carbon footprint tracking",
        "Standard reporting",
        "Email support",
        "10GB data storage"
      ],
      popular: false
    },
    {
      name: "Climate Professional",
      price: "$599",
      period: "/month",
      description: "Advanced climate solutions for growing businesses",
      features: [
        "Advanced climate modeling",
        "Comprehensive carbon analysis",
        "Renewable energy optimization",
        "Priority support",
        "100GB data storage",
        "Custom dashboards"
      ],
      popular: true
    },
    {
      name: "Climate Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Complete climate intelligence for large organizations",
      features: [
        "Full climate AI suite",
        "Custom environmental models",
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
      title: "Smart Cities",
      description: "Optimize urban planning and resource management for sustainability",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Agriculture",
      description: "Precision farming with climate-optimized crop management",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: "Energy Sector",
      description: "Optimize renewable energy production and grid management",
      icon: <Wind className="w-6 h-6" />
    },
    {
      title: "Manufacturing",
      description: "Reduce environmental impact through sustainable production",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const environmentalMetrics = [
    { name: "CO2 Reduction", value: "2.3M tons", icon: "🌱" },
    { name: "Energy Saved", value: "15.7 GWh", icon: "⚡" },
    { name: "Water Conserved", value: "8.9M gallons", icon: "💧" },
    { name: "Trees Planted", value: "45,000+", icon: "🌳" },
    { name: "Cities Optimized", value: "150+", icon: "🏙️" },
    { name: "Ecosystems Protected", value: "25+", icon: "🦋" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
      <Helmet>
        <title>Zion Climate AI - AI-Powered Climate Intelligence & Sustainability Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your environmental impact with Zion Climate AI - advanced climate modeling, carbon tracking, and renewable energy optimization powered by AI." />
        <meta name="keywords" content="climate AI, environmental intelligence, carbon tracking, renewable energy, climate modeling, sustainability, green tech" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-climate-ai" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 animate-pulse"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-6 py-3 mb-8 border border-green-500/30">
              <Globe className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-medium">Climate Intelligence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Climate AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered climate intelligence platform that helps organizations 
              achieve sustainability goals and combat climate change through data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Climate Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center gap-2 border border-green-500/50 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300"
              >
                Watch Demo
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/20">
              <div className="text-4xl font-bold text-emerald-400 mb-2">30%</div>
              <div className="text-gray-300">Carbon Reduction</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Energy Efficiency</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Environmental Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Climate Intelligence Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive climate solutions powered by advanced AI and environmental data science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 font-medium">{feature.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Metrics */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-green-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Environmental Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real impact achieved through AI-powered climate intelligence and sustainability solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {environmentalMetrics.map((metric, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold text-green-400 mb-1">{metric.value}</div>
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
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Climate AI solutions transforming industries and driving sustainable innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-green-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Climate AI Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the climate intelligence level that matches your sustainability goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/50' 
                  : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-green-400">{plan.price}</span>
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
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'border border-green-500/50 text-green-300 hover:bg-green-500/10'
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
      <section className="py-20 px-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Build a Sustainable Future
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the climate revolution with Zion Climate AI. Together, we can create a more 
            sustainable world through intelligent environmental solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Our Climate Experts
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center gap-2 border border-green-500/50 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionClimateAI;