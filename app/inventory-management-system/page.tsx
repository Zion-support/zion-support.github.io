import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Package, 
  BarChart3, 
  Settings, 
  Zap, 
  ArrowRight, 
  Star, 
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Database,
  CheckCircle,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const InventoryManagementSystemPage = () => {
  const features = [
    {
      title: "Real-time Inventory Tracking",
      description: "Track inventory levels in real-time across multiple locations and channels",
      icon: <Package className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Automated Reordering",
      description: "Set up automatic reorder points and purchase order generation",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-location Support",
      description: "Manage inventory across multiple warehouses and retail locations",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Barcode Scanning",
      description: "Quick and accurate inventory updates with barcode scanning",
      icon: <Settings className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive reports on inventory turnover, costs, and trends",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Low Stock Alerts",
      description: "Automated alerts for low stock levels and reorder notifications",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      title: "Reduced Costs",
      description: "Minimize carrying costs and reduce stockouts",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "30% cost reduction"
    },
    {
      title: "Improved Accuracy",
      description: "Eliminate manual errors with automated tracking",
      icon: <CheckCircle className="w-6 h-6" />,
      stat: "99.9% accuracy"
    },
    {
      title: "Better Visibility",
      description: "Real-time visibility into inventory levels and movements",
      icon: <BarChart3 className="w-6 h-6" />,
      stat: "100% visibility"
    },
    {
      title: "Increased Efficiency",
      description: "Streamline operations with automated processes",
      icon: <Zap className="w-6 h-6" />,
      stat: "50% faster"
    }
  ];

  const industries = [
    { name: "Retail", icon: <Package className="w-6 h-6" /> },
    { name: "Manufacturing", icon: <Settings className="w-6 h-6" /> },
    { name: "E-commerce", icon: <Globe className="w-6 h-6" /> },
    { name: "Healthcare", icon: <Shield className="w-6 h-6" /> },
    { name: "Food & Beverage", icon: <Database className="w-6 h-6" /> },
    { name: "Automotive", icon: <Settings className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Inventory Management System - Zion Tech Group | Stock Control & Warehouse Management</title>
        <meta name="description" content="Comprehensive inventory management system for tracking stock, managing warehouses, and optimizing supply chain operations. Reduce costs and improve efficiency." />
        <meta name="keywords" content="inventory management, stock control, warehouse management, supply chain, inventory tracking, barcode scanning" />
        <link rel="canonical" href="https://ziontechgroup.com/inventory-management-system" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Inventory Management System
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Optimize your inventory operations with our comprehensive management system. 
            Track stock levels, automate reordering, and reduce costs with powerful analytics and automation.
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
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete Inventory Management
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Everything you need to manage inventory efficiently and cost-effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Inventory System?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transform your inventory management with measurable improvements in efficiency and cost savings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our inventory management system works across all industries and business sizes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-sm font-semibold text-white">{industry.name}</h3>
              </div>
            ))}
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
            Join thousands of businesses already using our inventory management system to reduce costs and improve efficiency. 
            Start your free trial today.
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
              href="/micro-saas-services"
              variant="outline"
              size="lg"
              icon={<Settings className="w-5 h-5" />}
            >
              View All Tools
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default InventoryManagementSystemPage;