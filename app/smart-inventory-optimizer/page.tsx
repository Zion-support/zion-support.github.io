import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Demand Forecasting",
      description: "Advanced machine learning algorithms predict demand patterns with 95% accuracy, reducing stockouts and overstock situations."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Smart Reorder Points",
      description: "Automatically calculate optimal reorder points based on lead times, demand variability, and supplier reliability."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Real-time Analytics Dashboard",
      description: "Comprehensive analytics and reporting with real-time insights into inventory performance, turnover rates, and cost optimization."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Multi-location Management",
      description: "Seamlessly manage inventory across multiple warehouses, stores, and distribution centers with centralized control."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automated Alerts & Notifications",
      description: "Get instant alerts for low stock, overstock, expiring items, and unusual demand patterns to prevent costly mistakes."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Supplier Integration",
      description: "Connect with suppliers for automated ordering, real-time stock updates, and seamless supply chain management."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 SKUs",";
        "Basic demand forecasting",";
        "Reorder point alerts",";
        "Basic analytics",";
        "Email support",";
        "1 warehouse location"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 SKUs",";
        "Advanced AI forecasting",";
        "Multi-location support",";
        "Advanced analytics",";
        "Priority support",";
        "API access",";
        "Supplier integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited SKUs",";
        "Custom AI models",";
        "White-label solution",";
        "Advanced security",";
        "Dedicated support",";
        "Custom integrations",";
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-12 h-12 text-green-400" />,
      title: "Reduce Inventory Costs",
      description: "Save up to 30% on inventory costs through optimized stock levels and reduced carrying costs."
    },
    {
      icon: <Truck className="w-12 h-12 text-blue-400" />,
      title: "Improve Order Fulfillment",
      description: "Increase order fulfillment rates by 25% with better stock availability and demand prediction."
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-yellow-400" />,
      title: "Prevent Stockouts",
      description: "Eliminate stockouts and lost sales with intelligent demand forecasting and automated reordering."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
      title: "Increase Profitability",
      description: "Boost profit margins by 15-20% through optimized inventory management and reduced waste."
    }
  ];

  const stats = [
    { number: "30%", label: "Cost Reduction" },
    { number: "95%", label: "Forecast Accuracy" },
    { number: "25%", label: "Faster Fulfillment" },
    { number: "50%", label: "Less Waste" }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></></div>
      <Helmet></Helmet>
        <title>Smart Inventory Optimizer | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your inventory management with AI-powered demand forecasting, smart reorder points, and real-time analytics." /></meta>
        <meta name="keywords" content="inventory management, _demand forecasting, _supply chain, _inventory optimization, AI inventory" /></meta>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          ></motion>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6"></div>
              <Package className="w-5 h-5 text-cyan-400 mr-2" /></Package>
              <span className="text-cyan-300 font-medium">AI-Powered Inventory Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
              Optimize Your
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Inventory Management</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Transform your inventory operations with AI-powered demand forecasting, _smart reorder points, and real-time analytics that reduce costs and improve efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              ></motion>
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" /></ArrowRight>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              ></motion>
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
    </>
  );
};

export default SmartInventoryOptimizerPage;
