import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Brain, Zap, ArrowRight, CheckCircle, Star, Users, Award, BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIInventoryManagerPage = () => {
  const features = [
    {
      title: "AI-Powered Demand Forecasting",
      description: "Predict inventory needs with machine learning algorithms and historical data analysis",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Predictive analytics", "Seasonal adjustments", "Trend analysis"]
    },
    {
      title: "Automated Reordering",
      description: "Smart reorder points and automated purchase orders based on AI recommendations",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Auto-reorder", "Supplier integration", "Cost optimization"]
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive dashboards and reports for inventory performance and optimization",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Live tracking", "Performance metrics", "Custom reports"]
    }
  ];

  const stats = [
    { number: "30%", label: "Cost Reduction", icon: <Award className="w-6 h-6" /> },
    { number: "95%", label: "Accuracy Rate", icon: <Brain className="w-6 h-6" /> },
    { number: "50%", label: "Less Stockouts", icon: <Package className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Zion AI Inventory Manager - Zion Tech Group | Intelligent Inventory Management"
        description="Transform your inventory management with AI-powered tools. Demand forecasting, automated reordering, and real-time analytics for optimal inventory control."
        keywords="AI inventory management, inventory optimization, demand forecasting, automated reordering, inventory analytics, supply chain AI"
        canonical="https://ziontechgroup.com/zion-ai-inventory-manager"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Inventory Manager
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your inventory management with AI-powered tools. Demand forecasting, 
            automated reordering, and real-time analytics for optimal inventory control and cost reduction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton href="/contact" variant="primary" size="lg">
              Get Started Today
            </FuturisticButton>
            <FuturisticButton href="/demo" variant="outline" size="lg">
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Intelligent Inventory Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered inventory management platform provides comprehensive control and optimization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FuturisticCard className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  Up to 1,000 products
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  Basic AI forecasting
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  Email support
                </li>
              </ul>
              <FuturisticButton href="/contact" variant="outline" className="w-full">
                Get Started
              </FuturisticButton>
            </FuturisticCard>
            <FuturisticCard className="p-8 text-center border-2 border-cyan-400">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  Up to 10,000 products
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  Advanced AI forecasting
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  Automated reordering
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  Priority support
                </li>
              </ul>
              <FuturisticButton href="/contact" variant="primary" className="w-full">
                Get Started
              </FuturisticButton>
            </FuturisticCard>
            <FuturisticCard className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$599<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  Unlimited products
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  API access
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  24/7 dedicated support
                </li>
              </ul>
              <FuturisticButton href="/contact" variant="outline" className="w-full">
                Contact Sales
              </FuturisticButton>
            </FuturisticCard>
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI inventory manager for better control and cost savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton href="/contact" variant="primary" size="lg">
              Start Your Free Trial
            </FuturisticButton>
            <FuturisticButton href="/demo" variant="outline" size="lg">
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIInventoryManagerPage;