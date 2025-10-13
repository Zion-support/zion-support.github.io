<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

import { ArrowRight, BarChart3, Brain, Shield, Zap, Globe, Star, Users, Award, CheckCircle, TrendingUp, Clock, Package, Target, Settings } from 'lucide-react';
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, TrendingUp } from "lucide-react";
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const ZionAIInventoryManager = () => {
<<<<<<< HEAD
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
    "30% reduction in stockouts",
    "25% lower inventory costs",
    "Real-time visibility",
    "Automated reordering",
    "Multi-location support",
    "Advanced analytics"
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
=======

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 products",
        "Basic AI forecasting",
        "2 user accounts",
        "Email support",
        "Mobile app access",
        "Basic reporting"
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
        "Advanced AI forecasting",
        "10 user accounts",
        "Priority support",
        "Multi-location support",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited products",
        "Premium AI forecasting",
        "Unlimited users",
        "24/7 phone support",
        "Multi-warehouse support",
        "Custom reporting",
        "White-label options",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechGear Solutions",
      role: "Operations Manager",
      content: "Zion AI Inventory Manager reduced our stockouts by 70% and saved us $50,000 in the first year. The AI forecasting is incredibly accurate.",
      rating: 5,
      savings: "$50,000 saved"
    },
    {
      name: "Michael Chen",
      company: "RetailMax Inc",
      role: "CEO",
      content: "The multi-channel integration is seamless. We can now track inventory across all our sales channels in real-time.",
      rating: 5,
      savings: "60% fewer stockouts"
    },
    {
      name: "Emily Rodriguez",
      company: "Fashion Forward",
      role: "Inventory Director",
      content: "The mobile app is fantastic. I can check inventory levels and place orders from anywhere. Game changer for our business.",
      rating: 5,
      savings: "40% time saved"
    }
  ];

  const stats = [
    { number: "95%", label: "Forecast Accuracy", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "60%", label: "Reduction in Stockouts", icon: <AlertTriangle className="w-6 h-6" /> },
    { number: "40%", label: "Time Saved", icon: <Clock className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Inventory Manager - AI-Powered Inventory Management | Zion Tech Group"
        description="Revolutionary AI-powered inventory management system with demand forecasting, real-time tracking, and automated reorder points. Reduce stockouts by 60% and save costs."
        keywords="AI inventory management, demand forecasting, inventory tracking, stock management, supply chain optimization, business automation"
        canonical="https://ziontechgroup.com/zion-ai-inventory-manager"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Inventory Management</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Zion AI Inventory Manager
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your inventory management with AI-powered demand forecasting, real-time tracking, 
              and automated reorder points. Reduce stockouts by 60% and optimize your supply chain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
          </div>
        </div>
      </div>
    </div>
  );
}
        title="Zion AI Inventory Manager - Smart Inventory Management | Zion Tech Group"
        description="Optimize your inventory with AI-powered management. Smart tracking, predictive analytics, and automated reordering for modern businesses."
        keywords="inventory management, AI inventory, stock management, predictive analytics, automated reordering, inventory optimization"
            <Package className="w-4 h-4 text-cyan-400 mr-2" />
            Optimize your inventory with AI-powered management. 
            Smart tracking, predictive analytics, and automated reordering for modern businesses.
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
              icon={<Package className="w-5 h-5" />}
            >
              View Demo
              Everything you need to manage your inventory efficiently with AI-powered insights.
              <FuturisticCard
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
        <ResponsiveContainer>
              Experience intelligent inventory management that saves time and reduces costs.
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
export default ZionAIInventoryManager;
