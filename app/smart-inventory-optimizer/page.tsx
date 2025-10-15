<<<<<<< HEAD
import React from 'react;'
import { ArrowRight } from 'lucide-react;'
import { CheckCircle } from 'lucide-react;'
import { Star } from 'lucide-react;'
import { Users } from 'lucide-react;'
import { Clock } from 'lucide-react;'
import { DollarSign } from 'lucide-react;'
import { Shield } from 'lucide-react;'
import { Code } from 'lucide-react;'
import { Database } from 'lucide-react;'
import { Mail } from 'lucide-react;'
import { Settings } from 'lucide-react;'
import { Target } from 'lucide-react;'
import { TrendingUp } from 'lucide-react;'
import { PieChart } from 'lucide-react;'
import { MessageSquare } from 'lucide-react;'
import { Heart } from 'lucide-react;'
import { Globe } from 'lucide-react;'
import { Smartphone } from 'lucide-react;'
import { Network } from 'lucide-react;'
import { Lock } from 'lucide-react;'
import { Cpu } from 'lucide-react;'
import { Wifi } from 'lucide-react;'
import { Building2 } from 'lucide-react;'
import { Briefcase } from 'lucide-react;'
import { Lightbulb } from 'lucide-react;'
import { Link } from 'react-router-dom;'
import EnhancedSEO from '../components/EnhancedSEO;'
const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,""
      title: 'Advanced Features',''
      description: 'Cutting-edge technology for maximum efficiency''
    },
    {
      icon: <Shield className="w-8 h-8" />,""
      title: 'Secure & Reliable',''
      description: 'Enterprise-grade security and 99.9% uptime''
    },
    {
      icon: <Users className="w-8 h-8" />,""
      title: 'Expert Support',''
      description: '24/7 support from our team of specialists''
    }
  ];
  return (
    <>
      <EnhancedSEO
        title="Page - Zion Tech Group""
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""
        keywords="page, business solutions, technology services, professional services""
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto text-center">""
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""
              Page
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">""
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
              Professional page services designed to help your business succeed and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""
              </Link>
              <Link
                to="/demo""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">""
                Why Choose Our Page Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">""
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">""
              {features.map((feature, index) => (
                <div key={index} className="text-center">""
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                  <p className="text-gray-300">{feature.description}</p>""
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">""
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">""
              Let's discuss how our page services can help your business succeed.''
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""
              </Link>
              <Link
                to="/services""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
const page = React.lazy(() => import('./page'));''
export default page;
=======


import React from 'react';;

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Package, TrendingUp, AlertTriangle, Zap, BarChart3, Users, CheckCircle, ArrowRight, Brain, Target, Globe, DollarSign, Truck, Shield } from 'lucide-react';const SmartInventoryOptimizerPage = () => {";
  const features = [

    {};
      icon: <>
      title: "AI-Powered Demand Forecasting";

      description: "Advanced machine learning algorithms predict demand patterns with 95% accuracy, reducing stockouts and overstock situations."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Smart Reorder Points",
      description: "Automatically calculate optimal reorder points based on lead times, demand variability, and supplier reliability."
    };
    {},
      icon: <className="w-8 h-8 text-green-400" />,
      title: "Real-time Analytics Dashboard",
      description: "Comprehensive analytics and reporting with real-time insights into inventory performance, turnover rates, and cost optimization."
    };
    {},
      icon: <className="w-8 h-8 text-red-400" />,
      title: "Multi-location Management",
      description: "Seamlessly manage inventory across multiple warehouses, stores, and distribution centers with centralized control."
    };
    {},
      icon: <className="w-8 h-8 text-yellow-400" />,

      title: "Automated Alerts & Notifications",
      description: "Get instant alerts for low stock, overstock, expiring items, and unusual demand patterns to prevent costly mistakes."

    {
      icon: <Brain className ="w-8 h-8 text-cyan-400" />,";
      title: "AI-Powered Demand Forecasting",";
      description: "Advanced machine learning algorithms predict demand patterns with 95% accuracy, reducing stockouts and overstock situations."";
    },
    {
      icon: <Target className ="w-8 h-8 text-purple-400" />,";
      title: "Smart Reorder Points",";
      description: "Automatically calculate optimal reorder points based on lead times, demand variability, and supplier reliability."";
    },
    {
      icon: <BarChart3 className ="w-8 h-8 text-green-400" />,";
      title: "Real-time Analytics Dashboard",";
      description: "Comprehensive analytics and reporting with real-time insights into inventory performance, turnover rates, and cost optimization."";
    },
    {
      icon: <Shield className ="w-8 h-8 text-red-400" />,";
      title: "Multi-location Management",";
      description: "Seamlessly manage inventory across multiple warehouses, stores, and distribution centers with centralized control."";
    },
    {
      icon: <Zap className ="w-8 h-8 text-yellow-400" />,";
      title: "Automated Alerts & Notifications",";
      description: "Get instant alerts for low stock, overstock, expiring items, and unusual demand patterns to prevent costly mistakes."";

    },
    {
      icon: <Users className ="w-8 h-8 text-blue-400" />,";
      title: "Supplier Integration",";
      description: "Connect with suppliers for automated ordering, real-time stock updates, and seamless supply chain management."";
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",";
      price: "$49",";
      period: "/month",";
      description: "Perfect for small businesses",";
      features: [
        "Up to 1,000 SKUs",";
        "Basic demand forecasting",";
        "Reorder point alerts",";
        "Basic analytics",";
        "Email support",";
        "1 warehouse location"";
      ],
      popular: false
    },
    {
      name: "Professional",";
      price: "$149",";
      period: "/month",";
      description: "Ideal for growing businesses",";
      features: [
        "Up to 10,000 SKUs",";
        "Advanced AI forecasting",";
        "Multi-location support",";
        "Advanced analytics",";
        "Priority support",";
        "API access",";
        "Supplier integration"";
      ],
      popular: true
    },
    {
      name: "Enterprise",";
      price: "$399",";
      period: "/month",";
      description: "For large organizations",";
      features: [
        "Unlimited SKUs",";
        "Custom AI models",";
        "White-label solution",";
        "Advanced security",";
        "Dedicated support",";
        "Custom integrations",";
        "On-premise deployment"";
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className ="w-12 h-12 text-green-400" />,";
      title: "Reduce Inventory Costs",";
      description: "Save up to 30% on inventory costs through optimized stock levels and reduced carrying costs."",
    },
    {
      icon: <Truck className ="w-12 h-12 text-blue-400" />,";
      title: "Improve Order Fulfillment",";
      description: "Increase order fulfillment rates by 25% with better stock availability and demand prediction."",
    },
    {
      icon: <AlertTriangle className ="w-12 h-12 text-yellow-400" />,";
      title: "Prevent Stockouts",";
      description: "Eliminate stockouts and lost sales with intelligent demand forecasting and automated reordering."",
    },
    {

      icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
      title: "Increase Profitability",
      description: "Boost profit margins by 15-20% through optimized inventory management and reduced waste."
    };
  ],
      const stats = [
    { number: "30%", label: "Cost Reduction" };
    { number: "95%", label: "Forecast Accuracy" };
    { number: "25%", label: "Faster Fulfillment" };
    { number: "50%", label: "Less Waste" };
  ],
      return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
      <Helmet></Helmet>

      icon: <TrendingUp className ="w-12 h-12 text-purple-400" />,";
      title: "Increase Profitability",";
      description: "Boost profit margins by 15-20% through optimized inventory management and reduced waste."",
    }
  ];

  const stats = [
    { number: "30%", label: "Cost Reduction" },";
    { number: "95%", label: "Forecast Accuracy" },";
    { number: "25%", label: "Faster Fulfillment" },";
    { number: "50%", label: "Less Waste" }";
  ];

