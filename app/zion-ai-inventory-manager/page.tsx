import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, BarChart3, Brain, Shield, Zap, Globe, Star, Users, Award, CheckCircle, TrendingUp, Clock, Package, Target, Settings } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const ZionAIInventoryManager = () => {
  const features = [
    {
      title: "Smart Inventory Tracking",
      description: "AI-powered inventory tracking with real-time updates and alerts",
      icon: <Package className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast demand and optimize stock levels using AI algorithms",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Automated Reordering",
      description: "Set up automatic reorder points and supplier management",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multi-location Support",
      description: "Manage inventory across multiple warehouses and locations",
      icon: <Globe className="w-6 h-6" />,
=======
import { ArrowRight, Package, Zap, Shield, BarChart3, Users, Clock, CheckCircle, Star, Sparkles, Monitor, Mic, Mail, Smartphone, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIInventoryManagerPage = () => {
  const features = [
    {
      title: "AI-Powered Demand Forecasting",
      description: "Predict inventory needs with 95% accuracy using advanced machine learning algorithms",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Inventory Tracking",
      description: "Monitor stock levels across multiple locations with instant updates and alerts",
      icon: <Package className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Reordering",
      description: "Smart reorder points that automatically place orders when stock runs low",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-location Management",
      description: "Manage inventory across warehouses, stores, and distribution centers seamlessly",
      icon: <Globe className="w-8 h-8" />,
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
<<<<<<< HEAD
    "30% reduction in stockouts",
    "25% lower inventory costs",
    "Real-time visibility",
    "Automated reordering",
    "Multi-location support",
    "Advanced analytics"
=======
    "Reduce inventory costs by up to 30%",
    "Eliminate stockouts and overstock situations",
    "Improve cash flow with optimized inventory levels",
    "Save 10+ hours per week on inventory management",
    "Integrate with existing ERP and POS systems",
    "Real-time reporting and analytics"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 products",
        "2 locations",
        "Basic reporting",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 products",
        "10 locations",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited products",
        "Unlimited locations",
        "Custom reporting",
        "Dedicated support",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false
    }
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-031e

=======
>>>>>>> origin/clean-main-20251013-145848
export default function ZionAiInventoryManager() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion AI Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="Advanced zion ai inventory manager solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion AI Inventory Manager
          </h1>
<p className="text-xl text-gray-600 mb-8">
            Intelligent inventory management with AI optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Start Free Trial
            </button>
            <button className="border border-gray-300 text-gray-300 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
<<<<<<< HEAD
        title="Zion AI Inventory Manager - Smart Inventory Management | Zion Tech Group"
        description="Optimize your inventory with AI-powered management. Smart tracking, predictive analytics, and automated reordering for modern businesses."
        keywords="inventory management, AI inventory, stock management, predictive analytics, automated reordering, inventory optimization"
=======
        title="Zion AI Inventory Manager - Smart Inventory Management Solution"
        description="Transform your inventory management with AI-powered forecasting, real-time tracking, and automated reordering. Reduce costs and eliminate stockouts with Zion AI Inventory Manager."
        keywords="inventory management, AI inventory, stock management, demand forecasting, inventory tracking, supply chain management"
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
        canonical="https://ziontechgroup.com/zion-ai-inventory-manager"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
<<<<<<< HEAD
            <Package className="w-4 h-4 text-cyan-400 mr-2" />
=======
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Inventory</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Inventory Manager
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
<<<<<<< HEAD
            Optimize your inventory with AI-powered management. 
            Smart tracking, predictive analytics, and automated reordering for modern businesses.
=======
            Transform your inventory management with AI-powered forecasting, real-time tracking, 
            and automated reordering. Reduce costs and eliminate stockouts.
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
<<<<<<< HEAD
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
=======
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Free Trial
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
<<<<<<< HEAD
              icon={<Package className="w-5 h-5" />}
            >
              View Demo
=======
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Smart Inventory Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
<<<<<<< HEAD
              Everything you need to manage your inventory efficiently with AI-powered insights.
=======
              Everything you need to optimize your inventory management with AI intelligence.
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
<<<<<<< HEAD
              <FuturisticCard
=======
              <div
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
<<<<<<< HEAD
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
=======
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
<<<<<<< HEAD
        <ResponsiveContainer>
=======
        <div className="max-w-7xl mx-auto">
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion AI Inventory Manager?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
              Experience intelligent inventory management that saves time and reduces costs.
=======
              Join thousands of businesses already using our platform to optimize their inventory management.
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Inventory?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading companies using Zion AI Inventory Manager to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5" />}
              >
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
=======
              <div
                key={index}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core inventory management features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
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
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Start your free trial today and see how AI can transform your inventory management. 
            No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default ZionAIInventoryManager;
=======
export default ZionAIInventoryManagerPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-031e
