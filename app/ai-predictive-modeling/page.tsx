"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Brain, TrendingUp, BarChart3, Zap, Shield, Globe } from "lucide-react";

const AiPredictiveModelingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Advanced machine learning models for accurate predictions and data analysis."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Comprehensive predictive analytics with trend analysis and forecasting capabilities."
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Advanced data visualization with interactive charts and real-time insights."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Real-time data processing with instant model updates and predictions."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade data security with encryption and compliance standards."
    },
    {
      icon: Globe,
      title: "Scalable Platform",
      description: "Scalable platform that grows with your data and modeling requirements."
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Predictive Modeling - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="AI-powered predictive modeling with machine learning, analytics, and data visualization for business intelligence." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Predictive Modeling
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI predictive modeling with machine learning and analytics. 
              Build accurate models, analyze trends, and make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Modeling Features
              </h2>
              <p className="text-lg text-gray-300">
                Advanced AI predictive modeling capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Predictive Models?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Implement our AI predictive modeling solution to make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AiPredictiveModelingPage;