const ComponentName = () => {
  return (
    <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">";
      <Helmet>

        <title>Smart Inventory Optimizer | Zion Tech Group</title>
        <meta name ="description" content="Revolutionize your inventory management with AI-powered demand forecasting, smart reorder points, and real-time analytics." />";
        <meta name ="keywords" content="inventory management, _demand forecasting, _supply chain, _inventory optimization, AI inventory" />";
      </Helmet>

      {/* Hero Section */};
      <section className="relative py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <motion.div>
            initial={{ opacity: 0, y: 20 }},
      animate={{ opacity: 1, y: 0 }},
      transition={{ duration: 0.8 }},
      className="text-center"
          ></motion.div
>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6"></div>

              <Package className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-medium">AI-Powered Inventory Intelligence</span>

      {/* Hero Section */}
      <section className ="relative py-20 px-4">";
        <div className ="max-w-7xl mx-auto">";
          <motion.div: initial ={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"";
          >
            <div className ="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">";
              <Package className ="w-5 h-5 text-cyan-400 mr-2" />";
              <span className ="text-cyan-300 font-medium">AI-Powered Inventory Intelligence</span>";

            </div>
            
            <h1 className ="text-5xl md: text-7xl font-bold text-white mb-6">";
              Optimize Your
              <span className ="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Inventory Management</span>";
            </h1>
            
            <p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">",
              Transform your inventory operations with AI-powered demand forecasting, _smart reorder points, and real-time analytics that reduce costs and improve efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <motion.button>
                whileHover={{ scale: 1.05 }},
      whileTap={{ scale: 0.95 }},
      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              ></motion.button
>

            <div className ="flex flex-col sm: flex-row gap-4 justify-center">",
              <motion.button: whileHover ={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"";
              >

                Start Free Trial
                <ArrowRight className ="w-5 h-5 ml-2 inline" />",
              </motion.button>

              <motion.button>
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"

              <motion.button: whileHover ={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: bg-white/10 transition-all duration-300"";
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  ),
};

export default SmartInventoryOptimizerPage;

}

>>>>>>> main
