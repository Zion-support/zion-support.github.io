"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Wifi, BarChart3, Zap, Shield, Brain, Globe } from "lucide-react";

const AiIotAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: "IoT Data Collection",
      description: "Comprehensive IoT data collection from sensors, devices, and connected systems."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Real-time analytics and insights from IoT data streams with instant processing."
    },
    {
      icon: Zap,
      title: "Predictive Maintenance",
      description: "AI-powered predictive maintenance to prevent equipment failures and optimize performance."
    },
    {
      icon: Shield,
      title: "Secure Data Processing",
      description: "Enterprise-grade security for IoT data processing with encryption and compliance."
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced machine learning algorithms for pattern recognition and anomaly detection."
    },
    {
      icon: Globe,
      title: "Scalable Platform",
      description: "Scalable platform that grows with your IoT infrastructure and data requirements."
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI IoT Analytics - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="AI-powered IoT analytics with real-time data processing, predictive maintenance, and machine learning insights." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI IoT Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your IoT data into actionable insights with AI-powered analytics. 
              Real-time processing, predictive maintenance, and intelligent automation.
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
                IoT Analytics Features
              </h2>
              <p className="text-lg text-gray-300">
                Advanced AI-powered IoT analytics capabilities
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
              Ready to Analyze Your IoT Data?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Unlock the power of your IoT data with our AI analytics platform.
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

export default AiIotAnalyticsPage;