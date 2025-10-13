import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Sparkles, 
  Brain, 
  ArrowRight,
  Star,
  Zap,
  Globe,
  BarChart3,
  CheckCircle,
  Clock,
  Users,
  Target,
  TrendingUp,
  Shield,
  Cloud
} from 'lucide-react';

const AIClimateSolutionsProPage = () => {
  const features = [
    "AI-Powered Climate Modeling",
    "Carbon Footprint Analysis",
    "Renewable Energy Optimization",
    "Environmental Impact Assessment",
    "Climate Risk Prediction",
    "Sustainability Reporting",
    "Green Supply Chain Management",
    "Energy Consumption Optimization",
    "Waste Reduction Analytics",
    "Emission Tracking & Monitoring",
    "Climate Data Visualization",
    "Automated Compliance Reporting"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and organizations",
      features: [
        "Basic carbon tracking",
        "Energy optimization",
        "Standard reporting",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month", 
      description: "Ideal for growing businesses and environmental agencies",
      features: [
        "Advanced climate modeling",
        "Renewable energy optimization",
        "Custom reporting",
        "Priority support",
        "API integration",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1999",
      period: "/month",
      description: "For large organizations and government agencies",
      features: [
        "Full AI capabilities",
        "Custom integrations",
        "White-label options",
        "Dedicated support",
        "On-premise deployment",
        "Advanced compliance"
      ],
      popular: false
    }
  ];

  const solutions = [
    {
      title: "Carbon Reduction",
      description: "AI-powered strategies to reduce carbon footprint and emissions",
      icon: <Leaf className="w-6 h-6" />,
      metric: "40% reduction"
    },
    {
      title: "Energy Optimization",
      description: "Optimize energy consumption and integrate renewable sources",
      icon: <Zap className="w-6 h-6" />,
      metric: "35% savings"
    },
    {
      title: "Climate Risk",
      description: "Predict and mitigate climate-related risks and impacts",
      icon: <Shield className="w-6 h-6" />,
      metric: "90% accuracy"
    },
    {
      title: "Sustainability",
      description: "Comprehensive sustainability reporting and compliance",
      icon: <Globe className="w-6 h-6" />,
      metric: "100% compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Climate Solutions Pro - Environmental AI Technology | Zion Tech Group</title>
        <meta name="description" content="Combat climate change with AI. Carbon reduction, renewable energy optimization, climate risk prediction, and sustainability reporting. Build a greener future." />
        <meta name="keywords" content="AI climate solutions, carbon reduction, renewable energy, climate risk, sustainability, environmental AI, green technology" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Climate Innovation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Climate Solutions Pro
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Combat climate change with AI-powered solutions. Reduce carbon footprint, optimize renewable energy, 
            predict climate risks, and build a sustainable future with intelligent environmental technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Climate Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <Globe className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Solutions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{solution.description}</p>
              <div className="text-xl font-bold text-cyan-400">{solution.metric}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Advanced Features
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              How It Works
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">1. Data Analysis</h3>
              <p className="text-gray-300">AI analyzes environmental data, energy consumption, and climate patterns</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">2. AI Modeling</h3>
              <p className="text-gray-300">Advanced AI models predict climate impacts and optimize solutions</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">3. Implementation</h3>
              <p className="text-gray-300">Deploy optimized solutions and monitor environmental impact</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Simple Pricing
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build a Greener Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the fight against climate change with AI-powered solutions that deliver 
              real environmental impact and sustainable business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Climate Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <Globe className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIClimateSolutionsProPage;