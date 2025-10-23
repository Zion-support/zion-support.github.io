"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Globe, BarChart, Zap, Shield } from "lucide-react";

const AiWebsiteAnalyzerPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: "Website Analysis",
      description: "AI-powered website analysis and performance insights",
    },
    {
      icon: BarChart,
      title: "Analytics & Reports",
      description: "Comprehensive analytics and detailed reports",
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Real-time website monitoring and alerts",
    },
    {
      icon: Shield,
      title: "Security Analysis",
      description: "Advanced security analysis and recommendations",
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Website Analyzer | Zion Tech Group</title>
        <meta name="description" content="AI-powered website analysis and optimization" />
        <meta property="og:title" content="AI Website Analyzer | Zion Tech Group" />
        <meta property="og:description" content="AI-powered website analysis and optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Website Analyzer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Analyze and optimize your website with AI-powered insights and recommendations.
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
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
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
                Analyzer Features
              </h2>
              <p className="text-lg text-gray-300">
                Everything you need for website analysis success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let us help you implement AI website analysis for your business.
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
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiWebsiteAnalyzerPage;