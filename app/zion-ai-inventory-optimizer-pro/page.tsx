'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  Globe,
  AlertTriangle,
  ShoppingCart,
  Truck
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

export default function ZionaiinventoryoptimizerproPage() {
  return (
    <div>
      <Head>
        <title>Zion Ai Inventory Optimizer Pro - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Zion Ai Inventory Optimizer Pro
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            zion-ai-inventory-optimizer-pro services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}