import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

const SmartInventoryOptimizerPage = () => {
  const benefits = [
    {
      title: "Expert Team",
      description: "Our team of AI and technology experts delivers exceptional results.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Proven Results",
      description: "We have a track record of successful projects and satisfied clients.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions that keep you ahead of the competition.",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "50+" }
  ];

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
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Reorder point alerts",
        "Basic analytics",
        "Email support",
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
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location support",
        "Advanced analytics",
        "Priority support",
        "API access",
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
        "Unlimited SKUs",
        "Custom AI models",
        "White-label solution",
        "Advanced security",
        "Dedicated support",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false
    }
  ];
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

export default function SmartInventoryOptimizerPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Smart Inventory Optimizer - Zion Tech Group</title>
        <meta name="description" content="Smart Inventory Optimizer solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Smart Inventory Optimizer</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive smart inventory optimizer solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
