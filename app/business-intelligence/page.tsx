"use client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BarChart, TrendingUp, PieChart, Activity } from "lucide-react";

const BusinessIntelligencePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const features = [
    {
      icon: BarChart,
      title: "Data Visualization",
      description: "Advanced data visualization and interactive dashboards",
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and automated reporting",
    },
    {
      icon: PieChart,
      title: "Business Intelligence",
      description: "AI-powered business intelligence and insights",
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Real-time data monitoring and alerts",
    },
  ];

  const categories = ["All", "Analytics", "Reporting", "Dashboards", "Data Visualization"];

  return (
    <>
      <Helmet>
        <title>Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Advanced business intelligence and data analytics solutions" />
        <meta property="og:title" content="Business Intelligence | Zion Tech Group" />
        <meta property="og:description" content="Advanced business intelligence and data analytics solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Business Intelligence
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into strategic insights that drive business growth and informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Free Consultation
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

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-cyan-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                BI Features
              </h2>
              <p className="text-lg text-gray-300">
                Everything you need for business intelligence success
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
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join hundreds of businesses who have unlocked the power of their data with our comprehensive BI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your BI Journey
              </a>
              <a
                href="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessIntelligencePage;