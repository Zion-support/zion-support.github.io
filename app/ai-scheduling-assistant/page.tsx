"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, Users, Zap, Brain, Shield } from "lucide-react";

const AiSchedulingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered smart scheduling with intelligent calendar management and conflict resolution."
    },
    {
      icon: Clock,
      title: "Time Optimization",
      description: "Advanced time optimization with automated scheduling and resource allocation."
    },
    {
      icon: Users,
      title: "Team Coordination",
      description: "Seamless team coordination with shared calendars and collaborative scheduling."
    },
    {
      icon: Zap,
      title: "Automated Reminders",
      description: "Automated reminders and notifications with intelligent timing and personalization."
    },
    {
      icon: Brain,
      title: "AI Learning",
      description: "Self-learning AI that adapts to your scheduling preferences and patterns."
    },
    {
      icon: Shield,
      title: "Privacy Protection",
      description: "Enterprise-grade privacy protection with secure data handling and compliance."
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Scheduling Assistant - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="AI-powered scheduling assistant with smart calendar management, time optimization, and team coordination for efficient scheduling." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Scheduling Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent scheduling assistant powered by AI. 
              Smart calendar management, time optimization, and team coordination for efficient scheduling.
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
                Scheduling Features
              </h2>
              <p className="text-lg text-gray-300">
                Advanced AI scheduling capabilities
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
              Ready to Optimize Your Scheduling?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Implement our AI scheduling assistant to streamline your calendar management.
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

export default AiSchedulingAssistantPage;