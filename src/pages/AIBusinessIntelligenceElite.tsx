import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, TrendingUp, Target, CheckCircle, ArrowRight, Users, Palette, Zap, Cpu, Database, Network, Code, Rocket, Eye, DollarSign, ShoppingCart, Cloud, Building, Heart, Lock, AlertTriangle, Server, Truck, Car, TestTube, PenTool, Building2, FileText, Quote, Newspaper, Calendar, Video, HelpCircle, LifeBuoy, Store, PieChart, Share2, Monitor, Smartphone, Shield, Clock, Globe, BookOpen, GraduationCap, Stethoscope, Activity, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIBusinessIntelligenceElite: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced AI algorithms that provide deep insights into business performance"
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Live business intelligence dashboards with instant data updates"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast future trends and business outcomes with AI precision"
    },
    {
      icon: Target,
      title: "Strategic Insights",
      description: "Actionable business recommendations based on data analysis"
    },
    {
      icon: Users,
      title: "User Behavior Analysis",
      description: "Deep understanding of customer and employee behavior patterns"
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "Intelligent report generation and distribution systems"
    }
  ];

  const benefits = [
    "Data-driven decision making with AI insights",
    "Improved business performance and efficiency",
    "Real-time monitoring of key metrics",
    "Predictive capabilities for strategic planning",
    "Automated business intelligence processes",
    "Competitive advantage through advanced analytics"
  ];

  const useCases = [
    {
      title: "Executive Dashboard",
      description: "Comprehensive business overview for C-level executives",
      icon: BarChart3
    },
    {
      title: "Sales Analytics",
      description: "Advanced sales performance tracking and forecasting",
      icon: TrendingUp
    },
    {
      title: "Customer Insights",
      description: "Deep customer behavior and preference analysis",
      icon: Users
    },
    {
      title: "Operational Intelligence",
      description: "Real-time operational performance monitoring",
      icon: Building
    }
  ];

  const analyticsTypes = [
    "Descriptive Analytics",
    "Diagnostic Analytics",
    "Predictive Analytics",
    "Prescriptive Analytics",
    "Real-time Analytics",
    "Historical Analysis",
    "Trend Analysis",
    "Performance Metrics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <BarChart3 className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              AI Business Intelligence Elite
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Transform your business with elite AI-powered business intelligence that provides 
              deep insights, predictive analytics, and strategic recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Elite BI Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI Business Intelligence Elite combines cutting-edge artificial intelligence with 
              advanced analytics to deliver exceptional business insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-slate-600"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose AI Business Intelligence Elite?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of business intelligence with our comprehensive AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Business Intelligence Applications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI Business Intelligence Elite serves diverse business needs across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 dark:from-slate-700 dark:to-slate-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Types of Analytics
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform supports comprehensive analytics across all business intelligence needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {analyticsTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {type}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join the elite of business intelligence and gain the competitive advantage you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessIntelligenceElite;