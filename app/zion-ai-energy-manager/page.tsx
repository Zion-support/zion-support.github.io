import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, BarChart3, Shield, Leaf, Star, CheckCircle, AlertTriangle, Clock, Users, ArrowRight, Sparkles, Brain, Battery, TrendingUp, Settings } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const ZionAiEnergyManagerPage = () => {
  const features = [
    {
      title: "AI-Powered Energy Optimization",
      description: "Advanced machine learning algorithms analyze energy consumption patterns and optimize usage for maximum efficiency",
      icon: <Brain className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor energy consumption in real-time with detailed analytics and instant alerts for anomalies",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Analytics",
      description: "Predict future energy needs and costs using advanced forecasting models and historical data",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Automated Controls",
      description: "Automatically adjust energy settings based on usage patterns, weather, and occupancy data",
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$39",
      period: "month",
      description: "Perfect for small businesses and homes",
      features: [
        "Up to 10 devices",
        "Basic energy monitoring",
        "Monthly reports",
        "Email alerts",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "month",
      description: "Ideal for medium-sized businesses",
      features: [
        "Up to 50 devices",
        "Advanced AI optimization",
        "Real-time monitoring",
        "Predictive analytics",
        "Priority support",
        "Custom dashboards",
        "API integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$249",
      period: "month",
      description: "For large organizations and facilities",
      features: [
        "Unlimited devices",
        "Custom AI models",
        "On-premise deployment",
        "Advanced reporting",
        "24/7 phone support",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "30%", label: "Average Energy Savings", icon: <Leaf className="w-6 h-6" /> },
    { number: "24/7", label: "Real-time Monitoring", icon: <Clock className="w-6 h-6" /> },
    { number: "500+", label: "Facilities Managed", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "System Uptime", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Zion AI Energy Manager - Smart Energy Management & Optimization | Zion Tech Group"
        description="AI-powered energy management system that optimizes energy consumption, reduces costs, and provides real-time monitoring. Smart energy solutions for homes and businesses."
        keywords="energy management, energy optimization, smart energy, energy monitoring, energy savings, AI energy, energy analytics, energy efficiency"
        canonical="https://ziontechgroup.com/zion-ai-energy-manager"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">AI-Powered Energy Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              Zion AI Energy Manager
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Optimize your energy consumption with AI-powered management that reduces costs, 
            improves efficiency, and provides real-time insights into your energy usage patterns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <ResponsiveGrid cols={{ default: 2, md: 4 }} className="max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Smart Energy Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our AI-powered platform provides comprehensive energy management capabilities to help you 
              reduce costs, improve efficiency, and make data-driven energy decisions.
            </p>
          </div>
          
          <ResponsiveGrid cols={{ default: 1, md: 2, lg: 4 }}>
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group cursor-pointer"
                glowColor="yellow"
              >
                <div className="p-6">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-yellow-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your energy management needs. All plans include our core AI optimization features.
            </p>
          </div>
          
          <ResponsiveGrid cols={{ default: 1, md: 3 }} className="max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-yellow-500/50 ring-2 ring-yellow-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Energy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations who trust Zion AI Energy Manager to reduce costs, 
              improve efficiency, and make smarter energy decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Zap className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Contact us for enterprise pricing and custom solutions</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
                <a href="tel:+13024640950" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAiEnergyManagerPage;