"use client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Brain, Zap, Shield, Globe } from "lucide-react";

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services" },
    { id: "analytics", name: "Analytics" },
    { id: "automation", name: "Automation" },
    { id: "chatbots", name: "Chatbots" },
    { id: "machine-learning", name: "Machine Learning" },
    { id: "security", name: "Security" },
  ];

  const services = [
    {
      id: 1,
      title: "AI Analytics",
      description: "Advanced analytics powered by artificial intelligence",
      category: "analytics",
      icon: Brain,
    },
    {
      id: 2,
      title: "AI Automation",
      description: "Automate business processes with AI technology",
      category: "automation",
      icon: Zap,
    },
    {
      id: 3,
      title: "AI Chatbots",
      description: "Intelligent chatbots for customer service",
      category: "chatbots",
      icon: Globe,
    },
    {
      id: 4,
      title: "Machine Learning",
      description: "Custom machine learning solutions",
      category: "machine-learning",
      icon: Brain,
    },
    {
      id: 5,
      title: "AI Security",
      description: "AI-powered security solutions",
      category: "security",
      icon: Shield,
    },
  ];

  const filteredServices = services.filter(
    (service) => selectedCategory === "all" || service.category === selectedCategory,
  );

  return (
    <>
      <Helmet>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services and solutions" />
        <meta property="og:title" content="AI Services | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI services and solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI services including analytics, automation, chatbots, machine learning, and security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/portfolio"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Portfolio
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
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-cyan-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
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
              Let us help you implement AI solutions for your business.
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

export default AiServicesPage;