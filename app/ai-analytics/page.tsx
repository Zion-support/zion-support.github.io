import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, TrendingUp, Target, Users, Shield, Zap } from "lucide-react";
import FuturisticBackground from "../components/FuturisticBackground";

const AIAnalyticsPage = () => {
  const features = [
    {
      icon: <BarChart3 className="w-12 h-12 text-cyan-400" />,
      title: "Real-time Analytics",
      description: "Get instant insights into your business performance with our advanced AI-powered analytics platform."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-cyan-400" />,
      title: "Predictive Insights",
      description: "Forecast future trends and make data-driven decisions with our machine learning algorithms."
    },
    {
      icon: <Target className="w-12 h-12 text-cyan-400" />,
      title: "Custom Dashboards",
      description: "Create personalized dashboards that display the metrics that matter most to your business."
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-400" />,
      title: "User Behavior Analysis",
      description: "Understand your customers better with detailed behavioral analytics and segmentation."
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: "Data Security",
      description: "Enterprise-grade security ensures your data is protected with advanced encryption and compliance."
    },
    {
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically and receive insights via email or dashboard."
    }
  ];

  const stats = [
    { value: "99.9%", label: "Data Accuracy" },
    { value: "50%", label: "Faster Insights" },
    { value: "200+", label: "Data Sources" },
    { value: "24/7", label: "Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Analytics - Zion Tech Group | Advanced Data Analytics Solutions</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics platform. Real-time dashboards, predictive analytics, and automated reporting." />
        <meta name="keywords" content="AI analytics, data analytics, business intelligence, predictive analytics, data visualization, machine learning" />
        <meta property="og:title" content="AI Analytics - Zion Tech Group" />
        <meta property="og:description" content="Transform your data into actionable insights with AI-powered analytics." />
        <meta property="og:type" content="website" />
      </Helmet>

      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Analytics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced AI-powered analytics platform. 
            Make smarter decisions faster with real-time analytics and predictive intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to turn your data into business intelligence and actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Data&apos;s Potential?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start making data-driven decisions today with our AI-powered analytics platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Analytics Journey
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAnalyticsPage;