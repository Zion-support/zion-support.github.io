"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Shield, Eye, AlertTriangle, TrendingUp, Lock, Brain } from "lucide-react";

const AiFraudDetectionProPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced ML Models",
      description: "State-of-the-art machine learning models trained on millions of transactions for maximum accuracy."
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 real-time fraud detection with instant alerts and automated response systems."
    },
    {
      icon: AlertTriangle,
      title: "Risk Scoring",
      description: "Intelligent risk scoring system that adapts to your business patterns and customer behavior."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Predictive analytics to identify potential fraud patterns before they occur."
    },
    {
      icon: Lock,
      title: "Secure Processing",
      description: "Bank-level security with end-to-end encryption and compliance with industry standards."
    },
    {
      icon: Brain,
      title: "AI Learning",
      description: "Self-learning AI that continuously improves detection accuracy based on new data patterns."
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Fraud Detection Pro - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Professional AI fraud detection solution with advanced ML models, real-time monitoring, and predictive analytics." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Fraud Detection Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered fraud detection with machine learning models, 
              real-time monitoring, and predictive analytics for maximum security.
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
                Professional Features
              </h2>
              <p className="text-lg text-gray-300">
                Enterprise-grade fraud detection capabilities
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
              Ready to Secure Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Protect your business with our advanced AI fraud detection solution.
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

export default AiFraudDetectionProPage;