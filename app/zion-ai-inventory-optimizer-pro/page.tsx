import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import { 
  Package, 
  BarChart3, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
Zap,
  Sparkles,
  Cpu,
  AlertTriangle,
  ShoppingCart,
  Truck,
Globe
} from 'lucide-react';

const ZionAIInventoryOptimizerProPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Demand Forecasting",
      description: "Advanced machine learning algorithms predict demand patterns with 95% accuracy, reducing stockouts and overstock.",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["95% forecast accuracy", "Seasonal pattern recognition", "Real-time adjustments"]
    },
    {
      title: "Smart Reorder Point Optimization",
      description: "Automatically calculate optimal reorder points based on lead times, demand variability, and service level targets.",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Automated reorder points", "Lead time optimization", "Service level targeting"]
    },
    {
      title: "Multi-Location Inventory Management",
      description: "Centralized control of inventory across multiple warehouses, stores, and distribution centers.",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Centralized visibility", "Cross-location transfers", "Unified reporting"]
    },
    {
      title: "Real-time Analytics & Insights",
      description: "Comprehensive dashboards with inventory turnover, carrying costs, and performance metrics.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Real-time dashboards", "Cost analysis", "Performance tracking"]
    },
    {
      title: "Automated Purchase Orders",
      description: "AI generates and sends purchase orders automatically based on demand forecasts and supplier lead times.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Automated PO generation", "Supplier integration", "Cost optimization"]
    },
    {
      title: "Dead Stock Prevention",
      description: "Identify and prevent dead stock through AI analysis of sales velocity and product lifecycle patterns.",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ["Dead stock alerts", "Lifecycle analysis", "Liquidation recommendations"]
    }
  ];

  const industries = [
    { name: "E-commerce", icon: <ShoppingCart className="w-6 h-6" />, color: "from-blue-500 to-blue-600" },
    { name: "Retail", icon: <Package className="w-6 h-6" />, color: "from-green-500 to-green-600" },
    { name: "Manufacturing", icon: <Cpu className="w-6 h-6" />, color: "from-orange-500 to-red-600" },
    { name: "Wholesale", icon: <Truck className="w-6 h-6" />, color: "from-purple-500 to-pink-600" },
    { name: "Food & Beverage", icon: <Package className="w-6 h-6" />, color: "from-yellow-500 to-orange-600" },
    { name: "Pharmaceutical", icon: <Package className="w-6 h-6" />, color: "from-cyan-500 to-blue-600" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses with basic inventory needs",
      features: [
        "Up to 1,000 SKUs",
        "Basic forecasting",
        "Single location",
        "Email support",
        "Standard reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses with complex inventory operations",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location support",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations with enterprise-scale inventory management",
      features: [
        "Unlimited SKUs",
        "Enterprise AI features",
        "Unlimited locations",
        "Dedicated support",
        "Custom development",
        "White-label options",
        "Advanced security",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "James Rodriguez",
      company: "RetailMax Inc.",
      role: "Operations Director",
      content: "Zion AI Inventory Optimizer Pro reduced our inventory costs by 30% and eliminated stockouts completely. The ROI was immediate!",
      rating: 5,
      avatar: "JR",
    },
    {
      name: "Lisa Chen",
      company: "E-commerce Plus",
      role: "Supply Chain Manager",
      content: "The demand forecasting is incredibly accurate. We've reduced overstock by 45% while maintaining 99% service levels.",
      rating: 5,
      avatar: "LC",
    },
    {
      name: "Michael Thompson",
      company: "Manufacturing Corp",
      role: "Inventory Manager",
      content: "Managing inventory across 15 locations is now effortless. The AI recommendations have transformed our operations.",
      rating: 5,
      avatar: "MT",
    }
  ];
>>>>>>> origin/clean-main-20251013-145848

export default function ZionAIInventoryOptimizerPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title> - Zion Tech Group</title>
        <meta name="description" content="Advanced  solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced  solutions by Zion Tech Group
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}