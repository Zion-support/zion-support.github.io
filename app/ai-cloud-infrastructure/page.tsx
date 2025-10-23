"use client";
import React from "react";
import {
  Cloud,
  Server,
  Database,
  Shield,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const CloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime",
    },
    {
      icon: Server,
      title: "Infrastructure Setup",
      description: "Complete cloud infrastructure setup and configuration",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Scalable database solutions and management services",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance standards",
    },
  ];

  const benefits = [
    "Scalable cloud infrastructure",
    "Cost-effective solutions",
    "High availability and reliability",
    "Automated scaling and management",
    "24/7 technical support",
    "Easy integration with existing systems",
    "Cost-effective pricing plans",
    "Proven track record of success",
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Cloud Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cloud infrastructure solutions" />
        <meta property="og:title" content="AI Cloud Infrastructure | Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered cloud infrastructure solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced AI-powered cloud infrastructure
              solutions. Powered by cutting-edge AI technology and industry expertise.
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced solutions designed for modern business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why choose our AI cloud infrastructure solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you build advanced AI-powered cloud infrastructure for your business.
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
    </React.Fragment>
  );
};

export default CloudInfrastructurePage;