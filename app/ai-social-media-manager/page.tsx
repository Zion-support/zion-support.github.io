"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Share2, BarChart3, Zap, Users, Brain, Shield } from "lucide-react";

const AiSocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: Share2,
      title: "Content Management",
      description: "AI-powered content management with automated posting and engagement optimization."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics dashboard with performance metrics and engagement insights."
    },
    {
      icon: Zap,
      title: "Automated Posting",
      description: "Automated posting with intelligent timing and content optimization for maximum reach."
    },
    {
      icon: Users,
      title: "Audience Engagement",
      description: "Advanced audience engagement with personalized content and interaction management."
    },
    {
      icon: Brain,
      title: "AI Insights",
      description: "AI-powered insights for content strategy and audience behavior analysis."
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Brand protection with content moderation and reputation management tools."
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="AI-powered social media management with content automation, analytics, and audience engagement for social media success." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Social Media Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent social media management powered by AI. 
              Content automation, analytics, and audience engagement for social media success.
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
                Social Media Features
              </h2>
              <p className="text-lg text-gray-300">
                Advanced AI social media management capabilities
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
              Ready to Manage Your Social Media?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Implement our AI social media manager to optimize your social media presence.
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

export default AiSocialMediaManagerPage;