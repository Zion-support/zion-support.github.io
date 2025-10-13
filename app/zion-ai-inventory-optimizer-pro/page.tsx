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
  Sparkles,
  Cpu,
  Globe,
  AlertTriangle,
  ShoppingCart,
  Truck,
  Zap
} from 'lucide-react';

const ZionAIInventoryOptimizerProPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Demand Forecasting"Advanced machine learning algorithms predict demand patterns with 95% accuracy, reducing stockouts and overstock.",
      icon: <Cpu className="95% forecast accuracy", ", "Real-time adjustments"Smart Reorder Point Optimization",
      description: ",
      icon: <Target className="w-6 h-6", "Lead time optimization"Service level targeting"]
    },
    {
      title: ",
      description: "Centralized control of inventory across multiple warehouses, stores, and distribution centers."w-6 h-6"Centralized visibility"Cross-location transfers", "]
    },
    {
      title: "Real-time Analytics & Insights"Comprehensive dashboards with inventory turnover, carrying costs, and performance metrics.",
      icon: <BarChart3 className="Real-time dashboards", ", "Performance tracking"Automated Purchase Orders",
      description: ",
      icon: <Zap className="w-6 h-6", "Supplier integration"Cost optimization"]
    },
    {
      title: ",
      description: "Identify and prevent dead stock through AI analysis of sales velocity and product lifecycle patterns."w-6 h-6"Dead stock alerts"Lifecycle analysis", "]
    }
  ];

  const industries = [
    { name: "E-commerce"w-6 h-6"from-blue-500 to-blue-600"Retail", icon: <Package className="from-green-500 to-green-600" },
    { name: ", icon: <Cpu className="w-6 h-6" },
    { name: "Wholesale"w-6 h-6"from-purple-500 to-pink-600"Food & Beverage", icon: <Package className="from-yellow-500 to-orange-600" },
    { name: ", icon: <Package className="w-6 h-6" }
  ];

  const pricingPlans = [
    {
      name: "Starter"$199",
      period: ",
      description: "Perfect for small businesses with basic inventory needs"Up to 1,000 SKUs",
        ",
        "Single location"Email support",
        "
      ],
      popular: false
    },
    {
      name: "Professional"$499",
      period: ",
      description: "Ideal for growing businesses with complex inventory operations"Up to 10,000 SKUs",
        ",
        "Multi-location support"Priority support",
        ",
        "API access"Custom integrations"
      ],
      popular: true
    },
    {
      name: ",
      price: "$1,299"/month",
      description: ",
      features: [
        "Unlimited SKUs"Enterprise AI features",
        ",
        "Dedicated support"Custom development",
        ",
        "Advanced security"On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: ",
      company: "RetailMax Inc."Operations Director",
      content: ",
      rating: 5,
      avatar: "JR"Lisa Chen",
      company: ",
      role: "Supply Chain Manager"The demand forecasting is incredibly accurate. We've reduced overstock by 45% while maintaining 99% service levels.",
      rating: 5,
      avatar: ",
    },
    {
      name: "Michael Thompson"Manufacturing Corp",
      role: ",
      content: "Managing inventory across 15 locations is now effortless. The AI recommendations have transformed our operations."MT",
    }
  ];

export default function ZionAiInventoryOptimizerPro() {
  return (
    <div className="description" content=" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
          <h1 className="text-4 xl font-bold text-gray-900 mb-6">
            Advanced zion ai inventory optimizer pro solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
