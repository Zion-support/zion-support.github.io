"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Wrench, AlertTriangle, BarChart3, Zap } from "lucide-react";

const AiPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: Wrench,
      title: "Predictive Maintenance",
      description: "AI-powered predictive maintenance to prevent equipment failures and optimize maintenance schedules."
    },
    {
      icon: AlertTriangle,
      title: "Early Warning",
      description: "Early warning system with real-time alerts and anomaly detection for equipment issues."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics dashboard with maintenance insights and performance tracking."
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Real-time equipment monitoring with continuous data analysis and instant notifications."
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Predictive Maintenance - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="AI-powered predictive maintenance with early warning systems, analytics dashboard, and real-time monitoring for equipment optimization." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Predictive Maintenance
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent predictive maintenance powered by AI. 
              Prevent equipment failures, optimize maintenance schedules, and reduce downtime.
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
                Maintenance Features
              </h2>
              <p className="text-lg text-gray-300">
                Advanced AI predictive maintenance capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              Ready to Optimize Maintenance?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Implement our AI predictive maintenance solution to prevent equipment failures.
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

export default AiPredictiveMaintenancePage;