"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Plug, Zap, Shield, Globe, Code, Settings } from "lucide-react";

const AiIntegrationServicesPage: React.FC = () => {
  const features = [
    {
      icon: Plug,
      title: "API Integration",
      description: "Seamless API integration services to connect your AI solutions with existing systems."
    },
    {
      icon: Zap,
      title: "Real-time Sync",
      description: "Real-time data synchronization and processing across multiple platforms and services."
    },
    {
      icon: Shield,
      title: "Secure Integration",
      description: "Secure integration with enterprise-grade security and compliance standards."
    },
    {
      icon: Globe,
      title: "Cloud Integration",
      description: "Cloud-native integration services with multi-cloud support and scalability."
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Custom integration development tailored to your specific business requirements."
    },
    {
      icon: Settings,
      title: "System Configuration",
      description: "Complete system configuration and optimization for maximum performance."
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Integration Services - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Professional AI integration services with API integration, real-time sync, and secure cloud integration." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Integration Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI integration services to connect your AI solutions with existing systems. 
              API integration, real-time sync, and secure cloud integration.
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
                Integration Features
              </h2>
              <p className="text-lg text-gray-300">
                Comprehensive AI integration capabilities
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
              Ready to Integrate AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Connect your AI solutions with our professional integration services.
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

export default AiIntegrationServicesPage;