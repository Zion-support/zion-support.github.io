"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Accessibility, Eye, MousePointer, Volume2 } from "lucide-react";

const AccessibilityPagePage: React.FC = () => {
  const features = [
    {
      icon: Accessibility,
      title: "WCAG Compliance",
      description: "Full compliance with Web Content Accessibility Guidelines 2.1 AA standards",
    },
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast modes, scalable fonts, and screen reader compatibility",
    },
    {
      icon: MousePointer,
      title: "Motor Accessibility",
      description: "Keyboard navigation, focus management, and alternative input methods",
    },
    {
      icon: Volume2,
      title: "Audio Accessibility",
      description: "Audio descriptions, captions, and alternative audio formats",
    },
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Accessibility | Zion Tech Group</title>
        <meta name="description" content="Accessibility solutions and compliance services" />
        <meta property="og:title" content="Accessibility | Zion Tech Group" />
        <meta property="og:description" content="Accessibility solutions and compliance services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">

          <div className="max-w-7xl mx-auto text-center">

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Making technology accessible to everyone through comprehensive accessibility solutions and compliance services.
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
                Accessibility Features
              </h2>
              <p className="text-lg text-gray-300">
                Comprehensive accessibility solutions for all users
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
              Let us help you implement accessibility solutions for your business.
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

export default AccessibilityPagePage;