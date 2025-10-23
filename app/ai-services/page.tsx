<<<<<<< HEAD
"use client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Brain,
  Cloud,
  Code,
  BarChart,
  Users,
  Zap,
  Shield,
} from "lucide-react";

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      id: 1,
      title: "AI-Powered Analytics",
      description:
        "Transform your data into actionable insights with our advanced AI analytics platform.",
      category: "analytics",
      icon: BarChart,
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom dashboards",
        "Automated reporting",
      ],
      price: "Starting at $299/month",
    },
    {
      id: 2,
      title: "Intelligent Automation",
      description:
        "Streamline your business processes with AI-powered automation solutions.",
      category: "automation",
      icon: Zap,
      features: [
        "Workflow automation",
        "Document processing",
        "Email automation",
        "Task scheduling",
      ],
      price: "Starting at $199/month",
    },
    {
      id: 3,
      title: "AI Chatbot Solutions",
      description:
        "Enhance customer experience with intelligent chatbots and virtual assistants.",
      category: "chatbots",
      icon: Users,
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Custom training",
        "Analytics dashboard",
      ],
      price: "Starting at $149/month",
    },
    {
      id: 4,
      title: "Machine Learning Models",
      description:
        "Custom ML models tailored to your specific business needs and data.",
      category: "ml",
      icon: Brain,
      features: [
        "Custom model development",
        "Data preprocessing",
        "Model training",
        "Performance optimization",
      ],
      price: "Starting at $499/month",
    },
    {
      id: 5,
      title: "AI Security Solutions",
      description:
        "Protect your business with AI-powered cybersecurity and threat detection.",
      category: "security",
      icon: Shield,
      features: [
        "Threat detection",
        "Anomaly detection",
        "Automated response",
        "Security monitoring",
      ],
      price: "Starting at $399/month",
    },
    {
      id: 6,
      title: "Cloud AI Infrastructure",
      description:
        "Scalable cloud infrastructure optimized for AI workloads and applications.",
      category: "infrastructure",
      icon: Cloud,
      features: [
        "Auto-scaling",
        "GPU optimization",
        "Data management",
        "Monitoring tools",
      ],
      price: "Starting at $599/month",
    },
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "analytics", name: "Analytics" },
    { id: "automation", name: "Automation" },
    { id: "chatbots", name: "Chatbots" },
    { id: "ml", name: "Machine Learning" },
    { id: "security", name: "Security" },
    { id: "infrastructure", name: "Infrastructure" },
  ];

  const filteredServices = services.filter(
    (service) =>
      selectedCategory === "all" || service.category === selectedCategory,
  );
=======
import React from "react";
import { Helmet } from "react-helmet-async";
import { servicesData } from "../data/servicesData";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>
          AI Services - Zion Tech Group | Artificial Intelligence Solutions
        </title>
        <meta
          name="description"
          content="Comprehensive AI services including analytics, automation, chatbots, machine learning, and security solutions. Transform your business with cutting-edge AI technology."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, automation, chatbots, analytics, AI solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI services including analytics, automation,
              chatbots, machine learning, and security solutions. Transform your
              business with cutting-edge AI technology.
=======
        <title>AI Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive AI services including machine learning, natural language processing, and custom AI solutions."
        />
        <meta
          name="keywords"
          content="AI services, machine learning, natural language processing, computer vision, AI consulting"
        />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          <div className="particles absolute inset-0"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic">AI Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge{" "}
              <span className="text-cyan-400 font-semibold">
                artificial intelligence solutions
              </span>
              designed for the modern digital world
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category.name}
                </button>
=======
        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">AI Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.aiServices.map((service) => (
                <div key={service.id} className="card-cyber hover-lift group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li
                          key={index}
                          className="text-gray-300 text-sm flex items-center"
                        >
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li
                          key={index}
                          className="text-gray-300 text-sm flex items-center"
                        >
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">
                        ${service.pricing.basic}
                      </span>
                      <span className="text-gray-400 text-sm ml-1">/month</span>
                    </div>
                    <a
                      href={service.contactInfo.website}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
                    >
                      Learn More →
                    </a>
                  </div>

                  <button className="w-full cyber-button">Get Started</button>
                </div>
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

<<<<<<< HEAD
                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-semibold">
                      {service.price}
                    </span>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Customer Service",
                  description: "AI-powered chatbots and support automation",
                  icon: "🤖",
                },
                {
                  title: "Sales Optimization",
                  description: "Predictive analytics and lead scoring",
                  icon: "📈",
                },
                {
                  title: "Content Creation",
                  description: "Automated content generation and optimization",
                  icon: "✍️",
                },
                {
                  title: "Process Automation",
                  description: "Intelligent workflow automation",
                  icon: "⚡",
                },
              ].map((useCase, index) => (
                <div
                  key={index}
                  className="glass-dark rounded-lg p-6 text-center hover-lift"
                >
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300">{useCase.description}</p>
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your
              business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;
